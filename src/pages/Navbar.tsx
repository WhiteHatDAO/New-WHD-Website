import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/hamburger.svg";
import close from "../assets/images/close.svg";
import { useState } from "react";
import { useAppContext } from "../context/appContext";
import { web3Modal } from "../utils/web3Modal";
import { useCallback, useEffect } from "react";
import { providers } from "ethers";
import profile from "../assets/images/header/profile.png";
import setting from "../assets/images/header/setting.png";

import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios"
import { BACKEND_SERVER } from "../global/global";

interface navProps {
  showMenu: boolean;
  handleShowMenu: (show: boolean) => void;
}

const Navbar = ({ showMenu, handleShowMenu }: navProps) => {
  const [open, setOpen] = useState(false);
  const [appState, setAppState] = useAppContext();
  const [profileState, setProfileState] = useState<boolean | undefined>(undefined)
  const { provider, address } = appState;

  const navigate = useNavigate();
  const location = useLocation();

  const getSubAddress = (str: string) => {
    return `${str.substring(0, 5)}...${str.substring(
      str.length - 3,
      str.length
    )}`;
  };

  const connect = useCallback(
    async function () {
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
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const disconnect = useCallback(
    async function () {
      await web3Modal.clearCachedProvider();      
      if (provider?.disconnect && typeof provider.disconnect === "function") {
        await provider.disconnect();
      }
      setAppState({
        provider: null,
        web3Provider: null,
        address: "",
      });      
    },
    [provider, setAppState]
  );
  
  if (address === undefined) {
    disconnect();
  }

  // Auto connect to the cached provider
  useEffect(() => {
    console.log('here')
    if (web3Modal.cachedProvider) {
      connect();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleProfile = () => {
    handleShowMenu(false);
    navigate("/profile/summary");
  };

  const handleSetting = () => {
    handleShowMenu(false);
    navigate("/profile/settings");
  };

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

  const getProfile = useCallback(async (addr: string) => {
    const params = new URLSearchParams([["wallet", String(addr)]]);
    try {
      const res = await axios.get(BACKEND_SERVER + "/api/profile", { params });
      if (res.status === 200 && res.data.data.length > 0) {
        setProfileState(true);
      } else {
        setProfileState(false);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleConnect = () => {
    if (appState.web3Provider) {
      handleShowMenu(!showMenu);
    } else {
      connect();
      handleShowMenu(false);
    }
  };

  const handleDisconnect = async () => {
    disconnect();
    handleShowMenu(false);
  };

  useEffect(() => {
    if(address === undefined || address.length === 0) {
      setProfileState(undefined)
    } else {
      getProfile(address)
    }
  }, [address, getProfile])

  useEffect(() => {
    if(profileState !== undefined) {
      if(!profileState) {
        if(location.pathname !== "/profile/settings") {
          // navigate("/profile/settings");
        }
      }
    }
  }, [profileState, navigate, location])

  return (
    <div className="relative">
      <div className="font-pilat p-4 flex flex-row items-center">
        <div className="text-sz14 font-pilat font-medium w-full flex flex-row items-center justify-between">
          <img onClick={() => navigate("/")} src={logo} alt="logo" className="w-14 h-14"></img>
          <div className="mx-6 w-full hidden xl:flex flex-row items-center space-x-10">
            <div
              onClick={() => navigate("/")}
              className={location.pathname === "/" ? "cursor-pointer text-pink" : "cursor-pointer text-black"}
            >
              HOME
            </div>
            <div
              onClick={() => navigate("/dao")}
              className={
                location.pathname === "/dao" ? "cursor-pointer text-pink" : "cursor-pointer text-black"
              }
            >
              DAO
            </div>
            <div
              onClick={() => navigate("/safety-ratings")}
              className={
                location.pathname === "/safety-ratings"
                  ? "cursor-pointer text-pink"
                  : "cursor-pointer text-black"
              }
            >
              SAFETY - RATINGS
            </div>
            <div
              onClick={() => navigate("/audit")}
              className={
                location.pathname === "/audit" ? "cursor-pointer text-pink" : "cursor-pointer text-black"
              }
            >
              AUDIT
            </div>
            <div
              onClick={() => navigate("/gift-cards")}
              className={
                location.pathname === "/gift-cards" ? "cursor-pointer text-pink" : "cursor-pointer text-black"
              }
            >
              GIFT CARDS
            </div>
            <div
              onClick={() => navigate("/blogpost")}
              className={
                location.pathname === "/blogpost" ? "cursor-pointer text-pink" : "cursor-pointer text-black"
              }
            >
              BLOGPOSTS
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <div className="w-60 relative cursor-pointer">
              <div
                // className="shadow-sm text-2xl px-6 py-2 border rounded-xl gradient-box text-sz16"
                className="shadow-sm text-2xl px-6 py-2 border flex items-center justify-center rounded-xl gradient-box text-sz16"
                onClick={handleConnect}
              >
                {appState.web3Provider && address
                  ? getSubAddress(address as string)
                  : "Connect Wallet"}
              </div>
              {showMenu && (
                <div
                  className="w-80 absolute rounded-lg border bg-lightgray text-sz16 text-blue border-blue shadow-xl"
                  style={{ top: "70px", right: "0px" }}
                >
                  <div className="flex flex-col p-4 gap-4">
                    <div
                      onClick={handleProfile}
                      className="px-4 py-2 rounded-md bg-gray flex flex-row items-center space-x-2"
                    >
                      <img className="w-6 h-6" src={profile} alt="profile"></img>
                      <div>Profile</div>
                    </div>
                    <div
                      onClick={handleSetting}
                      className="px-4 py-2 rounded-md bg-gray flex flex-row items-center space-x-2"
                    >
                      <img className="w-6 h-6" src={setting} alt="profile"></img>
                      <div>Setting</div>
                    </div>
                    <div
                      onClick={handleDisconnect}
                      className="py-2 flex flex-col items-center justify-center border border-pink rounded-md shadow-sm text-sz18"
                    >
                      Disconnect Wallet
                    </div>
                  </div>
                </div>
              )}
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
          <div className="m-7 p-4 rounded-xl flex flex-col shadow-xl bg-lightgray h-screen">
            <div className="flex flex-row items-center justify-between">
              <img className="w-12" src={logo} alt="logo"></img>
              <img onClick={() => setOpen(false)} src={close} alt="close"></img>
            </div>
            <div className="pt-7 font-pilat text-sz14 flex flex-col items-center justify-center gap-5">
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
              <a href="/gift-cards">
                <div>GIFT CARDS</div>
              </a>
              <a href="/blogpost">
                <div>BLOGPOSTS</div>
              </a>
              <div className="z-10 cursor-pointer">
                <div className="shadow-sm text-2xl px-8 py-2 border rounded-xl gradient-box text-sz16">
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
