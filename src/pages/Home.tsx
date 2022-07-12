import alertImage from "../assets/images/alert.svg";
import infoImage from "../assets/images/info.svg";
import groupSlideImage from "../assets/images/group_slide.svg";
import idolsNFTImage from "../assets/images/idolsNFT.svg";
import hundredImage from "../assets/images/hundred.svg";
import copyImage from "../assets/images/copy.svg";
import CircleProgressBar from "../components/CircleProgressBar";
import searchImage from "../assets/images/search.svg";
import auditWHD from "../assets/images/auditWHD.svg";
import auditExt from "../assets/images/auditExt.svg";
import prevImage from "../assets/images/prev.svg";
import nextImage from "../assets/images/next.svg";
import servImage1 from "../assets/images/service1.png";
import servImage2 from "../assets/images/service2.png";
import servImage3 from "../assets/images/service3.png";

import hundredfinance from "../assets/images/brands/hundredfinance.svg";
import bitdao from "../assets/images/brands/bitdao.svg";
import dao from "../assets/images/brands/dao.svg";
import whitehat from "../assets/images/brands/whitehat.svg";

import postImage1 from "../assets/images/posts/post1.png";
import postImage2 from "../assets/images/posts/post2.png";
import postImage3 from "../assets/images/posts/post3.png";
import postImage4 from "../assets/images/posts/post4.png";

import rexImage from "../assets/images/rex.svg";
import calendarImage from "../assets/images/calendar.svg";

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

