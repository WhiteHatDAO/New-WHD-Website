import nextImage from '../assets/images/next.svg';
import prevImage from '../assets/images/prev.svg';
import pointImage from "../assets/images/point.png";
import verify from "../assets/images/safety/verify.svg";
import discord from "../assets/images/footer/discord_black.svg";
import github from "../assets/images/footer/github_black.svg";
import twitter from "../assets/images/footer/twitter_black.svg";
import global from "../assets/images/footer/global.svg";
import medium from "../assets/images/footer/medium.png";
import telegram from "../assets/images/footer/telegram.svg";
import CircleProgressBar from "../components/CircleProgressBar";
import goImage from "../assets/images/safety/go.svg";
import save from "../assets/images/modal/save.png";
import discard from "../assets/images/modal/discard.png";
// import edit from "../assets/images/edit.png";
import addItem from "../assets/images/addItem.png";
// import deleteImage from "../assets/images/remove.png";

import axios from "axios";
import { BACKEND_SERVER } from "../global/global";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const amountPerPage = 10;

interface propsSafetyRatings {
  auditProjects: any[];
  mainProData: any;
  count: number;
  handleCount: (count: number) => void;
}

const SafetyRatings = ({
  auditProjects,
  mainProData,
  count,
  handleCount,
}: propsSafetyRatings) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const [safetyRatings, setSafetyRatings] = useState<string>();
  const [ratingBtn1, setRatingBtn1] = useState<string>();
  const [ratingBtn2, setRatingBtn2] = useState<string>();
  const [ratingBtn1Link, setRatingBtn1Link] = useState<string>();
  const [ratingBtn2Link, setRatingBtn2Link] = useState<string>();
  const [searchText, setSearchText] = useState<string>("");
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
  const [gotoRating, setGotoRating] = useState<boolean>(false);
  const [length, setLength] = useState<number>(0);
	const [curProPage, setCurProPage] = useState(0);

  useEffect(() => {
    if (auditProjects && searchText.length === 0) {
      let projects = auditProjects;
      setFilteredProjects(projects);
    }
  }, [auditProjects, searchText.length]);

	const prevPro = () => (curProPage > 0) && setCurProPage(x=>x-=1)
	const nextPro = () => (curProPage < Math.ceil(filteredProjects.length / amountPerPage) - 1) && setCurProPage(x=>x+=1)

  const handleSearchItem = (e: any) => {
    setSearchText(e.target.value);
    const text = e.target.value;
    if (auditProjects.length === 0) return;
    if (text.length === 0) {
      let projects = auditProjects;
      setFilteredProjects(projects);
    } else {
      let projects = [];
      for (let i = 0; i < auditProjects.length; i++) {
				if (auditProjects[i].name.toLowerCase().includes(text.toLowerCase())) {
          projects.push(auditProjects[i]);
        }
      }
      setFilteredProjects(projects);
    }
  };

  const createNewProject = async () => {
    try {
      const res = await axios.post(BACKEND_SERVER + "/api/project");

      if (res.status === 200) {
        let c = count + 1;
        handleCount(c);
      }

      setLength(auditProjects.length);
      setGotoRating(true);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (auditProjects && mainProData) {
      if(gotoRating && length < auditProjects.length) {
        setGotoRating(false)
        navigate(`/safety-ratings/rating/${auditProjects.length - 1}`)
      }

      setSafetyRatings(mainProData.rating.safety_ratings);
      setRatingBtn1(mainProData.rating.rating_buttion_first);
      setRatingBtn2(mainProData.rating.rating_button_second);
      setRatingBtn1Link(mainProData.rating.rating_button_first_link);
      setRatingBtn2Link(mainProData.rating.rating_button_second_link);
    }
  }, [auditProjects, mainProData, gotoRating, navigate, length]);

  const handleSaveModal = async () => {
    try {
      const data = {
        id: mainProData._id,
        home: mainProData.home,
        dao: mainProData.dao,
        rating: {
          safety_ratings: safetyRatings,
          rating_buttion_first: ratingBtn1,
          rating_button_first_link: ratingBtn1Link,
          rating_button_second: ratingBtn2,
          rating_button_second_link: ratingBtn2Link,
        },
        audit: mainProData.audit,
      };

      const res = await axios.put(BACKEND_SERVER + "/api/main-pro", data);

      if (res.status === 200) {
        let c = count + 1;
        handleCount(c);
      }
    } catch (e) {
      console.log(e);
    }
    setShowModal(false);
  };

  const handleDiscardModal = () => {
    setSafetyRatings(mainProData.rating.safety_ratings);
    setRatingBtn1(mainProData.rating.rating_buttion_first);
    setRatingBtn2(mainProData.rating.rating_button_second);
    setRatingBtn1Link(mainProData.rating.rating_buttion_first_link);
    setRatingBtn2Link(mainProData.rating.rating_button_second_link);
    setShowModal(false);
  };

  const handleChangeNetwork = (e: any) => {
    const value = e.target.value;

    if (value === "choose") {
      setFilteredProjects(auditProjects);
    } else {
      let projects = [];
      for (let i = 0; i < auditProjects.length; i++) {
        if (auditProjects[i].platform.includes(value)) {
          projects.push(auditProjects[i]);
        }
      }
      setFilteredProjects(projects);
    }
  };

  const handleChangeCategory = (e: any) => {
    const value = e.target.value;
    if (value === "choose") {
      setFilteredProjects(auditProjects);
    } else {
      let projects = [];
      for (let i = 0; i < auditProjects.length; i++) {
        if (auditProjects[i].tags.includes(value)) {
          projects.push(auditProjects[i]);
        }
      }
      setFilteredProjects(projects);
    }
  };

  return (
    <>
      {auditProjects && mainProData ? (
        <div className="mx-2 sm:mx-4 flex flex-col">
          <div className="mt-10 mb-12 px-[10px] pt-5 pb-7 md:p-4 sm:p-8 rounded-xl border border-blue shadow-xl flex flex-col space-y-5 md:space-y-6 text-center font-Manrope font-light">
            <div className="font-pilat text-sz20 leading-ht30 md:leading-auto text-blue flex flex-row items-start">
              <div className="w-full font-bold">Safety Ratings</div>
              {/* <div
                className="text-sz16 font-Manrope flex flex-row items-center space-x-2 cursor-pointer"
                onClick={() => setShowModal(true)}
              >
                <img src={edit} alt="edit"></img>
                <div>Edit</div>
              </div> */}
              {showModal ? (
                <>
                  <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative my-6 w-5/6 md:w-2/3 lg:w-3/5 xl:w-1/3 rounded-xl shadow-xl font-Manrope">
                      {/*content*/}
                      <div className="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex flex-row bg-gray items-center px-8 py-4 space-x-8 rounded-t-lg">
                          <div
                            className="flex flex-row items-center cursor-pointer gap-2"
                            onClick={handleSaveModal}
                          >
                            <img src={save} alt="save"></img>
                            <div className="text-sz16 text-pink">Save</div>
                          </div>
                          <div
                            className="flex flex-row items-center cursor-pointer gap-2"
                            onClick={handleDiscardModal}
                          >
                            <img src={discard} alt="discard"></img>
                            <div className="text-sz16 text-blue">Discard</div>
                          </div>
                        </div>
                        {/*body*/}
                        <div className="text-black text-sz16 text-left bg-lightgray relative p-8 rounded-b-xl flex flex-col space-y-3">
                          <div className="flex flex-col space-y-2">
                            <div className="text-blue">Safety Ratings</div>
                            <textarea
                              rows={5}
                              value={safetyRatings}
                              onChange={(e) => setSafetyRatings(e.target.value)}
                              className="text-sz12 shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="This page shows the latest security & safety rating assessments published by White Hat DAO. These ratings are the sole and independent work product of the WHD. Scores are subject to change at any time without notice. The ratings and other WHD work product are not endorsed by any asset development team or foundation, any regulator, or any other third parties."
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz16 text-blue">
                              Edit Button 1
                            </div>
                            <input
                              type="text"
                              id="website-admin"
                              value={ratingBtn1}
                              onChange={(e) => setRatingBtn1(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz14 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Apply For Smart Contract Audit"
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz16 text-blue">
                              Edit Button 1 Link
                            </div>
                            <input
                              type="text"
                              id="website-admin"
                              value={ratingBtn1Link}
                              onChange={(e) =>
                                setRatingBtn1Link(e.target.value)
                              }
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz14 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="https://example.com"
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz16 text-blue">
                              Edit Button 2
                            </div>
                            <input
                              type="text"
                              id="website-admin"
                              value={ratingBtn2}
                              onChange={(e) => setRatingBtn2(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz14 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Apply For Safety Rating"
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz16 text-blue">
                              Edit Button 2 Link
                            </div>
                            <input
                              type="text"
                              id="website-admin"
                              value={ratingBtn2Link}
                              onChange={(e) =>
                                setRatingBtn2Link(e.target.value)
                              }
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz14 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="https://example.com"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>
            <div className="text-sz16 font-Manrope font-medium leading-ht27.06 md:leading-auto text-grey">{mainProData.rating.safety_ratings}</div>
            <div className="mt-[10px] md:mt-0 px-[13px] flex flex-col md:flex-row items-center justify-center gap-[30px] md:gap-8">
              <a
                className="cursor-pointer w-full md:w-1/3 rounded-lg shadow-sm"
                href={mainProData.rating.rating_button_first_link} target="_blank" rel="noreferrer"
              >
                <div className="px-4 py-[10px] text-sz16 text-blue font-Manrope font-bold md:font-semibold flex flex-row space-x-2 items-center justify-center">
                  <div className="w-full">
                    {mainProData.rating.rating_buttion_first}
                  </div>
                  <img src={pointImage} alt="point"></img>
                </div>
              </a>
              <a
                className="cursor-pointer w-full md:w-1/3 rounded-lg shadow-sm"
                href={mainProData.rating.rating_button_second_link} target="_blank" rel="noreferrer"
              >
                <div className="px-4 py-[10px] text-sz16 text-blue font-Manrope font-bold md:font-semibold flex flex-row space-x-2 items-center justify-center">
                  <div className="w-full">
                    {mainProData.rating.rating_button_second}
                  </div>
                  <img src={pointImage} alt="point"></img>
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-end hidden">
            <div
              onClick={() => createNewProject()}
              className="cursor-pointer font-Manrope border rounded-lg border-blue shadow-sm px-4 py-1 flex flex-row items-center space-x-2"
            >
              <img src={addItem} alt="addItem"></img>
              <div className="text-blue text-sz18">Add New Projects</div>
            </div>
          </div>

          <div className="mb-8 p-4 md:p-10 md:pb-4 bg-lightgray rounded-xl shadow-inner-xl flex flex-col space-y-8">
            <div className="text-black font-Manrope font-light flex flex-col md:flex-row items-center gap-4">
              <div className="w-full flex flex-row items-center gap-4">
                <select
									id="role" defaultValue="choose"
                  onChange={handleChangeNetwork}
									className="w-full h-auto shadow-sm bg-transparent box-border-blue text-sz18 leading-ht24.66 md:leading-auto rounded-lg block p-3 md:p-2.5 ring-blue text-grey"
                >
                  <option value="choose">
                    Choose a network
                  </option>
                  <option value="ETH">ETH</option>
                  <option value="Polygon">Polygon</option>
                  <option value="AVAX">AVAX</option>
                  <option value="BSC">BSC</option>
                  <option value="Optimism">Optimism</option>
                  <option value="Arbitrum">Arbitrum</option>
                  <option value="Gnosis">Gnosis</option>
                  <option value="Avalanche">Avalanche</option>
                  <option value="Fantom">Fantom</option>
                  <option value="Klaytn">Klaytn</option>
                  <option value="Aurora">Aurora</option>
                  <option value="zkSync">zkSync</option>
                </select>
                <select
									id="category" defaultValue="choose"
                  onChange={handleChangeCategory}
									className="box-border-blue w-full h-auto shadow-sm bg-transparent text-sz18 leading-ht24.66 md:leading-auto rounded-lg block p-3 md:p-2.5 text-grey"
                >
                  <option value="choose">
                    Choose a category
                  </option>
                  <option value="Defi">Defi</option>
                  <option value="NFT">NFT</option>
                  <option value="Token">Token</option>
                </select>
              </div>
              <div className="w-full flex">
                <input
                  type="text"
                  id="website-admin"
                  value={searchText}
                  onChange={handleSearchItem}
                  className="rounded-lg shadow-inner rounded-r-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Projects"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[30px] md:gap-8">
							{filteredProjects.filter((x, index) => index>=curProPage*amountPerPage && index<(curProPage+1)*amountPerPage)?.map((project, index) => (
                <div key={index}>
                  <div className="cursor-pointer shadow-xl border border-blue font-Manrope font-light rounded-lg p-4 flex md:hidden flex-col gap-4">
                    <div className="flex flex-row items-start justify-between">
                      <img
                        className="rounded-full"
                        style={{ width: "100px", height: "100px" }}
                        src={project?.logo}
                        alt="idol"
                      ></img>
                      <CircleProgressBar
                        sqSize={42}
                        data={{ percent: project?.safety_score }}
                        strokeWidth={5}
                        type={0}
                      ></CircleProgressBar>
                    </div>
                    <div
                      onClick={() =>
                        navigate(`/safety-ratings/rating/${index}`)
                      }
                      className="flex flex-row items-start space-x-2"
                    >
                      <div className="font-pilat font-bold text-sz20 md:text-sz18 leading-ht30 md:leading-auto text-grey">
                        {project.name}
                      </div>
                      {project.verified && (
                        <img className="" src={verify} alt="verify"></img>
                      )}
                    </div>
                    <div className="flex flex-row items-center gap-2 sm:gap-4 flex-wrap">
                      {project?.tags?.map((tag: any, index: number) => (
                        <div
													key={index}
                          className={
                            tag.color === 'Purple'
                            ? 'px-4 py-1 shadow-sm rounded-full bg-pure_purple text-white font-medium text-sz14 leading-ht19.12 md:leading-auto'
                            : tag.color === 'Green'
                            ? 'px-4 py-1 shadow-sm rounded-full bg-pure_green text-white font-medium text-sz14 leading-ht19.12 md:leading-auto'
                            : tag.color === 'Orange'
                            ? 'px-4 py-1 shadow-sm rounded-full bg-pure_orange text-white font-medium text-sz14 leading-ht19.12 md:leading-auto'
                            : tag.color === 'Skyblue'
                            ? 'px-4 py-1 shadow-sm rounded-full bg-pure_blue text-white font-medium text-sz14 leading-ht19.12 md:leading-auto'
                            : tag.color === 'Pink'
                            ? 'px-4 py-1 shadow-sm rounded-full bg-pink text-white font-medium text-sz14 leading-ht19.12 md:leading-auto'
                            : tag.color === 'Lightred'
                            ? 'px-4 py-1 shadow-sm rounded-full bg-lightred text-white font-medium text-sz14 leading-ht19.12 md:leading-auto'
                            : tag.color === 'Magenta'
                            ? 'px-4 py-1 shadow-sm rounded-full bg-magenta text-white font-medium text-sz14 leading-ht19.12 md:leading-auto'
                            : tag.color === 'Daisy'
                            ? 'px-4 py-1 shadow-sm rounded-full bg-daisy text-white font-medium text-sz14 leading-ht19.12 md:leading-auto'
                            : 'px-4 py-1 shadow-sm rounded-full bg-transparent text-white font-medium text-sz14 leading-ht19.12 md:leading-auto'
                          }
                        >
                          {tag.name}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-row items-center gap-3 md:gap-4 flex-wrap justify-center sm:justify-start">
                      {project?.socials?.twitter && (
                        <div className="rounded-full shadow-inner">
                          <img
                            className="w-8 p-2 md:w-12 md:p-3"
                            src={twitter}
                            alt="twitter"
                          ></img>
                        </div>
                      )}
                      {project?.socials?.github && (
                        <div className="rounded-full shadow-inner">
                          <img
                            className="w-8 p-2 md:w-12 md:p-3"
                            src={github}
                            alt="github"
                          ></img>
                        </div>
                      )}
                      {project?.socials?.discord && (
                        <div className="rounded-full shadow-inner">
                          <img
                            className="w-8 p-2 md:w-12 md:p-3"
                            src={discord}
                            alt="discord"
                          ></img>
                        </div>
                      )}
                      {project?.socials?.medium && (
                        <div className="rounded-full shadow-inner">
                          <img
                            className="w-8 p-2 md:w-12 md:p-3"
                            src={medium}
                            alt="medium"
                          ></img>
                        </div>
                      )}
                      {project?.socials?.web && (
                        <div className="rounded-full shadow-inner">
                          <img
                            className="w-8 p-2 md:w-12 md:p-3"
                            src={global}
                            alt="web"
                          ></img>
                        </div>
                      )}
                      {project?.socials?.telegram && (
                        <div className="rounded-full shadow-inner">
                          <img
                            className="w-8 p-2 md:w-12 md:p-3"
                            src={telegram}
                            alt="telegram"
                          ></img>
                        </div>
                      )}
                    </div>
                    <div 
                      onClick={() =>
                        navigate(`/safety-ratings/rating/${index}`)
                      }
                      className="text-sz12 md:text-sz16 leading-ht18.49 md:leading-auto font-Manrope font-medium text-grey"
                    >
                      {project?.description}
                    </div>
                    <div 
                      onClick={() =>
                        navigate(`/safety-ratings/rating/${index}`)
                      }
                      className="mt-6 md:mt-0 flex flex-row items-end justify-between"
                    >
                      <div className="flex flex-col items-start gap-[5px]">
                        <div className="mb-[5px] md:mb-0 font-Manrope font-medium text-sz12 leading-ht16.39 md:leading-auto text-grey md:text-black">Audited by:</div>
												{project?.audited_by?.map((audit: any, i:number) => (
                          <div
														key={i}
                            className={
                              audit === "WHD"
                                ? 'px-4 py-1 rounded-full shadow-inner text-pink font-Manrope font-medium text-sz12 leading-ht16.39 md:leading-auto'
                                : 'px-4 py-1 rounded-full shadow-inner text-blue font-Manrope font-medium text-sz12 leading-ht16.39 md:leading-auto'
                            }
                          >
                            {audit}
                          </div>
                        ))}
                      </div>
											<img src={goImage} width="24" height="24" alt="go"></img>
                    </div>
                  </div>
                  <div className="cursor-pointer shadow-xl hidden border border-blue rounded-xl px-8 py-4 md:flex flex-row items-center gap-4">
                    <img
											className="rounded-full self-start w-24 h-24 object-cover"
                      onClick={() => 
                        navigate(`/safety-ratings/rating/${index}`)
                      }
                      src={project?.logo}
                      alt="idol"
                    ></img>
                    <div className="w-full font-Manrope flex flex-col space-y-4">
                      <div
                        onClick={() =>
                          navigate(`/safety-ratings/rating/${index}`)
                        }
                        className="flex flex-row items-center justify-between"
                      >
                        <div className="flex flex-row items-start space-x-2">
                          <div className="font-pilat font-bold text-sz20">
                            {project.name}
                          </div>
                          {project.verified && (
                            <img className="" src={verify} alt="verify"></img>
                          )}
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                          {project?.socials?.twitter && (
                            <a href={`${project?.socials?.twitter}`} target="_blank" rel="noreferrer" className="rounded-full shadow-inner cursor-point">
                              <img
                                className="w-8 p-2 md:w-12 md:p-3"
                                src={twitter}
                                alt="twitter"
                              ></img>
                            </a>
                          )}
                          {project?.socials?.github && (
                            <a href={project?.socials?.github} target="_blank" rel="noreferrer" className="rounded-full shadow-inner cursor-point">
                              <img
                                className="w-8 p-2 md:w-12 md:p-3"
                                src={github}
                                alt="github"
                              ></img>
                            </a>
                          )}
                          {project?.socials?.discord && (
                            <a href={project?.socials?.discord} target="_blank" rel="noreferrer" className="rounded-full shadow-inner cursor-point">
                              <img
                                className="w-8 p-2 md:w-12 md:p-3"
                                src={discord}
                                alt="discord"
                              ></img>
                            </a>
                          )}
                          {project?.socials?.medium && (
                            <a href={project?.socials?.medium} target="_blank" rel="noreferrer"  className="rounded-full shadow-inner cursor-point">
                              <img
                                className="w-8 p-2 md:w-12 md:p-3"
                                src={medium}
                                alt="medium"
                              ></img>
                            </a>
                          )}
                          {project?.socials?.web && (
                            <a href={project?.socials?.web} target="_blank" rel="noreferrer"  className="rounded-full shadow-inner cursor-point">
                              <img className="w-8 p-2 md:w-12 md:p-3" src={global} alt="web"></img>
                            </a>
                          )}
                          {project?.socials?.telegram && (
                            <a href={project?.socials?.telegram} target="_blank" rel="noreferrer" className="rounded-full shadow-inner cursor-point">
                              <img
                                className="w-8 p-2 md:w-12 md:p-3"
                                src={telegram}
                                alt="telegram"
                              ></img>
                            </a>
                          )}
                          <CircleProgressBar
                            sqSize={42}
                            data={{ percent: project?.safety_score }}
                            strokeWidth={5}
                            type={0}
                          ></CircleProgressBar>
                        </div>
                      </div>
                      <div
                        onClick={() =>
                          navigate(`/safety-ratings/rating/${index}`)
                        }
												className="mt-6 md:mt-0 font-Manrope text-sz12 font-light flex flex-row items-center justify-between flex-wrap gap-y-4"
                      >
                        <div className="flex flex-row items-center justify-start gap-x-4 gap-y-4 flex-wrap">
													{project?.tags?.map((tag: any, i:number) => (
                            <div
															key={i}
                              className={
                                tag.color === 'Purple'
																	? 'px-4 py-1 shadow-sm rounded-full bg-pure_purple text-white'
																	: tag.color === 'Green'
																	? 'px-4 py-1 shadow-sm rounded-full bg-pure_green text-white'
																	: tag.color === 'Orange'
																	? 'px-4 py-1 shadow-sm rounded-full bg-pure_orange text-white'
																	: tag.color === 'Skyblue'
																	? 'px-4 py-1 shadow-sm rounded-full bg-pure_blue text-white'
																	: tag.color === 'Pink'
																	? 'px-4 py-1 shadow-sm rounded-full bg-pink text-white'
																	: tag.color === 'Lightred'
																	? 'px-4 py-1 shadow-sm rounded-full bg-lightred text-white'
																	: tag.color === 'Magenta'
																	? 'px-4 py-1 shadow-sm rounded-full bg-magenta text-white'
																	: tag.color === 'Daisy'
																	? 'px-4 py-1 shadow-sm rounded-full bg-daisy text-white'
																	: 'px-4 py-1 shadow-sm rounded-full bg-transparent text-white'
                              }
                            >
                              {tag.name}
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                          <div className="text-black">Audited by:</div>
													{project?.audited_by?.map((audit: any, i:number) => (
                            <div
															key={i}
                              className={
                                audit === "WHD"
                                  ? "px-4 py-1 rounded-full shadow-inner text-pink"
                                  : "px-4 py-1 rounded-full shadow-inner text-blue"
                              }
                            >
                              {audit}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="text-sz16 flex flex-row items-end justify-between">
                        <div className="w-2/3">{project?.description}</div>
                        <div className="cursor-pointer font-Manrope border rounded-lg border-blue shadow-sm px-4 py-1 flex flex-row items-center space-x-2" onClick={() => navigate(`/safety-ratings/rating/${index}`)}>
                          <div className="text-blue text-sz18">Read More</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
							<div className="pb-[14px] flex flex-wrap items-center justify-center gap-2">
								<div className="font-Manrope text-sz15 w-full flex flex-row items-center justify-center space-x-4">
									<div className="cursor-pointer shadow-sm w-12 h-12 flex flex-row items-center justify-center" onClick={prevPro}>
										<img src={prevImage} alt="prev"></img>
									</div>
									{Array(Math.ceil(filteredProjects.length / amountPerPage)).fill("").map((x, i) =>
										<div key={i} className={(curProPage === i ? "shadow-sm " : "") + "w-12 h-12 flex flex-row items-center justify-center cursor-pointer"} onClick={() => setCurProPage(i)}>
											{i+1}
										</div>
									)}
									<div className="cursor-pointer shadow-sm w-12 h-12 flex flex-row items-center justify-center" onClick={nextPro}>
										<img src={nextImage} alt="next"></img>
									</div>
								</div>
							</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen"></div>
      )}
    </>
  );
};

export default SafetyRatings;
