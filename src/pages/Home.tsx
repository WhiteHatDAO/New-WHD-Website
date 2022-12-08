import alertImage from "../assets/images/alert.svg";
import line from "../assets/images/blogpost/line.png";
import CircleProgressBar from "../components/CircleProgressBar";
import searchImage from "../assets/images/search.svg";
// import auditWHD from "../assets/images/auditWHD.svg";
// import auditExt from "../assets/images/auditExt.svg";
import prevImage from "../assets/images/prev.svg";
import nextImage from "../assets/images/next.svg";
import servImage1 from "../assets/images/service1.png";
import servImage2 from "../assets/images/service2.png";
import servImage3 from "../assets/images/service3.png";
import auditFileLink from "../assets/images/audit/files_icon.png";
import logo from "../assets/images/logo.svg";
import GradientBox from "../components/GradientBar";
import ContractAddressBox from "../components/ContractAddressBox";
import save from "../assets/images/modal/save.png";
import discard from "../assets/images/modal/discard.png";
// import edit from "../assets/images/edit.png";
import upload from "../assets/images/upload.png";
import addItem from "../assets/images/addItem.png";
import close from "../assets/images/close.png";
import uploadExchange from "../assets/images/upload_exchange.png";

import axios from "axios";
import { BACKEND_SERVER } from "../global/global";

import storage from "../utils/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import {
  FormatYMD,
  // FormatNumber,
  FormatSmallNumber,
  FormatDate,
} from "../utils/utils";

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import SlateEditor from "../components/SlateEditor/Editor";
import { useCoingeckoAPI } from "../utils/useCoingeckoAPI";
import { FormatBigNumber } from "../utils/utils";
import SelectNetwork from "../components/SelectNetwork";
import BlogSlick from "../components/BlogSlick";

interface homeProps {
  auditProjects: any[];
  mainProData: any;
  count: number;
  handleCount: (count: number) => void;
  handleSelectedTopic: (item: number) => void;
}

