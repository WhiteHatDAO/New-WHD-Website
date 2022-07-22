import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/hamburger.svg";
import close from "../assets/images/close.svg";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
              <div className="shadow-sm text-2xl px-8 py-2 border rounded-xl gradient-box text-sz18">
                CONNECT
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
