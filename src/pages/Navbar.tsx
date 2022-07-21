import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/hamburger.svg";

const Navbar = () => {
  return (
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
          <img className="block xl:hidden" src={hamburger} alt="hamburger"></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