const Home = ({
  auditProjects,
  mainProData,
  count,
  handleCount,
  handleSelectedTopic,
}: homeProps) => {
  const [showModal, setShowModal] = useState(false);
  const [showTokenDetailModal, setShowTokenDetailModal] = useState(false);
  const [showTopBrandsModal, setShowTopBrandsModal] = useState(false);
	const [showAnnounceDetailModal, setShowAnnounceDetailModal] = useState(false);
  const [showServiceModal, setShowServiceModal] = useState<boolean>(false);
  const { handleGetTokenData, fetchTokensData, tokenData } = useCoingeckoAPI();
  const [searchText, setSearchText] = useState<string>("");
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
	const [, setTopics] = useState<any[]>([]);
  const [announces, setAnnounces] = useState<any[]>([]);
  const [currentNet, setCurrentNet] = useState<string>("");
	const [page, setPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (auditProjects && searchText.length === 0) {
      let projects = auditProjects;
      setFilteredProjects(projects);
    }
  }, [auditProjects, searchText]);

	const prev = () => (page > 0) && setPage(x=>x-=1)
	const prevAnn = () => (curAnnPage > 0) && setCurAnnPage(x=>x-=1)
	const next = () => (page < Math.ceil(filteredProjects.length / 10) - 1) && setPage(x=>x+=1)
	const nextAnn = () => (curAnnPage < Math.ceil(announces.length / 4) - 1) && setCurAnnPage(x=>x+=1)

  const handleSearchItem = () => {
    if (auditProjects.length === 0) return;
    if (searchText.length === 0) {
      let projects = auditProjects;
      setFilteredProjects(projects);
    } else {
      let projects = [];
      for (let i = 0; i < auditProjects.length; i++) {
        if (auditProjects[i].name.includes(searchText)) {
          projects.push(auditProjects[i]);
        }
      }
      setFilteredProjects(projects);
    }
  };

  const handleChange = (event: any, index: number, type: boolean) => {
    handleUpload(event.target.files[0], index, type);
  };

  const handleUpload = (file: any, index: number, type: boolean) => {
    if (!file) {
      alert("Please upload an image first!");
    }

    const storageRef = ref(storage, `/files/${file.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // update progress
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          if(type === false) {
            handleBrandLink(url, index);
          } else {
            handleChangeExchange(url, index, 1);
          }
        });
      }
    );
  };

  const [title, setTitle] = useState<string>();
  const [titleText, setTitleText] = useState<string>();
  const [titleButton, setTitleButton] = useState<string>();
  const [titleButtonLink, setTitleButtonLink] = useState<string>();
  const [token, setToken] = useState<string>();
  const [tokenName, setTokenName] = useState<string>();
  const [tokenAPI, setTokenAPI] = useState<string>();
  const [brandsTitle, setBrandsTitle] = useState<string>();
  const [brands, setBrands] = useState<any[]>([]);
  const [tokenAddress, setTokenAddress] = useState<any[]>([]);
  const [serviceRatingLink, setServiceRatingLink] = useState<string>();
  const [serviceWeb3Link, setServiceWeb3Link] = useState<string>();
  const [serviceContractLink, setServiceContractLink] = useState<string>();
  const [networks, setNetworks] = useState<string[]>([]);
  const [exchange, setExchange] = useState<any[]>([]);
  const [tokensData, setTokensData] = useState<any[]>([]);
	const [curAnnPage, setCurAnnPage] = useState(0);
	const [curAnn, setCurAnn] = useState<any>();
	const [news, setNews] = useState<Array<any>>([]);
  
  const handleAddTokenAddress = () => {
    let tAddress = [];
    for (let i = 0; i < tokenAddress.length; i++) {
      tAddress.push(tokenAddress[i]);
    }
    tAddress.push({ network: "ethereum", address: "" });
    setTokenAddress(tAddress);
  };

  const handleAddExchange = () => {
    let tExchange = [...exchange];
    tExchange.push({ name: "", logo: "", pairlink: "", pairname: "" });
    setExchange(tExchange);
  };

  const handleAddNetwork = () => {
    if (currentNet?.length === 0) return;
    let tNetworks = [...networks];
    tNetworks.push(currentNet);
    setCurrentNet("");
    setNetworks(tNetworks);
  };

  const handleRemoveTag = (index: number) => {
    let tNetworks = [];
    for(let i = 0; i < networks.length; i ++) {
      if(i === index) continue;
      tNetworks.push(networks[i])
    }
    setNetworks(tNetworks)
  }

  const handleChangeExchange = (value: string, index: number, type: number) => {
    console.log('exchange', exchange)
    console.log('index', index)
    let tExchange = [];
    for(let i = 0; i < index; i ++) {
      tExchange.push(exchange[i]);
    }

    let temp = exchange[index];
    if(type === 0) {
      temp.name = value
    } else if(type === 1) {
      temp.logo = value
    } else if(type === 2) {
      temp.pairname = value
    } else if(type === 3) {
      temp.pairlink = value
    }

    tExchange.push(temp);

    for(let i = index + 1; i < exchange.length; i ++) {
      tExchange.push(exchange[i])
    }

    setExchange(tExchange);
  }

  const addNewBrand = () => {
    let tBrands = [];
    for (let i = 0; i < brands.length; i++) {
      tBrands.push(brands[i]);
    }
    tBrands.push({ name: "", link: "" });
    setBrands(tBrands);
  };

  const handleTokenAddress = (value: string, index: number, type: boolean) => {
    let tempAddress = [];
    for (let i = 0; i < index; i++) {
      tempAddress.push(tokenAddress[i]);
    }
    let address = tokenAddress[index];
    if (type) {
      address.network = value;
    } else {
      address.address = value;
    }
    tempAddress.push(address);
    for (let i = index + 1; i < tokenAddress.length; i++) {
      tempAddress.push(tokenAddress[i]);
    }
    setTokenAddress(tempAddress);
  };

  const handleBrandLink = (value: string, index: number) => {
    let tempbrands = [];
    for (let i = 0; i < index; i++) {
      tempbrands.push(brands[i]);
    }
    let brand = brands[index];

    brand.link = value;

    tempbrands.push(brand);

    for (let i = index + 1; i < brands.length; i++) {
      tempbrands.push(brands[i]);
    }

    setBrands(tempbrands);
  };

  const handleGotoTopic = (item: any) => {
    handleSelectedTopic(item);
    navigate("/topic-item");
  };

  const handleBrands = (e: any, index: number, type: number) => {
    let tempbrands = [];
    for (let i = 0; i < index; i++) {
      tempbrands.push(brands[i]);
    }
    let brand = brands[index];
    if (type === 0) {
      brand.name = e.target.value;
    } else {
      brand.link = e.target.value;
    }
    tempbrands.push(brand);

    for (let i = index + 1; i < brands.length; i++) {
      tempbrands.push(brands[i]);
    }

    setBrands(tempbrands);
  };

  const getTopics = async () => {
    try {
      const res = await axios.get(BACKEND_SERVER + "/api/topics/latest_topics");
      if (res.status === 200) {
        setTopics(res.data.data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const getAnnounces = async () => {
		try {
			const res = await axios.get(BACKEND_SERVER + '/api/announcements');
			if (res.status === 200) {
				setAnnounces(res.data.data);
			}
		} catch (e) {
			console.error(e);
		}
  };

  const getNews = async () => {
		try {
			const { data } = await axios.get("https://www.coindesk.com/pf/api/v3/content/fetch/most-viewed?query=%7B%22language%22%3A%22en%22%2C%22size%22%3A12%7D&d=230&_website=coindesk")
			setNews(data);
		} catch(e) {
		  console.log(e)
		}
	}
	
  useEffect(() => {
    getTopics();
    getAnnounces();
    getNews();
    setInterval(() => getNews(), 1800000)
  }, []);

  useEffect(() => {
    if (auditProjects && mainProData) {
      setTitle(mainProData.home.title);
      setTitleText(mainProData.home.title_text);
      setTitleButton(mainProData.home.title_button);
      setTitleButtonLink(mainProData.home.title_button_link);
      setToken(mainProData.home.token);
      setTokenName(mainProData.home.token_name);
      setTokenAPI(mainProData.home.token_api);
      setBrandsTitle(mainProData.home.brands_title);
      setBrands(mainProData.home.brands);
      setTokenAddress(mainProData.home.token_address);
      setServiceRatingLink(mainProData.home.service_rating_link);
      setServiceWeb3Link(mainProData.home.service_web3_link);
      setServiceContractLink(mainProData.home.service_contract_link);
      setNetworks(mainProData.home.networks);
      setExchange(mainProData.home.exchange);
      handleGetTokenData(mainProData.home.token_api);
    }
  }, [auditProjects, mainProData, handleGetTokenData]);

  useEffect(() => {
    if(auditProjects) {
      // console.log(auditProjects, 'once?')
      let tokens: string[] = [];
      auditProjects.forEach(auditProject => {
				if(auditProject.token) tokens.push(auditProject.token)
      });
      fetchTokensData(tokens).then(d => setTokensData(d))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auditProjects])

  const handleSaveFirstModal = async () => {
    try {
      const data = {
        id: mainProData._id,
        home: {
          title: title,
          title_text: titleText,
          title_button: titleButton,
          title_button_link: titleButtonLink,
          token: mainProData.home.token,
          token_name: mainProData.home.token_name,
          token_api: mainProData.home.token_api,
          brands_title: mainProData.home.brands_title,
          brands: mainProData.home.brands,
          service_rating_link: mainProData.home.service_rating_link,
          service_web3_link: mainProData.home.service_web3_link,
          service_contract_link: mainProData.home.service_contract_link,
          networks: mainProData.home.networks,
          exchange: mainProData.home.exchange,
        },
        dao: mainProData.dao,
        rating: mainProData.rating,
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

  const handleDiscardFirstModal = () => {
    setTitle(mainProData.home.title);
    setTitleText(mainProData.home.title_text);
    setTitleButton(mainProData.home.title_button);
    setTitleButtonLink(mainProData.home.title_button_link);
    setShowModal(false);
  };

  const handleSaveTokenDetailModal = async () => {
    try {
      const data = {
        id: mainProData._id,
        home: {
          title: mainProData.home.title,
          title_text: mainProData.home.title_text,
          title_button: mainProData.home.title_button,
          token: token,
          token_name: tokenName,
          token_api: tokenAPI,
          brands_title: mainProData.home.brands_title,
          brands: mainProData.home.brands,
          token_address: tokenAddress,
          service_rating_link: mainProData.home.service_rating_link,
          service_web3_link: mainProData.home.service_web3_link,
          service_contract_link: mainProData.home.service_contract_link,
          networks: networks,
          exchange: exchange,
        },
        dao: mainProData.dao,
        rating: mainProData.rating,
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
    setShowTokenDetailModal(false);
  };

  const handleDiscardTokenDetailModal = () => {
    setToken(mainProData.home.token);
    setTokenName(mainProData.home.token_name);
    setTokenAPI(mainProData.home.token_api);
    setTokenAddress(mainProData.home.token_address);
    setShowTokenDetailModal(false);
  };

  const handleNetworkChange = (name: string, index: number) => {
    handleTokenAddress(name, index, true);
  };

  const handleSaveTopBrandsModal = async () => {
    try {
      const data = {
        id: mainProData._id,
        home: {
          title: mainProData.home.title,
          title_text: mainProData.home.title_text,
          title_button: mainProData.home.title_button,
          token: mainProData.home.token,
          token_name: mainProData.home.token_name,
          token_api: mainProData.home.token_api,
          brands_title: brandsTitle,
          brands: brands,
          service_rating_link: mainProData.home.service_rating_link,
          service_web3_link: mainProData.home.service_web3_link,
          service_contract_link: mainProData.home.service_contract_link,
          networks: mainProData.home.networks,
          exchange: mainProData.home.exchange,
        },
        dao: mainProData.dao,
        rating: mainProData.rating,
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
    setShowTopBrandsModal(false);
  };

  const handleDiscardTopBrandsModal = () => {
    setBrandsTitle(mainProData.home.brands_title);
    setBrands(mainProData.home.brands);
    setShowTopBrandsModal(false);
  };

  const handleSaveServiceModal = async () => {
    try {
      const data = {
        id: mainProData._id,
        home: {
          title: mainProData.home.title,
          title_text: mainProData.home.title_text,
          title_button: mainProData.home.title_button,
          token: mainProData.home.token,
          token_name: mainProData.home.token_name,
          token_api: mainProData.home.token_api,
          brands_title: mainProData.home.brands_title,
          brands: mainProData.home.brands,
          service_rating_link: serviceRatingLink,
          service_web3_link: serviceWeb3Link,
          service_contract_link: serviceContractLink,
          networks: mainProData.home.networks,
          exchange: mainProData.home.exchange,
        },
        dao: mainProData.dao,
        rating: mainProData.rating,
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
    setShowServiceModal(false);
  };

  const handleDiscardServiceModal = () => {
    setServiceRatingLink(mainProData.home.service_rating_link);
    setServiceWeb3Link(mainProData.home.service_web3_link);
    setServiceContractLink(mainProData.home.service_contract_link);
    setShowServiceModal(false);
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

  const getTextFromTopic = (topic: any) => {
    let text = "";
    for (let i = 0; i < topic.length; i++) {
      if (topic[i].type === "paragaph") {
        for (let j = 0; j < topic[i].children.length; j++) {
          if (text.length > 50) return text;
          text += topic[i].children[j].text;
        }
      }
    }
    return text;
  };

  const handleViewAnnouncement = (ann: any) => {
		console.log(ann)
		setCurAnn(ann)
		setShowAnnounceDetailModal(true);
	}

  return (
    <>
      {auditProjects && mainProData ? (
				<div className="px-[7px] py-2 md:p-2 sm:p-4 flex flex-col">
					<div className="grid grid-cols-12 gap-y-12 sm:gap-12">
						<div className="col-span-12 xl:col-span-7 flex flex-col gap-[30px] md:gap-12">
							<div className="relative bg-lightgray rounded-xl shadow-xl px-[10px] py-5 md:px-4 md:pt-4 md:pb-6 flex flex-col">
                {/* <div
                  className="absolute top-4 right-4 flex flex-col items-end justify-end cursor-pointer"
                  onClick={() => setShowModal(true)}
                >
                  <div className="flex flex-row items-center space-x-2">
                    <img src={edit} alt="edit"></img>
                    <div className="text-blue text-sz18 font-Manrope">Edit</div>
                  </div>
                </div> */}
                {showModal ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative my-6 w-5/6 md:w-2/3 lg:w-3/5 xl:w-1/3 rounded-xl shadow-xl font-Manrope">
                        {/*content*/}
                        <div className="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex flex-row bg-gray items-center px-8 py-4 space-x-8 rounded-t-lg">
                            <div
                              className="flex flex-row items-center cursor-pointer gap-2"
                              onClick={handleSaveFirstModal}
                            >
                              <img src={save} alt="save"></img>
                              <div className="text-sz18 text-pink">Save</div>
                            </div>
                            <div
                              className="flex flex-row items-center cursor-pointer gap-2"
                              onClick={handleDiscardFirstModal}
                            >
                              <img src={discard} alt="discard"></img>
                              <div className="text-sz18 text-blue">Discard</div>
                            </div>
                          </div>
                          {/*body*/}
                          <div className="bg-lightgray relative p-8 rounded-b-xl flex flex-col space-y-6">
                            <div className="flex flex-col space-y-2">
                              <div className="text-sz18 text-blue">
                                Edit H1 Text
                              </div>
                              <input
                                type="text"
                                id="website-admin"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="WHITE HAT DAO"
                              />
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="text-sz18 text-blue">
                                Edit Text
                              </div>
                              <textarea
                                rows={5}
                                value={titleText}
                                onChange={(e) => setTitleText(e.target.value)}
                                className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Safety and security should be at the heart of all platforms, especially public goods services, which is why we are passionate about providing technical support and high level security integration for projects from all blockchains and backgrounds."
                              />
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="text-sz18 text-blue">
                                Edit Button
                              </div>
                              <input
                                type="text"
                                value={titleButton}
                                onChange={(e) => setTitleButton(e.target.value)}
                                className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Join the WHD Discussion on Governance / Proposals / Blogposts"
                              />
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="text-sz18 text-blue">
                                Edit Button Link
                              </div>
                              <input
                                type="text"
                                value={titleButtonLink}
                                onChange={(e) =>
                                  setTitleButtonLink(e.target.value)
                                }
                                className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                <div className="md:pt-2 gradient-text-vertical md:gradient-text text-sz28 text-sz28 md:text-sz40 lg:text-sz40 font-black leading-ht36 md:leading-auto">
                  {mainProData.home.title}
                </div>
                <div className="font-Manrope text-sz16 md:text-sz18 leading-ht21.86 md:leading-auto font-normal md:font-light mt-4 md:mt-0">
                  {mainProData.home.title_text}
                </div>
                <div className="mt-4 cursor-pointer z-2">
                  <a
                    href={mainProData.home.title_button_link}
                    className="shadow-sm text-2xl px-4 py-2 border rounded-xl gradient-box text-sz16 flex flex-col items-center font-Manrope"
                  >
                    <div className="hidden md:block text-blue">
                      {mainProData.home.title_button}
                    </div>
                    <div className="block md:hidden text-blue">
                      Join the WHD Discussion
                    </div>
                  </a>
                </div>
              </div>
              <div className="bg-lightgray rounded-xl shadow-xl flex flex-col">
								<div className="bg-gray px-[15px] py-[10px] md:py-6 md:px-6 rounded-t-xl flex flex-col space-y-3 md:flex-row md:space-y-0 justify-between items-center">
									<div className="flex items-center">
                    <img src={alertImage} alt="alert" className="w-[24px] h-[24px] md:h-auto md:w-auto"></img>
                    <div className="pl-[10px] md:pl-4 text-blue text-sz16 md:text-sz18 font-bold font-pilat">
                      Announcements & Updates
                    </div>
									</div>
                </div>
                {showAnnounceDetailModal ? (
                  <>
                    <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative my-6 w-5/6 md:w-2/3 rounded-xl shadow-sm md:shadow-xl font-Manrope">
                        {/*content*/}
                          <div className="border shadow-xl p-middle rounded-xl bg-lightgray border-blue max-h-[90vh] overflow-auto">
                            <div className="mb-5 font-medium leading-6 text-blue font-Manrope text-sz16">
                              <span>Announcement</span>
                            </div>
                            <div>
                              <img src={line} alt="line" className="w-full mb-5" />
                              <div className="flex flex-col items-start justify-between mb-5 font-normal text-sz16 font-Manrope md:flex-row md:items-center">
                                {curAnn.title}
                              </div>
                              <div className="flex items-center flex-wrap gap-2 font-medium leading-6 text-sz16 text-blue font-Manrope">
                                {curAnn.tags.map((tag: any, index: number) => (
                                  <div key={index}
                                    className={
                                    index % 3 === 0
                                      ? "flex items-center px-3 py-1 rounded-3xl bg-blue text-white"
                                      : index % 3 === 1
                                      ? "flex items-center px-3 py-1 rounded-3xl bg-pink text-white"
                                      : "flex items-center px-3 py-1 rounded-3xl bg-purple text-white"
                                    }
                                  >
                                    {tag}
                                  </div>
                                ))}
                              </div>
                              <div className="my-6 border rounded-lg border-blue">
                                <SlateEditor
                                  readOnly={true}
                                  text={curAnn.topic}
                                  handleChangeText={() => console.log()}
                                ></SlateEditor>
                              </div>
                              <div className="flex items-center flex-col md:flex-row justify-end">
                                <div
                                  onClick={() => setShowAnnounceDetailModal(false)}
                                  className="cursor-pointer font-semibold leading-8 text-pink text-sz18 font-Manrope"
                                >
                                  Cancel
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}
                <div className="px-[15px] py-[10px] md:py-6 md:px-6 font-Manrope flex flex-col space-y-6 rounded-xl">
                  {announces.filter((x, index) => index>=curAnnPage*4 && index<(curAnnPage+1)*4).map((topic: any, index: number) => (
                    <div key={index} className="p-[6px] md:px-4 md:py-2 bg-gray rounded-xl flex flex-col cursor-pointer" onClick={() => handleViewAnnouncement(topic)}>
                      <div className="text-sz14 md:text-sz18 block sm:flex flex-row items-center justify-between">
                        <div className="w-full sm:w-max font-bold">
                          {topic.title}
                        </div>
                        <div className="text-sz16 text-darkgray font-light hidden sm:block">
                          {FormatDate(topic.createdAt)}
                        </div>
                      </div>
                      <div className="text-sz14 md:text-sz18 flex flex-row items-center justify-between mt-2 sm:mt-0">
                        <div className="hidden sm:flex flex-row items-center">
                          {getTextFromTopic(topic)}
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                          {topic.tags.map((tag: string, i:number) => (
                            <div key={i} className="rounded-full shadow-inner px-4 h-[27px] flex items-center md:blockmd:h-auto md:py-2 text-red text-sz12">
                              {tag}
                            </div>
                          ))}
                        </div>
                        <div className="text-sz16 text-darkgray font-light block sm:hidden">
                          {FormatDate(topic.createdAt)}
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="pb-[14px] flex flex-wrap items-center justify-center gap-2">
                    <div className="font-Manrope text-sz15 w-full flex flex-row items-center justify-center space-x-4">
											<div className="cursor-pointer shadow-sm w-12 h-12 flex flex-row items-center justify-center" onClick={prevAnn}>
												<img src={prevImage} alt="prev"></img>
											</div>
											{Array(Math.ceil(announces.length / 4)).fill("").map((x, i) =>
												<div key={i} className={(curAnnPage === i ? "shadow-sm " : "") + "w-12 h-12 flex flex-row items-center justify-center cursor-pointer"} onClick={() => setCurAnnPage(i)}>
													{i+1}
												</div>
											)}
											<div className="cursor-pointer shadow-sm w-12 h-12 flex flex-row items-center justify-center" onClick={nextAnn}>
												<img src={nextImage} alt="next"></img>
											</div>
										</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 xl:col-span-5 bg-lightgray rounded-xl shadow-xl flex flex-col">
              <div className="relative bg-gray px-4 pb-4 pt-8 rounded-t-xl flex flex-col">
                {/* <div
                  className="absolute top-4 right-4 flex flex-col items-end justify-end cursor-pointer"
                  onClick={() => setShowTokenDetailModal(true)}
                >
                  <div className="flex flex-row items-center space-x-2">
                    <img src={edit} alt="edit"></img>
                    <div className="text-blue text-sz18 font-Manrope">Edit</div>
                  </div>
                </div> */}
                {showTokenDetailModal ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative my-6 w-5/6 md:w-2/3 lg:w-3/5 xl:w-1/3 rounded-xl shadow-xl font-Manrope">
                        {/*content*/}
                        <div className="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex flex-row bg-gray items-center px-8 py-4 space-x-8 rounded-t-lg">
                            <div
                              className="flex flex-row items-center cursor-pointer gap-2"
                              onClick={handleSaveTokenDetailModal}
                            >
                              <img src={save} alt="save"></img>
                              <div className="text-sz18 text-pink">Save</div>
                            </div>
                            <div
                              className="flex flex-row items-center cursor-pointer gap-2"
                              onClick={handleDiscardTokenDetailModal}
                            >
                              <img src={discard} alt="discard"></img>
                              <div className="text-sz18 text-blue">Discard</div>
                            </div>
                          </div>
                          {/*body*/}
                          <div
                            className="bg-lightgray relative p-8 rounded-b-xl flex flex-col space-y-6 overflow-y-auto"
                            style={{ height: "700px" }}
                          >
                            <div className="flex flex-col space-y-2">
                              <div className="text-sz18 text-blue">
                                Edit H1 Text
                              </div>
                              <input
                                type="text"
                                value={token}
                                onChange={(e) => setToken(e.target.value)}
                                id="website-admin"
                                className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="WHITE HAT DAO"
                              />
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="text-sz18 text-blue">
                                Edit Token name
                              </div>
                              <input
                                type="text"
                                id="website-admin"
                                value={tokenName}
                                onChange={(e) => setTokenName(e.target.value)}
                                className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="WHITE HAT DAO"
                              />
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="text-sz18 text-blue">
                                Edit Token API
                              </div>
                              <input
                                type="text"
                                id="website-admin"
                                value={tokenAPI}
                                onChange={(e) => setTokenAPI(e.target.value)}
                                className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="WHITE HAT DAO"
                              />
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="text-sz18 text-blue">
                                Edit Token Contract Address
                              </div>
                              {tokenAddress?.map(
                                (token: any, index: number) => (
                                  <div key={index} className="flex flex-row items-center space-x-4">
                                    <SelectNetwork
                                      index={index}
                                      value={token}
                                      handleNetworkChange={handleNetworkChange}
                                    ></SelectNetwork>
                                    <input
                                      type="text"
                                      id="website-admin"
                                      value={token.address}
                                      onChange={(e) =>
                                        handleTokenAddress(
                                          e.target.value,
                                          index,
                                          false
                                        )
                                      }
                                      className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="WHITE HAT DAO"
                                    />
                                  </div>
                                )
                              )}
                            </div>
                            <div
                              onClick={handleAddTokenAddress}
                              className="cursor-pointer text-sz18 text-blue flex flex-row items-center space-x-2"
                            >
                              <img src={addItem} alt="addItem"></img>
                              <div>Add Contract Address</div>
                            </div>
                            <div className="text-sz18 flex flex-col space-y-2">
                              <div className="text-blue">Networks</div>
                              <div className="flex flex-row flex-wrap items-center gap-2">
                                {networks.map((net: any, index: number) => (
                                  <div
                                    key={index}
                                    className="rounded-full shadow-inner px-3 py-1 flex flex-row items-center space-x-2"
                                  >
                                    <div>{net}</div>
                                    <img onClick={() => handleRemoveTag(index)} className="w-4 h-4" src={close} alt="close"></img>
                                  </div>
                                ))}
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={currentNet}
                                  onChange={(e) =>
                                    setCurrentNet(e.target.value)
                                  }
                                  className="text-black shadow-inner w-20 rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz14 p-1.5 border-gray-300 dark:focus:ring-blue-500"
                                  placeholder="Tag"
                                />
                                <div
                                  onClick={handleAddNetwork}
                                  className="cursor-pointer text-sz18 text-blue flex flex-row items-center space-x-2"
                                >
                                  <img src={addItem} alt="addItem"></img>
                                  <div>Add Network</div>
                                </div>
                              </div>
                            </div>
                            {exchange.map((exch: any, index: number) => (
                              <div key={index} className="p-4 rounded-xl border border-blue flex flex-row items-center space-x-8">
                                <div className="flex flex-col space-y-2">
                                  <label
                                    htmlFor={`dropzone-file${index}`}
                                  >
                                    <img className="w-12" src={!exch.logo ? uploadExchange : exch.logo} alt="upload"></img>
                                    <input
                                      id={`dropzone-file${index}`}
                                      className="hidden"
                                      type="file"
                                      onChange={(e) => handleChange(e, index, true)}
                                      accept="/image/*"
                                    />
                                  </label>
                                </div>
                                <div className="flex flex-col space-y-2">
                                  <div className="flex flex-row space-x-2 items-center">
                                    <div className="w-44 text-sz18 text-blue">
                                      Name
                                    </div>
                                    <input
                                      type="text"
                                      id="website-admin"
                                      value={exch.name}
                                      onChange={(e) =>
                                        handleChangeExchange(e.target.value, index, 0)
                                      }
                                      className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="WHITE HAT DAO"
                                    />
                                  </div>
                                  <div className="flex flex-row space-x-2 items-center">
                                    <div className="w-44 text-sz18 text-blue">
                                      Pair Name
                                    </div>
                                    <input
                                      type="text"
                                      id="website-admin"
                                      value={exch.pairname}
                                      onChange={(e) =>
                                        handleChangeExchange(e.target.value, index, 2)
                                      }
                                      className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="WHITE HAT DAO"
                                    />
                                  </div>
                                  <div className="flex flex-row space-x-2 items-center ">
                                    <div className="w-44 text-sz18 text-blue">
                                      Pair Link
                                    </div>
                                    <input
                                      type="text"
                                      id="website-admin"
                                      value={exch.pairlink}
                                      onChange={(e) =>
                                        handleChangeExchange(e.target.value, index, 3)
                                      }
                                      className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="WHITE HAT DAO"
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                            <div
                              onClick={handleAddExchange}
                              className="cursor-pointer text-sz18 text-blue flex flex-row items-center space-x-2"
                            >
                              <img src={addItem} alt="addItem"></img>
                              <div>Add Exchange</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}
                <div className="pl-4 text-blue text-sz16 md:text-sz18 font-bold font-pilat">
                  {mainProData.home.token}
                </div>
              </div>
              <div className="p-2 sm:p-6 font-Manrope">
                <div className="p-4 h-full bg-gray rounded-lg flex flex-col space-y-4 justify-between">
                  <div className="flex flex-row items-center space-x-2">
                    <img className="w-10" src={logo} alt="logo"></img>
                    <div className="font-bold font-pilat text-sz18 text-blue">
                      {mainProData.home.token_name}
                    </div>
                  </div>
                  <div className="font-light grid grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <div className="text-darkgray text-sz16">Token Price</div>
                      <div className="text-sz18">${tokenData?.price?tokenData?.price:0}</div>
                      <div className="flex flex-row items-center text-red text-sz16 space-x-1">
                        <svg
                          width="18"
                          height="9"
                          viewBox="0 0 18 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 0L9 9L18 0H0Z" fill="#A22E2E" />
                        </svg>
                        <div>{tokenData?.price_change?tokenData?.price_change:0}%</div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-darkgray text-sz16">Market cap</div>
                      <div className="text-sz18">
                        {FormatBigNumber(tokenData?.market_cap)
                          ? `$${FormatBigNumber(tokenData?.market_cap)}`
                          : "NAN"}
                      </div>
                      <div className="flex flex-row items-center text-red text-sz16 space-x-1">
                        <svg
                          width="18"
                          height="9"
                          viewBox="0 0 18 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 0L9 9L18 0H0Z" fill="#A22E2E" />
                        </svg>
                        <div>{tokenData?.market_cap_change?tokenData?.market_cap_change:0}%</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <GradientBox
                      percentage={
                        tokenData?((tokenData.price - tokenData.lowPrice_24h) /
                          (tokenData.highPrice_24h - tokenData.lowPrice_24h)) *
                        100:0
                      }
                    ></GradientBox>
                    <div className="text-sz16 font-light flex flex-row items-center justify-between">
                      <div>${tokenData?.lowPrice_24h?tokenData?.lowPrice_24h:0}</div>
                      <div>24H Range</div>
                      <div>${tokenData?.highPrice_24h?tokenData?.highPrice_24h:0}</div>
                    </div>
                  </div>
                  <div className="pb-4 border-b border-darkgray flex flex-col space-y-4">
                    <div className="text-sz18 font-light flex flex-row items-center justify-between">
                      <div className="text-darkgray flex flex-row items-center space-x-1">
                        <div>Circulating Supply</div>
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.875 3.375H7.125V4.625H5.875V3.375ZM5.875 5.875H7.125V9.625H5.875V5.875ZM6.5 0.25C3.05 0.25 0.25 3.05 0.25 6.5C0.25 9.95 3.05 12.75 6.5 12.75C9.95 12.75 12.75 9.95 12.75 6.5C12.75 3.05 9.95 0.25 6.5 0.25ZM6.5 11.5C3.74375 11.5 1.5 9.25625 1.5 6.5C1.5 3.74375 3.74375 1.5 6.5 1.5C9.25625 1.5 11.5 3.74375 11.5 6.5C11.5 9.25625 9.25625 11.5 6.5 11.5Z"
                            fill="#7C7C7C"
                          />
                        </svg>
                      </div>
                      <div className="font-bold">
                        {FormatBigNumber(tokenData?.circulating_supply)
                          ? FormatBigNumber(tokenData?.circulating_supply)
                          : "NAN"}
                      </div>
                    </div>
                    <div className="text-sz18 font-light flex flex-row items-center justify-between">
                      <div className="text-darkgray">Total Supply</div>
                      <div className="font-bold">
                        {FormatBigNumber(tokenData?.total_supply)
                          ? FormatBigNumber(tokenData?.total_supply)
                          : "NAN"}
                      </div>
                    </div>
                    <div className="text-sz18 font-light flex flex-row items-center justify-between">
                      <div className="text-darkgray">All time high</div>
                      <div className="font-bold">${tokenData?.ath?tokenData?.ath:0}</div>
                    </div>
                    <div className="text-sz18 font-light flex flex-row items-center justify-between">
                      <div className="text-darkgray">All time low</div>
                      <div className="font-bold">
                        ${FormatSmallNumber(tokenData?.atl?tokenData?.atl:0)}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 font-light flex flex-col">
                    <div className="text-darkgray text-sz16">
                      Contract Address
                    </div>
                    <div>
                      <ContractAddressBox
                        data={mainProData.home.token_address}
                      ></ContractAddressBox>
                    </div>
                  </div>
                  <div className="space-y-2 font-light flex flex-col">
                    <div className="text-darkgray text-sz16">Networks</div>
                    <div className="text-sz12 text-blue flex flex-row items-center space-x-4">
                      {mainProData.home.networks.map(
                        (network: any, index: number) => (
                          <div
                            key={index}
                            className="rounded-full shadow-inner px-3 py-1"
                          >
                            {network}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <div className="text-sz18 flex flex-col space-y-4">
                    {mainProData.home.exchange.map(
                      (exch: any, index: number) => (
                        <a
                          href={exch.pairlink}
                          key={index}
                          className="pb-4 border-b border-darkgray flex flex-row items-center justify-between"
                        >
                          <div className="flex flex-row items-center space-x-2">
                            <img src={exch.logo} alt="icon1"></img>
                            <div>{exch.name}</div>
                          </div>
                          <div className="text-blue">{exch.pairname}</div>
                          <div className="rounded-full font-light text-sz16 px-4 py-1 shadow-inner">
                            <span className="text-green">Buy</span> /{" "}
                            <span className="text-pink">Sell</span>
                          </div>
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-[50px] md:pb-10 md:py-10 flex flex-col">
            <div className="text-black font-Manrope font-light flex flex-row items-center flex-wrap gap-4">
              <select
                id="role" defaultValue="choose"
                onChange={handleChangeNetwork}
                className="w-72 box-border-blue h-12 shadow-sm bg-transparent text-sz18 rounded-lg block p-2.5"
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
                className="w-72 box-border-blue h-12 shadow-sm bg-transparent text-sz18 rounded-lg block p-2.5"
              >
                <option value="choose">
                  Choose a category
                </option>
                <option value="Defi">Defi</option>
                <option value="NFT">NFT</option>
                <option value="Token">Token</option>
                <option value="Web3">Web3</option>
                <option value="audit">Audit</option>
                <option value="DEX">DEX</option>
              </select>
              <div className="w-full flex">
                <div
                  onClick={handleSearchItem}
                  className="inline-flex items-center px-3 text-sm text-gray-900 bg-blue rounded-l-md border border-r-0 border-blue"
                >
                  <img src={searchImage} alt="search"></img>
                </div>
                <input
                  type="text"
                  id="website-admin"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="rounded-none shadow-inner rounded-r-lg bg-lightgray border border-blue md:border-darkgray focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Input Search name"
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
									{filteredProjects?.filter((x, index) => index>=page*10 && index<(page+1)*10).map((project, index) => (
                    <tr
                      key={index}
                      onClick={() => 
                        navigate(`/safety-ratings/rating/${index}`)
                      }
                      className={
                        filteredProjects?.length === index + 1
                          ? "bg-lightgray border-none"
                          : "bg-lightgray border-b border-blue"
                      }
                    >
                      <td className="px-6 py-3 cursor-pointer md:text-blue">{project.name}</td>
                      <td className="px-6 py-3">
                        <div className="flex flex-row items-center justify-center">
                          {/* {project.audited_by.map((item: any) =>
                            item === "WHD" ? (
                              <img src={auditWHD} alt="WHD"></img>
                            ) : (
                              item === "EXTERNAL" && (
                                <img src={auditExt} alt="EXT"></img>
                              )
                            )
                          )} */}
                          <img src={auditFileLink} alt="Link" className="cursor-pointer"></img>
                        </div>
                      </td>
                      <td className="px-6 py-3">
                        <div className="flex flex-col items-center">
                          <CircleProgressBar
                            sqSize={42}
                            data={{ percent: project.safety_score }}
                            strokeWidth={5}
                            type={0}
                          ></CircleProgressBar>
                        </div>
                      </td>
                      <td className="px-6 py-3">
                        {
													(tokensData && tokensData[index]) ? (
                            (tokensData[index]?.price !== undefined && "$ ") + tokensData[index]?.price
                          ) : "N/A"
                        }
                        {/* {project.price === -1 ? "N/A" : project.price} */}
                      </td>
                      <td className="px-6 py-3">
                      {
												  (tokensData && tokensData[index]) ? (
												    ((tokensData[index]?.market_cap === 0) ? "N/A" : (tokensData[index]?.market_cap !== undefined && "$ ") + tokensData[index]?.market_cap )
                          ) : "N/A"
                        }
                        {/* {project.market === "-1"
                          ? "N/A"
                          : FormatNumber(project.market)} */}
                      </td>
                      <td className="px-6 py-3">
                        {FormatYMD(project.createdAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="font-Manrope text-sz15 w-full flex flex-row items-center justify-center space-x-4">
              <div className="cursor-pointer shadow-sm w-12 h-12 flex flex-row items-center justify-center" onClick={prev}>
								<img src={prevImage} alt="prev"></img>
							</div>
							{Array(Math.ceil(filteredProjects.length / 10)).fill("").map((x, i) =>
								<div key={i} className={(page === i ? "shadow-sm " : "") + "w-12 h-12 flex flex-row items-center justify-center cursor-pointer"} onClick={() => setPage(i)}>
									{i+1}
								</div>
							)}
							<div className="cursor-pointer shadow-sm w-12 h-12 flex flex-row items-center justify-center" onClick={next}>
								<img src={nextImage} alt="next"></img>
							</div>
            </div>
          </div>
          <div className="mt-[60px] md:mt-8 mb-8 w-full flex flex-col">
            <div className="text-center font-pilat text-sz20 font-semibold flex flex-row items-center leading-ht25.7 md:leading-auto">
              <div className="w-full">SERVICES</div>
              {/* <div
                onClick={() => setShowServiceModal(true)}
                className="cursor-pointer flex flex-row items-center space-x-2"
              >
                <img src={edit} alt="edit"></img>
                <div className="text-blue text-sz18 font-Manrope">Edit</div>
              </div> */}
            </div>
            {showServiceModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative my-6 w-5/6 md:w-2/3 lg:w-3/5 xl:w-1/3 rounded-xl shadow-xl font-Manrope">
                    {/*content*/}
                    <div className="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex flex-row bg-gray items-center px-8 py-4 space-x-8 rounded-t-lg">
                        <div
                          className="flex flex-row items-center cursor-pointer gap-2"
                          onClick={handleSaveServiceModal}
                        >
                          <img src={save} alt="save"></img>
                          <div className="text-sz18 text-pink">Save</div>
                        </div>
                        <div
                          className="flex flex-row items-center cursor-pointer gap-2"
                          onClick={handleDiscardServiceModal}
                        >
                          <img src={discard} alt="discard"></img>
                          <div className="text-sz18 text-blue">Discard</div>
                        </div>
                      </div>
                      {/*body*/}
                      <div className="bg-lightgray relative p-8 rounded-b-xl flex flex-col space-y-6">
                        <div className="flex flex-col space-y-2">
                          <div className="text-sz18 text-blue">
                            SAFETY RATING
                          </div>
                          <input
                            type="text"
                            id="website-admin"
                            value={serviceRatingLink}
                            onChange={(e) =>
                              setServiceRatingLink(e.target.value)
                            }
                            className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="link"
                          />
                        </div>
                        <div className="flex flex-col space-y-2">
                          <div className="text-sz18 text-blue">
                            WEB3 SERVICES
                          </div>
                          <input
                            type="text"
                            value={serviceWeb3Link}
                            onChange={(e) => setServiceWeb3Link(e.target.value)}
                            className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="link"
                          />
                        </div>
                        <div className="flex flex-col space-y-2">
                          <div className="text-sz18 text-blue">
                            SMART CONTRACT SECURITY AUDIT
                          </div>
                          <input
                            type="text"
                            value={serviceContractLink}
                            onChange={(e) =>
                              setServiceContractLink(e.target.value)
                            }
                            className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            <div className="mt-[50px] md:mt-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[50px] md:gap-12 text-center">
              <div className="px-5 pt-5 pb-[25.18px] md:p-4 bg-gray border border-blue rounded-xl shadow-xl flex flex-col items-center justify-between space-y-5 md:space-y-2">
                <img className="w-full" src={servImage1} alt="service1"></img>
                <div className="font-pilat font-bold text-blue text-sz22 leading-[28.27px] md:leading-auto">
                  SAFETY RATING
                </div>
                <div className="font-Manrope font-medium md:font-light text-grey text-sz16 leading-ht25 md:leading-auto">
                  After review of your product, we provide a broad security
                  score to allow consumers to make informed decisions about your
                  product.
                </div>
                <a href={serviceRatingLink} className="z-2 cursor-pointer">
                  <div className="shadow-sm text-2xl px-8 py-2 border rounded-xl gradient-box font-Manrope font-bold text-sz22 md:text-sz18">
                    Apply
                  </div>
                </a>
              </div>
              <div className="px-5 pt-5 pb-[25.18px] md:p-4 bg-gray border border-blue rounded-xl shadow-xl flex flex-col items-center justify-between space-y-5 md:space-y-2">
                <img className="w-full" src={servImage2} alt="service2"></img>
                <div className="font-pilat font-bold text-blue text-sz22 leading-[28.27px] md:leading-auto">
                  WEB3 SERVICES
                </div>
                <div className="font-Manrope font-medium md:font-light text-grey text-sz16 leading-ht25 md:leading-auto">
                  Smart Contract creation ( all standards ), Web3 platform
                  creation, Websites creation, Platform integration,
                  Decentralized App creation.
                </div>
                <a href={serviceWeb3Link} className="z-2 cursor-pointer">
                  <div className="shadow-sm text-2xl px-8 py-2 border rounded-xl gradient-box font-Manrope font-bold text-sz22 md:text-sz18">
                    Inquire Here
                  </div>
                </a>
              </div>
              <div className="px-5 pt-5 pb-[25.18px] md:p-4 bg-gray border border-blue rounded-xl shadow-xl flex flex-col items-center justify-between space-y-5 md:space-y-2">
                <img className="w-full" src={servImage3} alt="service3"></img>
                <div className="font-pilat font-bold text-blue text-sz22 leading-[28.27px] md:leading-auto">
                  SMART CONTRACT SECURITY AUDIT
                </div>
                <div className="font-Manrope font-medium md:font-light text-grey text-sz16 leading-ht25 md:leading-auto">
                  We provide smart contract audit services for succinct reports
                  on your team’s security risks and optimization oportunties.
                </div>
                <a href={serviceContractLink} className="z-2 cursor-pointer">
                  <div className="shadow-sm text-2xl px-8 py-2 border rounded-xl gradient-box font-Manrope font-bold text-sz22 md:text-sz18">
                    Get Quote
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-[68px] mb-10 md:my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
            <div className="bg-gray py-[13px] md:px-6 md:py-4 rounded-t-xl flex flex-row items-start">
              <div className="w-full pl-4 text-blue text-sz20 font-bold font-pilat text-center">
                {mainProData.home.brands_title}
              </div>
              {/* <div
                className="flex flex-col items-end justify-end cursor-pointer"
                onClick={() => setShowTopBrandsModal(true)}
              >
                <div className="flex flex-row items-center space-x-2">
                  <img src={edit} alt="edit"></img>
                  <div className="text-blue text-sz18 font-Manrope">Edit</div>
                </div>
              </div> */}
              {showTopBrandsModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative my-6 w-5/6 md:w-2/3 lg:w-3/5 xl:w-1/3 rounded-xl shadow-xl font-Manrope">
                      {/*content*/}
                      <div className="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex flex-row bg-gray items-center px-8 py-4 space-x-8 rounded-t-lg">
                          <div
                            className="flex flex-row items-center cursor-pointer gap-2"
                            onClick={handleSaveTopBrandsModal}
                          >
                            <img src={save} alt="save"></img>
                            <div className="text-sz18 text-pink">Save</div>
                          </div>
                          <div
                            className="flex flex-row items-center cursor-pointer gap-2"
                            onClick={handleDiscardTopBrandsModal}
                          >
                            <img src={discard} alt="discard"></img>
                            <div className="text-sz18 text-blue">Discard</div>
                          </div>
                        </div>
                        {/*body*/}
                        <div className="bg-lightgray relative p-8 rounded-b-xl flex flex-col space-y-6">
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz18 text-blue">
                              Edit H1 Text
                            </div>
                            <input
                              type="text"
                              id="website-admin"
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="WHITE HAT DAO"
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz18 text-blue">
                              Edit Brands and logo
                            </div>
                            {brands.map((brand: any, index: number) => (
                              <div key={index} className="flex flex-row items-center space-x-4">
                                <div className="flex flex-col space-y-2">
                                  <div className="text-sz14">Upload logo</div>
                                  <label
                                    htmlFor={`dropzone-file${index}`}
                                    className="h-10 w-28 py-1 rounded-lg shadow-sm border border-blue flex flex-row items-center justify-center"
                                  >
                                    <img src={upload} alt="upload"></img>
                                    <div className="text-sz18">Upload</div>
                                    <input
                                      id={`dropzone-file${index}`}
                                      className="hidden"
                                      type="file"
                                      onChange={(e) => handleChange(e, index, false)}
                                      accept="/image/*"
                                    />
                                  </label>
                                </div>
                                <div className="flex flex-col space-y-2">
                                  <div className="text-sz14">
                                    Edit project name
                                  </div>
                                  <input
                                    type="text"
                                    id="website-admin"
                                    value={brand.name}
                                    onChange={(e) => handleBrands(e, index, 0)}
                                    className="h-10 text-sz16 shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2 dark:text-white"
                                    placeholder="WHITE HAT DAO"
                                  />
                                </div>
                                <div className="w-1/2 flex flex-col space-y-2">
                                  <div className="text-sz14">Edit link</div>
                                  <input
                                    type="text"
                                    id="website-admin"
                                    value={brand.link}
                                    onChange={(e) => handleBrands(e, index, 1)}
                                    className="h-10 text-sz16 shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2 dark:text-white"
                                    placeholder="WHITE HAT DAO"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                          <div
                            className="text-sz18 text-blue flex flex-row items-center space-x-2 cursor-pointer"
                            onClick={() => addNewBrand()}
                          >
                            <img src={addItem} alt="addItem"></img>
                            <div>Add Brand</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>
            <div className="py-6 px-4 font-Manrope flex flex-row flex-wrap items-center justify-center space-x-8 rounded-xl">
              {mainProData.home.brands.map((brand: any, i: number) => (
                <a key={i} href={brand.link} target="_blank" rel="noreferrer" className="flex justify-center items-center rounded-full bg-white w-20 h-20 overflow-hidden cursor-pointer">
                  <img src={brand.link} alt={brand.name}></img>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-[60px] mb-8 md:my-8 w-full flex flex-col">
            <div className="text-center font-pilat text-sz20 font-semibold">
              Web3 News
            </div>
            <div className="mt-8 font-Manrope">
              {news.length > 0 && (
                <BlogSlick
                  news={news}
                  handleGotoTopic={handleGotoTopic}
                ></BlogSlick>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen"></div>
      )}
    </>
  );
};

export default Home;
