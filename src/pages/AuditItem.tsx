import idolNFtImage from "../assets/images/idolsNFT.svg";
import verify from "../assets/images/safety/verify.svg";
import discord from "../assets/images/footer/discord_black.svg";
import github from "../assets/images/footer/github_black.svg";
import twitter from "../assets/images/footer/twitter_black.svg";
import global from "../assets/images/footer/global.svg";
import medium from "../assets/images/footer/medium.svg";
import telegram from "../assets/images/footer/telegram.svg";
import copy from "../assets/images/copy.svg";
import pattern from "../assets/images/pattern.svg";
import file from "../assets/images/file.svg";
import check_t from "../assets/images/rating/check_t.svg";
import CircleProgressBar from "../components/CircleProgressBar";
import info from "../assets/images/dao/info.svg";
import Doughnut from "../components/Doughnut";
import line from "../assets/images/rating/line.svg";
import info_small from "../assets/images/info.svg";
import token_chart from "../assets/images/rating/token_chart.png";
import icon1 from "../assets/images/rating/table/icon1.svg";
import icon2 from "../assets/images/rating/table/icon2.svg";
import ether from "../assets/images/rating/ether.svg";

import member1 from "../assets/images/rating/members/member1.png";

const AuditItem = () => {
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
              <div className="px-4 py-1 rounded-full shadow-inner">NFT</div>
              <div className="px-4 py-1 rounded-full shadow-inner">Staking</div>
              <div className="px-4 py-1 rounded-full shadow-inner">
                Marketplace
              </div>
              <div className="px-4 py-1 rounded-full shadow-inner">NFT</div>
              <div className="px-4 py-1 rounded-full shadow-inner">Staking</div>
              <div className="px-4 py-1 rounded-full shadow-inner">
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
      <div className="my-10 grid grid-cols-3 space-x-8">
        <div className="shadow-xl rounded-xl col-span-2 p-8 font-Manrope font-light flex flex-col justify-center space-y-8">
          <div className="text-sz24">
            Hundred Finance is a decentralized application (dApp) that enables
            the lending and borrowing of crypto- currencies. A multi-chain
            protocol, it integrates with Chainlink oracles to ensure market
            health and stability, while specializing in providing markets for
            long-tail assets.
          </div>
          <div className="p-4 bg-gray rounded-xl flex flex-row items-center justify-between space-x-8">
            <div className="rounded-full shadow-xl">
              <CircleProgressBar
                sqSize={180}
                percentage={88}
                strokeWidth={28}
                type={1}
              ></CircleProgressBar>
            </div>

            <div className="font-Manrope font-light flex flex-col space-y-8">
              <div className="flex flex-col">
                <div className="text-darkgray text-sz16">Platform</div>
                <div className="text-sz24">ETH (Multichain)</div>
              </div>
              <div className="flex flex-col">
                <div className="text-darkgray text-sz16">Language used</div>
                <div className="text-sz24">Vyper</div>
              </div>
            </div>

            <div className="font-Manrope font-light flex flex-col space-y-8">
              <div className="flex flex-col">
                <div className="text-darkgray text-sz16">Codebase</div>
                <div className="flex flex-row items-center space-x-2">
                  <div className="text-blue text-sz24">github.com/hund</div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.625 18.125H1.875V4.0625H9.375V2.8125H0.625V19.375H16.875V10.625H15.625V18.125Z"
                      fill="#404040"
                    />
                    <path
                      d="M11.8745 0.625V1.875H17.2407L7.37012 11.7456L8.25395 12.6294L18.1245 2.75887V8.125H19.3745V0.625H11.8745Z"
                      fill="#404040"
                    />
                  </svg>
                </div>
              </div>
              <div className="space-y-2 flex flex-col">
                <div className="text-darkgray text-sz16">Commit</div>
                <div className="flex flex-row space-x-2">
                  <div className="text-sz24 text-blue">0d0e431da4849...</div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.85714 3H9.26429C9.90213 3 10.5337 3.12312 11.123 3.36233C11.7123 3.60155 12.2478 3.95216 12.6988 4.39417C13.1498 4.83618 13.5076 5.36092 13.7517 5.93843C13.9958 6.51594 14.1214 7.13491 14.1214 7.76V8.047C14.1195 9.30822 13.607 10.5171 12.6963 11.4083C11.7856 12.2995 10.5512 12.8 9.26429 12.8H8.57143V11.4H9.26429C10.1699 11.3982 11.038 11.0453 11.679 10.4184C12.32 9.79147 12.6819 8.94149 12.6857 8.054V7.76C12.6857 6.87129 12.3265 6.01878 11.6866 5.38906C11.0467 4.75934 10.1783 4.4037 9.27143 4.4H4.85714C3.94783 4.4 3.07576 4.754 2.43278 5.38412C1.7898 6.01424 1.42857 6.86887 1.42857 7.76V8.047C1.43072 8.83874 1.7188 9.60417 2.24177 10.2077C2.76474 10.8111 3.48883 11.2137 4.28571 11.344V12.744C3.11115 12.6077 2.02771 12.056 1.23867 11.1925C0.449617 10.329 0.00918412 9.21308 0 8.054V7.76C0.00188939 6.49814 0.514229 5.28849 1.42471 4.39622C2.33519 3.50394 3.56953 3.00185 4.85714 3ZM15.7143 8.656V7.256C16.8913 7.39263 17.9767 7.9463 18.766 8.81272C19.5554 9.67913 19.9943 10.7985 20 11.96V12.247C19.9962 13.5064 19.484 14.7132 18.5753 15.6038C17.6666 16.4944 16.4351 16.9963 15.15 17H10.7357C9.45123 16.9982 8.21979 16.4978 7.31085 15.6083C6.40191 14.7189 5.88949 13.5128 5.88571 12.254V11.96C5.88571 10.6988 6.39647 9.48912 7.30581 8.59664C8.21516 7.70417 9.44876 7.20185 10.7357 7.2H11.4286V8.6H10.7357C9.82764 8.60185 8.9574 8.95667 8.31596 9.58659C7.67453 10.2165 7.31428 11.0701 7.31429 11.96V12.247C7.31617 13.1357 7.67725 13.9875 8.31848 14.6159C8.95972 15.2443 9.82888 15.5982 10.7357 15.6H15.15C16.0556 15.5982 16.9237 15.2453 17.5647 14.6184C18.2057 13.9915 18.5677 13.1415 18.5714 12.254V11.96C18.571 11.1671 18.2837 10.4 17.7605 9.79502C17.2374 9.19008 16.5124 8.7865 15.7143 8.656Z"
                      fill="#404040"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 shadow-xl rounded-xl font-Manrope font-light flex flex-col space-y-4">
          <div className="px-8 pt-8 flex flex-col space-y-4">
            <div className="grid grid-cols-2">
              <div className="flex flex-col space-y-2">
                <div className="text-sz16 text-darkgray">Project</div>
                <div className="text-sz24">Hundred DAO</div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="text-sz16 text-darkgray">Audit Reports</div>
                <div className="text-sz24">
                  <span className="text-green">WHD,</span>
                  <span className="text-blue">EXTERNAL</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex flex-col space-y-2">
                <div className="text-sz16 text-darkgray">Token Price</div>
                <div className="text-sz24">$0.103</div>
                <div className="flex flex-row items-center">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 8L12 17L21 8H3Z" fill="#A22E2E" />
                  </svg>
                  <div className="text-sz16 text-red">15.9%</div>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="text-sz16 text-darkgray">Market cap</div>
                <div className="text-sz24">$1,451,392,754</div>
                <div className="flex flex-row items-center">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 8L12 17L21 8H3Z" fill="#A22E2E" />
                  </svg>
                  <div className="text-sz16 text-red">15.9%</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex flex-col space-y-2">
                <div className="text-sz16 text-darkgray">Audits</div>
                <div className="text-sz24">1 available</div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="text-sz16 text-darkgray">
                  WHD Security Score
                </div>
                <div className="text-sz24">
                  <span className="text-green">88</span>
                  <span> / 100</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="font-pilat font-bold text-sz24 pb-3 border-b text-blue border-darkgray">
                Audit Details
              </div>
              <div className="grid grid-cols-2 items-center">
                <div className="flex flex-col">
                  <div className="text-sz16 text-darkgray">Delivery Date</div>
                  <div className="text-sz24">26 / 02 / 2022</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-sz16 text-darkgray">Submission Date</div>
                  <div className="text-sz24">08 / 02 / 2022</div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 rounded-b-xl bg-blue font-pilat flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center">
              <div className="text-sz16 text-white">REQUEST A QUOTE</div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.625 18.125H1.875V4.0625H9.375V2.8125H0.625V19.375H16.875V10.625H15.625V18.125Z"
                  fill="white"
                />
                <path
                  d="M11.875 0.625V1.875H17.2411L7.37059 11.7456L8.25441 12.6294L18.125 2.75887V8.125H19.375V0.625H11.875Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lightgray rounded-xl shadow-xl flex flex-col">
        <div className="bg-gray px-6 py-4 rounded-t-xl">
          <div className="pl-4 text-blue text-sz30 font-bold font-pilat">
            Price Data
          </div>
        </div>
        <div className="p-8 font-Manrope font-light grid grid-cols-4 space-x-8">
          <div className="col-span-1 p-6 w-full rounded-xl bg-gray flex flex-col space-y-4">
            <div className="pb-4 text-blue text-sz16 border-b border-blue">
              Hundred Finance Price Data
            </div>
            <div className="grid grid-cols-2">
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col">
                  <div className="text-sz16 text-darkgray">Token Price</div>
                  <div className="text-sz24">$0.103</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-sz16 text-darkgray">24h%</div>
                  <div className="text-sz24">- $0.013</div>
                  <div className="flex flex-row items-center space-x-2">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 8L12 17L21 8H3Z" fill="#980000" />
                    </svg>
                    <div className="text-red text-sz16">3.76%</div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-sz16 text-darkgray">30-Day High</div>
                  <div className="text-sz24">$2.0</div>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col">
                  <div className="text-sz16 text-darkgray">Market cap</div>
                  <div className="text-sz24">$1,451,392,754</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-sz16 text-darkgray">7d%</div>
                  <div className="text-sz24">- $0.013</div>
                  <div className="flex flex-row items-center space-x-2">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 8L12 17L21 8H3Z" fill="#980000" />
                    </svg>
                    <div className="text-red text-sz16">3.76%</div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-sz16 text-darkgray">30-Day Low</div>
                  <div className="text-sz24">$0.03</div>
                </div>
              </div>
            </div>
          </div>
          <img className="col-span-3" src={token_chart} alt="token_chart"></img>
        </div>
      </div>
      <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
        <div className="bg-gray px-6 py-4 rounded-t-xl">
          <div className="pl-4 text-blue text-sz30 font-bold font-pilat">
            Project Scope
          </div>
        </div>
        <div className="font-Manrope font-light flex flex-col space-y-6">
          <div className="p-4 grid grid-cols-3 text-center text-sz24 font-bold">
            <div className="flex flex-col space-y-4">
              <div className="text-blue">Source Code</div>
              <div>GaugeControllerV2.vy</div>
              <div>LiquidityGaugeV4_1.vy </div>
              <div>MirroredVotingEscrow.vy </div>
              <div>VotingEscrowV2.vy</div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="text-blue">Acknowledgement</div>
              <div className="text-green">Accepted</div>
              <div className="text-green">Accepted</div>
              <div className="text-green">Accepted</div>
              <div className="text-green">Accepted</div>
            </div>
            <div className="font-light flex flex-col items-center space-y-4">
              <div className="text-blue font-bold">SHA-256</div>
              <div className="flex flex-row items-center">
                <div>033953D227B26155CAA6...</div>
              </div>
              <div className="flex flex-row items-center">
                <div>3DF58EB754E012D700DB...</div>
              </div>
              <div className="flex flex-row items-center">
                <div>FE03F8DED807B82A368D...</div>
              </div>
              <div className="flex flex-row items-center">
                <div>7A4DF4179BA14595CA3C...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
        <div className="bg-gray px-6 py-4 rounded-t-xl">
          <div className="pl-4 text-blue text-sz30 font-bold font-pilat">
            Methodology
          </div>
        </div>
        <div className="p-6 flex flex-col font-Manrope font-light space-y-4">
          <div className="text-sz24">
            White Hat DAO auditing team reviewed the code base of “HundredDAO”
            from Feb. 8, 2022, and Feb. 20, 2022. White Hat DAO was commissioned
            by The HundredDAO to perform security assessments on the following
            smart contracts:
          </div>
          <div className="grid grid-cols-3">
            <div>
              <ul>
                <li>Access Control</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
        <div className="px-6 py-4 rounded-t-xl">
          <div className="pl-4 text-blue text-sz30 font-bold font-pilat text-center">
            Hundred Finance Markets
          </div>
        </div>
        <table className="text-center font-Manrope font-light text-sz22">
          <thead>
            <tr className="bg-gray text-blue">
              <th className="p-4">#</th>
              <th className="py-4">Exchange</th>
              <th className="py-4">Pairs</th>
              <th className="py-4">Price</th>
              <th className="py-4">+2% Depth</th>
              <th className="py-4">-2% Depth</th>
              <th className="py-4">Volume %</th>
              <th className="py-4">Updated</th>
              <th className="py-4">Trade</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((item) => (
              <tr className="border-b border-darkgray">
                <td className="py-4">{item}</td>
                <td className="py-4">
                  <div className="flex flex-row items-center justify-center space-x-2">
                    <img src={icon1} alt="icon1"></img>
                    <div>Uniswap(V3)</div>
                  </div>
                </td>
                <td className="py-4 text-blue">HND/ETH</td>
                <td className="py-4">$0.013</td>
                <td className="py-4">$0.01134</td>
                <td className="py-4">$0.00034</td>
                <td className="py-4">5.32%</td>
                <td className="py-4">Recently</td>
                <td className="py-4">
                  <div className="flex items-center justify-center">
                    <div className="shadow-inner rounded-full px-2 py-1 text-sz16">
                      <span className="text-green">Buy</span> /{" "}
                      <span className="text-red">Sell</span>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuditItem;
