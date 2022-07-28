import info from "../assets/images/dao/info.svg";
import audit from "../assets/images/audit/audit.png";

import step1 from "../assets/images/audit/step1.svg";
import step2 from "../assets/images/audit/step2.svg";
import step3 from "../assets/images/audit/step3.svg";
import step4 from "../assets/images/audit/step4.svg";
import step5 from "../assets/images/audit/step5.svg";

import arrow from "../assets/images/audit/arrow.svg";

import idolsNFTImage from "../assets/images/idolsNFT.svg";
import hundredImage from "../assets/images/hundred.svg";
import searchImage from "../assets/images/search.svg";
import auditWHD from "../assets/images/auditWHD.svg";
import auditExt from "../assets/images/auditExt.svg";

import CircleProgressBar from "../components/CircleProgressBar";

import prevImage from "../assets/images/prev.svg";
import nextImage from "../assets/images/next.svg";

const auditedProjects = [
  {
    image: idolsNFTImage,
    text: "The Idols NFT",
    price: null,
    marketcap: null,
    number: 2,
    percentage: 95,
    date: "26-04-2022",
  },
  {
    image: hundredImage,
    text: "The Idols NFT",
    price: 0.2158,
    marketcap: "31.87 B",
    number: 2,
    percentage: 40,
    date: "12-04-2022",
  },
  {
    image: hundredImage,
    text: "The Idols NFT",
    price: null,
    marketcap: null,
    number: 1,
    percentage: 35,
    date: "26-04-2022",
  },
  {
    image: hundredImage,
    text: "The Idols NFT",
    price: 0.2158,
    marketcap: "31.87 B",
    number: 1,
    percentage: 72,
    date: "12-04-2022",
  },
  {
    image: hundredImage,
    text: "The Idols NFT",
    price: 0.2158,
    marketcap: "31.87 B",
    number: 3,
    percentage: 90,
    date: "12-04-2022",
  },
  {
    image: hundredImage,
    text: "The Idols NFT",
    price: null,
    marketcap: null,
    number: 1,
    percentage: 25,
    date: "26-04-2022",
  },
  {
    image: hundredImage,
    text: "The Idols NFT",
    price: 0.2158,
    marketcap: "31.87 B",
    number: 1,
    percentage: 60,
    date: "12-04-2022",
  },
];

