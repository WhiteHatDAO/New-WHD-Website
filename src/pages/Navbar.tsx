import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <div className="font-pilat py-4 flex flex-row items-center">
      <div className="text-sz16 font-pilat font-medium w-full flex flex-row items-center justify-between">
        <img src={logo} alt="logo"></img>
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
  );
};

export default Navbar;
