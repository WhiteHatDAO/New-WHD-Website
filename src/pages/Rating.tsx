import idolNFtImage from "../assets/images/idolsNFT.svg";
import verify from "../assets/images/safety/verify.svg";
import discord from "../assets/images/footer/discord_black.svg";
import github from "../assets/images/footer/github_black.svg";
import twitter from "../assets/images/footer/twitter_black.svg";
import global from "../assets/images/footer/global.svg";
import medium from "../assets/images/footer/medium.svg";
import telegram from "../assets/images/footer/telegram.svg";

const Rating = () => {
  return (
    <div className="my-10 flex flex-col">
      <div className="flex flex-row items-end justify-between">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row items-center space-x-2">
            <img src={idolNFtImage} alt="idol"></img>
            <div className="flex flex-row items-start space-x-1">
              <div className="font-pilat font-bold text-sz40">
                Hundred Finance
              </div>
              <img className="mt-1" src={verify} alt="verify"></img>
            </div>
          </div>
          <div className="font-Manrope text-sz12 font-light flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-4">
              <div className="px-4 py-1 rounded-full bg-purple text-white">
                NFT
              </div>
              <div className="px-4 py-1 rounded-full bg-green text-white">
                Staking
              </div>
              <div className="px-4 py-1 rounded-full bg-pink text-white">
                Marketplace
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-end justify-between">
          <div className="flex flex-row items-center space-x-4">
            <div className="rounded-full shadow-inner">
              <img className="w-12 p-3" src={twitter} alt="twitter"></img>
            </div>
            <div className="rounded-full shadow-inner">
              <img className="w-12 p-3" src={github} alt="github"></img>
            </div>
            <div className="rounded-full shadow-inner">
              <img className="w-12 p-3" src={discord} alt="discord"></img>
            </div>
            <div className="rounded-full shadow-inner">
              <img className="w-12 p-3" src={medium} alt="medium"></img>
            </div>
            <div className="rounded-full shadow-inner">
              <img className="w-12 p-3" src={global} alt="global"></img>
            </div>
            <div className="rounded-full shadow-inner">
              <img className="w-12 p-3" src={telegram} alt="telegram"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