const Audit = () => {
  return (
    <div className="mx-4 my-10 flex flex-col space-y-8">
      <div className="bg-lightgray rounded-xl shadow-xl flex flex-col">
        <div className="bg-gray px-6 py-4 rounded-t-xl">
          <div className="pl-4 text-blue text-sz20 md:text-sz30 font-bold font-pilat text-center">
            Due-Diligence / Auditing
          </div>
        </div>
        <div className="p-8 flex flex-col font-Manrope font-light space-y-4">
          <div className="text-sz16 md:text-sz22">
            We provide Due-Diligence, Safety Rating and a Comprehensive Security
            Assessment of your smart contract and blockchain code to identify
            vulnerabilities and recommend ways to fix them.
          </div>
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
            <div className="flex flex-col space-y-8">
              <div className="p-6 shadow-inner text-blue font-Manrope flex flex-col space-y-4">
                <div className="w-full pb-4 border-b border-blue flex flex-row items-center space-x-2 text-sz18 md:text-sz24">
                  <img src={info} alt="info"></img>
                  <div>Note!</div>
                </div>
                <div className="text-sz16 md:text-sz20">
                  Our industry-leading audit methodology and tooling includes a
                  review of your code’s logic, with a mathematical approach to
                  ensure your program works as intended.
                </div>
              </div>
              <div className="w-full md:w-2/3 rounded-md shadow-sm p-4 border border-blue text-pink text-sz16 md:text-sz24 flex flex-row items-center justify-center">
                <div>Apply for Smart Contract Security Audit</div>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.16667 1H14V11.8333M14 1L1 14L14 1Z"
                    stroke="#CC2D8F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <img src={audit} alt="audit"></img>
          </div>
        </div>
      </div>
      <div className="font-Manrope flex flex-col text-center space-y-8">
        <div className="font-pilat text-sz20 md:text-sz30">Our Services Includes</div>
        <div className="font-light grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 shadow-xl rounded-md flex flex-col text-center">
            <div className="font-pilat text-sz20 md:text-sz22 text-blue">
              Identify Errors & Risks
            </div>
            <div className="text-sz16">
              Have your code reviewed by W-HAT team of seasoned security
              experts.
            </div>
          </div>
          <div className="p-4 shadow-xl rounded-md flex flex-col text-center">
            <div className="font-pilat text-sz20 md:text-sz22 text-blue">
              Remediate Vulnerabilities
            </div>
            <div className="text-sz16">
              Receive reporting and recommendations on how to remediate
              vulnerabilities.
            </div>
          </div>
          <div className="p-4 shadow-xl rounded-md flex flex-col text-center">
            <div className="font-pilat text-sz20 md:text-sz22 text-blue">
              Verify Your Contracts
            </div>
            <div className="text-sz16">
              Prove the correctness of your contract code with highly scalable
              Formal Verification techniques.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lightgray rounded-xl shadow-xl flex flex-col">
        <div className="bg-gray px-6 py-4 rounded-t-xl">
          <div className="pl-4 text-blue text-sz16 md:text-sz30 font-bold font-pilat text-center">
            Audit Process
          </div>
        </div>
        <div className="p-8 flex flex-col font-Manrope font-light space-y-4">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between">
            <div className="w-40 text-center flex flex-col items-center space-y-2">
              <div className="w-32 h-32 rounded-3xl shadow-inner flex flex-col items-center justify-center">
                <img src={step1} alt="step1"></img>
              </div>
              <div className="text-pink text-sz16">Step 1</div>
              <div className="text-sz24">Share Source Code</div>
            </div>
            <img className="mb-8 md:mb-0 mt-8 md:mt-14 transform rotate-90 md:rotate-0" src={arrow} alt="arrow"></img>
            <div className="w-40 text-center flex flex-col items-center space-y-2">
              <div className="w-32 h-32 rounded-3xl shadow-inner flex flex-col items-center justify-center">
                <img src={step2} alt="step2"></img>
              </div>
              <div className="text-pink text-sz16">Step 2</div>
              <div className="text-sz24">Review & Quote</div>
            </div>
            <img className="mb-8 md:mb-0 mt-8 md:mt-14 transform rotate-90 md:rotate-0" src={arrow} alt="arrow"></img>
            <div className="w-40 text-center flex flex-col items-center space-y-2">
              <div className="w-32 h-32 rounded-3xl shadow-inner flex flex-col items-center justify-center">
                <img src={step3} alt="step3"></img>
              </div>
              <div className="text-pink text-sz16">Step 3</div>
              <div className="text-sz24">Begin Vulnerability Inspection</div>
            </div>
            <img className="mb-8 md:mb-0 mt-8 md:mt-14 transform rotate-90 md:rotate-0" src={arrow} alt="arrow"></img>
            <div className="w-40 text-center flex flex-col items-center space-y-2">
              <div className="w-32 h-32 rounded-3xl shadow-inner flex flex-col items-center justify-center">
                <img src={step4} alt="step4"></img>
              </div>
              <div className="text-pink text-sz16">Step 4</div>
              <div className="text-sz24">Suggest Remediations</div>
            </div>
            <img className="mb-8 md:mb-0 mt-8 md:mt-14 transform rotate-90 md:rotate-0" src={arrow} alt="arrow"></img>
            <div className="w-40 text-center flex flex-col items-center space-y-2">
              <div className="w-32 h-32 rounded-3xl shadow-inner flex flex-col items-center justify-center">
                <img src={step5} alt="step5"></img>
              </div>
              <div className="text-pink text-sz16">Step 5</div>
              <div className="text-sz24">Deliver Report</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lightgray rounded-xl shadow-xl flex flex-col">
        <div className="bg-gray px-6 py-4 rounded-t-xl">
          <div className="pl-4 text-blue text-sz16 md:text-sz30 font-bold font-pilat text-center">
            Terms & Conditions
          </div>
        </div>
        <div className="p-8 flex flex-col font-Manrope font-light space-y-4">
          <div className="p-6 rounded-md shadow-inner flex flex-col space-y-4">
            <div className="flex flex-row items-center space-x-4">
              <div className="w-4 h-4 rounded-full bg-blue"></div>
              <div className="text-sz16 md:text-sz22">
                Audit may take 3 weeks in total or longer to complete.
              </div>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <div className="w-4 h-4 rounded-full bg-blue"></div>
              <div className="text-sz16 md:text-sz22">
                White Hat DAO may take 2 weeks or longer to complete a
                preliminary audit report for clients to review recommended
                feedback / suggestions.
              </div>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <div className="w-4 h-4 rounded-full bg-blue"></div>
              <div className="text-sz16 md:text-sz22">
                1 week for clients to review or acknowledge any issues may be
                found and resubmit the code for final review.{" "}
              </div>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <div className="w-4 h-4 rounded-full bg-blue"></div>
              <div className="text-sz16 md:text-sz22">
                White Hat DAO doesn’t apply any extra charges on reviewing the
                audited files.
              </div>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <div className="w-4 h-4 rounded-full bg-blue"></div>
              <div className="text-sz16 md:text-sz22">
                The smart contract still may contain unfound severity and
                security issues even after the audit is completed.{" "}
              </div>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <div className="w-4 h-4 rounded-full bg-blue"></div>
              <div className="text-sz16 md:text-sz22">
                White Hat DAO may take 1 week or longer to finalize the review
                on resubmitted source code and deliver final security audit
                assessments.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lightgray rounded-xl shadow-xl flex flex-col">
        <div className="bg-gray px-6 py-4 rounded-t-xl">
          <div className="pl-4 text-blue text-sz16 md:text-sz30 font-bold font-pilat text-center">
            What’s In The Audit Report?
          </div>
        </div>
        <div className="p-8 flex flex-col font-Manrope font-light space-y-4">
          <div className="text-sz16 md:text-sz22">
            Our audit reports are custom, thorough, and transparent. The report
            will contain the details of any identified vulnerabilities and
            classify them by severity (Critical, Major, Medium, Low, and
            Informational), along with suggested remediations.
          </div>
          <div className="text-sz16 md:text-sz22">
            With every successful audit, we’ll provide you with a listing on the
            W-HAT Safety rating leaderboard that is shared publicly with the
            entire crypto community. The Leaderboard contains the details of
            projects alongside their audit reports, as well as the community’s
            security sentiment of the project.
          </div>
        </div>
      </div>
      <div className="py-10 flex flex-col space-y-8 s">
        <div className="font-pilat text-sz20 md:text-sz30 text-center">Audit Leaderboard</div>
        <div className="text-black font-Manrope font-light flex flex-row flex-wrap items-center gap-4">
          <select
            id="role"
            className="w-72 bg-transparent border border-blue text-sz18 rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a Role</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Fullstack</option>
            <option value="BlockChain">Blockchain</option>
          </select>
          <select
            id="category"
            className="w-72 bg-transparent border border-blue text-sz18 rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a category</option>
            <option value="frontend">Solidity</option>
            <option value="backend">Web3</option>
            <option value="fullstack">Nest</option>
            <option value="BlockChain">React</option>
          </select>
          <div className="w-full flex">
            <div className="inline-flex items-center px-3 text-sm text-gray-900 bg-blue rounded-l-md border border-r-0 border-gray">
              <img src={searchImage} alt="search"></img>
            </div>
            <input
              type="text"
              id="website-admin"
              className="rounded-none shadow-inner rounded-r-lg bg-lightgray border border-darkgray focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="elonmusk"
            />
          </div>
        </div>
        <div className="my-8 shadow-xl relative overflow-x-auto rounded-lg">
          <table className="w-full font-Manrope font-light text-sm text-center text-black">
            <thead className="bg-gray text-blue uppercase border-b border-blue">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Name
                </th>
                <th scope="col" className="px-6 py-4">
                  Audit Reports
                </th>
                <th scope="col" className="px-6 py-4">
                  Safety Score
                </th>
                <th scope="col" className="px-6 py-4">
                  Price
                </th>
                <th scope="col" className="px-6 py-4">
                  Market Cap
                </th>
                <th scope="col" className="px-6 py-4">
                  Onboard date
                </th>
              </tr>
            </thead>
            <tbody>
              {auditedProjects.map((item, index) => (
                <tr
                  className={
                    auditedProjects.length === index + 1
                      ? "bg-lightgray border-none"
                      : "bg-lightgray border-b border-blue"
                  }
                >
                  <td className="px-6 py-3">{item.text}</td>
                  <td className="px-6 py-3">
                    <div className="flex flex-row items-center justify-center">
                      {item.number === 1 && (
                        <img src={auditWHD} alt="WHD"></img>
                      )}
                      {item.number > 1 && (
                        <>
                          <img className="pr-2" src={auditWHD} alt="WHD"></img>
                          <img src={auditExt} alt="EXT"></img>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-3">
                    <div className="flex flex-col items-center">
                      <CircleProgressBar
                        sqSize={42}
                        percentage={item.percentage}
                        strokeWidth={5}
                        type={0}
                      ></CircleProgressBar>
                    </div>
                  </td>
                  <td className="px-6 py-3">
                    {item.price === null ? "N/A" : item.price}
                  </td>
                  <td className="px-6 py-3">
                    {item.marketcap === null ? "N/A" : item.marketcap}
                  </td>
                  <td className="px-6 py-3">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="font-Manrope text-sz15 w-full flex flex-row items-center justify-center space-x-4">
          <div className="shadow-sm w-12 h-12 flex flex-row items-center justify-center">
            <img src={prevImage} alt="prev"></img>
          </div>
          <div className="shadow-sm w-12 h-12 flex flex-row items-center justify-center">
            1
          </div>
          <div className="shadow-sm w-12 h-12 flex flex-row items-center justify-center">
            2
          </div>
          <div className="shadow-sm w-12 h-12 flex flex-row items-center justify-center">
            3
          </div>
          <div className="shadow-sm w-12 h-12 flex flex-row items-center justify-center">
            ...
          </div>
          <div className="shadow-sm w-12 h-12 flex flex-row items-center justify-center">
            500
          </div>
          <div className="shadow-sm w-12 h-12 flex flex-row items-center justify-center">
            <img src={nextImage} alt="next"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audit;
