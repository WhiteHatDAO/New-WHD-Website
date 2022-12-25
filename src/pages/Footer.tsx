import whitehatdao from "../assets/images/whitehatdao.png";
import twitter from "../assets/images/footer/twitter.svg";
import github from "../assets/images/footer/github.svg";
import discord from "../assets/images/footer/discord.svg";

const Footer = () => {

  return (
    <div className="px-[7px] md:px-0">
      <div className="mt-[60px] mb-[19px] md:my-8 pt-[30px] pb-10 md:p-4 sm:flex flex-row items-start justify-between border-b border-t border-darkpurple md:border-0">
        <div className="sm:w-2/5 flex flex-col space-y-5 md:space-y-4">
          <div className="flex flex-row items-center space-x-[19px] md:space-x-4">
            <img src={whitehatdao} alt="whitehatdao"></img>
            <div className="font-pilat font-bold text-sz22 md:text-sz18 leading-ht28.27 md:leading-auto text-grey md:text-black">WHITE HAT DAO</div>
          </div>
          <div className="font-Manrope text-sz16 lg:text-sz18 font-light text-grey">
            At <span className="font-bold">White Hat DAO</span>, we want to make it easy for everyone to embrace web3 eco-system in a secure, decentralized and
            future-proof way. Join us in this Journey.
          </div>
        </div>
        <div className="pt-[25px] md:pt-8 flex flex-col space-y-[11px] md:space-y-4">
          <div className="font-Manrope text-sz16 lg:text-sz18 font-bold text-grey">Contact Us</div>
          <div className="font-Manrope text-sz16 lg:text-sz18 font-light text-pink">www.whitehatdao.com</div>
          <div className="font-Manrope text-sz16 lg:text-sz18 font-light text-pink">hello@whitehatdao.com</div>
        </div>
        <div className="mt-10 md:mt-8 lg:pt-0 flex flex-row items-center space-x-[33px] md:space-x-4">
          <a className="flex justify-center items-center rounded-full shadow-sm cursor-pointer w-[66px] h-[66px] md:w-auto md:h-auto" href="https://twitter.com/White_Hat_DAO" target="_blank" rel="noreferrer">
            <img className="w-[33px] h-[26px] md:w-14 md:h-auto md:p-2" src={twitter} alt="twitter"></img>
          </a>
          <a className="flex justify-center items-center rounded-full shadow-sm cursor-pointer w-[66px] h-[66px] md:w-auto md:h-auto" href="https://github.com/WhiteHatDAO" target="_blank" rel="noreferrer">
            <img className="w-[35px] h-[33px] md:w-14 md:h-auto md:p-2" src={github} alt="github"></img>
          </a>
          <a className="flex justify-center items-center rounded-full shadow-sm cursor-pointer w-[66px] h-[66px] md:w-auto md:h-auto" href="https://discord.gg/G5NvT2AyWA" target="_blank" rel="noreferrer">
            <img className="w-[34px] h-[26px] md:w-14 md:h-auto md:p-2" src={discord} alt="discord"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
