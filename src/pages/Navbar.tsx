import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/hamburger.svg";
import close from "../assets/images/close.svg";
import { useState } from "react";
import { useAppContext } from "../context/appContext";
import { web3Modal } from "../utils/web3Modal";
import { useMemo, useCallback, useEffect } from "react";
import { providers, utils } from "ethers";
// import profile from "../assets/images/header/profile.png";
// import setting from "../assets/images/header/setting.png";

import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios"
import { BACKEND_SERVER } from "../global/global";

interface navProps {
  showMenu: boolean;
  handleShowMenu: (show: boolean) => void;
}

const Navbar = ({ showMenu, handleShowMenu }: navProps) => {
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [appState, setAppState] = useAppContext();
  const [profileState, setProfileState] = useState<boolean | undefined>(undefined)
  const [title, setTitle] = useState("Governance");
  const [link, setLink] = useState("");
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

        // if(localStorage.getItem("unlock-sign") !== "true") {
        try {
          const urlSearchParams = new URLSearchParams(window.location.search);
          const params = Object.fromEntries(urlSearchParams.entries());
          const code = JSON.parse(atob(params.code));
          await utils.verifyMessage(code.d, code.s);
          localStorage.setItem("unlock-sign", "true")
        } catch(e) {
          document.location.href = `https://app.unlock-protocol.com/checkout?client_id=${document.location.host}&redirect_uri=${document.location.href}`
        }
        // }
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
  useMemo(async() => {
    const res = await axios.get(BACKEND_SERVER + "/api/governance");
    if (res.status === 200) {
      if (res.data.data.length > 0) {
        setTitle(res.data.data[0].title);
        setLink(res.data.data[0].link);
      } else {
        setTitle("Governance");
        setLink("");
      }
    }
    if (web3Modal.cachedProvider) {
      connect();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const handleProfile = () => {
  //   handleShowMenu(false);
  //   navigate("/profile/summary");
  // };

  // const handleSetting = () => {
  //   handleShowMenu(false);
  //   navigate("/profile/settings");
  // };

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
              onClick={() => setOpenSubmenu(!openSubmenu)}
              className={
                location.pathname === "/governance"
                  ? "flex gap-x-2 relative cursor-pointer text-pink z-[3]"
                  : "flex gap-x-2 relative cursor-pointer text-black z-[3]"
              }
            >
              GOVERNANCE
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" width="16" version="1.1" id="Layer_1" viewBox="0 0 407.437 407.437" xmlSpace="preserve">
                <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "/>
              </svg>
              {openSubmenu &&
                <div className="flex flex-col gap-4 absolute top-10 p-4 shadow-xl rounded-xl text-grey w-max z-2 bg-lightgray">
                  <span>Community Forum</span>
                </div>
              }
            </div>
          </div>
          <div className="flex flex-row items-center space-x-7 md:space-x-4">
            <div className="md:w-60 hidden xl:block relative cursor-pointer z-2">
              <div
                className="shadow-sm text-2xl px-6 py-2 border flex items-center justify-center rounded-xl gradient-box text-sz16"
                onClick={handleConnect}
              >
                <span className="block md:hidden">
                  {appState.web3Provider && address
                    ? getSubAddress(address as string)
                    : "CONNECT"}
                </span>
                <span className="hidden md:block">
                  {appState.web3Provider && address
                    ? getSubAddress(address as string)
                    : "Connect Wallet"}
                </span>
              </div>
              {showMenu && (
                <div
                  className="w-80 absolute rounded-lg border z-10 bg-lightgray text-sz16 text-blue border-blue shadow-xl"
                  style={{ top: "70px", right: "0px" }}
                >
                  <div className="flex flex-col p-4 gap-4">
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
              className="block xl:hidden cursor-pointer"
              src={hamburger}
              alt="hamburger"
            ></img>
          </div>
        </div>
      </div>
      {open && (
        <div className="fixed top-[19px] bottom-[19px] left-[15px] right-[15px] z-3 w-[calc(100% - 30px)] h-[calc(100% - 38px)] p-4 rounded-xl flex flex-col shadow-xl bg-lightgray">
          <div className="flex flex-row items-center justify-between">
            <img className="w-12" src={logo} alt="logo"></img>
            <img className="cursor-pointer" onClick={() => setOpen(false)} src={close} alt="close"></img>
          </div>
          <div className="pt-7 font-pilat text-sz14 flex flex-col items-center justify-center gap-10">
            <div className="cursor-pointer" onClick={() => { navigate("/"); setOpen(false)}}>HOME</div>
            <div className="cursor-pointer" onClick={() => { navigate("/dao"); setOpen(false)}}>DAO</div>
            <div className="cursor-pointer" onClick={() => { navigate("/safety-ratings"); setOpen(false)}}>SAFETY - RATINGS</div>
            <div className="cursor-pointer" onClick={() => { navigate("/audit"); setOpen(false)}}>AUDIT</div>
            <div
              onClick={() => setOpenSubmenu(!openSubmenu)}
              className={
                location.pathname === "/governance"
                  ? "flex gap-x-2 relative cursor-pointer text-pink z-[3]"
                  : "flex gap-x-2 relative cursor-pointer text-black z-[3]"
              }
            >
              GOVERNANCE
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" width="16" version="1.1" id="Layer_1" viewBox="0 0 407.437 407.437" xmlSpace="preserve">
                <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "/>
              </svg>
              {openSubmenu &&
                <div className="flex flex-col gap-4 absolute top-10 p-4 shadow-xl rounded-xl text-grey w-max z-2 bg-lightgray">
                  <span>Community Forum</span>
                </div>
              }
            </div>
            <div className="z-2 cursor-pointer" onClick={appState.web3Provider && address ? handleDisconnect : handleConnect}>
              <div className="shadow-sm text-2xl px-8 py-2 border rounded-xl gradient-box text-sz16 leading-ht30 font-semibold">
                {appState.web3Provider && address
                  ? getSubAddress(address as string)
                  : "CONNECT"}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
