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
              <div className="px-4 py-1 shadow-sm rounded-full bg-purple text-white">
                NFT
              </div>
              <div className="px-4 py-1 shadow-sm rounded-full bg-green text-white">
                Staking
              </div>
              <div className="px-4 py-1 shadow-sm rounded-full bg-pink text-white">
                Marketplace
              </div>
              <div className="px-4 py-1 shadow-sm rounded-full bg-purple text-white">
                NFT
              </div>
              <div className="px-4 py-1 shadow-sm rounded-full bg-green text-white">
                Staking
              </div>
              <div className="px-4 py-1 shadow-sm rounded-full bg-pink text-white">
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
                <div className="text-darkgray text-sz16">Contract Address</div>
                <div className="rounded-md shadow-sm flex flex-row">
                  <div className="p-2 w-full flex flex-row items-center">
                    <img src={copy} alt="copy"></img>
                    <img src={pattern} alt="pattern"></img>
                    <div className="text-blue text-sz20">0xd0e4...31da49</div>
                  </div>
                  <div className="p-2 bg-blue rounded-r-md flex items-center justify-center">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 21H24.5V18.6667H3.5V21ZM3.5 15.1667H24.5V12.8333H3.5V15.1667ZM3.5 7V9.33333H24.5V7H3.5Z"
                        fill="white"
                      />
                    </svg>
                  </div>
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
              <div className="font-pilat font-bold text-sz24 pb-3 border-b border-darkgray">
                Audit Details
              </div>
              <div className="grid grid-cols-2 items-center">
                <div className="flex flex-row space-x-4">
                  <div className="flex flex-col items-center">
                    <img src={file} alt="file"></img>
                    <div className="text-sz16 text-darkgray">WHD</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={file} alt="file"></img>
                    <div className="text-sz16 text-darkgray">External</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={file} alt="file"></img>
                    <div className="text-sz16 text-darkgray">Reports</div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-sz24">08 / 02 / 2022</div>
                  <div className="text-sz16 text-darkgray">Onboarding Date</div>
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
          <div className="pl-4 text-blue text-sz30 font-bold font-pilat text-center">
            Due-Diligence / Auditing
          </div>
        </div>
        <div className="p-8 font-Manrope font-light">
          <div className="w-full rounded-xl p-4 bg-gray flex flex-row items-center justify-between">
            <div className="relative ">
              <Doughnut type={true} />
              <div className="font-Manrope text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col">
                <div className="text-sz22 font-bold">291, 591, 552</div>
                <div className="text-sz12">TOTAL SUPPLY</div>
              </div>
            </div>
            <div className="px-2 border-r border-l border-darkgray text-sz20 font-Manrope font-light flex flex-col space-y-8">
              <div className="flex flex-row space-x-4">
                <div className="px-2 py-1 rounded-full shadow-inner flex flex-row items-center space-x-2">
                  <div className="w-4 h-4 rounded-md bg-yellow"></div>
                  <div className="text-yellow">35%</div>
                </div>
                <div className="px-2 py-1  rounded-full shadow-inner flex flex-row items-center space-x-2">
                  Public Sale
                </div>
              </div>
              <div className="flex flex-row space-x-4">
                <div className="px-2 py-1 rounded-full shadow-inner flex flex-row items-center space-x-2">
                  <div className="w-4 h-4 rounded-md bg-purple"></div>
                  <div className="text-purple">30%</div>
                </div>
                <div className="px-2 py-1  rounded-full shadow-inner flex flex-row items-center space-x-2">
                  Community Airdrop
                </div>
              </div>
              <div className="flex flex-row space-x-4">
                <div className="px-2 py-1 rounded-full shadow-inner flex flex-row items-center space-x-2">
                  <div className="w-4 h-4 rounded-md bg-green"></div>
                  <div className="text-green">25%</div>
                </div>
                <div className="px-2 py-1  rounded-full shadow-inner flex flex-row items-center space-x-2">
                  VC Investors
                </div>
              </div>
              <div className="flex flex-row space-x-4">
                <div className="px-2 py-1 rounded-full shadow-inner flex flex-row items-center space-x-2">
                  <div className="w-4 h-4 rounded-md bg-blue"></div>
                  <div className="text-blue">25%</div>
                </div>
                <div className="px-2 py-1  rounded-full shadow-inner flex flex-row items-center space-x-2">
                  Team Allocation
                </div>
              </div>
            </div>
            <div className="px-2 border-r border-darkgray text-sz20 font-Manrope font-light flex flex-col space-y-8">
              <div className="flex flex-row space-x-4">
                <div className="px-2 py-1 rounded-full shadow-inner flex flex-row items-center space-x-2">
                  <div className="w-4 h-4 rounded-md bg-yellow"></div>
                  <div className="text-yellow">35%</div>
                </div>
                <div className="px-2 py-1  rounded-full shadow-inner flex flex-row items-center space-x-2">
                  Private Sale
                </div>
              </div>
              <div className="flex flex-row space-x-4">
                <div className="px-2 py-1 rounded-full shadow-inner flex flex-row items-center space-x-2">
                  <div className="w-4 h-4 rounded-md bg-purple"></div>
                  <div className="text-purple">30%</div>
                </div>
                <div className="px-2 py-1 rounded-full shadow-inner flex flex-row items-center space-x-2">
                  Advertising
                </div>
              </div>
              <div className="flex flex-row space-x-4">
                <div className="px-2 py-1 rounded-full shadow-inner flex flex-row items-center space-x-2">
                  <div className="w-4 h-4 rounded-md bg-green"></div>
                  <div className="text-green">25%</div>
                </div>
                <div className="px-2 py-1  rounded-full shadow-inner flex flex-row items-center space-x-2">
                  Airdrops
                </div>
              </div>
              <div className="flex flex-row space-x-4">
                <div className="px-2 py-1 rounded-full shadow-inner flex flex-row items-center space-x-2">
                  <div className="w-4 h-4 rounded-md bg-blue"></div>
                  <div className="text-blue">25%</div>
                </div>
                <div className="px-2 py-1  rounded-full shadow-inner flex flex-row items-center space-x-2">
                  Treasury
                </div>
              </div>
            </div>
            <div className="px-2 text-sz20 font-Manrope font-light flex flex-col space-y-8">
              <div className="text-center rounded-full shadow-sm text-green p-2">
                Max Supply - 500,000,000
              </div>
              <div className="rounded-full shadow-sm text-green p-2">
                Total Supply - 2,300,000,000
              </div>
              <div className="space-y-2 flex flex-col">
                <div className="text-darkgray text-sz16">
                  Project Treasury multisig address
                </div>
                <div className="rounded-md shadow-sm flex flex-row">
                  <div className="p-2 w-full flex flex-row items-center">
                    <img src={copy} alt="copy"></img>
                    <img src={pattern} alt="pattern"></img>
                    <div className="text-blue text-sz20">0xd0e4...31da49</div>
                  </div>
                  <div className="p-2 bg-blue rounded-r-md flex items-center justify-center">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 21H24.5V18.6667H3.5V21ZM3.5 15.1667H24.5V12.8333H3.5V15.1667ZM3.5 7V9.33333H24.5V7H3.5Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
        <div className="bg-gray px-6 py-4 rounded-t-xl">
          <div className="pl-4 text-blue text-sz30 font-bold font-pilat text-center">
            Code Security Assessment
          </div>
        </div>
        <div className="p-8 font-Manrope font-light flex flex-row">
          <div className="relative">
            <Doughnut type={false} />
            <div className="font-Manrope text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col">
              <div className="text-sz22 font-bold">5</div>
              <div className="text-sz12">Total Findings</div>
            </div>
          </div>
          <div className="w-full flex flex-col ml-8 px-8 border-l border-darkgray space-y-4">
            <div className="w-full grid grid-cols-4 items-start">
              <div className="col-span-1 font-Manrope font-light text-sz18 flex flex-row items-center space-x-4">
                <div
                  className="w-3 h-3 rounded-sm"
                  style={{ background: "#A12E2E" }}
                ></div>
                <div style={{ color: "#A12E2E" }}>0</div>
                <div className="font-bold">Critical</div>
              </div>
              <div className="col-span-2"></div>
              <div className="col-span-1 flex flex-col">
                <div className="flex flex-row items-center space-x-1">
                  <img src={check_t} alt="check"></img>
                  <div className="text-sz12">All Resolved!</div>
                </div>
                <div className="h-1 w-full rounded-full bg-green"></div>
              </div>
            </div>
            <div className="w-full grid grid-cols-4 items-center">
              <div className="col-span-1 font-Manrope font-light text-sz18 flex flex-row items-center space-x-4">
                <div
                  className="w-3 h-3 rounded-sm"
                  style={{ background: "#E28A59" }}
                ></div>
                <div style={{ color: "#E28A59" }}>2</div>
                <div className="font-bold">Major</div>
              </div>
              <div className="col-span-2 flex">
                <div
                  style={{ background: "#E28A59" }}
                  className="text-center rounded-md text-white text-sz14 p-1"
                >
                  Centralization / Privilege
                </div>
              </div>
              <div className="col-span-1 flex flex-col">
                <div className="flex flex-row items-center space-x-1">
                  <img src={check_t} alt="check"></img>
                  <div className="text-sz12">All Resolved!</div>
                </div>
                <div className="h-1 w-full rounded-full bg-green"></div>
              </div>
            </div>
            <div className="w-full grid grid-cols-4 items-start">
              <div className="col-span-1 font-Manrope font-light text-sz18 flex flex-row items-center space-x-4">
                <div
                  className="w-3 h-3 rounded-sm"
                  style={{ background: "#E1AA4C" }}
                ></div>
                <div style={{ color: "#E1AA4C" }}>0</div>
                <div className="font-bold">Medium</div>
              </div>
              <div className="col-span-2"></div>
              <div className="col-span-1 flex flex-col">
                <div className="flex flex-row items-center space-x-1">
                  <img src={check_t} alt="check"></img>
                  <div className="text-sz12">All Resolved!</div>
                </div>
                <div className="h-1 w-full rounded-full bg-green"></div>
              </div>
            </div>
            <div className="w-full grid grid-cols-4 items-start">
              <div className="col-span-1 font-Manrope font-light text-sz18 flex flex-row items-center space-x-4">
                <div
                  className="w-3 h-3 rounded-sm"
                  style={{ background: "#A9B3BD" }}
                ></div>
                <div style={{ color: "#A9B3BD" }}>0</div>
                <div className="font-bold">Minor</div>
              </div>
              <div className="col-span-2"></div>
              <div className="col-span-1 flex flex-col">
                <div className="flex flex-row items-center space-x-1">
                  <img src={check_t} alt="check"></img>
                  <div className="text-sz12">All Resolved!</div>
                </div>
                <div className="h-1 w-full rounded-full bg-green"></div>
              </div>
            </div>
            <div className="w-full grid grid-cols-4 items-start">
              <div className="col-span-1 font-Manrope font-light text-sz18 flex flex-row items-center space-x-4">
                <div
                  className="w-3 h-3 rounded-sm"
                  style={{ background: "#4D6380" }}
                ></div>
                <div style={{ color: "#4D6380" }}>0</div>
                <div className="font-bold">Informational</div>
              </div>
              <div className="col-span-2 flex flex-row items-center space-x-4">
                <div
                  style={{ background: "#4D6380" }}
                  className="p-1 text-white rounded-md text-sz14"
                >
                  Control Flow
                </div>
                <div
                  style={{ background: "#4D6380" }}
                  className="p-1 text-white rounded-md text-sz14"
                >
                  Gas Optimization
                </div>
                <div
                  style={{ background: "#4D6380" }}
                  className="p-1 text-white rounded-md text-sz14"
                >
                  Coding Style
                </div>
              </div>
              <div className="col-span-1 flex flex-col">
                <div className="flex flex-row items-center space-x-1">
                  <img src={check_t} alt="check"></img>
                  <div className="text-sz12">All Resolved!</div>
                </div>
                <div className="h-1 w-full rounded-full bg-green"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
        <div className="bg-gray px-6 py-4 rounded-t-xl">
          <div className="pl-4 text-blue text-sz30 font-bold font-pilat text-center">
            Audited Files
          </div>
        </div>
        <div className="p-8 font-Manrope font-light flex flex-col space-y-6">
          <div className="px-4 py-2 shadow-inner rounded-md text-blue text-sz20 flex flex-row items-center space-x-2">
            <img src={info} alt="info"></img>
            <div>This details only available for projets Audited by WHD</div>
          </div>
          <div className="bg-gray rounded-xl p-4 grid grid-cols-3 text-center text-sz24 font-bold">
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
              <div className="text-blue">SHA-256</div>
              <div className="flex flex-row items-center space-x-2">
                <div>033953D227B26155CAA6...</div>
                <img src={copy} alt="copy"></img>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <div>3DF58EB754E012D700DB...</div>
                <img src={copy} alt="copy"></img>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <div>FE03F8DED807B82A368D...</div>
                <img src={copy} alt="copy"></img>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <div>7A4DF4179BA14595CA3C...</div>
                <img src={copy} alt="copy"></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
        <div className="bg-gray px-6 py-4 rounded-t-xl">
          <div className="pl-4 text-blue text-sz30 font-bold font-pilat text-center">
            Audited Files
          </div>
        </div>
        <div className="p-8 font-Manrope font-light flex flex-col space-y-6">
          <div className="px-4 py-2 shadow-inner rounded-md text-blue text-sz20 flex flex-row items-center space-x-2">
            <img src={info} alt="info"></img>
            <div>Feature only available for projects audited by WHD</div>
          </div>
          <div className="bg-gray rounded-xl p-4 flex flex-row justify-between text-sz20 text-green">
            <div className="flex flex-col space-y-4">
              <div className="flex">
                <div className="px-4 py-1 rounded-full shadow-inner">
                  Access Control
                </div>
              </div>
              <div className="flex">
                <div className="px-4 py-1 rounded-full shadow-inner">
                  Arbitrary Token Minting
                </div>
              </div>
              <div className="flex">
                <div className="px-4 py-1 rounded-full shadow-inner">
                  Business Logics Review
                </div>
              </div>
              <div className="flex">
                <div className="px-4 py-1 rounded-full shadow-inner">
                  Centralization of Power
                </div>
              </div>
              <div className="flex">
                <div className="px-4 py-1 rounded-full shadow-inner">
                  Codes clones, funcionality duplication
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex">
                <div className="px-4 py-1 rounded-full shadow-inner">
                  Conditional completion attack
                </div>
              </div>
              <div className="flex">
                <div className="px-4 py-1 rounded-full shadow-inner">
                  Costly Loop
                </div>
              </div>
              <div className="flex">
                <div className="px-4 py-1 rounded-full shadow-inner">
                  Ownership Takeover
                </div>
              </div>
              <div className="flex">
                <div className="px-4 py-1 rounded-full shadow-inner">
                  Redundant fallback function
                </div>
              </div>
              <div className="flex">
                <div className="px-4 py-1 rounded-full shadow-inner">
                  Reentrancy
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex">
                <div className="px-4 py-1 rounded-full shadow-inner">
                  Remote code execution
                </div>
              </div>
              <div className="flex">
                <div className="px-4 py-1 rounded-full shadow-inner">
                  User Balances manipulation
                </div>
              </div>
              <div className="flex">
                <div className="px-4 py-1 rounded-full shadow-inner">
                  Logic Flaws
                </div>
              </div>
              <div className="flex">
                <div className="px-4 py-1 rounded-full shadow-inner">
                  Scoping and Declarations
                </div>
              </div>
              <div className="flex">
                <div className="px-4 py-1 rounded-full shadow-inner">
                  Integer Overflow and Underflow attacks
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