const Home = () => {
  return (
    <div className="py-4 flex flex-col">
      <div className="grid grid-cols-12 space-x-8">
        <div className="col-span-7 flex flex-col justify-between">
          <div className="bg-lightgray rounded-xl shadow-xl px-4 pt-8 pb-6 flex flex-col space-y-4">
            <div className="gradient-text text-sz60 font-black">
              WHITE HAT DAO
            </div>
            <div className="font-Manrope text-sz22 font-light">
              Safety and security should be at the heart of all platforms,
              especially pubic goods services, which is why we are passionate
              about providing technical support and high level security
              integration for projects from all blockchains and backgrounds.
            </div>
            <div className="z-10 cursor-pointer">
              <div className="shadow-sm text-2xl px-8 py-2 border rounded-xl gradient-box text-sz18 flex flex-col items-center">
                <div className="text-blue">
                  Join the WHD Discussion on Governance / Proposals / Blogposts
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-lightgray rounded-xl shadow-xl flex flex-col">
            <div className="bg-gray px-6 py-4 rounded-t-xl flex flex-row items-center">
              <img src={alertImage} alt="alert"></img>
              <div className="pl-4 text-blue text-sz24 font-bold font-pilat">
                Announcements & Updates
              </div>
            </div>
            <div className="py-6 px-4 font-Manrope flex flex-col space-y-4 rounded-xl">
              <div className="px-4 py-2 bg-gray rounded-xl flex flex-col">
                <div className="text-sz20 flex flex-row items-center justify-between">
                  <div className="font-bold">
                    Defi Platform; Xend Finance exploit averted
                  </div>
                  <div className="text-darkgray font-light">26-04-2022</div>
                </div>
                <div className="text-sz20 flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center">
                    <div className="pr-2">Defi loan scam</div>
                    <img src={infoImage} alt="info"></img>
                  </div>
                  <div className="flex flex-row items-center space-x-2">
                    <div className="rounded-full shadow-inner px-4 py-2 text-red text-sz12">
                      Flashloan
                    </div>
                    <div className="rounded-full shadow-inner px-4 py-2 text-red text-sz12">
                      Defi scam
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4 py-2 bg-gray rounded-xl flex flex-col">
                <div className="text-sz20 flex flex-row items-center justify-between">
                  <div className="font-bold">
                    White Hat DAO, token launch. Airdrop to active ...
                  </div>
                  <div className="text-darkgray font-light">26-07-2022</div>
                </div>
                <div className="text-sz20 flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center">
                    <div className="pr-2">Token airdrop</div>
                    <img src={infoImage} alt="info"></img>
                  </div>
                  <div className="flex flex-row items-center space-x-2">
                    <div className="rounded-full shadow-inner px-4 py-2 text-blue text-sz12">
                      Airdrop
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4 py-2 bg-gray rounded-xl flex flex-col">
                <div className="text-sz20 flex flex-row items-center justify-between">
                  <div className="font-bold">
                    Defi Platform; Xend Finance exploit averted
                  </div>
                  <div className="text-darkgray font-light">26-04-2022</div>
                </div>
                <div className="text-sz20 flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center">
                    <div className="pr-2">Token airdrop</div>
                    <img src={infoImage} alt="info"></img>
                  </div>
                  <div className="flex flex-row items-center space-x-2">
                    <div className="rounded-full shadow-inner px-4 py-2 text-blue text-sz12">
                      Airdrop
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center">
                <img src={groupSlideImage} alt="group slide"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5 bg-lightgray rounded-xl shadow-xl flex flex-col">
          <div className="bg-gray px-6 py-4 rounded-t-xl">
            <div className="pl-4 text-blue text-sz24 font-bold font-pilat">
              Recently Audited Projects
            </div>
          </div>
          <div className="py-6 px-4 font-Manrope flex flex-col space-y-4 rounded-xl">
            {auditedProjects.map((item, index) => (
              <div className="px-4 py-2 bg-gray rounded-xl">
                <div className="px-4 py-2 flex flex-row items-center justify-between">
                  <div className="text-blue text-sz20">{index + 1}</div>
                  <img src={idolsNFTImage} alt="idolsNFT"></img>
                  <div className="text-sz20 font-semibold">{item.text}</div>
                  <div className="flex flex-row items-center space-x-2">
                    <img src={copyImage} alt="copy"></img>
                    <div className="bg-lightgray w-5 flex flex-col items-center rounded-md">
                      {item.number > 0 ? item.number : " "}
                    </div>
                  </div>
                  <CircleProgressBar
                    sqSize={42}
                    percentage={item.percentage}
                    strokeWidth={5}
                  ></CircleProgressBar>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-10 flex flex-col">
        <div className="text-black font-Manrope font-light flex flex-row items-center space-x-4">
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
      <div className="my-8 w-full flex flex-col">
        <div className="text-center font-pilat text-sz30 font-semibold">
          SERVICES
        </div>
        <div className="mt-8 grid grid-cols-3 space-x-12 text-center">
          <div className="p-4 bg-gray border border-blue rounded-xl shadow-xl flex flex-col items-center justify-between space-y-2">
            <img className="w-full" src={servImage1} alt="service1"></img>
            <div className="font-pilat font-bold text-blue text-sz22">
              SAFETY RATING
            </div>
            <div className="font-Manrope font-light text-sz16">
              After review of your product, we provide a broad security score to
              allow consumers to make informed decisions about your product.
            </div>
            <div className="z-10 cursor-pointer">
              <div className="shadow-sm text-2xl px-8 py-2 border rounded-xl gradient-box text-sz18">
                APPLY
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray border border-blue rounded-xl shadow-xl flex flex-col items-center justify-between space-y-2">
            <img className="w-full" src={servImage2} alt="service2"></img>
            <div className="font-pilat font-bold text-blue text-sz22">
              WEB3 SERVICES
            </div>
            <div className="font-Manrope font-light text-sz16">
              Smart Contract creation ( all standards ), Web3 platform creation,
              Websites creation, Platform integration, Decentralized App
              creation.
            </div>
            <div className="z-10 cursor-pointer">
              <div className="shadow-sm text-2xl px-8 py-2 border rounded-xl gradient-box text-sz18">
                Inquire Here
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray border border-blue rounded-xl shadow-xl flex flex-col items-center justify-between space-y-2">
            <img className="w-full" src={servImage3} alt="service3"></img>
            <div className="font-pilat font-bold text-blue text-sz22">
              SMART CONTRACT SECURITY AUDIT
            </div>
            <div className="font-Manrope font-light text-sz16">
              We provide smart contract audit services for succinct reports on
              your team’s security risks and optimization oportunties.
            </div>
            <div className="z-10 cursor-pointer">
              <div className="shadow-sm text-2xl px-8 py-2 border rounded-xl gradient-box text-sz18">
                Get Quote
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
        <div className="bg-gray px-6 py-4 rounded-t-xl">
          <div className="pl-4 text-blue text-sz24 font-bold font-pilat text-center">
            Trusted by top brands
          </div>
        </div>
        <div className="py-6 px-4 font-Manrope flex flex-row flex-wrap items-center justify-center space-x-8 rounded-xl">
          <img src={hundredfinance} alt="Hundred Finance"></img>
          <img src={bitdao} alt="BitDAO"></img>
          <img src={dao} alt="DAO"></img>
          <img src={whitehat} alt="White Hat"></img>
          <img src={hundredfinance} alt="Hundred Finance"></img>
          <img src={bitdao} alt="BitDAO"></img>
          <img src={dao} alt="DAO"></img>
          <img src={whitehat} alt="White Hat"></img>
          <img src={hundredfinance} alt="Hundred Finance"></img>
          <img src={bitdao} alt="BitDAO"></img>
          <img src={dao} alt="DAO"></img>
          <img src={whitehat} alt="White Hat"></img>
        </div>
      </div>

      <div className="my-8 w-full flex flex-col">
        <div className="text-center font-pilat text-sz30 font-semibold">
          Blogposts
        </div>
        <div className="mt-8 font-Manrope grid grid-cols-4 space-x-8">
          {[postImage1, postImage2, postImage3, postImage4].map((item) => (
            <div className="shadow-xl flex flex-col border rounded-b-xl border-none">
              <img src={item} alt="post1"></img>
              <div className="p-4 flex flex-col space-y-4">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center space-x-2">
                    <img src={rexImage} alt="rex"></img>
                    <div className="font-light text-sz14 text-darkgray">
                      Israel Rex T.
                    </div>
                  </div>
                  <div className="flex flex-row items-center space-x-2">
                    <img src={calendarImage} alt="calendar"></img>
                    <div className="font-light text-sz14 text-darkgray">
                      27 March 2020
                    </div>
                  </div>
                </div>
                <div className="text-black text-sz18 font-bold">
                  Web3 Products & Security
                </div>
                <div className="text-darkgray text-sz16 font-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </div>
                <div className="px-4 py-2 w-1/2 rounded-lg border border-blue shadow-sm text-sz18 font-light flex flex-col items-center">
                  Learn More
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
