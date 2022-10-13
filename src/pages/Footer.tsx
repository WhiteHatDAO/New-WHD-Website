import whitehatdao from "../assets/images/whitehatdao.png";
import twitter from "../assets/images/footer/twitter.svg";
import github from "../assets/images/footer/github.svg";
import discord from "../assets/images/footer/discord.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="my-8 p-4 flex flex-row items-start justify-between">
      <div className="w-2/5 flex flex-col space-y-4">
        <div className="flex flex-row items-center space-x-4">
          <img src={whitehatdao} alt="whitehatdao"></img>
          <div className="font-pilat font-bold text-sz18">WHITE HAT DAO</div>
        </div>
        <div className="font-Manrope text-sz16 lg:text-sz18 font-light">
          At <span className="font-bold">White Hat DAO</span>, we want to make
          it easy for everyone to embrace web3 eco-system in a secure,
          decentralized and future-proof way. Join us in this Journey.
        </div>
      </div>
      <div className="pt-8 flex flex-col space-y-4">
        <div className="font-Manrope text-sz16 lg:text-sz18 font-bold">
          Contact Us
        </div>
        <div className="font-Manrope text-sz16 lg:text-sz18 font-light text-pink">
          www.whitehatdao.com
        </div>
        <div className="font-Manrope text-sz16 lg:text-sz18 font-light text-pink">
          whitehatdao.eth
        </div>
        <div className="font-Manrope text-sz16 lg:text-sz18 font-light text-pink">
          hello@whitehatdao.com
        </div>
      </div>
      <div className="mt-8 lg:pt-0 flex flex-row items-center space-x-4">
        <div className="rounded-full shadow-sm cursor-pointer">
          <img className="w-14 p-2" src={twitter} alt="twitter"></img>
        </div>
        <div onClick={() => navigate("/blogpost")} className="rounded-full shadow-sm cursor-pointer">
          <img className="w-14 p-2" src={github} alt="github"></img>
        </div>
        <div className="rounded-full shadow-sm cursor-pointer">
          <img className="w-14 p-2" src={discord} alt="discord"></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
