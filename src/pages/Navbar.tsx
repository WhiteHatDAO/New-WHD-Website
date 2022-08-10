import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/hamburger.svg";
import close from "../assets/images/close.svg";
import { useState } from "react";
import { useAppContext } from "../context/appContext";
import { web3Modal } from "../utils/web3Modal";
import { useCallback, useEffect } from "react";
import { providers } from "ethers";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [appState, setAppState] = useAppContext();

  const { provider, address } = appState;

  const getSubAddress = (str: string) => {
    return `${str.substring(0, 5)}...${str.substring(
      str.length - 3,
      str.length
    )}`;
  };

  const connect = useCallback(async function () {
    try {
      const provider = await web3Modal.connect();
      const web3Provider = new providers.Web3Provider(provider);

      const signer = web3Provider.getSigner();
      const address = await signer.getAddress();

      setAppState({
        ...appState,
        provider: provider,
        web3Provider: web3Provider,
        address: address,
      });
    } catch (e) {}
  }, [appState, setAppState]);

  const disconnect = useCallback(async function () {
    await web3Modal.clearCachedProvider();
    if (provider?.disconnect && typeof provider.disconnect === "function") {
      await provider.disconnect();
    }

    setAppState({
      provider: null,
      web3Provider: null,
      address: "",
    });
  }, []);

  if (address === undefined) {
    disconnect();
  }

  // Auto connect to the cached provider
  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect();
    }
  }, [connect]);

  useEffect(() => {
    if (appState.provider?.on) {
      const handleAccountsChanged = (accounts: string[]) => {
        // eslint-disable-next-line no-console
        setAppState({ ...appState, address: accounts[0] });
      };

      const handleDisconnect = (error: { code: number; message: string }) => {
        // eslint-disable-next-line no-console
        console.log("disconnect", error.code, error.message);
        if (error.code !== 1013) {
          disconnect();
        }
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("disconnect", handleDisconnect);

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [appState.provider, appState, disconnect, provider, setAppState]);

  return (
    <div className="relative">
      <div className="font-pilat p-4 flex flex-row items-center">
        <div className="text-sz16 font-pilat font-medium w-full flex flex-row items-center justify-between">
          <img src={logo} alt="logo"></img>
          <div className="mx-8 w-full hidden xl:flex flex-row items-center justify-between">
            <a href="/">
              <div>HOME</div>
            </a>
            <a href="/dao">
              <div>DAO</div>
            </a>
            <a href="/safety-ratings">
              <div>SAFETY - RATINGS</div>
            </a>
            <a href="/audit">
              <div>AUDIT</div>
            </a>
            <a href="/whd-nft-market">
              <div>WHD - NFT - MARKET</div>
            </a>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <div className="z-10 cursor-pointer">
              <div
                className="shadow-sm text-2xl px-8 py-2 border rounded-xl gradient-box text-sz18"
                onClick={appState.web3Provider ? disconnect : connect}
              >
                {appState.web3Provider && address
                  ? getSubAddress(address as string)
                  : "Connect Wallet"}
              </div>
            </div>
            <img
              onClick={() => setOpen(true)}
              className="block xl:hidden"
              src={hamburger}
              alt="hamburger"
            ></img>
          </div>
        </div>
      </div>
      {open && (
        <div className="absolute top-0 w-full h-screen z-20">
          <div className="m-8 p-4 rounded-xl flex flex-col shadow-xl bg-lightgray h-screen">
            <div className="flex flex-row items-center justify-between">
              <img className="w-12" src={logo} alt="logo"></img>
              <img onClick={() => setOpen(false)} src={close} alt="close"></img>
            </div>
            <div className="pt-8 font-pilat text-sz16 flex flex-col items-center justify-center gap-6">
              <a href="/">
                <div>HOME</div>
              </a>
              <a href="/dao">
                <div>DAO</div>
              </a>
              <a href="/safety-ratings">
                <div>SAFETY - RATINGS</div>
              </a>
              <a href="/audit">
                <div>AUDIT</div>
              </a>
              <a href="/whd-nft-market">
                <div>WHD - NFT - MARKET</div>
              </a>
              <div className="z-10 cursor-pointer">
                <div className="shadow-sm text-2xl px-8 py-2 border rounded-xl gradient-box text-sz18">
                  CONNECT
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
