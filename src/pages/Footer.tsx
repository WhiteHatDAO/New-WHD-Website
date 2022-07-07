import whitehatdao from "../assets/images/whitehatdao.png";
import twitter from "../assets/images/footer/twitter.svg";
import github from "../assets/images/footer/github.svg";
import discord from "../assets/images/footer/discord.svg";

const Footer = () => {
  return (
    <div className="my-8 py-8 border-t border-b flex flex-col space-y-4">
      <div className="flex flex-row items-center space-x-4">
        <img src={whitehatdao} alt="whitehatdao"></img>
        <div className="font-pilat font-bold text-sz22">WHITE HAT DAO</div>
      </div>
      <div className="flex flex-row items-start justify-between">
        <div className="w-1/2 font-Manrope text-sz22 font-light">
          At <span className="font-bold">White Hat DAO</span>, we want to make it easy for everyone to embrace web3
          technology / eco-system in a secure, decentralised and future-proof
          way. Join us in this Journey.
        </div>
        <div className="flex flex-col space-y-4">
            <div className="font-Manrope text-sz22 font-bold">Contact Us</div>
            <div className="font-Manrope text-sz22 font-light text-pink">www.whitehatdao.com</div>
            <div className="font-Manrope text-sz22 font-light text-pink">whitehatdao.eth</div>
            <div className="font-Manrope text-sz22 font-light text-pink">hello@whitehatdao.com</div>
        </div>
        <div className="flex flex-row items-center space-x-4">
            <div className="rounded-full shadow-sm">
                <img className="w-14 p-2" src={twitter} alt="twitter"></img>
            </div>
            <div className="rounded-full shadow-sm">
                <img className="w-14 p-2" src={github} alt="github"></img>
            </div>
            <div className="rounded-full shadow-sm">
                <img className="w-14 p-2" src={discord} alt="discord"></img>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
