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
import ContractAddressBox from "../components/ContractAddressBox";

const Rating = () => {
  return (
    <div className="mx-4 my-4 md:my-10 flex flex-col">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center space-x-2">
            <img src={idolNFtImage} alt="idol"></img>
            <div className="flex flex-row items-start space-x-1">
              <div className="font-pilat font-bold text-sz20 md:text-sz40">
                Hundred Finance
              </div>
              <img className="mt-1" src={verify} alt="verify"></img>
            </div>
          </div>
          <div className="font-Manrope text-sz12 font-light flex flex-row items-center justify-between">
            <div className="flex flex-row flex-wrap items-center gap-4">
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
      <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        <div className="shadow-xl rounded-xl col-span-2 p-8 font-Manrope font-light flex flex-col justify-center gap-4 md:gap-8">
          <div className="text-sz16 md:text-sz24">
            Hundred Finance is a decentralized application (dApp) that enables
            the lending and borrowing of crypto- currencies. A multi-chain
            protocol, it integrates with Chainlink oracles to ensure market
            health and stability, while specializing in providing markets for
            long-tail assets.
          </div>
          <div className="p-4 bg-gray rounded-xl flex flex-col md:flex-row items-start md:containeritems-center justify-between gap-4 md:gap-8">
            <div className="w-full flex flex-col items-center">
              <div className="rounded-full shadow-xl">
                <CircleProgressBar
                  sqSize={180}
                  percentage={88}
                  strokeWidth={28}
                  type={1}
                ></CircleProgressBar>
              </div>
            </div>

            <div className="font-Manrope font-light flex flex-col gap-4 md:gap-8">
              <div className="flex flex-col">
                <div className="text-darkgray text-sz16">Platform</div>
                <div className="text-sz24">ETH (Multichain)</div>
              </div>
              <div className="flex flex-col">
                <div className="text-darkgray text-sz16">Language used</div>
                <div className="text-sz24">Vyper</div>
              </div>
            </div>

            <div className="font-Manrope font-light flex flex-col gap-4 md:gap-8">
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
                <ContractAddressBox></ContractAddressBox>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full col-span-1 shadow-xl rounded-xl font-Manrope font-light flex flex-col gap-4">
          <div className="px-8 pt-8 flex flex-col gap-4">
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
              <div className="font-pilat font-bold text-sz24 pb-3 text-blue border-b border-darkgray">
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
          <div className="pl-4 text-blue text-sz20 md:text-sz30 font-bold font-pilat text-center">
            Token Distribution / Tokenomics
          </div>
        </div>
        <div className="p-8 font-Manrope font-light">
          <div className="w-full rounded-xl p-4 bg-gray flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="relative w-full flex flex-col items-center">
              <Doughnut type={true} />
              <div className="font-Manrope text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col">
                <div className="text-sz22 font-bold">291, 591, 552</div>
                <div className="text-sz12">TOTAL SUPPLY</div>
              </div>
            </div>
            <img className="hidden md:block h-full" src={line} alt="line"></img>
            <div className="px-2 text-sz20 font-Manrope font-light flex flex-col gap-8">
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
            <img className="hidden md:block h-full" src={line} alt="line"></img>
            <div className="px-2 text-sz20 font-Manrope font-light flex flex-col gap-8">
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
            <img className="hidden md:block h-full" src={line} alt="line"></img>
            <div className="px-2 text-sz20 font-Manrope font-light flex flex-col gap-8">
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
                <ContractAddressBox></ContractAddressBox>
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
        <div className="p-8 font-Manrope font-light flex flex-col md:flex-row">
          <div className="relative w-full flex flex-col items-center">
            <Doughnut type={false} />
            <div className="font-Manrope text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col">
              <div className="text-sz22 font-bold">5</div>
              <div className="text-sz12">Total Findings</div>
            </div>
          </div>
          <div className="w-full flex flex-col ml-8 px-8 border-none md:border-l border-darkgray gap-4">
            <div className="w-full grid grid-cols-4 items-start">
              <div className="col-span-1 font-Manrope font-light text-sz18 flex flex-row items-center space-x-4">
                <div
                  className="w-3 h-3 rounded-sm"
                  style={{ background: "#A12E2E" }}
                ></div>
                <div style={{ color: "#A12E2E" }}>0</div>
                <div className="font-bold">Critical</div>
              </div>
              <div className="hidden md:block col-span-2"></div>
              <div className="hidden md:flex col-span-1 flex-col">
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
              <div className="hidden md:flex col-span-2">
                <div
                  style={{ background: "#E28A59" }}
                  className="text-center rounded-md text-white text-sz14 p-1"
                >
                  Centralization / Privilege
                </div>
              </div>
              <div className="hidden md:flex col-span-1 flex-col">
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
              <div className="hidden md:block col-span-2"></div>
              <div className="hidden md:flex col-span-1 flex-col">
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
              <div className="hidden md:block col-span-2"></div>
              <div className="hidden md:flex col-span-1 flex-col">
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

              <div className="hidden md:flex col-span-2 flex-row items-center space-x-4">
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
              <div className="hidden md:flex col-span-1 flex-col">
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
          <div className="pl-4 text-blue text-sz20 md:text-sz30 font-bold font-pilat text-center">
            Audited Files
          </div>
        </div>
        <div className="p-8 font-Manrope font-light flex flex-col space-y-6">
          <div className="px-4 py-2 shadow-inner rounded-md text-blue text-sz20 md:text-sz20 flex flex-row items-center space-x-2">
            <img src={info} alt="info"></img>
            <div>This details only available for projets Audited by WHD</div>
          </div>
          <div className="bg-gray rounded-xl p-4 grid grid-cols-3 text-center text-sz16 md:text-sz24 font-bold overflow-auto">
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
            <div className="flex flex-col items-center space-y-3">
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
          <div className="pl-4 text-blue text-sz20 md:text-sz30 font-bold font-pilat text-center">
            Methdology
          </div>
        </div>
        <div className="p-8 font-Manrope font-light flex flex-col space-y-6">
          <div className="px-4 py-2 shadow-inner rounded-md text-blue text-sz16 md:text-sz20 flex flex-row items-center space-x-2">
            <img src={info} alt="info"></img>
            <div>Feature only available for projects audited by WHD</div>
          </div>
          <div className="bg-gray rounded-xl p-4 flex flex-col md:flex-row justify-between text-sz20 text-green gap-4">
            <div className="flex flex-col gap-4">
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
            <div className="flex flex-col gap-4">
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
            <div className="flex flex-col gap-4">
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

      <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
        <div className="bg-gray px-6 py-4 rounded-t-xl">
          <div className="pl-4 text-blue text-sz20 md:text-sz30 font-bold font-pilat text-center">
            Price Data
          </div>
        </div>
        <div className="m-8 p-6 rounded-xl bg-gray font-Manrope font-light flex flex-col">
          <div className="pb-4 border-b border-darkgray text-blue text-sz16">
            Hundred Finance Price Data
          </div>
          <div className="py-4 hidden md:flex flex-row items-center space-x-2">
            <img src={idolNFtImage} alt="hundred"></img>
            <div className="font-pilat font-bold text-blue text-sz20">
              Hundred Finance (HND)
            </div>
          </div>
          <div className="py-4 hidden md:flex flex-row items-center space-x-2">
            <div className="font-Manrope text-sz40 font-bold">$0.103</div>
            <div className="flex flex-row items-center space-x-1">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.63965 7.04004L10.5596 14.96L18.4796 7.04004H2.63965Z"
                  fill="#A22E2E"
                />
              </svg>
              <div className="text-sz16 text-red">3.76%</div>
            </div>
          </div>
          <div className="font-Manrope text-sz16 md:text-sz20 grid grid-cols-2 md:grid-cols-3 gap-8 justify-between">
            <div className="pt-4 md:pt-0 flex flex-col gap-4">
              <div className="border-none md:border-b border-darkgray pb-0 md:pb-4 flex flex-col md:flex-row justify-between">
                <div className=" flex flex-row items-center space-x-2">
                  <div className="text-darkgray">Market cap</div>
                  <img src={info_small} alt="info_small"></img>
                </div>
                <div>$1,451,392,754</div>
              </div>
              <div className="border-none md:border-b border-darkgray pb-0 md:pb-4 flex flex-col md:flex-row justify-between">
                <div className=" flex flex-row items-center space-x-2">
                  <div className="text-darkgray">Circulating Supply</div>
                  <img src={info_small} alt="info_small"></img>
                </div>
                <div>$1,451,392,754</div>
              </div>
              <div className="border-none md:border-b border-darkgray pb-0 md:pb-4 flex flex-col md:flex-row justify-between">
                <div className=" flex flex-row items-center space-x-2">
                  <div className="text-darkgray">Max Supply</div>
                  <img src={info_small} alt="info_small"></img>
                </div>
                <div>392,754</div>
              </div>
              <div className="flex flex-col md:flex-row justify-between">
                <div className="text-darkgray">All time high</div>
                <div>$100</div>
              </div>
            </div>

            <div className="pt-4 md:pt-0 flex flex-col gap-4">
              <div className="border-none md:border-b border-darkgray pb-0 md:pb-4 flex flex-col md:flex-row justify-between">
                <div className=" flex flex-row items-center space-x-2">
                  <div className="text-darkgray">Market cap Dominance</div>
                  <img src={info_small} alt="info_small"></img>
                </div>
                <div>%0.12</div>
              </div>
              <div className="border-none md:border-b border-darkgray pb-0 md:pb-4 flex flex-col md:flex-row justify-between">
                <div className=" flex flex-row items-center space-x-2">
                  <div className="text-darkgray">Trading Volume</div>
                  <div className="text-sz16 bg-white rounded-sm px-1">24h</div>
                </div>
                <div>$1,451,392,754</div>
              </div>
              <div className="border-none md:border-b border-darkgray pb-0 md:pb-4 flex flex-col md:flex-row justify-between">
                <div className="text-darkgray">Total Supply</div>
                <div>392,754</div>
              </div>
              <div className="flex flex-col md:flex-row justify-between">
                <div className="text-darkgray">All time low</div>
                <div>$0.1002</div>
              </div>
            </div>

            <div className="hidden md:flex flex-col space-y-4">
              <div className="border-b border-darkgray pb-4 flex flex-row justify-between">
                <div className="text-darkgray">Volume / Market Cap</div>
                <div>0.0000221</div>
              </div>
              <div className="border-b border-darkgray pb-4 flex flex-row justify-between">
                <div className="text-darkgray">24h Low / 24h High</div>
                <div>$0.08 / $0.11</div>
              </div>
              <div className="border-b border-darkgray pb-4 flex flex-row justify-between">
                <div className="text-darkgray">7d Low / 7d High</div>
                <div>$0.08 / $0.11</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-8 mb-8 p-6 rounded-xl bg-gray font-Manrope font-light flex flex-col">
          <img src={token_chart} alt="token_chart"></img>
        </div>
      </div>

      <div className="my-0 md:my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
        <div className="px-6 py-4 rounded-t-xl">
          <div className="pl-4 text-blue text-sz20 md:text-sz30 font-bold font-pilat text-center">
            Hundred Finance Markets
          </div>
        </div>
        <table className="text-center font-Manrope font-light text-sz16 md:text-sz22">
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
          <tbody className="overflow-x-auto">
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

      <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
        <div className="bg-gray px-6 py-4 rounded-t-xl">
          <div className="pl-4 text-blue text-sz20 md:text-sz30 font-bold font-pilat text-center">
            Project Team Members & Developers
          </div>
        </div>
        <div className="p-8 font-Manrope font-light flex flex-col space-y-8">
          <div className="rounded-md shadow-inner flex flex-col p-6">
            <div className="border-b border-blue pb-3 flex flex-row space-x-2">
              <img src={info} alt="info"></img>
              <div className="text-sz18 md:text-sz24 font-blue text-blue">Note!</div>
            </div>
            <div className="text-blue text-sz16 md:text-sz20">
              Please be advised that verified check mark only applies to members
              who are doxed or verified their identity for public view. WHD
              reserves the right to verify individuals privately and provide
              check mark to any projects, developers or project team members.
              WHD also reserves the right to publish project team members
              identity for public view, in the event of any fraudulent activity
              or misconducts by any project team.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-8">
            {[0, 1, 2, 3].map((item) => (
              <div className="rounded-xl shadow-xl flex flex-col items-center justify-center space-y-2 p-4 text-center">
                <div className="rounded-full shadow-inner flex flex-col items-center justify-center">
                  <img
                    className="p-4 rounded-full"
                    src={member1}
                    alt="member1"
                  ></img>
                </div>
                <div className="flex flex-row items-center space-x-2 text-sz22">
                  <div>Mark Twain</div>
                  <img src={verify} alt="verify"></img>
                </div>
                <div className="text-sz18 text-darkgray">
                  CEO Hundred Finance
                </div>
                <div className="flex flex-row items-center space-x-8">
                  <div className="shadow-inner rounded-full flex flex-col items-center justify-center">
                    <div className="p-2">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1091_15042)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.6436 2.10466C10.3095 2.33853 9.25592 3.28482 8.90314 4.56599C8.84237 4.78666 8.82991 4.91763 8.82811 5.35425C8.82694 5.64223 8.83737 5.93973 8.8513 6.01531L8.87665 6.15281L8.65508 6.13311C7.21476 6.00513 6.04889 5.68434 4.88858 5.09673C3.81699 4.55406 2.70044 3.70202 2.01581 2.9045C1.91351 2.78534 1.81517 2.69255 1.79725 2.69836C1.77936 2.70413 1.70843 2.8324 1.63958 2.98342C1.16982 4.01377 1.2575 5.20497 1.8712 6.13013C2.05084 6.40091 2.34344 6.72087 2.5812 6.90645L2.82864 7.09958H2.69449C2.40758 7.09958 1.80759 6.94247 1.48545 6.78301C1.41406 6.74769 1.34368 6.71878 1.32906 6.71878C1.28288 6.71878 1.344 7.30045 1.41942 7.57859C1.71641 8.67415 2.55445 9.54047 3.66747 9.90255C3.85218 9.96265 3.98241 10.0196 3.95687 10.0291C3.80931 10.084 3.3245 10.1212 2.94795 10.1063L2.52518 10.0897L2.54627 10.1712C2.58218 10.3101 2.82361 10.7551 2.97385 10.9595C3.55189 11.7455 4.49554 12.2854 5.41655 12.357C5.55597 12.3678 5.67001 12.3876 5.67001 12.4008C5.67001 12.4545 4.93691 12.8954 4.48854 13.1114C3.46784 13.6031 2.45922 13.8158 1.27147 13.7898L0.666016 13.7766L0.837843 13.8813C1.0881 14.0338 1.84624 14.4052 2.18702 14.5423C4.0213 15.2803 6.16279 15.4483 8.18424 15.0129C11.1591 14.372 13.6064 12.3677 14.8424 9.55983C15.3709 8.3592 15.636 7.18015 15.6631 5.90958L15.6753 5.33838L15.9121 5.15372C16.2149 4.91756 16.5551 4.60286 16.8112 4.32196C17.0302 4.0818 17.3509 3.66714 17.3319 3.64868C17.3254 3.64239 17.2264 3.67435 17.112 3.71973C16.6788 3.89147 15.6736 4.13892 15.5234 4.11084C15.4863 4.10389 15.5131 4.07289 15.6103 4.01047C15.8571 3.85196 16.2981 3.41356 16.4854 3.14037C16.6481 2.90313 16.8861 2.43805 16.8871 2.35532C16.8874 2.3378 16.6868 2.41891 16.4414 2.53553C15.998 2.74634 15.4195 2.94946 14.9662 3.05358L14.7291 3.108L14.5308 2.92988C13.7652 2.2421 12.6605 1.92638 11.6436 2.10466Z"
                            fill="#346DA1"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1091_15042">
                            <rect
                              width="16.6667"
                              height="16.6667"
                              fill="white"
                              transform="translate(0.666016 0.666992)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="shadow-inner rounded-full flex flex-col items-center justify-center">
                    <div className="p-2">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.07175 6.72675H9.85725V8.11425C10.2585 7.31625 11.2875 6.59925 12.8333 6.59925C15.7965 6.59925 16.5 8.18775 16.5 11.1023V16.5H13.5V11.766C13.5 10.1062 13.0988 9.17025 12.0773 9.17025C10.6605 9.17025 10.0717 10.179 10.0717 11.7653V16.5H7.07175V6.72675ZM1.9275 16.3725H4.9275V6.59925H1.9275V16.3725ZM5.35725 3.4125C5.35736 3.66396 5.30749 3.91293 5.21054 4.14494C5.11359 4.37695 4.97149 4.58738 4.7925 4.764C4.4298 5.12447 3.93886 5.32624 3.4275 5.325C2.91704 5.32466 2.42723 5.1234 2.064 4.76475C1.88566 4.58753 1.74404 4.37687 1.64726 4.14482C1.55048 3.91278 1.50043 3.66392 1.5 3.4125C1.5 2.90475 1.7025 2.41875 2.06475 2.06025C2.42766 1.70112 2.91768 1.49978 3.42825 1.5C3.93975 1.5 4.43025 1.70175 4.7925 2.06025C5.154 2.41875 5.35725 2.90475 5.35725 3.4125Z"
                          fill="#346DA1"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="shadow-inner rounded-full flex flex-col items-center justify-center">
                    <div className="p-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.3337 4.99967C18.3337 4.08301 17.5837 3.33301 16.667 3.33301H3.33366C2.41699 3.33301 1.66699 4.08301 1.66699 4.99967V14.9997C1.66699 15.9163 2.41699 16.6663 3.33366 16.6663H16.667C17.5837 16.6663 18.3337 15.9163 18.3337 14.9997V4.99967ZM16.667 4.99967L10.0003 9.16634L3.33366 4.99967H16.667ZM16.667 14.9997H3.33366V6.66634L10.0003 10.833L16.667 6.66634V14.9997Z"
                          fill="#346DA1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="rounded-md shadow-sm flex flex-row">
                  <div className="p-2 rounded-l-md bg-gray flex flex-col items-center justify-center">
                    <img src={copy} alt="copy"></img>
                  </div>
                  <div className="p-2 flex flex-row items-center space-x-2">
                    <div className="text-sz20 text-blue">0xd0e4...31da9</div>
                    <img src={ether} alt="ether"></img>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
        <div className="bg-gray px-6 py-4 rounded-t-xl">
          <div className="pl-4 text-red text-sz20 md:text-sz30 font-bold font-pilat text-center">
            Disclaimer
          </div>
        </div>
        <div className="p-8 text-sz16 md:text-sz22 font-Manrope font-light">
          Cryptocurrencies are speculative, complex and involve significant
          risks – they are highly volatile and sensitive to secondary activity.
          Performance is unpredictable and past performance is no guarantee of
          future performance. Consider your own circumstances, and obtain your
          own advice, before relying on this information. You should also verify
          the nature of any product or service (including its legal status and
          relevant regulatory requirements) and consult the relevant Regulators’
          websites before making any decision.
        </div>
      </div>
    </div>
  );
};

export default Rating;
