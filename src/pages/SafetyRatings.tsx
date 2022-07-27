import pointImage from "../assets/images/point.png";
import idolnftImage from "../assets/images/safety/idolnft.png";
import verify from "../assets/images/safety/verify.svg";
import discord from "../assets/images/footer/discord_black.svg";
import github from "../assets/images/footer/github_black.svg";
import twitter from "../assets/images/footer/twitter_black.svg";
import global from "../assets/images/footer/global.svg";
import medium from "../assets/images/footer/medium.svg";
import telegram from "../assets/images/footer/telegram.svg";
import CircleProgressBar from "../components/CircleProgressBar";
import goImage from "../assets/images/safety/go.svg";

const SafetyRatings = () => {
  return (
    <div className="mx-4 flex flex-col">
      <div className="my-10 p-8 rounded-xl border border-blue shadow-xl flex flex-col space-y-6 text-center font-Manrope font-light">
        <div className="font-pilat text-sz30 font-black text-blue">
          Safety Ratings
        </div>
        <div className="text-sz22">
          This page shows the latest security & safety rating assessments
          published by White Hat DAO. These ratings are the sole and independent
          work product of the WHD. Scores are subject to change at any time
          without notice. The ratings and other WHD work product are not
          endorsed by any asset development team or foundation, any regulator,
          or any other third parties.
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/3 rounded-lg shadow-xl px-4 py-2 text-sz24 text-blue font-Manrope font-semibold flex flex-row space-x-2 items-center justify-center">
            <div className="w-full">Apply for Smart Contract Audit</div>
            <img src={pointImage} alt="point"></img>
          </div>
          <div className="w-full md:w-1/3 rounded-lg shadow-xl px-4 py-2 text-sz24 text-blue font-Manrope font-semibold flex flex-row space-x-2 items-center justify-center">
            <div className="w-full">Apply for Safety Rating</div>
            <img src={pointImage} alt="point"></img>
          </div>
        </div>
      </div>
      <div className="my-8 p-4 md:p-10 bg-lightgray rounded-xl shadow-inner-xl flex flex-col space-y-8">
        <div className="text-black font-Manrope font-light flex flex-col md:flex-row items-center gap-4">
          <div className="w-full flex flex-row items-center gap-4">
            <select
              id="role"
              className="w-full bg-transparent border border-blue text-sz18 rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a Role</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="fullstack">Fullstack</option>
              <option value="BlockChain">Blockchain</option>
            </select>
            <select
              id="category"
              className="w-full bg-transparent border border-blue text-sz18 rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a category</option>
              <option value="frontend">Solidity</option>
              <option value="backend">Web3</option>
              <option value="fullstack">Nest</option>
              <option value="BlockChain">React</option>
            </select>
          </div>
          <div className="w-full flex">
            <input
              type="text"
              id="website-admin"
              className="rounded-lg shadow-inner rounded-r-lg bg-lightgray border border-darkgray focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Projects"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {[1, 2, 3].map((item) => (
            <>
              <div className="shadow-sm border-blue font-Manrope font-light rounded-lg p-4 flex md:hidden flex-col gap-4">
                <div className="flex flex-row items-start justify-between">
                  <img src={idolnftImage} alt="idol"></img>
                  <CircleProgressBar
                    sqSize={42}
                    percentage={88}
                    strokeWidth={5}
                    type={0}
                  ></CircleProgressBar>
                </div>
                <div className="flex flex-row items-start space-x-2">
                  <div className="font-pilat font-bold text-sz20">
                    The Idols NFT
                  </div>
                  <img className="" src={verify} alt="verify"></img>
                </div>
                <div className="flex flex-row items-center gap-4">
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
                <div className="flex flex-row items-center gap-4 flex-wrap">
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
                    <img
                      className="w-12 p-3"
                      src={telegram}
                      alt="telegram"
                    ></img>
                  </div>
                </div>
                <div className="text-sz16">
                  The first staked ETH NFT. A 100% community aligned project
                  which rewards NFT holders and protocol token stakers.
                </div>
                <div className="flex flex-row items-end justify-between">
                  <div className="flex flex-col items-start gap-4">
                    <div className="text-black">Audited by:</div>
                    <div className="px-4 py-1 rounded-full shadow-inner text-pink ">
                      Staking
                    </div>
                    <div className="px-4 py-1 rounded-full shadow-inner text-blue">
                      Marketplace
                    </div>
                  </div>
                  <a href="/safety-ratings/rating">
                    <img src={goImage} alt="go"></img>
                  </a>
                </div>
              </div>
              <div className="shadow-xl hidden border border-blue rounded-xl px-8 py-4 md:flex flex-row items-center gap-4">
                <img src={idolnftImage} alt="idol"></img>
                <div className="w-full font-Manrope flex flex-col space-y-4">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-start space-x-2">
                      <div className="font-pilat font-bold text-sz30">
                        The Idols NFT
                      </div>
                      <img className="" src={verify} alt="verify"></img>
                    </div>
                    <div className="flex flex-row items-center space-x-4">
                      <div className="rounded-full shadow-inner">
                        <img
                          className="w-12 p-3"
                          src={twitter}
                          alt="twitter"
                        ></img>
                      </div>
                      <div className="rounded-full shadow-inner">
                        <img
                          className="w-12 p-3"
                          src={github}
                          alt="github"
                        ></img>
                      </div>
                      <div className="rounded-full shadow-inner">
                        <img
                          className="w-12 p-3"
                          src={discord}
                          alt="discord"
                        ></img>
                      </div>
                      <div className="rounded-full shadow-inner">
                        <img
                          className="w-12 p-3"
                          src={medium}
                          alt="medium"
                        ></img>
                      </div>
                      <div className="rounded-full shadow-inner">
                        <img
                          className="w-12 p-3"
                          src={global}
                          alt="global"
                        ></img>
                      </div>
                      <div className="rounded-full shadow-inner">
                        <img
                          className="w-12 p-3"
                          src={telegram}
                          alt="telegram"
                        ></img>
                      </div>
                      <CircleProgressBar
                        sqSize={42}
                        percentage={88}
                        strokeWidth={5}
                        type={0}
                      ></CircleProgressBar>
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
                    <div className="flex flex-row items-center space-x-4">
                      <div className="text-black">Audited by:</div>
                      <div className="px-4 py-1 rounded-full shadow-inner text-pink ">
                        Staking
                      </div>
                      <div className="px-4 py-1 rounded-full shadow-inner text-blue">
                        Marketplace
                      </div>
                    </div>
                  </div>
                  <div className="text-sz22 flex flex-row items-end justify-between">
                    <div className="w-2/3">
                      The first staked ETH NFT. A 100% community aligned project
                      which rewards NFT holders and protocol token stakers.
                    </div>
                    <a href="/safety-ratings/rating">
                      <img src={goImage} alt="go"></img>
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SafetyRatings;
