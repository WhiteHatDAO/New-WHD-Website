import verify from "../assets/images/safety/verify.svg";
import discord from "../assets/images/footer/discord_black.svg";
import github from "../assets/images/footer/github_black.svg";
import twitter from "../assets/images/footer/twitter_black.svg";
import global from "../assets/images/footer/global.svg";
import medium from "../assets/images/footer/medium.png";
import telegram from "../assets/images/footer/telegram.svg";
import check_t from "../assets/images/rating/check_t.svg";
import check_f from "../assets/images/rating/check_f.svg";
import CircleProgressBar from "../components/CircleProgressBar";
import info from "../assets/images/dao/info.svg";
import Doughnut from "../components/Doughnut";
import line from "../assets/images/rating/line.svg";
import info_small from "../assets/images/info.svg";
import save from "../assets/images/modal/save.png";
import discard from "../assets/images/modal/discard.png";
// import edit from "../assets/images/edit.png";
import upload from "../assets/images/upload.png";
import addItem from "../assets/images/addItem.png";
import twit from "../assets/images/rating/twitter.png";
import linkedin from "../assets/images/rating/linkedin.png";
import mail from "../assets/images/rating/mail.png";
import radio_t from "../assets/images/rating/radio_t.svg";
import radio_f from "../assets/images/rating/radio_f.svg";
import addtag from "../assets/images/rating/addtag.svg";
import auditImage from "../assets/images/rating/audit.svg";
import goImage from "../assets/images/safety/go.svg";
import check from "../assets/images/rating/check.svg";
import close from "../assets/images/close.png";

import ContractAddressBox from "../components/ContractAddressBox";
import SelectNetwork from "../components/SelectNetwork";
import GradientBox from "../components/GradientBar";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useCoingeckoAPI } from "../utils/useCoingeckoAPI";
import { FormatBigNumber } from "../utils/utils";
import PrimaryChart from "../components/PrimaryChart";
import useWindowDimensions from "../hooks/useWindowDimensions";

import storage from "../utils/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import SelectBox from "../components/SelectBox";

import axios from "axios";
import { BACKEND_SERVER } from "../global/global";
import ShaComponent from "../components/ShaComponent";
import MemberContract from "../components/MemberContract";

import ethereum from "../assets/images/select/ethereum.svg";
import arbitrum from "../assets/images/select/arbitrum.svg";
import binance from "../assets/images/select/binance.svg";
import polygon from "../assets/images/select/polygon.svg";
import optimism from "../assets/images/select/optimism.png";
import gnosis from "../assets/images/select/gnosis.png";
import avalanche from "../assets/images/select/avalanche.png";
import fantom from "../assets/images/select/fantom.png";
import klaytn from "../assets/images/select/klaytn.png";
import aurora from "../assets/images/select/aurora.png";
import zksink from "../assets/images/select/zkSink.png";

interface ratingProps {
  auditProjects: any[];
  count: number;
  handleCount: (count: number) => void;
}

const Rating = ({ auditProjects, count, handleCount }: ratingProps) => {
  const { id } = useParams();
  const {
    handleGetTokenData,
    handleGetTokenPriceHistory,
    tokenData,
    tokenPriceHistory,
  } = useCoingeckoAPI();
  const [project, setProject] = useState<any>(null);
  const [boxWidth, setBoxWidth] = useState<number>(0);
  const { height } = useWindowDimensions();
  const gridItemRef = useRef<HTMLDivElement>(null);
  const [timeRange, setTimeRange] = useState<number>(1);

  const navigate = useNavigate();

  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showForthModal, setShowForthModal] = useState(false);
  const [showTokenModal, setShowTokenModal] = useState(false);
  const [showDistributionModal, setShowDistributionModal] = useState(false);
  const [showSecurityModal, setShowSecurityModal] = useState(false);
  const [showAuditedModal, setShowAuditedModal] = useState(false);
  const [showMethodologyModal, setShowMethodologyModal] = useState(false);
  const [showTeamModal, setShowTeamModal] = useState(false);
  const [showHeaderModal, setShowHeaderModal] = useState(false);
  const [showMarketModal, setShowMarketModal] = useState(false);

  const [description, setDescription] = useState<string>();
  const [platform, setPlatform] = useState<string>();
  const [language, setLanguage] = useState<string>();
  const [codebase, setCodebase] = useState<string>();
  const [address, setAddress] = useState<any[]>([]);
  const [numInCircle, setNumInCircle] = useState<number>();
  const [textInCircle, setTextInCircle] = useState<string>();
  const [subTxtInCircle, setSubTxtInCircle] = useState<string>();
  const [bottomLink, setBottomLink] = useState<string>();
  const [tokenName, setTokenName] = useState<string>();
  const [tokenAPI, setTokenAPI] = useState<string>();
  const [contractAudits, setContractAudits] = useState<any[]>([]);
  const [platformAudits, setPlatformAudits] = useState<any[]>([]);
  const [bugBountyAudits, setBugBountyAudits] = useState<any[]>([]);
  const [insurance, setInsurance] = useState<any>();
  const [distribution, setDistribution] = useState<any>();
  const [distributionList, setDistributionList] = useState<any[]>([]);
  const [security, setSecurity] = useState<string>();
  const [securityList, setSecurityList] = useState<any[]>([]);
  const [auditFilesText, setAuditFilesText] = useState<string>();
  const [auditFilesList, setAuditFilesList] = useState<any[]>([]);
  const [methoText, setMethoText] = useState<string>();
  const [methoTags, setMethoTags] = useState<string[]>([]);
  const [tokenTitle, setTokenTitle] = useState<string>();
  const [marketAPI, setMarketAPI] = useState<string>();
  const [memberTitle, setMemberTitle] = useState<string>("");
  const [memberNote, setMemberNote] = useState<string>();
  const [memberList, setMemberList] = useState<any[]>([]);
  const [disclaimer, setDisclaimer] = useState<string>();
  const [disclaimerText, setDisclaimerText] = useState<string>();
  const [securityTotalNumber, setSecurityTotalNumber] = useState<number>(0);
  const [projectTags, setProjectTags] = useState<any[]>([]);
  const [socials, setSocials] = useState<any>();
  const [projectName, setProjectName] = useState<string>("");
  const [projectImage, setProjectImage] = useState<string>("");
  const [verified, setVerified] = useState<boolean>(false);
  const [marketData, setMarketData] = useState<any[]>([]);
  const [multisigAddress, setMultisigAddress] = useState<any[]>([]);
  const [auditedby, setAuditedby] = useState<any[]>([]);
  const [currentAuditedby, setCurrentAuditedby] = useState<string>("");
  const [currentSecurityTagList, setCurrentSecurityTagList] = useState<string[]>([]);

  const networkNames = [
    {
      name: "ethereum",
      image: ethereum,
    },
    {
      name: "binance",
      image: binance,
    },
    {
      name: "polygon",
      image: polygon,
    },
    {
      name: "optimism",
      image: optimism,
    },
    {
      name: "arbitrum",
      image: arbitrum,
    },
    {
      name: "gnosis",
      image: gnosis,
    },
    {
      name: "avalanche",
      image: avalanche,
    },
    {
      name: "fantom",
      image: fantom,
    },
    {
      name: "klaytn",
      image: klaytn,
    },
    {
      name: "aurora",
      image: aurora,
    },
    {
      name: "zkSink",
      image: zksink,
    },
  ];

  const getNetworkImage = (net: string) => {
    return networkNames.find((element: any) => element.name === net)?.image;
  };

  useEffect(() => {
    if (project) {
      setDescription(project.description);
      setPlatform(project.platform);
      setLanguage(project.language);
      setCodebase(project.codebase);
      setAddress(project.contract_addr);
      setNumInCircle(project.safety_score);
      setTextInCircle(project.circle_text);
      setSubTxtInCircle(project.circle_subtext);
      setBottomLink(project.bottom_link);
      setTokenName(project.token_name);
      setTokenAPI(project.token);
      setContractAudits(project.contract_audits);
      setPlatformAudits(project.platform_audits);
      setBugBountyAudits(project.bug_bounty);
      setInsurance(project.insurance);
      setDistribution(project.distribution);
      setDistributionList(project.distribution_list);
      setSecurity(project.security_text);
      setSecurityList(project.security_list);

      let tCurtaglist = []
      for(let i = 0; i < project.security_list.length; i ++) {
        tCurtaglist.push("")
      }
      setCurrentSecurityTagList(tCurtaglist);

      setAuditFilesText(project.audited_files_text);
      setAuditFilesList(project.audited_files_list);
      setMethoText(project.metho);
      setMethoTags(project.methodology_tags);
      setTokenTitle(project.token_title);
      setMarketAPI(project.market_api);
      setMemberTitle(project.team_title);
      setMemberNote(project.team_note);
      setMemberList(project.member);
      setDisclaimer(project.disclaimer);
      setDisclaimerText(project.disclaimer_text);
      setProjectTags(project.tags);
      setSocials(project.socials);
      setProjectName(project.name);
      setProjectImage(project.logo);
      setVerified(project.verified);
      setMarketData(project.market_data);
      setAuditedby(project.audited_by);
      setMultisigAddress(project.multisig_address);

      let c = 0;
      for (let i = 0; i < project.security_list.length; i++) {
        c += project.security_list[i].number;
      }

      setSecurityTotalNumber(c);
    }
  }, [project]);

  const handleSaveFirstModal = async () => {
    try {
      const data = {
        id: project._id,
        safety_score: numInCircle,
        description: description,
        platform: platform,
        language: language,
        codebase: codebase,
        circle_text: textInCircle,
        circle_subtext: subTxtInCircle,
        bottom_link: bottomLink,
        contract_addr: address,
      };

      const res = await axios.put(BACKEND_SERVER + "/api/project", data);

      if (res.status === 200) {
        let c = count + 1;
        handleCount(c);
      }
    } catch (e) {
      console.log(e);
    }
    setShowFirstModal(false);
  };

  const handleDiscardFirstModal = () => {
    setDescription(project.description);
    setPlatform(project.platform);
    setLanguage(project.language);
    setCodebase(project.codebase);
    setNumInCircle(project.safety_score);
    setTextInCircle(project.circle_text);
    setSubTxtInCircle(project.circle_subtext);
    setBottomLink(project.bottom_link);
    setShowFirstModal(false);
  };

  const handleSaveSecondModal = async () => {
    try {
      const data = {
        id: project._id,
        token_name: tokenName,
        token_title: tokenTitle,
        token: tokenAPI,
        market_api: marketAPI,
      };

      const res = await axios.put(BACKEND_SERVER + "/api/project", data);

      if (res.status === 200) {
        let c = count + 1;
        handleCount(c);
      }
    } catch (e) {
      console.log(e);
    }
    setShowSecondModal(false);
  };

  const handleDiscardSecondModal = () => {
    setTokenTitle(project.token_title);
    setTokenName(project.token_name);
    setTokenAPI(project.token);
    setMarketAPI(project.market_api);
    setShowSecondModal(false);
  };

  const handleSaveForthModal = async () => {
    try {
      const data = {
        id: project._id,
        disclaimer: disclaimer,
        disclaimer_text: disclaimerText,
      };

      const res = await axios.put(BACKEND_SERVER + "/api/project", data);

      if (res.status === 200) {
        let c = count + 1;
        handleCount(c);
      }
    } catch (e) {
      console.log(e);
    }
    setShowForthModal(false);
  };

  const handleDiscardForthModal = () => {
    setDisclaimer(project.disclaimer);
    setDisclaimerText(project.disclaimer_text);
    setShowForthModal(false);
  };

  const handleSaveTokenModal = async () => {
    try {
      const data = {
        id: project._id,
        token_name: tokenName,
        token: tokenAPI,
        audited_by: auditedby,
        contract_audits: contractAudits,
        platform_audits: platformAudits,
        bug_bounty: bugBountyAudits,
        insurance: insurance,
      };

      const res = await axios.put(BACKEND_SERVER + "/api/project", data);

      if (res.status === 200) {
        let c = count + 1;
        handleCount(c);
      }
    } catch (e) {
      console.log(e);
    }
    setShowTokenModal(false);
  };

  const handleDiscardTokenModal = () => {
    setTokenName(project.token_name);
    setTokenAPI(project.token);
    setContractAudits(project.contract_audits);
    setPlatformAudits(project.platform_audits);
    setBugBountyAudits(project.bug_bounty);
    setInsurance(project.insurance);
    setAuditedby(project.audited_by);
    setShowTokenModal(false);
  };

  const handleSaveHeaderModal = async () => {
    try {
      const data = {
        id: project._id,
        name: projectName,
        logo: projectImage,
        tags: projectTags,
        socials: socials,
        verified: verified,
      };
      const res = await axios.put(BACKEND_SERVER + "/api/project", data);

      if (res.status === 200) {
        let c = count + 1;
        handleCount(c);
      }
    } catch (e) {
      console.log(e);
    }
    setShowHeaderModal(false);
  };

  const handleDiscardHeaderModal = () => {
    setProjectTags(project.tags);
    setSocials(project.socials);
    setProjectName(project.name);
    setProjectImage(project.logo);
    setVerified(project.verified);
    setShowHeaderModal(false);
  };

  const handleSaveDistributionModal = async () => {
    try {
      const data = {
        id: project._id,
        distribution: distribution,
        multisig_address: multisigAddress,
        distribution_list: distributionList,
      };

      const res = await axios.put(BACKEND_SERVER + "/api/project", data);

      if (res.status === 200) {
        let c = count + 1;
        handleCount(c);
      }
    } catch (e) {
      console.log(e);
    }
    setShowDistributionModal(false);
  };

  const handleDiscardDistributionModal = () => {
    setDistribution(project.distribution);
    setMultisigAddress(project.multisig_address);
    setDistributionList(project.distribution_list);
    setShowDistributionModal(false);
  };

  const handleSaveSecurityModal = async () => {
    try {
      const data = {
        id: project._id,
        security_text: security,
        security_list: securityList,
      };

      const res = await axios.put(BACKEND_SERVER + "/api/project", data);

      if (res.status === 200) {
        let c = count + 1;
        handleCount(c);
      }
    } catch (e) {
      console.log(e);
    }
    setShowSecurityModal(false);
  };

  const handleDiscardSecurityModal = () => {
    setSecurity(project.security_text);
    setSecurityList(project.security_list);
    setShowSecurityModal(false);
  };

  const handleSaveAuditedModal = async () => {
    try {
      const data = {
        id: project._id,
        audited_files_text: auditFilesText,
        audited_files_list: auditFilesList,
      };

      const res = await axios.put(BACKEND_SERVER + "/api/project", data);

      if (res.status === 200) {
        let c = count + 1;
        handleCount(c);
      }
    } catch (e) {
      console.log(e);
    }
    setShowAuditedModal(false);
  };

  const handleDiscardAuditedModal = () => {
    setAuditFilesText(project.audited_files_text);
    setAuditFilesList(project.audited_files_list);
    setShowAuditedModal(false);
  };

  const handleSaveMarketModal = async () => {
    try {
      const data = {
        id: project._id,
        market_data: marketData,
      };

      const res = await axios.put(BACKEND_SERVER + "/api/project", data);

      if (res.status === 200) {
        let c = count + 1;
        handleCount(c);
      }
    } catch (e) {
      console.log(e);
    }
    setShowMarketModal(false);
  };

  const handleDiscardMarketModal = () => {
    setMarketData(project.market_data);
    setShowMarketModal(false);
  };

  const handleSaveMethoModal = async () => {
    try {
      const data = {
        id: project._id,
        metho: methoText,
        methodology_tags: methoTags,
      };

      const res = await axios.put(BACKEND_SERVER + "/api/project", data);

      if (res.status === 200) {
        let c = count + 1;
        handleCount(c);
      }
    } catch (e) {
      console.log(e);
    }
    setShowMethodologyModal(false);
  };

  const handleDiscardMethoModal = () => {
    setMethoText(project.metho);
    setMethoTags(project.methodology_tags);
    setShowMethodologyModal(false);
  };

  const handleSaveTeamModal = async () => {
    console.log("memberTitle", memberTitle);

    try {
      const data = {
        id: project._id,
        member: memberList,
        team_title: memberTitle,
        team_note: memberNote,
      };

      const res = await axios.put(BACKEND_SERVER + "/api/project", data);

      if (res.status === 200) {
        let c = count + 1;
        handleCount(c);
      }
    } catch (e) {
      console.log(e);
    }
    setShowTeamModal(false);
  };

  const handleRemoveAuditedby = (index: number) => {
    let tAuditedby = [];
    for (let i = 0; i < auditedby.length; i++) {
      if (i === index) continue;
      tAuditedby.push(auditedby[i]);
    }
    setAuditedby(tAuditedby);
  };

  const handleAddAuditedby = () => {
    if (currentAuditedby?.length === 0) return;
    let tAuditedby = [...auditedby];
    tAuditedby.push(currentAuditedby);
    setCurrentAuditedby("");
    setAuditedby(tAuditedby);
  };

  const handleDiscardTeamModal = () => {
    setMemberTitle(project.team_title);
    setMemberNote(project.team_note);
    setMemberList(project.member);
    setShowTeamModal(false);
  };

  const handleColor = (index: number, color: string) => {
    let list = [];
    for (let i = 0; i < index; i++) {
      list.push(securityList[i]);
    }

    let temp = {
      color: color,
      number: parseInt(securityList[index].number),
      tag: securityList[index].tag,
    };

    list.push(temp);

    for (let i = index + 1; i < securityList.length; i++) {
      list.push(securityList[i]);
    }

    setSecurityList(list);
  };

  // const handleDistributionColor = (index: number, color: string) => {
  //   let list = [];
  //   for (let i = 0; i < index; i++) {
  //     list.push(distributionList[i]);
  //   }

  //   let temp = {
  //     color: color,
  //     percent: distributionList[index].percent,
  //     tag: distributionList[index].tag,
  //   };

  //   list.push(temp);

  //   for (let i = index + 1; i < distributionList.length; i++) {
  //     list.push(distributionList[i]);
  //   }

  //   setDistributionList(list);
  // };

  const handleRemoveTag = (index: number, tagId: number) => {
    const tSecurityList = [];
    for(let i = 0; i < securityList.length; i ++) {
      if(i === index) {
        let tData = {...securityList[i]}
        let tTag = [];
        for(let j = 0; j < tData.tag.length; j ++) {
          if(j === tagId) continue;
          tTag.push(tData.tag[j])
        }
        tData.tag = tTag;
        tSecurityList.push(tData);
      } else {
        tSecurityList.push(securityList[i])
      }
    }
    setSecurityList(tSecurityList);
  }

  const handleCurrentSecurityTag = (value: string, index: number) => {
    let list = [...currentSecurityTagList];
    list[index] = value;

    setCurrentSecurityTagList(list);
  }

  const handleAddTag = (index: number) => {
    if(currentSecurityTagList[index].length === 0) return;

    let list = [];
    for (let i = 0; i < index; i++) {
      list.push(securityList[i]);
    }

    let temp,
      tTag = [];

    for (let i = 0; i < securityList[index].tag.length; i++) {
      tTag.push(securityList[index].tag[i]);
    }

    tTag.push(currentSecurityTagList[index]);
    
    let tCurTaglist = []
    for(let i = 0; i < currentSecurityTagList.length; i ++) {
      tCurTaglist.push("");
    }

    setCurrentSecurityTagList(tCurTaglist);

    temp = {
      color: securityList[index].color,
      number: parseInt(securityList[index].number),
      resolved: securityList[index].resolved,
      tag: tTag,
    };

    list.push(temp);

    for (let i = index + 1; i < securityList.length; i++) {
      list.push(securityList[i]);
    }

    setSecurityList(list);
  };

  const handleAddContractAddress = () => {
    let tAddress = [...address];
    tAddress.push({ network: "ethereum", address: "" });
    setAddress(tAddress);
  };

  // const handleTagOfSecurityList = (e: any, index: number, tagId: number) => {
  //   let list = [];
  //   for (let i = 0; i < index; i++) {
  //     list.push(securityList[i]);
  //   }

  //   let temp,
  //     tTag = [];

  //   for (let i = 0; i < tagId; i++) {
  //     tTag.push(securityList[index].tag[i]);
  //   }

  //   tTag.push(e.target.value);

  //   for (let i = tagId + 1; i < securityList[index].tag.length; i++) {
  //     tTag.push(securityList[index].tag[i]);
  //   }

  //   temp = {
  //     color: securityList[index].color,
  //     number: parseInt(securityList[index].number),
  //     resolved: securityList[index].resolved,
  //     tag: tTag,
  //   };

  //   list.push(temp);

  //   for (let i = index + 1; i < securityList.length; i++) {
  //     list.push(securityList[i]);
  //   }

  //   setSecurityList(list);
  // };

  const handleAuditedFiles = (e: any, index: number, field: number) => {
    let list = [];

    for (let i = 0; i < index; i++) {
      list.push(auditFilesList[i]);
    }

    let temp;

    if (field === 0) {
      temp = {
        source: e.target.value,
        acknowledgement: auditFilesList[index].acknowledgement,
        sha: auditFilesList[index].sha,
      };
    } else if (field === 1) {
      temp = {
        source: auditFilesList[index].source,
        acknowledgement: e.target.value,
        sha: auditFilesList[index].sha,
      };
    } else {
      temp = {
        source: auditFilesList[index].source,
        acknowledgement: auditFilesList[index].acknowledgement,
        sha: e.target.value,
      };
    }

    list.push(temp);

    for (let i = index + 1; i < auditFilesList.length; i++) {
      list.push(auditFilesList[i]);
    }

    setAuditFilesList(list);
  };

  const handleChangeMarket = (value: string, index: number, type: number) => {
    let tMarket = [];
    for (let i = 0; i < index; i++) {
      tMarket.push(marketData[i]);
    }

    let temp = marketData[index];

    if (type === 0) {
      temp.name = value;
    } else if (type === 1) {
      temp.logo = value;
    } else if (type === 2) {
      temp.pair = value;
    } else if (type === 3) {
      temp.pairlink = value;
    }

    tMarket.push(temp);

    for (let i = index + 1; i < marketData.length; i++) {
      tMarket.push(marketData[i]);
    }

    setMarketData(tMarket);
  };

  const handleMethoTag = (e: any, index: number) => {
    let list = [];
    for (let i = 0; i < index; i++) {
      list.push(methoTags[i]);
    }

    list.push(e.target.value);

    for (let i = index + 1; i < methoTags.length; i++) {
      list.push(methoTags[i]);
    }

    setMethoTags(list);
  };

  const handleCheckOfSecurityList = (index: number, value: boolean) => {
    let list = [];
    for (let i = 0; i < index; i++) {
      list.push(securityList[i]);
    }

    let temp;

    temp = {
      color: securityList[index].color,
      number: parseInt(securityList[index].number),
      resolved: value,
      tag: securityList[index].tag,
    };

    list.push(temp);

    for (let i = index + 1; i < securityList.length; i++) {
      list.push(securityList[i]);
    }

    setSecurityList(list);
  };

  const handleNumberOfSecurityList = (e: any, index: number) => {
    let list = [];
    for (let i = 0; i < index; i++) {
      list.push(securityList[i]);
    }

    let temp;

    temp = {
      color: securityList[index].color,
      number: parseInt(e.target.value),
      resolved: securityList[index].resolved,
      tag: securityList[index].tag,
    };

    list.push(temp);

    for (let i = index + 1; i < securityList.length; i++) {
      list.push(securityList[i]);
    }

    setSecurityList(list);
  };

  const handleDistributionColor = (index: number, value: string) => {
    handleDistribution(value, index, 0);
  };

  const handleDistribution = (value: string, index: number, field: number) => {
    let tDist = [];
    for (let i = 0; i < index; i++) {
      tDist.push(distributionList[i]);
    }

    if (field === 0) {
      tDist.push({
        color: value,
        percent: distributionList[index].percent,
        tag: distributionList[index].tag,
      });
    } else if (field === 1) {
      tDist.push({
        color: distributionList[index].color,
        percent: parseFloat(value),
        tag: distributionList[index].tag,
      });
    } else {
      tDist.push({
        color: distributionList[index].color,
        percent: distributionList[index].percent,
        tag: value,
      });
    }

    for (let i = index + 1; i < distributionList.length; i++) {
      tDist.push(distributionList[i]);
    }

    setDistributionList(tDist);
  };

  const addNewContractAudit = () => {
    let tAudits = [];
    for (let i = 0; i < contractAudits.length; i++) {
      tAudits.push(contractAudits[i]);
    }
    tAudits.push({ name: "", link: "" });
    setContractAudits(tAudits);
  };

  const handleFileChange = (event: any, index: number, dataFormat: number) => {
    handleUpload(event.target.files[0], index, dataFormat);
  };

  const handleUpload = (file: any, index: number, dataFormat: number) => {
    if (!file) {
      alert("Please upload an image first!");
    }

    const storageRef = ref(storage, `/files/${file.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          if (dataFormat === 0) {
            handleContractAuditLink(url, index);
          } else if (dataFormat === 1) {
            handlePlatformAuditLink(url, index);
          } else if (dataFormat === 2) {
            handleBugBountyAuditLink(url, index);
          } else if (dataFormat === 3) {
            let tAudit = insurance;
            tAudit.link = url;
            setInsurance(tAudit);
          } else if (dataFormat === 4) {
            handleMemberPicLink(url, index);
          } else if (dataFormat === 5) {
            setProjectImage(url);
          } else if (dataFormat === 6) {
            handleChangeMarket(url, index, 1);
          }
        });
      }
    );
  };

  const handleMemberPicLink = (url: string, index: number) => {
    let tempList = [];
    for (let i = 0; i < index; i++) {
      tempList.push(memberList[i]);
    }
    let member = memberList[index];

    member.image = url;

    tempList.push(member);

    for (let i = index + 1; i < memberList.length; i++) {
      tempList.push(memberList[i]);
    }

    setMemberList(tempList);
  };

  const handleMember = (value: string, index: number, field: number) => {
    let tempList = [];
    for (let i = 0; i < index; i++) {
      tempList.push(memberList[i]);
    }
    let member = memberList[index];

    if (field === 0) {
      member.name = value;
    } else if (field === 1) {
      member.role = value;
    } else if (field === 2) {
      member.address = value;
    } else if (field === 3) {
      member.twitter = value;
    } else if (field === 4) {
      member.linkedin = value;
    } else {
      member.mail = value;
    }

    tempList.push(member);

    for (let i = index + 1; i < memberList.length; i++) {
      tempList.push(memberList[i]);
    }

    setMemberList(tempList);
  };

  const handleAddMarket = () => {
    let tMarket = [...marketData];
    tMarket.push({
      name: "",
      logo: "",
      pair: "",
      pairlink: "",
      network: "ethereum",
    });
    setMarketData(tMarket);
  };

  const handleInsurance = (e: any, type: number) => {
    let tInsurance = insurance;
    if (type === 0) {
      tInsurance.name = e.target.value;
    } else {
      tInsurance.link = e.target.value;
    }

    setInsurance(tInsurance);
  };

  const handleTokenAddress = (value: string, index: number) => {
    let tMembers = [];
    for (let i = 0; i < index; i++) {
      tMembers.push(memberList[i]);
    }

    let member = memberList[index];
    member.address.address = value;
    tMembers.push(member);

    for (let i = index + 1; i < memberList.length; i++) {
      tMembers.push(memberList[i]);
    }

    setMemberList(tMembers);
  };

  const handleMarketNetworkChange = (name: string, index: number) => {
    let tMarketData = [];
    for (let i = 0; i < marketData.length; i++) {
      if (i === index) {
        let temp = marketData[i];
        temp.network = name;
        tMarketData.push(temp);
      } else {
        tMarketData.push(marketData[i]);
      }
    }

    setMarketData(tMarketData);
  };

  useEffect(() => {
    console.log("marketData", marketData);
  }, [marketData]);

  const handleNetworkChange = (name: string, index: number) => {
    let tMembers = [];
    for (let i = 0; i < index; i++) {
      tMembers.push(memberList[i]);
    }
    let member = memberList[index];
    member.address.network = name;
    tMembers.push(member);

    for (let i = index + 1; i < memberList.length; i++) {
      tMembers.push(memberList[i]);
    }

    setMemberList(tMembers);
  };

  const handleMultiNetworkChange = (name: string, index: number) => {
    let tMulti = [];
    for (let i = 0; i < index; i++) {
      tMulti.push(multisigAddress[i]);
    }
    let temp = multisigAddress[index];
    temp.network = name;
    tMulti.push(temp);

    for (let i = index + 1; i < multisigAddress.length; i++) {
      tMulti.push(multisigAddress[i]);
    }

    setMultisigAddress(tMulti);
  };

  const handleMultisigAddressChange = (value: string, index: number) => {
    let tMulti = [];
    for (let i = 0; i < index; i++) {
      tMulti.push(multisigAddress[i]);
    }
    let temp = multisigAddress[index];
    temp.address = value;
    tMulti.push(temp);

    for (let i = index + 1; i < multisigAddress.length; i++) {
      tMulti.push(multisigAddress[i]);
    }

    setMultisigAddress(tMulti);
  };

  const addMultisigAddress = () => {
    let tMulti = [...multisigAddress];
    tMulti.push({
      network: "ethereum",
      address: "",
    });

    setMultisigAddress(tMulti);
  };

  const handleAddressChange = (name: string, index: number) => {
    let tAddress = [];
    for (let i = 0; i < index; i++) {
      tAddress.push(address[i]);
    }
    let member = address[index];
    member.network = name;
    tAddress.push(member);

    for (let i = index + 1; i < address.length; i++) {
      tAddress.push(address[i]);
    }

    setAddress(tAddress);
  };

  const handleAddressValueChange = (name: string, index: number) => {
    let tAddress = [];
    for (let i = 0; i < index; i++) {
      tAddress.push(address[i]);
    }
    let member = address[index];
    member.address = name;
    tAddress.push(member);

    for (let i = index + 1; i < address.length; i++) {
      tAddress.push(address[i]);
    }

    setAddress(tAddress);
  };

  const handleContractAuditLink = (value: string, index: number) => {
    let tempAudits = [];
    for (let i = 0; i < index; i++) {
      tempAudits.push(contractAudits[i]);
    }
    let audit = contractAudits[index];

    audit.link = value;

    tempAudits.push(audit);

    for (let i = index + 1; i < contractAudits.length; i++) {
      tempAudits.push(contractAudits[i]);
    }

    setContractAudits(tempAudits);
  };

  const addNewDistribution = () => {
    let tDistribution = [...distributionList];
    tDistribution.push({ color: "Yellow", percent: 0, tag: "" });
    setDistributionList(tDistribution);
  };

  const handleContractAudits = (e: any, index: number, type: number) => {
    let tempAudits = [];
    for (let i = 0; i < index; i++) {
      tempAudits.push(contractAudits[i]);
    }
    let brand = contractAudits[index];
    if (type === 0) {
      brand.name = e.target.value;
    } else {
      brand.link = e.target.value;
    }
    tempAudits.push(brand);

    for (let i = index + 1; i < contractAudits.length; i++) {
      tempAudits.push(contractAudits[i]);
    }

    setContractAudits(tempAudits);
  };

  const handlePlatformAuditLink = (value: string, index: number) => {
    let tempAudits = [];
    for (let i = 0; i < index; i++) {
      tempAudits.push(platformAudits[i]);
    }
    let audit = platformAudits[index];

    audit.link = value;

    tempAudits.push(audit);

    for (let i = index + 1; i < platformAudits.length; i++) {
      tempAudits.push(platformAudits[i]);
    }

    setPlatformAudits(tempAudits);
  };

  const addNewSecurity = () => {
    let tSecurity = [];
    for (let i = 0; i < securityList.length; i++) {
      tSecurity.push(securityList[i]);
    }
    tSecurity.push({ color: "Critical", number: 0, resolved: false, tag: [] });
    setSecurityList(tSecurity);
  };

  const handlePlatformAudits = (e: any, index: number, type: number) => {
    let tempAudits = [];
    for (let i = 0; i < index; i++) {
      tempAudits.push(platformAudits[i]);
    }
    let audit = platformAudits[index];
    if (type === 0) {
      audit.name = e.target.value;
    } else {
      audit.link = e.target.value;
    }
    tempAudits.push(audit);

    for (let i = index + 1; i < platformAudits.length; i++) {
      tempAudits.push(platformAudits[i]);
    }

    setPlatformAudits(tempAudits);
  };

  const handleBugBountyAuditLink = (value: string, index: number) => {
    let tempAudits = [];
    for (let i = 0; i < index; i++) {
      tempAudits.push(bugBountyAudits[i]);
    }
    let audit = bugBountyAudits[index];

    audit.link = value;

    tempAudits.push(audit);

    for (let i = index + 1; i < bugBountyAudits.length; i++) {
      tempAudits.push(bugBountyAudits[i]);
    }

    setBugBountyAudits(tempAudits);
  };

  const handleBugBountyAudits = (e: any, index: number, type: number) => {
    let tempAudits = [];
    for (let i = 0; i < index; i++) {
      tempAudits.push(bugBountyAudits[i]);
    }
    let audit = bugBountyAudits[index];
    if (type === 0) {
      audit.name = e.target.value;
    } else {
      audit.link = e.target.value;
    }
    tempAudits.push(audit);

    for (let i = index + 1; i < bugBountyAudits.length; i++) {
      tempAudits.push(bugBountyAudits[i]);
    }

    setBugBountyAudits(tempAudits);
  };

  const handleAddProjectTag = () => {
    let tempTags = [];
    for (let i = 0; i < projectTags.length; i++) {
      tempTags.push(projectTags[i]);
    }
    tempTags.push({ name: "", color: "Red" });
    setProjectTags(tempTags);
  };

  const addNewBugBounty = () => {
    let tBounty = [];
    for (let i = 0; i < bugBountyAudits.length; i++) {
      tBounty.push(bugBountyAudits[i]);
    }
    tBounty.push({ name: "", link: "" });
    setBugBountyAudits(tBounty);
  };

  const handleTagsColor = (index: number, color: string) => {
    let tempTags = [];

    for (let i = 0; i < index; i++) {
      tempTags.push(projectTags[i]);
    }
    tempTags.push({ name: projectTags[index].name, color: color });
    for (let i = index + 1; i < projectTags.length; i++) {
      tempTags.push(projectTags[i]);
    }

    setProjectTags(tempTags);
  };

  const handleTagsName = (index: number, value: string) => {
    let tempTags = [];
    for (let i = 0; i < index; i++) {
      tempTags.push(projectTags[i]);
    }
    tempTags.push({ name: value, color: projectTags[index].color });
    for (let i = index + 1; i < projectTags.length; i++) {
      tempTags.push(projectTags[i]);
    }

    setProjectTags(tempTags);
  };

  const handleSocial = (value: string, key: number) => {
    let temp = { ...socials };
    switch (key) {
      case 0: {
        temp.twitter = value;
        break;
      }
      case 1: {
        temp.github = value;
        break;
      }
      case 2: {
        temp.discord = value;
        break;
      }
      case 3: {
        temp.medium = value;
        break;
      }
      case 4: {
        temp.web = value;
        break;
      }
      case 5: {
        temp.telegram = value;
        break;
      }
    }

    setSocials(temp);
  };

  const handleMemberVerified = (index: number, value: boolean) => {
    let tempList = [];
    for (let i = 0; i < index; i++) {
      tempList.push(memberList[i]);
    }
    let temp = memberList[index];
    temp.verified = value;

    tempList.push(temp);

    for (let i = index + 1; i < memberList.length; i++) {
      tempList.push(memberList[i]);
    }

    setMemberList(tempList);
  };

  const addNewPlatformAudit = () => {
    let tAudits = [];
    for (let i = 0; i < platformAudits.length; i++) {
      tAudits.push(platformAudits[i]);
    }
    tAudits.push({ name: "", link: "" });
    setPlatformAudits(tAudits);
  };

  const addNewAuditFile = () => {
    let tAudits = [];
    for (let i = 0; i < auditFilesList.length; i++) {
      tAudits.push(auditFilesList[i]);
    }
    tAudits.push({ source: "", acknowledgement: "", sha: "" });
    setAuditFilesList(tAudits);
  };

  const addNewMetho = () => {
    let tMethos = [];
    for (let i = 0; i < methoTags.length; i++) {
      tMethos.push(methoTags[i]);
    }
    tMethos.push("");
    setMethoTags(tMethos);
  };

  const addNewTeamMember = () => {
    let tMembers = [];
    for (let i = 0; i < memberList.length; i++) {
      tMembers.push(memberList[i]);
    }
    tMembers.push({
      name: "",
      image: "",
      verified: false,
      role: "",
      twitter: "",
      linkedin: "",
      mail: "",
      address: {
        network: "ethereum",
        address: "",
      },
    });
    setMemberList(tMembers);
  };

  useEffect(() => {
    const handleResize = (width?: number) => {
      setBoxWidth(width || 0);
    };

    handleResize(gridItemRef.current?.clientWidth || 0);

    window.addEventListener("resize", () =>
      handleResize(gridItemRef?.current?.clientWidth || 0)
    );

    return () => {
      window.removeEventListener("resize", () => handleResize());
    };
  }, [gridItemRef, tokenPriceHistory]);

  useEffect(() => {
    if (id !== undefined && auditProjects.length !== 0) {
      setProject(auditProjects[parseInt(id)]);
    }
  }, [id, auditProjects]);

  useEffect(() => {
    if (project && project?.token) {
      handleGetTokenData(project?.token);
      handleGetTokenPriceHistory(project?.token, `${timeRange}d`);
    }
  }, [project, handleGetTokenData, handleGetTokenPriceHistory, timeRange]);

  useEffect(() => {
    if (project) {
      handleGetTokenPriceHistory(project?.token, `${timeRange}d`);
    }
  }, [timeRange, handleGetTokenPriceHistory, project]);

  return (
    <>
      {project ? (
        <div className="mx-4 my-4 md:my-10 flex flex-col" ref={gridItemRef}>
          <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
            <div className="w-full flex flex-col gap-4">
              <div className="w-full flex flex-row items-center justify-between">
                <div className="flex flex-row items-center space-x-2">
                  <img
                    className="w-12 rounded-full"
                    src={project.logo}
                    alt="idol"
                  ></img>
                  <div className="flex flex-row items-start space-x-1">
                    <div className="font-pilat font-bold text-sz18 md:text-sz20">
                      {project?.name}
                    </div>
                    {project?.verified && (
                      <img className="mt-1" src={verify} alt="verify"></img>
                    )}
                  </div>
                </div>
                {/* <div
                  onClick={() => setShowHeaderModal(true)}
                  className="text-sz18 text-blue font-Manrope flex flex-row items-center space-x-2 cursor-pointer"
                >
                  <img src={edit} alt="edit"></img>
                  <div>Edit</div>
                </div> */}
                {showHeaderModal ? (
                  <>
                    <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative my-6 w-5/6 md:w-2/3 lg:w-3/5 xl:w-1/3 rounded-xl shadow-xl font-Manrope">
                        {/*content*/}
                        <div className="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex flex-row bg-gray items-center px-8 py-4 space-x-8 rounded-t-lg">
                            <div
                              className="flex flex-row items-center cursor-pointer gap-2"
                              onClick={handleSaveHeaderModal}
                            >
                              <img src={save} alt="save"></img>
                              <div className="text-sz18 text-pink">Save</div>
                            </div>
                            <div
                              className="flex flex-row items-center cursor-pointer gap-2"
                              onClick={handleDiscardHeaderModal}
                            >
                              <img src={discard} alt="discard"></img>
                              <div className="text-sz18 text-blue">Discard</div>
                            </div>
                          </div>
                          {/*body*/}
                          <div
                            className="text-sz18 text-left bg-lightgray relative p-8 rounded-b-xl flex flex-col space-y-3 overflow-y-auto"
                            style={{ height: "700px" }}
                          >
                            <div className="flex flex-col space-y-2">
                              <div className="text-sz18 text-blue">
                                Project name
                              </div>
                              <input
                                type="text"
                                id="website-admin"
                                value={projectName}
                                onChange={(e) => setProjectName(e.target.value)}
                                className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Hundred Finance"
                              />
                            </div>
                            <div className="flex flex-row items-start space-x-4">
                              <div className="flex flex-col space-y-2">
                                <div className="text-sz14">Upload logo</div>
                                <label
                                  htmlFor="dropzone-file"
                                  className="h-10 w-28 py-1 rounded-lg shadow-sm border border-blue flex flex-row items-center justify-center"
                                >
                                  <img src={upload} alt="upload"></img>
                                  <div className="text-sz18">Upload</div>
                                  <input
                                    id="dropzone-file"
                                    className="hidden"
                                    type="file"
                                    onChange={(e) => handleFileChange(e, 0, 5)}
                                    accept="/image/*"
                                  />
                                </label>
                              </div>
                              <div className="flex flex-col space-y-2">
                                <div className="text-sz14">Add Checkmark</div>
                                <div
                                  onClick={() => setVerified(!verified)}
                                  className="w-10 h-10 border border-blue rounded-md flex flex-col p-1"
                                >
                                  {verified && (
                                    <img src={check} alt="check"></img>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="text-sz18 text-blue">
                                Add Project tags
                              </div>
                              {projectTags.map((tag: any, index: number) => (
                                <div className="flex flex-row items-start space-x-4">
                                  <div className="flex flex-col space-y-2">
                                    <div className="text-sz14">
                                      Choose colour
                                    </div>
                                    <SelectBox
                                      type={false}
                                      index={index}
                                      color={tag.color}
                                      handleColor={handleTagsColor}
                                    ></SelectBox>
                                  </div>
                                  <div className="flex flex-col space-y-2">
                                    <div className="text-sz14">Tag</div>
                                    <input
                                      type="text"
                                      id="website-admin"
                                      value={tag.name}
                                      onChange={(e) =>
                                        handleTagsName(index, e.target.value)
                                      }
                                      className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="Hundred Finance"
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div
                              onClick={handleAddProjectTag}
                              className="cursor-pointer text-sz18 text-blue flex flex-row items-center space-x-2"
                            >
                              <img src={addItem} alt="addItem"></img>
                              <div>Add Tag</div>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="text-sz18 text-blue">
                                Edit Social Links
                              </div>
                              <div className="flex flex-row items-center space-x-4">
                                <div className="w-40 border border-blue rounded-lg shadow-sm px-4 py-2 flex flex-row items-center justify-center space-x-2">
                                  <img src={twitter} alt="twitter"></img>
                                  <div className="text-sz18">Twitter</div>
                                </div>
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={socials?.twitter}
                                  onChange={(e) =>
                                    handleSocial(e.target.value, 0)
                                  }
                                  className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Hundred Finance"
                                />
                              </div>
                              <div className="flex flex-row items-center space-x-4">
                                <div className="w-40 border border-blue rounded-lg shadow-sm px-4 py-2 flex flex-row items-center justify-center space-x-2">
                                  <img src={github} alt="github"></img>
                                  <div className="text-sz18">Github</div>
                                </div>
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={socials?.github}
                                  onChange={(e) =>
                                    handleSocial(e.target.value, 1)
                                  }
                                  className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Hundred Finance"
                                />
                              </div>
                              <div className="flex flex-row items-center space-x-4">
                                <div className="w-40 border border-blue rounded-lg shadow-sm px-4 py-2 flex flex-row items-center justify-center space-x-2">
                                  <img src={discord} alt="discord"></img>
                                  <div className="text-sz18">Discord</div>
                                </div>
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={socials?.discord}
                                  onChange={(e) =>
                                    handleSocial(e.target.value, 2)
                                  }
                                  className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Hundred Finance"
                                />
                              </div>
                              <div className="flex flex-row items-center space-x-4">
                                <div className="w-40 border border-blue rounded-lg shadow-sm px-4 py-2 flex flex-row items-center justify-center space-x-2">
                                  <img src={medium} alt="medium"></img>
                                  <div className="text-sz18">Medium</div>
                                </div>
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={socials?.medium}
                                  onChange={(e) =>
                                    handleSocial(e.target.value, 3)
                                  }
                                  className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Hundred Finance"
                                />
                              </div>
                              <div className="flex flex-row items-center space-x-4">
                                <div className="w-40 border border-blue rounded-lg shadow-sm px-4 py-2 flex flex-row items-center justify-center space-x-2">
                                  <img src={global} alt="global"></img>
                                  <div className="text-sz18">Website</div>
                                </div>
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={socials?.web}
                                  onChange={(e) =>
                                    handleSocial(e.target.value, 4)
                                  }
                                  className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Hundred Finance"
                                />
                              </div>
                              <div className="flex flex-row items-center space-x-4">
                                <div className="w-40 border border-blue rounded-lg shadow-sm px-4 py-2 flex flex-row items-center justify-center space-x-2">
                                  <img src={telegram} alt="telegram"></img>
                                  <div className="text-sz18">Telegram</div>
                                </div>
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={socials?.telegram}
                                  onChange={(e) =>
                                    handleSocial(e.target.value, 5)
                                  }
                                  className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Hundred Finance"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}
              </div>
              <div className="font-Manrope text-sz12 font-light flex flex-row items-center justify-between">
                <div className="w-full flex flex-row flex-wrap items-center gap-4">
                  {project?.tags?.map((tag: any) => (
                    <div
                      className={
                        tag.color === "Yellow"
                          ? "px-4 py-1 shadow-sm rounded-full bg-pure_yellow text-white"
                          : tag.color === "Purple"
                          ? "px-4 py-1 shadow-sm rounded-full bg-pure_purple text-white"
                          : tag.color === "Green"
                          ? "px-4 py-1 shadow-sm rounded-full bg-pure_green text-white"
                          : tag.color === "Blue"
                          ? "px-4 py-1 shadow-sm rounded-full bg-pure_blue text-white"
                          : tag.color === "Red"
                          ? "px-4 py-1 shadow-sm rounded-full bg-pure_red text-white"
                          : tag.color === "Cyan"
                          ? "px-4 py-1 shadow-sm rounded-full bg-pure_cyan text-white"
                          : tag.color === "Pink"
                          ? "px-4 py-1 shadow-sm rounded-full bg-pure_pink text-white"
                          : "px-4 py-1 shadow-sm rounded-full bg-pure_orange text-white"
                      }
                    >
                      {tag.name}
                    </div>
                  ))}
                </div>
                <div className="w-full flex flex-row items-end justify-end">
                  <div className="flex flex-row items-center space-x-4">
                    {project?.socials?.twitter && (
                      <a href={`${project?.socials?.twitter}`} target="_blank" rel="noreferrer" className="rounded-full shadow-inner cursor-point">
                        <img
                          className="w-12 p-3"
                          src={twitter}
                          alt="twitter"
                        ></img>
                      </a>
                    )}
                    {project?.socials?.github && (
                      <a href={project?.socials?.github} target="_blank" rel="noreferrer" className="rounded-full shadow-inner cursor-point">
                        <img
                          className="w-12 p-3"
                          src={github}
                          alt="github"
                        ></img>
                      </a>
                    )}
                    {project?.socials?.discord && (
                      <a href={project?.socials?.discord} target="_blank" rel="noreferrer" className="rounded-full shadow-inner cursor-point">
                        <img
                          className="w-12 p-3"
                          src={discord}
                          alt="discord"
                        ></img>
                      </a>
                    )}
                    {project?.socials?.medium && (
                      <a href={project?.socials?.medium} target="_blank" rel="noreferrer"  className="rounded-full shadow-inner cursor-point">
                        <img
                          className="w-12 p-3"
                          src={medium}
                          alt="medium"
                        ></img>
                      </a>
                    )}
                    {project?.socials?.web && (
                      <a href={project?.socials?.web} target="_blank" rel="noreferrer"  className="rounded-full shadow-inner cursor-point">
                        <img className="w-12 p-3" src={global} alt="web"></img>
                      </a>
                    )}
                    {project?.socials?.telegram && (
                      <a href={project?.socials?.telegram} target="_blank" rel="noreferrer" className="rounded-full shadow-inner cursor-point">
                        <img
                          className="w-12 p-3"
                          src={telegram}
                          alt="telegram"
                        ></img>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-10 flex flex-col md:flex-row items-start gap-4 md:gap-8">
            <div className="shadow-xl rounded-xl w-full md:w-2/3 font-Manrope font-light ">
              <div className="p-8 flex flex-col justify-center gap-4 ">
                <div className="text-sz18 text-blue flex flex-col items-end justify-end">
                  {/* <div
                    className="text-sz18 font-Manrope flex flex-row items-center space-x-2 cursor-pointer"
                    onClick={() => setShowFirstModal(true)}
                  >
                    <img src={edit} alt="edit"></img>
                    <div>Edit</div>
                  </div> */}
                  {showFirstModal ? (
                    <>
                      <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
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
                                <div className="text-sz18 text-blue">
                                  Discard
                                </div>
                              </div>
                            </div>
                            {/*body*/}
                            <div
                              className="text-sz18 text-left bg-lightgray relative p-8 rounded-b-xl flex flex-col space-y-3 overflow-y-auto"
                              style={{ height: "700px" }}
                            >
                              <div className="flex flex-col space-y-2">
                                <div className="text-blue">Text</div>
                                <textarea
                                  rows={5}
                                  value={description}
                                  onChange={(e) =>
                                    setDescription(e.target.value)
                                  }
                                  className="text-sz14 shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Hundred Finance is a decentralized application (dApp) that enables  the lending and borrowing of crypto- currencies. A multi-chain protocol, it integrates with Chainlink oracles to ensure market health and stability, while specializing in providing markets for long-tail assets."
                                />
                              </div>
                              <div className="flex flex-col space-y-2">
                                <div className="text-sz18 text-blue">
                                  Network
                                </div>
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={platform}
                                  onChange={(e) => setPlatform(e.target.value)}
                                  className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="ETH (Multichain)"
                                />
                              </div>
                              <div className="flex flex-col space-y-2">
                                <div className="text-sz18 text-blue">
                                  Language Used
                                </div>
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={language}
                                  onChange={(e) => setLanguage(e.target.value)}
                                  className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Vyper"
                                />
                              </div>
                              <div className="flex flex-col space-y-2">
                                <div className="text-sz18 text-blue">
                                  Source Code
                                </div>
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={codebase}
                                  onChange={(e) => setCodebase(e.target.value)}
                                  className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="github.com/hund"
                                />
                              </div>
                              <div className="flex flex-col space-y-2">
                                <div className="text-sz18 text-blue">
                                  Edit Token Contract Address
                                </div>
                                {address?.map((addr: any, index: number) => (
                                  <div className="flex flex-row items-center space-x-4">
                                    <SelectNetwork
                                      index={index}
                                      value={addr}
                                      handleNetworkChange={handleAddressChange}
                                    ></SelectNetwork>
                                    <input
                                      type="text"
                                      id="website-admin"
                                      value={addr.address}
                                      onChange={(e) =>
                                        handleAddressValueChange(
                                          e.target.value,
                                          index
                                        )
                                      }
                                      className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="WHITE HAT DAO"
                                    />
                                  </div>
                                ))}
                              </div>
                              <div
                                onClick={handleAddContractAddress}
                                className="cursor-pointer text-sz18 text-blue flex flex-row items-center space-x-2"
                              >
                                <img src={addItem} alt="addItem"></img>
                                <div>Add Contract Address</div>
                              </div>

                              <div className="w-full flex flex-col items-start">
                                <div className="rounded-full shadow-xl">
                                  <CircleProgressBar
                                    sqSize={180}
                                    data={{
                                      subtext: subTxtInCircle,
                                      text: textInCircle,
                                      percent: numInCircle,
                                    }}
                                    strokeWidth={28}
                                    type={1}
                                  ></CircleProgressBar>
                                </div>
                              </div>
                              <div className="flex flex-col space-y-2">
                                <div className="text-sz18 text-blue">
                                  Numbers in the Circle
                                </div>
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={numInCircle}
                                  onChange={(e) =>
                                    setNumInCircle(parseInt(e.target.value))
                                  }
                                  className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="88%"
                                />
                              </div>
                              <div className="flex flex-col space-y-2">
                                <div className="text-sz18 text-blue">
                                  Text in the Circle
                                </div>
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={textInCircle}
                                  onChange={(e) =>
                                    setTextInCircle(e.target.value)
                                  }
                                  className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Safety Rating"
                                />
                              </div>
                              <div className="flex flex-col space-y-2">
                                <div className="text-sz18 text-blue">
                                  Subtext in the Circle
                                </div>
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={subTxtInCircle}
                                  onChange={(e) =>
                                    setSubTxtInCircle(e.target.value)
                                  }
                                  className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Safety Rating"
                                />
                              </div>
                              <div className="flex flex-col space-y-2">
                                <div className="text-sz18 text-blue">
                                  Bottom Link
                                </div>
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={bottomLink}
                                  onChange={(e) =>
                                    setBottomLink(e.target.value)
                                  }
                                  className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Safety Rating"
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
                <div className="text-sz16 md:text-sz18">
                  {project?.description}
                </div>
                <div className="p-4 bg-gray rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
                  <div className="flex flex-col items-center">
                    <div className="rounded-full shadow-xl">
                      {
                        // project.circle_subtext &&
                        // project.circle_text &&
                        // project?.safety_score && 
                        (
                          <CircleProgressBar
                            sqSize={180}
                            data={{
                              subtext: project.circle_subtext?project.circle_subtext:'',
                              text: project.circle_text?project.circle_text:'',
                              percent: project?.safety_score?project?.safety_score:0,
                            }}
                            strokeWidth={28}
                            type={1}
                          ></CircleProgressBar>
                        )}
                    </div>
                  </div>
                  {project?.platform && project?.language && (
                    <div className="font-Manrope font-light flex flex-col gap-4 md:gap-8">
                      <div className="flex flex-col">
                        <div className="text-darkgray text-sz16">Networks</div>
                        <div className="text-sz18">{project?.platform}</div>
                      </div>
                      <div className="flex flex-col">
                        <div className="text-darkgray text-sz16">
                          Language used
                        </div>
                        <div className="text-sz18">{project?.language}</div>
                      </div>
                    </div>
                  )}

                  {project?.codebase && project.contract_addr && (
                    <div className="font-Manrope font-light flex flex-col gap-4 md:gap-8">
                      <div className="flex flex-col">
                        <div className="text-darkgray text-sz16">
                          Source Code
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                          <div className="text-blue text-sz18">
                            {project?.codebase}
                          </div>
                          <a href={"https://" + project?.codebase}>
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
                          </a>
                        </div>
                      </div>
                      <div className="space-y-2 flex flex-col">
                        <div className="text-darkgray text-sz16">
                          Token Contract Address
                        </div>
                        <ContractAddressBox
                          data={project.contract_addr}
                        ></ContractAddressBox>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="py-4 rounded-b-xl bg-blue font-pilat flex flex-col items-center justify-center">
                <div
                  onClick={() => navigate("/safety-ratings")}
                  className="cursor-pointer flex flex-row items-center justify-center"
                >
                  <div className="text-sz16 text-white pr-2">
                    REQUEST FOR SAFETY RATING
                  </div>
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
            <div className="w-full md:w-1/3 shadow-xl rounded-xl font-Manrope font-light flex flex-col gap-4">
              <div className="p-8 flex flex-col gap-4">
                {/* <div
                  className="cursor-pointer text-sz18 text-blue flex flex-row items-center justify-end space-x-2"
                  onClick={() => setShowTokenModal(true)}
                >
                  <img src={edit} alt="edit"></img>
                  <div>Edit</div>
                </div> */}
                {showTokenModal ? (
                  <>
                    <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative my-6 w-5/6 md:w-2/3 lg:w-3/5 xl:w-1/3 rounded-xl shadow-xl font-Manrope">
                        {/*content*/}
                        <div className="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex flex-row bg-gray items-center px-8 py-4 space-x-8 rounded-t-lg">
                            <div
                              className="flex flex-row items-center cursor-pointer gap-2"
                              onClick={handleSaveTokenModal}
                            >
                              <img src={save} alt="save"></img>
                              <div className="text-sz18 text-pink">Save</div>
                            </div>
                            <div
                              className="flex flex-row items-center cursor-pointer gap-2"
                              onClick={handleDiscardTokenModal}
                            >
                              <img src={discard} alt="discard"></img>
                              <div className="text-sz18 text-blue">Discard</div>
                            </div>
                          </div>
                          {/*body*/}
                          <div
                            className="text-sz18 text-left bg-lightgray relative p-8 rounded-b-xl flex flex-col space-y-3 overflow-y-auto"
                            style={{ height: "700px" }}
                          >
                            <div className="flex flex-col space-y-2">
                              <div className="text-sz18 text-blue">
                                Edit Token name
                              </div>
                              <input
                                type="text"
                                id="website-admin"
                                value={tokenName}
                                onChange={(e) => setTokenName(e.target.value)}
                                className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Hundred DAO"
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
                                className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="dhijfhbekjfb3ejkbfkj4bfhjl34bfjkn2kjdbnji23kn"
                              />
                            </div>
                            <div className="text-sz18 flex flex-col space-y-2">
                              <div className="text-blue">Audited By</div>
                              <div className="flex flex-row flex-wrap items-center gap-2">
                                {auditedby.map((net: any, index: number) => (
                                  <div
                                    key={index}
                                    className="rounded-full shadow-inner px-3 py-1 flex flex-row items-center space-x-2"
                                  >
                                    <div>{net}</div>
                                    <img
                                      onClick={() =>
                                        handleRemoveAuditedby(index)
                                      }
                                      className="w-4 h-4"
                                      src={close}
                                      alt="close"
                                    ></img>
                                  </div>
                                ))}
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={currentAuditedby}
                                  onChange={(e) =>
                                    setCurrentAuditedby(e.target.value)
                                  }
                                  className="text-black shadow-inner w-20 rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz14 p-1.5 border-gray-300 dark:focus:ring-blue-500"
                                  placeholder="Tag"
                                />
                                <div
                                  onClick={handleAddAuditedby}
                                  className="cursor-pointer text-sz18 text-blue flex flex-row items-center space-x-2"
                                >
                                  <img src={addItem} alt="addItem"></img>
                                  <div>Add Audited by</div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="text-sz18 text-blue">
                                Edit Token Smart Contract Audits
                              </div>
                              {contractAudits.map(
                                (item: any, index: number) => (
                                  <div
                                    key={index}
                                    className="flex flex-row items-center space-x-4"
                                  >
                                    <div className="flex flex-col space-y-2">
                                      <div className="text-sz14">
                                        Upload logo
                                      </div>
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
                                          onChange={(e) =>
                                            handleFileChange(e, index, 0)
                                          }
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
                                        value={item.name}
                                        onChange={(e) =>
                                          handleContractAudits(e, index, 0)
                                        }
                                        className="h-10 text-sz16 shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2 dark:text-white"
                                        placeholder="WHITE HAT DAO"
                                      />
                                    </div>
                                    <div className="w-1/2 flex flex-col space-y-2">
                                      <div className="text-sz14">Edit link</div>
                                      <input
                                        type="text"
                                        id="website-admin"
                                        value={item.link}
                                        onChange={(e) =>
                                          handleContractAudits(e, index, 1)
                                        }
                                        className="h-10 text-sz16 shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2 dark:text-white"
                                        placeholder="WHITE HAT DAO"
                                      />
                                    </div>
                                  </div>
                                )
                              )}
                            </div>
                            <div
                              onClick={addNewContractAudit}
                              className="cursor-pointer text-sz18 text-blue flex flex-row items-center space-x-2"
                            >
                              <img src={addItem} alt="addItem"></img>
                              <div>Add Audits</div>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="text-sz18 text-blue">
                                Edit Platform Audits
                              </div>
                              {platformAudits.map(
                                (item: any, index: number) => (
                                  <div className="flex flex-row items-center space-x-4">
                                    <div className="flex flex-col space-y-2">
                                      <div className="text-sz14">
                                        Upload logo
                                      </div>
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
                                          onChange={(e) =>
                                            handleFileChange(e, index, 1)
                                          }
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
                                        value={item.name}
                                        onChange={(e) =>
                                          handlePlatformAudits(e, index, 0)
                                        }
                                        className="h-10 text-sz16 shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2 dark:text-white"
                                        placeholder="WHITE HAT DAO"
                                      />
                                    </div>
                                    <div className="w-1/2 flex flex-col space-y-2">
                                      <div className="text-sz14">Edit link</div>
                                      <input
                                        type="text"
                                        id="website-admin"
                                        value={item.link}
                                        onChange={(e) =>
                                          handlePlatformAudits(e, index, 1)
                                        }
                                        className="h-10 text-sz16 shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2 dark:text-white"
                                        placeholder="WHITE HAT DAO"
                                      />
                                    </div>
                                  </div>
                                )
                              )}
                            </div>
                            <div
                              onClick={addNewPlatformAudit}
                              className="cursor-pointer text-sz18 text-blue flex flex-row items-center space-x-2"
                            >
                              <img src={addItem} alt="addItem"></img>
                              <div>Add Platform Audit</div>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="text-sz18 text-blue">
                                Edit Bug Bounty
                              </div>
                              {bugBountyAudits.map(
                                (item: any, index: number) => (
                                  <div className="flex flex-row items-center space-x-4">
                                    <div className="flex flex-col space-y-2">
                                      <div className="text-sz14">
                                        Upload logo
                                      </div>
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
                                          onChange={(e) =>
                                            handleFileChange(e, index, 2)
                                          }
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
                                        value={item.name}
                                        onChange={(e) =>
                                          handleBugBountyAudits(e, index, 0)
                                        }
                                        className="h-10 text-sz16 shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2 dark:text-white"
                                        placeholder="WHITE HAT DAO"
                                      />
                                    </div>
                                    <div className="w-1/2 flex flex-col space-y-2">
                                      <div className="text-sz14">Edit link</div>
                                      <input
                                        type="text"
                                        id="website-admin"
                                        value={item.link}
                                        onChange={(e) =>
                                          handleBugBountyAudits(e, index, 1)
                                        }
                                        className="h-10 text-sz16 shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2 dark:text-white"
                                        placeholder="WHITE HAT DAO"
                                      />
                                    </div>
                                  </div>
                                )
                              )}
                            </div>
                            <div
                              onClick={addNewBugBounty}
                              className="cursor-pointer text-sz18 text-blue flex flex-row items-center space-x-2"
                            >
                              <img src={addItem} alt="addItem"></img>
                              <div>Add Bug Bounty</div>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="text-sz18 text-blue">
                                Edit Insurance
                              </div>
                              <div className="flex flex-row items-center space-x-4">
                                <div className="flex flex-col space-y-2">
                                  <div className="text-sz14">Upload logo</div>
                                  <label
                                    htmlFor="dropzone-file"
                                    className="h-10 w-28 py-1 rounded-lg shadow-sm border border-blue flex flex-row items-center justify-center"
                                  >
                                    <img src={upload} alt="upload"></img>
                                    <div className="text-sz18">Upload</div>
                                    <input
                                      id="dropzone-file"
                                      className="hidden"
                                      type="file"
                                      onChange={(e) =>
                                        handleFileChange(e, 0, 3)
                                      }
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
                                    value={insurance?.name}
                                    onChange={(e) => handleInsurance(e, 0)}
                                    className="h-10 text-sz16 shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2 dark:text-white"
                                    placeholder="WHITE HAT DAO"
                                  />
                                </div>
                                <div className="w-1/2 flex flex-col space-y-2">
                                  <div className="text-sz14">Edit link</div>
                                  <input
                                    type="text"
                                    id="website-admin"
                                    value={insurance?.link}
                                    onChange={(e) => handleInsurance(e, 1)}
                                    className="h-10 text-sz16 shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2 dark:text-white"
                                    placeholder="WHITE HAT DAO"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}

                {project?.name && project?.safety_score && (
                  <div className="grid grid-cols-2">
                    <div className="flex flex-col space-y-2">
                      <div className="text-sz16 text-darkgray">Project</div>
                      <div className="text-sz18">{project?.name}</div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <div className="text-sz16 text-darkgray">
                        WHD Security Score
                      </div>
                      <div className="text-sz18">
                        <span className="text-green">
                          {project?.safety_score}
                        </span>
                        <span> / 100</span>
                      </div>
                    </div>
                  </div>
                )}

                {tokenData && (
                  <div className="grid grid-cols-2">
                    <div className="flex flex-col space-y-2">
                      <div className="text-sz16 text-darkgray">Token Price</div>
                      <div className="text-sz18">${tokenData?.price}</div>
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
                        <div className="text-sz16 text-red">
                          {tokenData?.price_change < 0
                            ? `-${tokenData?.price_change}`
                            : tokenData?.price_change}
                          %
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <div className="text-sz16 text-darkgray">Market cap</div>
                      <div className="text-sz18">
                        ${FormatBigNumber(tokenData?.market_cap)}
                      </div>
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
                        <div className="text-sz16 text-red">
                          {tokenData?.market_cap_change < 0
                            ? `-${tokenData?.market_cap_change}`
                            : tokenData?.market_cap_change}
                          %
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {project?.contract_audits &&
                  project?.platform_audits &&
                  project?.bug_bounty &&
                  project?.insurance && (
                    <div className="flex flex-col space-y-4">
                      <div className="font-pilat font-bold text-sz18 pb-3 text-blue border-b border-darkgray">
                        Audit Details
                      </div>
                      <div className="flex flex-col space-y-4">
                        <div className="flex flex-col space-y-2">
                          <div className="text-darkgray text-sz16">
                            Token Smart Contract Audits:
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            {project?.contract_audits.map((audit: any) => (
                              <a href={audit.link}>
                                <div className="p-2 text-blue text-sz16 rounded-lg shadow-sm flex flex-row items-center justify-between">
                                  <img src={auditImage} alt="audit"></img>
                                  <div>{audit.name}</div>
                                  <img
                                    className="w-4 h-4"
                                    src={goImage}
                                    alt="go"
                                  ></img>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <div className="text-darkgray text-sz16">
                            Platform Audits:
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            {project?.platform_audits.map((audit: any) => (
                              <a href={audit.link}>
                                <div className="p-2 text-blue text-sz16 rounded-lg shadow-sm flex flex-row items-center justify-between">
                                  <img src={auditImage} alt="audit"></img>
                                  <div>{audit.name}</div>
                                  <img
                                    className="w-4 h-4"
                                    src={goImage}
                                    alt="go"
                                  ></img>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex flex-col space-y-2">
                            <div className="text-darkgray text-sz16">
                              Bug Bounty:
                            </div>
                            <div className="flex flex-col space-y-4">
                              {project?.bug_bounty.map((audit: any) => (
                                <a href={audit.link}>
                                  <div className="p-2 text-blue text-sz16 rounded-lg shadow-sm flex flex-row items-center justify-between">
                                    <img src={auditImage} alt="audit"></img>
                                    <div>{audit.name}</div>
                                    <img
                                      className="w-4 h-4"
                                      src={goImage}
                                      alt="go"
                                    ></img>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="text-darkgray text-sz16">
                              Insurance:
                            </div>
                            <div className="flex flex-col space-y-4">
                              <a href={project?.insurance?.link}>
                                <div className="p-2 text-blue text-sz16 rounded-lg shadow-sm flex flex-row items-center justify-between">
                                  <img src={auditImage} alt="audit"></img>
                                  <div>{project?.insurance?.name}</div>
                                  <img
                                    className="w-4 h-4"
                                    src={goImage}
                                    alt="go"
                                  ></img>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
          <div className="bg-lightgray rounded-xl shadow-xl flex flex-col">
            <div className="bg-gray px-6 py-4 rounded-t-xl flex flex-row items-start">
              <div className="w-full pl-4 text-blue text-sz18 md:text-sz20 font-bold font-pilat text-center">
                Token Distribution / Tokenomics
              </div>
              {/* <div
                className="text-sz18 text-blue font-Manrope flex flex-row items-center space-x-2 cursor-pointer"
                onClick={() => setShowDistributionModal(true)}
              >
                <img src={edit} alt="edit"></img>
                <div>Edit</div>
              </div> */}
              {showDistributionModal ? (
                <>
                  <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative my-6 w-5/6 md:w-2/3 lg:w-3/5 xl:w-1/3 rounded-xl shadow-xl font-Manrope">
                      {/*content*/}
                      <div className="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex flex-row bg-gray items-center px-8 py-4 space-x-8 rounded-t-lg">
                          <div
                            className="flex flex-row items-center cursor-pointer gap-2"
                            onClick={handleSaveDistributionModal}
                          >
                            <img src={save} alt="save"></img>
                            <div className="text-sz18 text-pink">Save</div>
                          </div>
                          <div
                            className="flex flex-row items-center cursor-pointer gap-2"
                            onClick={handleDiscardDistributionModal}
                          >
                            <img src={discard} alt="discard"></img>
                            <div className="text-sz18 text-blue">Discard</div>
                          </div>
                        </div>
                        {/*body*/}
                        <div
                          className="text-sz18 text-left bg-lightgray relative p-8 rounded-b-xl flex flex-col space-y-3 overflow-y-auto"
                          style={{ height: "700px" }}
                        >
                          {/* <div className="flex flex-col space-y-2">
                            <div className="text-sz18 text-blue">
                              Edit H1 Text
                            </div>
                            <input
                              type="text"
                              id="website-admin"
                              value={distribution}
                              onChange={(e) => setDistribution(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Token Distribution / Tokenomics"
                            />
                          </div> */}
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz18 text-blue">
                              Edit Multisig Address
                            </div>
                            {multisigAddress?.map(
                              (addr: any, index: number) => (
                                <div className="flex flex-row items-center space-x-4">
                                  <SelectNetwork
                                    index={index}
                                    value={addr}
                                    handleNetworkChange={
                                      handleMultiNetworkChange
                                    }
                                  ></SelectNetwork>
                                  <input
                                    type="text"
                                    id="website-admin"
                                    value={addr?.address}
                                    onChange={(e) =>
                                      handleMultisigAddressChange(
                                        e.target.value,
                                        index
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
                            onClick={addMultisigAddress}
                            className="cursor-pointer text-sz18 text-blue flex flex-row items-center space-x-2"
                          >
                            <img src={addItem} alt="addItem"></img>
                            <div>Add New Address</div>
                          </div>

                          {/* <div className="flex flex-col space-y-2">
                            <div className="text-sz18 text-blue">
                              Edit Multisig Address
                            </div>
                            {multisigAddress?.map(
                              (token: any, index: number) => (
                                <div className="flex flex-row items-center space-x-4">
                                  <SelectNetwork
                                    index={index}
                                    value={token}
                                    handleNetworkChange={
                                      handleMultiNetworkChange
                                    }
                                  ></SelectNetwork>
                                  <input
                                    type="text"
                                    id="website-admin"
                                    value={token?.address}
                                    onChange={(e) =>
                                      handleMultisigAddressChange(
                                        e.target.value,
                                        index
                                      )
                                    }
                                    className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="WHITE HAT DAO"
                                  />
                                </div>
                              )
                            )}
                            <div
                              onClick={addMultisigAddress}
                              className="cursor-pointer text-sz18 text-blue flex flex-row items-center space-x-2"
                            >
                              <img src={addItem} alt="addItem"></img>
                              <div>Add New Address</div>
                            </div>
                          </div> */}
                          {distributionList.map((item: any, index: number) => (
                            <div className="flex flex-row items-center space-x-4">
                              <div className="flex flex-col space-y-2">
                                <div className="text-sz14">Choose colour</div>
                                <SelectBox
                                  type={false}
                                  index={index}
                                  color={item ? item.color : "Yellow"}
                                  handleColor={handleDistributionColor}
                                ></SelectBox>
                              </div>
                              <div className="flex flex-col space-y-2">
                                <div className="text-sz14">Percentage (%)</div>
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={item?.percent}
                                  onChange={(e) =>
                                    handleDistribution(e.target.value, index, 1)
                                  }
                                  className="h-10 text-sz16 shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2 dark:text-white"
                                  placeholder="WHITE HAT DAO"
                                />
                              </div>
                              <div className="w-1/2 flex flex-col space-y-2">
                                <div className="text-sz14">Tag</div>
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={item?.tag}
                                  onChange={(e) =>
                                    handleDistribution(e.target.value, index, 2)
                                  }
                                  className="h-10 text-sz16 shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2 dark:text-white"
                                  placeholder="WHITE HAT DAO"
                                />
                              </div>
                            </div>
                          ))}
                          <div
                            onClick={addNewDistribution}
                            className="cursor-pointer text-sz18 text-blue flex flex-row items-center space-x-2"
                          >
                            <img src={addItem} alt="addItem"></img>
                            <div>Add New Item</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>
            <div className="p-8 font-Manrope font-light">
              {project.distribution_list && (
                <div className="w-full rounded-xl p-4 bg-gray flex flex-col md:flex-row items-start md:items-center gap-8">
                  <div className="relative flex flex-col items-center">
                    <Doughnut type={true} data={project.distribution_list} />
                    <div className="font-Manrope text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col">
                      <div className="text-sz18 font-bold">
                        {FormatBigNumber(tokenData?.total_supply)}
                      </div>
                      <div className="text-sz12">TOTAL SUPPLY</div>
                    </div>
                  </div>
                  <img
                    className="hidden lg:block h-full"
                    src={line}
                    alt="line"
                  ></img>
                  <div className="px-2 text-sz18 font-Manrope font-light flex flex-col gap-8">
                    {project.distribution_list.map(
                      (data: any, index: number) => (
                        <>
                          {index < 4 && (
                            <div className="flex flex-row space-x-4">
                              <div className="px-2 py-1 rounded-full shadow-inner flex flex-row items-center space-x-2">
                                <div
                                  className={
                                    data.color === "Yellow"
                                      ? "w-4 h-4 rounded-md bg-pure_yellow"
                                      : data.color === "Purple"
                                      ? "w-4 h-4 rounded-md bg-pure_purple"
                                      : data.color === "Green"
                                      ? "w-4 h-4 rounded-md bg-pure_green"
                                      : data.color === "Blue"
                                      ? "w-4 h-4 rounded-md bg-pure_blue"
                                      : data.color === "Red"
                                      ? "w-4 h-4 rounded-md bg-pure_red"
                                      : data.color === "Cyan"
                                      ? "w-4 h-4 rounded-md bg-pure_cyan"
                                      : data.color === "Pink"
                                      ? "w-4 h-4 rounded-md bg-pink"
                                      : "w-4 h-4 rounded-md bg-pure_orange"
                                  }
                                ></div>
                                <div
                                  className={
                                    data.color === "Yellow"
                                      ? "text-pure_yellow"
                                      : data.color === "Purple"
                                      ? "text-pure_purple"
                                      : data.color === "Green"
                                      ? "text-pure_green"
                                      : data.color === "Blue"
                                      ? "text-pure_blue"
                                      : data.color === "Red"
                                      ? "text-pure_red"
                                      : data.color === "Cyan"
                                      ? "text-pure_cyan"
                                      : data.color === "Pink"
                                      ? "text-pink"
                                      : "text-pure_orange"
                                  }
                                >
                                  {data.percent}%
                                </div>
                              </div>
                              <div
                                className={
                                  data.color === "Yellow"
                                    ? "p-1 text-white rounded-md text-sz14 flex flex-col justify-center bg-pure_yellow"
                                    : data.color === "Purple"
                                    ? "p-1 text-white rounded-md text-sz14 flex flex-col justify-center bg-pure_purple"
                                    : data.color === "Green"
                                    ? "p-1 text-white rounded-md text-sz14 flex flex-col justify-center bg-pure_green"
                                    : data.color === "Blue"
                                    ? "p-1 text-white rounded-md text-sz14 flex flex-col justify-center bg-pure_blue"
                                    : data.color === "Red"
                                    ? "p-1 text-white rounded-md text-sz14 flex flex-col justify-center bg-pure_red"
                                    : data.color === "Cyan"
                                    ? "p-1 text-white rounded-md text-sz14 flex flex-col justify-center bg-pure_cyan"
                                    : data.color === "Pink"
                                    ? "p-1 text-white rounded-md text-sz14 flex flex-col justify-center bg-pink"
                                    : "p-1 text-white rounded-md text-sz14 flex flex-col justify-center bg-pure_orange"
                                }
                              >
                                {data.tag}
                              </div>
                            </div>
                          )}
                        </>
                      )
                    )}
                  </div>
                  <img
                    className="hidden md:block h-full"
                    src={line}
                    alt="line"
                  ></img>
                  <div className="px-2 text-sz18 font-Manrope font-light flex flex-col gap-8">
                    {project.distribution_list.map(
                      (data: any, index: number) => (
                        <>
                          {index >= 4 && (
                            <div className="flex flex-row space-x-4">
                              <div className="px-2 py-1 rounded-full shadow-inner flex flex-row items-center space-x-2">
                                <div
                                  className={
                                    data.color === "Yellow"
                                      ? "w-4 h-4 rounded-md bg-pure_yellow"
                                      : data.color === "Purple"
                                      ? "w-4 h-4 rounded-md bg-pure_purple"
                                      : data.color === "Green"
                                      ? "w-4 h-4 rounded-md bg-pure_green"
                                      : data.color === "Blue"
                                      ? "w-4 h-4 rounded-md bg-pure_blue"
                                      : data.color === "Red"
                                      ? "w-4 h-4 rounded-md bg-pure_red"
                                      : data.color === "Cyan"
                                      ? "w-4 h-4 rounded-md bg-pure_cyan"
                                      : data.color === "Pink"
                                      ? "w-4 h-4 rounded-md bg-pink"
                                      : "w-4 h-4 rounded-md bg-pure_orange"
                                  }
                                ></div>
                                <div
                                  className={
                                    data.color === "Yellow"
                                      ? "text-pure_yellow"
                                      : data.color === "Purple"
                                      ? "text-pure_purple"
                                      : data.color === "Green"
                                      ? "text-pure_green"
                                      : data.color === "Blue"
                                      ? "text-pure_blue"
                                      : data.color === "Red"
                                      ? "text-pure_red"
                                      : data.color === "Cyan"
                                      ? "text-pure_cyan"
                                      : data.color === "Pink"
                                      ? "text-pink"
                                      : "text-pure_orange"
                                  }
                                >
                                  {data.percent}%
                                </div>
                              </div>
                              <div
                                className={
                                  data.color === "Yellow"
                                    ? "p-1 text-white rounded-md text-sz14 flex flex-col justify-center bg-pure_yellow"
                                    : data.color === "Purple"
                                    ? "p-1 text-white rounded-md text-sz14 flex flex-col justify-center bg-pure_purple"
                                    : data.color === "Green"
                                    ? "p-1 text-white rounded-md text-sz14 flex flex-col justify-center bg-pure_green"
                                    : data.color === "Blue"
                                    ? "p-1 text-white rounded-md text-sz14 flex flex-col justify-center bg-pure_blue"
                                    : data.color === "Red"
                                    ? "p-1 text-white rounded-md text-sz14 flex flex-col justify-center bg-pure_red"
                                    : data.color === "Cyan"
                                    ? "p-1 text-white rounded-md text-sz14 flex flex-col justify-center bg-pure_cyan"
                                    : data.color === "Pink"
                                    ? "p-1 text-white rounded-md text-sz14 flex flex-col justify-center bg-pink"
                                    : "p-1 text-white rounded-md text-sz14 flex flex-col justify-center bg-pure_orange"
                                }
                              >
                                {data.tag}
                              </div>
                              {/* <div className="px-2 py-1  rounded-full shadow-inner flex flex-row items-center space-x-2">
                                {data.tag}
                              </div> */}
                            </div>
                          )}
                        </>
                      )
                    )}
                  </div>
                  <img
                    className="hidden md:block h-full"
                    src={line}
                    alt="line"
                  ></img>
                  <div className="px-2 text-sz18 font-Manrope font-light flex flex-col gap-8">
                    <div className="text-center rounded-full shadow-sm text-green p-2">
                      Max Supply - {FormatBigNumber(tokenData?.max_supply)}
                    </div>
                    <div className="rounded-full shadow-sm text-green p-2">
                      Total Supply - {FormatBigNumber(tokenData?.total_supply)}
                    </div>
                    <div className="space-y-2 flex flex-col">
                      <div className="text-darkgray text-sz16">
                        Project Treasury multisig address
                      </div>
                      <ContractAddressBox
                        data={project?.multisig_address}
                      ></ContractAddressBox>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
            <div className="bg-gray px-6 py-4 rounded-t-xl flex flex-row items-start">
              <div className="w-full pl-4 text-blue text-sz20 font-bold font-pilat text-center">
                Code Security Assessment
              </div>
              {/* <div
                className="text-sz18 text-blue font-Manrope flex flex-row items-center space-x-2 cursor-pointer"
                onClick={() => setShowSecurityModal(true)}
              >
                <img src={edit} alt="edit"></img>
                <div>Edit</div>
              </div> */}
              {showSecurityModal ? (
                <>
                  <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative my-6 w-5/6 md:w-2/3 lg:w-3/5 xl:w-1/3 rounded-xl shadow-xl font-Manrope">
                      {/*content*/}
                      <div className="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex flex-row bg-gray items-center px-8 py-4 space-x-8 rounded-t-lg">
                          <div
                            className="flex flex-row items-center cursor-pointer gap-2"
                            onClick={handleSaveSecurityModal}
                          >
                            <img src={save} alt="save"></img>
                            <div className="text-sz18 text-pink">Save</div>
                          </div>
                          <div
                            className="flex flex-row items-center cursor-pointer gap-2"
                            onClick={handleDiscardSecurityModal}
                          >
                            <img src={discard} alt="discard"></img>
                            <div className="text-sz18 text-blue">Discard</div>
                          </div>
                        </div>
                        {/*body*/}
                        <div
                          className="text-sz18 text-left bg-lightgray relative p-8 rounded-b-xl flex flex-col space-y-3 overflow-y-auto"
                          style={{ height: "600px" }}
                        >
                          {/* <div className="flex flex-col space-y-2">
                            <div className="text-sz18 text-blue">
                              Edit H1 Text
                            </div>
                            <input
                              type="text"
                              id="website-admin"
                              value={security}
                              onChange={(e) => setSecurity(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Code Security Assessment"
                            />
                          </div> */}
                          {securityList.map((security: any, index: number) => (
                            <div className="flex flex-row items-end flex-wrap gap-2">
                              <div className="flex flex-col space-y-2">
                                <div className="text-sz14">Colour</div>
                                <SelectBox
                                  type={true}
                                  index={index}
                                  color={security.color}
                                  handleColor={handleColor}
                                ></SelectBox>
                              </div>
                              <div className="flex flex-col space-y-2">
                                <div className="text-sz14">Number</div>
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={security.number}
                                  onChange={(e) =>
                                    handleNumberOfSecurityList(e, index)
                                  }
                                  className="shadow-inner w-16 rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Due-Diligence / Auditing"
                                />
                              </div>
                              <div className="flex flex-col space-y-2">
                                <div className="text-sz14">Resolved</div>
                                <div className="shadow-inner border border-blue rounded-lg p-2 flex flex-row items-center space-x-2">
                                  <img
                                    onClick={() =>
                                      handleCheckOfSecurityList(index, true)
                                    }
                                    src={radio_t}
                                    alt="radio_t"
                                    className={
                                      security.resolved ? "" : "opacity-50"
                                    }
                                  ></img>
                                  <img
                                    onClick={() =>
                                      handleCheckOfSecurityList(index, false)
                                    }
                                    src={radio_f}
                                    alt="radio_f"
                                    className={
                                      security.resolved ? "opacity-50" : ""
                                    }
                                  ></img>
                                </div>
                              </div>
                              {security.tag.map(
                                (tag: string, tagId: number) => (
                                  <div
                                    key={tagId}
                                    className="mb-2 rounded-full px-4 py-2 text-sz16 shadow-inner flex flex-row items-center space-x-2"
                                  >
                                    <div>{tag}</div>
                                    <img onClick={() => handleRemoveTag(index, tagId)} src={close} alt="close" className="w-4 h-4"></img>
                                  </div>
                                )
                              )}
                              <div className="flex flex-col space-y-2">
                                <div className="text-sz14">Tag</div>
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={currentSecurityTagList[index]}
                                  onChange={(e) =>
                                    handleCurrentSecurityTag(e.target.value, index)
                                  }
                                  className="shadow-inner w-24 rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Tag"
                                />
                              </div>
                              <img
                                onClick={() => handleAddTag(index)}
                                className="cursor-pointer"
                                src={addtag}
                                alt="addTag"
                              ></img>
                            </div>
                          ))}
                          <div
                            onClick={addNewSecurity}
                            className="cursor-pointer text-sz18 text-blue flex flex-row items-center space-x-2"
                          >
                            <img src={addItem} alt="addItem"></img>
                            <div>Add New Item</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>

            {project.security_list.length !== 0 && (
              <div className="p-8 font-Manrope font-light flex flex-col md:flex-row">
                <div className="relative flex flex-col items-center">
                  <Doughnut type={false} data={project.security_list} />
                  <div className="font-Manrope text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col">
                    <div className="text-sz18 font-bold">
                      {securityTotalNumber}
                    </div>
                    <div className="text-sz12">Total Findings</div>
                  </div>
                </div>
                <div className="w-full flex flex-col ml-8 px-8 border-none md:border-l border-darkgray gap-4">
                  {project.security_list.map((security: any) => (
                    <div className="w-full grid grid-cols-4 items-start">
                      <div className="col-span-1 font-Manrope font-light text-sz18 flex flex-row items-center space-x-4">
                        <div
                          className={
                            security.color === "Critical"
                              ? "w-3 h-3 rounded-sm bg-critical"
                              : security.color === "Major"
                              ? "w-3 h-3 rounded-sm bg-major"
                              : security.color === "Medium"
                              ? "w-3 h-3 rounded-sm bg-medium"
                              : security.color === "Minor"
                              ? "w-3 h-3 rounded-sm bg-minor"
                              : "w-3 h-3 rounded-sm bg-informational"
                          }
                        ></div>
                        <div
                          className={
                            security.color === "Critical"
                              ? "text-critical"
                              : security.color === "Major"
                              ? "text-major"
                              : security.color === "Medium"
                              ? "text-medium"
                              : security.color === "Minor"
                              ? "text-minor"
                              : "text-informational"
                          }
                        >
                          {security.number}
                        </div>
                        <div className="font-bold">{security.color}</div>
                      </div>

                      <div className="hidden md:flex col-span-2 flex-row items-center space-x-4">
                        {security.tag.map((tag: string) => (
                          <div
                            className={
                              security.color === "Critical"
                                ? "p-1 text-white rounded-md text-sz14 bg-critical"
                                : security.color === "Major"
                                ? "p-1 text-white rounded-md text-sz14 bg-major"
                                : security.color === "Medium"
                                ? "p-1 text-white rounded-md text-sz14 bg-medium"
                                : security.color === "Minor"
                                ? "p-1 text-white rounded-md text-sz14 bg-minor"
                                : "p-1 text-white rounded-md text-sz14 bg-informational"
                            }
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                      {security.resolved ? (
                        <div className="hidden md:flex col-span-1 flex-col">
                          <div className="flex flex-row items-center space-x-1">
                            <img src={check_t} alt="check"></img>
                            <div className="text-sz12">All Resolved!</div>
                          </div>
                          <div className="h-1 w-full rounded-full bg-green"></div>
                        </div>
                      ) : (
                        <div className="hidden md:flex col-span-1 flex-col">
                          <div className="flex flex-row items-center space-x-1">
                            <img src={check_f} alt="check"></img>
                            <div className="text-sz12">0 Resolved</div>
                          </div>
                          <div
                            className="h-1 w-full rounded-full"
                            style={{ background: "#A0A1AD" }}
                          ></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
            <div className="bg-gray px-6 py-4 rounded-t-xl flex flex-row items-start">
              <div className="w-full pl-4 text-blue text-sz18 md:text-sz20 font-bold font-pilat text-center">
                Audited Files
              </div>
              {/* <div
                className="text-sz18 text-blue font-Manrope flex flex-row items-center space-x-2 cursor-pointer"
                onClick={() => setShowAuditedModal(true)}
              >
                <img src={edit} alt="edit"></img>
                <div>Edit</div>
              </div> */}
              {showAuditedModal ? (
                <>
                  <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative my-6 w-5/6 md:w-2/3 lg:w-3/5 xl:w-1/3 rounded-xl shadow-xl font-Manrope">
                      {/*content*/}
                      <div className="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex flex-row bg-gray items-center px-8 py-4 space-x-8 rounded-t-lg">
                          <div
                            className="flex flex-row items-center cursor-pointer gap-2"
                            onClick={handleSaveAuditedModal}
                          >
                            <img src={save} alt="save"></img>
                            <div className="text-sz18 text-pink">Save</div>
                          </div>
                          <div
                            className="flex flex-row items-center cursor-pointer gap-2"
                            onClick={handleDiscardAuditedModal}
                          >
                            <img src={discard} alt="discard"></img>
                            <div className="text-sz18 text-blue">Discard</div>
                          </div>
                        </div>
                        {/*body*/}
                        <div className="text-sz18 text-left bg-lightgray relative p-8 rounded-b-xl flex flex-col space-y-3">
                          {/* <div className="flex flex-col space-y-2">
                            <div className="text-sz18 text-blue">
                              Edit H1 Text
                            </div>
                            <input
                              type="text"
                              id="website-admin"
                              value={auditFilesText}
                              onChange={(e) =>
                                setAuditFilesText(e.target.value)
                              }
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Audited Files"
                            />
                          </div> */}
                          <div className="grid grid-cols-3 gap-4">
                            <div className="flex flex-col space-y-2">
                              <div className="text-sz18 text-blue">
                                Source Code
                              </div>
                              {auditFilesList.map(
                                (audit: any, index: number) => (
                                  <input
                                    type="text"
                                    id="website-admin"
                                    value={audit.source}
                                    onChange={(e) =>
                                      handleAuditedFiles(e, index, 0)
                                    }
                                    className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="GaugeControllerV2.vy"
                                  />
                                )
                              )}
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="text-sz18 text-blue">Acknow</div>
                              {auditFilesList.map(
                                (audit: any, index: number) => (
                                  <input
                                    type="text"
                                    id="website-admin"
                                    value={audit.acknowledgement}
                                    onChange={(e) =>
                                      handleAuditedFiles(e, index, 1)
                                    }
                                    className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="GaugeControllerV2.vy"
                                  />
                                )
                              )}
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="text-sz18 text-blue">SHA-256</div>
                              {auditFilesList.map(
                                (audit: any, index: number) => (
                                  <input
                                    type="text"
                                    id="website-admin"
                                    value={audit.sha}
                                    onChange={(e) =>
                                      handleAuditedFiles(e, index, 2)
                                    }
                                    className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="GaugeControllerV2.vy"
                                  />
                                )
                              )}
                            </div>
                          </div>
                          <div
                            onClick={addNewAuditFile}
                            className="cursor-pointer text-sz18 text-blue flex flex-row items-center space-x-2"
                          >
                            <img src={addItem} alt="addItem"></img>
                            <div>Add New Item</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>

            {project.audited_files_list.length !== 0 && (
              <div className="p-8 font-Manrope font-light flex flex-col space-y-6">
                <div className="px-4 py-2 shadow-inner rounded-md text-blue text-sz18 md:text-sz18 flex flex-row items-center space-x-2">
                  <img src={info} alt="info"></img>
                  <div>
                    This details only available for projets Audited by WHD
                  </div>
                </div>
                <div className="bg-gray rounded-xl p-4 grid grid-cols-3 text-center text-sz16 md:text-sz18 font-bold overflow-auto">
                  <div className="flex flex-col space-y-4">
                    <div className="text-blue">Source Code</div>
                    {project.audited_files_list.map((item: any) => (
                      <div>{item.source}</div>
                    ))}
                  </div>
                  <div className="flex flex-col space-y-4">
                    <div className="text-blue">Acknowledgement</div>
                    {project.audited_files_list.map((item: any) => (
                      <div className="text-green">{item.acknowledgement}</div>
                    ))}
                  </div>
                  <div className="flex flex-col items-center space-y-3">
                    <div className="text-blue">SHA-256</div>
                    {project.audited_files_list.map((item: any) => (
                      <ShaComponent sha={item.sha}></ShaComponent>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
            <div className="bg-gray px-6 py-4 rounded-t-xl flex flex-row items-start">
              <div className="w-full pl-4 text-blue text-sz18 md:text-sz20 font-bold font-pilat text-center">
                Methodology
              </div>
              {/* <div
                className="text-sz18 text-blue font-Manrope flex flex-row items-center space-x-2 cursor-pointer"
                onClick={() => setShowMethodologyModal(true)}
              >
                <img src={edit} alt="edit"></img>
                <div>Edit</div>
              </div> */}
              {showMethodologyModal ? (
                <>
                  <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative my-6 w-5/6 md:w-2/3 lg:w-3/5 xl:w-1/3 rounded-xl shadow-xl font-Manrope">
                      {/*content*/}
                      <div className="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex flex-row bg-gray items-center px-8 py-4 space-x-8 rounded-t-lg">
                          <div
                            className="flex flex-row items-center cursor-pointer gap-2"
                            onClick={handleSaveMethoModal}
                          >
                            <img src={save} alt="save"></img>
                            <div className="text-sz18 text-pink">Save</div>
                          </div>
                          <div
                            className="flex flex-row items-center cursor-pointer gap-2"
                            onClick={handleDiscardMethoModal}
                          >
                            <img src={discard} alt="discard"></img>
                            <div className="text-sz18 text-blue">Discard</div>
                          </div>
                        </div>
                        {/*body*/}
                        <div className="text-sz18 text-left bg-lightgray relative p-8 rounded-b-xl flex flex-col space-y-3">
                          {/* <div className="flex flex-col space-y-2">
                            <div className="text-sz18 text-blue">
                              Edit H1 Text
                            </div>
                            <input
                              type="text"
                              id="website-admin"
                              value={methoText}
                              onChange={(e) => setMethoText(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Methodology"
                            />
                          </div> */}
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz18 text-blue">Edit Tags</div>
                            <div className="grid grid-cols-3 gap-4">
                              <div className="flex flex-col space-y-2">
                                {methoTags.map((tag: string, index: number) => (
                                  <>
                                    {index >= 0 && index < 5 && (
                                      <input
                                        type="text"
                                        id="website-admin"
                                        value={tag}
                                        onChange={(e) =>
                                          handleMethoTag(e, index)
                                        }
                                        className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Access Control"
                                      />
                                    )}
                                  </>
                                ))}
                              </div>
                              <div className="flex flex-col space-y-2">
                                {methoTags.map((tag: string, index: number) => (
                                  <>
                                    {index >= 5 && index < 10 && (
                                      <input
                                        type="text"
                                        id="website-admin"
                                        value={tag}
                                        onChange={(e) =>
                                          handleMethoTag(e, index)
                                        }
                                        className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Access Control"
                                      />
                                    )}
                                  </>
                                ))}
                              </div>
                              <div className="flex flex-col space-y-2">
                                {methoTags.map((tag: string, index: number) => (
                                  <>
                                    {index >= 10 && index < 15 && (
                                      <input
                                        type="text"
                                        id="website-admin"
                                        value={tag}
                                        onChange={(e) =>
                                          handleMethoTag(e, index)
                                        }
                                        className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Access Control"
                                      />
                                    )}
                                  </>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div
                            onClick={addNewMetho}
                            className="cursor-pointer text-sz18 text-blue flex flex-row items-center space-x-2"
                          >
                            <img src={addItem} alt="addItem"></img>
                            <div>Add New Item</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>

            {project.methodology_tags.length !== 0 && (
              <div className="p-8 font-Manrope font-light flex flex-col space-y-6">
                <div className="px-4 py-2 shadow-inner rounded-md text-blue text-sz16 md:text-sz18 flex flex-row items-center space-x-2">
                  <img src={info} alt="info"></img>
                  <div>Feature only available for projects audited by WHD</div>
                </div>
                <div className="bg-gray rounded-xl p-4 flex flex-col md:flex-row justify-between text-sz18 text-green gap-4">
                  <div className="flex flex-col gap-4">
                    {project.methodology_tags.map(
                      (item: string, index: number) => (
                        <>
                          {index >= 0 && index < 5 && (
                            <div className="flex">
                              <div className="px-4 py-1 rounded-full shadow-inner">
                                {item}
                              </div>
                            </div>
                          )}
                        </>
                      )
                    )}
                  </div>
                  <div className="flex flex-col gap-4">
                    {project.methodology_tags.map(
                      (item: string, index: number) => (
                        <>
                          {index >= 5 && index < 10 && (
                            <div className="flex">
                              <div className="px-4 py-1 rounded-full shadow-inner">
                                {item}
                              </div>
                            </div>
                          )}
                        </>
                      )
                    )}
                  </div>
                  <div className="flex flex-col gap-4">
                    {project.methodology_tags.map(
                      (item: string, index: number) => (
                        <>
                          {index >= 10 && index < 15 && (
                            <div className="flex">
                              <div className="px-4 py-1 rounded-full shadow-inner">
                                {item}
                              </div>
                            </div>
                          )}
                        </>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
            <div className="bg-gray px-6 py-4 rounded-t-xl flex flex-row items-start">
              <div className="w-full pl-4 text-blue text-sz18 md:text-sz20 font-bold font-pilat text-center">
                Price Data
              </div>
              {/* <div
                className="text-blue text-sz18 font-Manrope flex flex-row items-center space-x-2 cursor-pointer"
                onClick={() => setShowSecondModal(true)}
              >
                <img src={edit} alt="edit"></img>
                <div>Edit</div>
              </div> */}
              {showSecondModal ? (
                <>
                  <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative my-6 w-5/6 md:w-2/3 lg:w-3/5 xl:w-1/3 rounded-xl shadow-xl font-Manrope">
                      {/*content*/}
                      <div className="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex flex-row bg-gray items-center px-8 py-4 space-x-8 rounded-t-lg">
                          <div
                            className="flex flex-row items-center cursor-pointer gap-2"
                            onClick={handleSaveSecondModal}
                          >
                            <img src={save} alt="save"></img>
                            <div className="text-sz18 text-pink">Save</div>
                          </div>
                          <div
                            className="flex flex-row items-center cursor-pointer gap-2"
                            onClick={handleDiscardSecondModal}
                          >
                            <img src={discard} alt="discard"></img>
                            <div className="text-sz18 text-blue">Discard</div>
                          </div>
                        </div>
                        {/*body*/}
                        <div className="text-sz18 text-left bg-lightgray relative p-8 rounded-b-xl flex flex-col space-y-3">
                          {/* <div className="flex flex-col space-y-2">
                            <div className="text-sz18 text-blue">
                              Edit H1 Text
                            </div>
                            <input
                              type="text"
                              id="website-admin"
                              value={tokenTitle}
                              onChange={(e) => setTokenTitle(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Price Data"
                            />
                          </div> */}
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz18 text-blue">
                              Edit Token name
                            </div>
                            <input
                              type="text"
                              id="website-admin"
                              value={tokenName}
                              onChange={(e) => setTokenName(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Hundred Finance (HND)"
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz18 text-blue">
                              Edit Token API Data
                            </div>
                            <input
                              type="text"
                              id="website-admin"
                              value={tokenAPI}
                              onChange={(e) => setTokenAPI(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="dywqbdhb2wvdhjbwhjgvwhjdqwjknjkwnbjkbn"
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
            {tokenData && (
              <div className="m-8 p-6 rounded-xl bg-gray font-Manrope font-light flex flex-col">
                <div className="pb-4 border-b border-darkgray font-bold text-blue text-sz16">
                  {project.token_name} Price Data
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div className="py-4 hidden md:flex flex-row items-center space-x-2">
                    <div className="font-Manrope text-sz40 font-bold">
                      ${Number(tokenData?.price)}
                    </div>
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
                      <div className="text-sz16 text-red">
                        {tokenData?.price_change < 0
                          ? `-${Number(tokenData?.price_change).toFixed(2)}`
                          : Number(tokenData?.price_change).toFixed(2)}
                        %
                      </div>
                    </div>
                  </div>
                  <div className="w-96 flex flex-col space-y-1">
                    <GradientBox
                      percentage={
                        ((tokenData.price - tokenData.lowPrice_24h) /
                          (tokenData.highPrice_24h - tokenData.lowPrice_24h)) *
                        100
                      }
                    ></GradientBox>
                    <div className="text-sz16 font-light flex flex-row items-center justify-between">
                      <div>${tokenData.lowPrice_24h}</div>
                      <div>24H Range</div>
                      <div>${tokenData.highPrice_24h}</div>
                    </div>
                  </div>
                </div>

                <div className="font-Manrope text-sz16 md:text-sz18 grid grid-cols-2 md:grid-cols-3 gap-8 justify-between">
                  <div className="pt-4 md:pt-0 flex flex-col gap-4">
                    <div className="border-none md:border-b border-darkgray pb-0 md:pb-4 flex flex-col md:flex-row justify-between">
                      <div className=" flex flex-row items-center space-x-2">
                        <div className="text-darkgray">Market cap</div>
                        <img src={info_small} alt="info_small"></img>
                      </div>
                      <div>${FormatBigNumber(tokenData?.market_cap)}</div>
                    </div>
                    <div className="border-none md:border-b border-darkgray pb-0 md:pb-4 flex flex-col md:flex-row justify-between">
                      <div className=" flex flex-row items-center space-x-2">
                        <div className="text-darkgray">Circulating Supply</div>
                        <img src={info_small} alt="info_small"></img>
                      </div>
                      <div>
                        $
                        {FormatBigNumber(
                          parseFloat(tokenData?.circulating_supply).toFixed(0)
                        )}
                      </div>
                    </div>
                    <div className="border-none md:border-b border-darkgray pb-0 md:pb-4 flex flex-col md:flex-row justify-between">
                      <div className=" flex flex-row items-center space-x-2">
                        <div className="text-darkgray">Max Supply</div>
                        <img src={info_small} alt="info_small"></img>
                      </div>
                      <div>{FormatBigNumber(tokenData?.max_supply)}</div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between">
                      <div className="text-darkgray">All time high</div>
                      <div>${tokenData?.ath}</div>
                    </div>
                  </div>

                  <div className="pt-4 md:pt-0 flex flex-col gap-4">
                    <div className="border-none md:border-b border-darkgray pb-0 md:pb-4 flex flex-col md:flex-row justify-between">
                      <div className=" flex flex-row items-center space-x-2">
                        <div className="text-darkgray">
                          Market cap Dominance
                        </div>
                        <img src={info_small} alt="info_small"></img>
                      </div>
                      <div>{tokenData?.market_cap_change}%</div>
                    </div>
                    <div className="border-none md:border-b border-darkgray pb-0 md:pb-4 flex flex-col md:flex-row justify-between">
                      <div className=" flex flex-row items-center space-x-2">
                        <div className="text-darkgray">Trading Volume</div>
                        <div className="text-sz16 bg-white rounded-sm px-1">
                          24h
                        </div>
                      </div>
                      <div>$1,451,392,754</div>
                    </div>
                    <div className="border-none md:border-b border-darkgray pb-0 md:pb-4 flex flex-col md:flex-row justify-between">
                      <div className="text-darkgray">Total Supply</div>
                      <div>{FormatBigNumber(tokenData?.total_supply)}</div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between">
                      <div className="text-darkgray">All time low</div>
                      <div>${tokenData?.atl}</div>
                    </div>
                  </div>

                  <div className="hidden md:flex flex-col space-y-4">
                    <div className="border-b border-darkgray pb-4 flex flex-row justify-between">
                      <div className="text-darkgray">Volume / Market Cap</div>
                      <div>
                        {(
                          (tokenData?.market_cap *
                            tokenData?.market_cap_change) /
                          tokenData?.total_supply
                        ).toFixed(2)}
                      </div>
                    </div>
                    <div className="border-b border-darkgray pb-4 flex flex-row justify-between">
                      <div className="text-darkgray">24h Low / 24h High</div>
                      <div>
                        ${parseFloat(tokenData?.lowPrice_24h).toFixed(2)} / $
                        {parseFloat(tokenData?.highPrice_24h).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {tokenData && (
              <div className="mx-8 mb-8 p-6 rounded-xl bg-gray font-Manrope font-light flex flex-col">
                <div className="pb-4 border-b border-darkgray flex flex-row items-center justify-between">
                  <div className="text-blue text-sz16">
                    {project?.name} Price Chart
                  </div>
                  <div className="flex flex-row items-center flex-wrap gap-2">
                    <div
                      onClick={() => setTimeRange(1)}
                      className={
                        timeRange === 1
                          ? "px-3 font-bold rounded-md text-white bg-blue border border-blue shadow-sm cursor-pointer"
                          : "px-3 font-bold rounded-md text-blue border border-blue shadow-sm cursor-pointer"
                      }
                    >
                      1d
                    </div>
                    <div
                      onClick={() => setTimeRange(7)}
                      className={
                        timeRange === 7
                          ? "px-3 font-bold rounded-md text-white bg-blue border border-blue shadow-sm cursor-pointer"
                          : "px-3 font-bold rounded-md text-blue border border-blue shadow-sm cursor-pointer"
                      }
                    >
                      7d
                    </div>
                    <div
                      onClick={() => setTimeRange(14)}
                      className={
                        timeRange === 14
                          ? "px-3 font-bold rounded-md text-white bg-blue border border-blue shadow-sm cursor-pointer"
                          : "px-3 font-bold rounded-md text-blue border border-blue shadow-sm cursor-pointer"
                      }
                    >
                      14d
                    </div>
                    <div
                      onClick={() => setTimeRange(30)}
                      className={
                        timeRange === 30
                          ? "px-3 font-bold rounded-md text-white bg-blue border border-blue shadow-sm cursor-pointer"
                          : "px-3 font-bold rounded-md text-blue border border-blue shadow-sm cursor-pointer"
                      }
                    >
                      30d
                    </div>
                    <div
                      onClick={() => setTimeRange(90)}
                      className={
                        timeRange === 90
                          ? "px-3 font-bold rounded-md text-white bg-blue border border-blue shadow-sm cursor-pointer"
                          : "px-3 font-bold rounded-md text-blue border border-blue shadow-sm cursor-pointer"
                      }
                    >
                      90d
                    </div>
                    <div
                      onClick={() => setTimeRange(180)}
                      className={
                        timeRange === 180
                          ? "px-3 font-bold rounded-md text-white bg-blue border border-blue shadow-sm cursor-pointer"
                          : "px-3 font-bold rounded-md text-blue border border-blue shadow-sm cursor-pointer"
                      }
                    >
                      180d
                    </div>
                    <div
                      onClick={() => setTimeRange(365)}
                      className={
                        timeRange === 365
                          ? "px-3 font-bold rounded-md text-white bg-blue border border-blue shadow-sm cursor-pointer"
                          : "px-3 font-bold rounded-md text-blue border border-blue shadow-sm cursor-pointer"
                      }
                    >
                      365d
                    </div>
                  </div>
                </div>
                <PrimaryChart
                  data={tokenPriceHistory ?? []}
                  height={
                    boxWidth >= 1024
                      ? Math.floor(height * 0.6)
                      : Math.floor(height * 0.4)
                  }
                  width={boxWidth * 0.9}
                  margin={
                    boxWidth >= 1280
                      ? {
                          top: 16,
                          right: 0,
                          bottom: 40,
                          left: 48,
                        }
                      : boxWidth >= 1024
                      ? {
                          top: 16,
                          right: 132,
                          bottom: 40,
                          left: 48,
                        }
                      : boxWidth >= 768
                      ? {
                          top: 16,
                          right: 132,
                          bottom: 40,
                          left: 48,
                        }
                      : {
                          top: 16,
                          right: 100,
                          bottom: 40,
                          left: 48,
                        }
                  }
                />
              </div>
            )}
          </div>

          <div className="my-0 md:my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
            <div className="px-6 py-4 rounded-t-xl">
              <div className="pl-4 text-blue text-sz18 md:text-sz20 font-bold font-pilat text-center flex flex-row items-center">
                <div className="w-full">Exchanges</div>
                {/* <div
                  className="text-blue text-sz18 font-Manrope flex flex-row items-center space-x-2 cursor-pointer"
                  onClick={() => setShowMarketModal(true)}
                >
                  <img src={edit} alt="edit"></img>
                  <div>Edit</div>
                </div> */}
              </div>
            </div>
            {showMarketModal ? (
              <>
                <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative my-6 w-5/6 md:w-2/3 lg:w-3/5 xl:w-1/3 rounded-xl shadow-xl font-Manrope">
                    {/*content*/}
                    <div className="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex flex-row bg-gray items-center px-8 py-4 space-x-8 rounded-t-lg">
                        <div
                          className="flex flex-row items-center cursor-pointer gap-2"
                          onClick={handleSaveMarketModal}
                        >
                          <img src={save} alt="save"></img>
                          <div className="text-sz18 text-pink">Save</div>
                        </div>
                        <div
                          className="flex flex-row items-center cursor-pointer gap-2"
                          onClick={handleDiscardMarketModal}
                        >
                          <img src={discard} alt="discard"></img>
                          <div className="text-sz18 text-blue">Discard</div>
                        </div>
                      </div>
                      {/*body*/}
                      <div
                        className="text-sz18 text-left bg-lightgray relative p-8 rounded-b-xl flex flex-col space-y-3 overflow-y-auto"
                        style={{ height: "700px" }}
                      >
                        {marketData.map((market: any, index: number) => (
                          <>
                            <div className="text-blue text-sz18">
                              Exchange{index + 1}
                            </div>
                            <div className="border border-blue rounded-xl p-4 flex flex-col space-y-2">
                              <SelectNetwork
                                index={index}
                                value={market}
                                handleNetworkChange={handleMarketNetworkChange}
                              ></SelectNetwork>
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
                                    onChange={(e) =>
                                      handleFileChange(e, index, 6)
                                    }
                                    accept="/image/*"
                                  />
                                </label>
                              </div>
                              <div className="flex flex-col space-y-2">
                                <div className="text-sz18 text-blue">
                                  Exchange
                                </div>
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={market.name}
                                  onChange={(e) =>
                                    handleChangeMarket(e.target.value, index, 0)
                                  }
                                  className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Sushiswap"
                                />
                              </div>
                              <div className="flex flex-col space-y-2">
                                <div className="text-sz18 text-blue">Pairs</div>
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={market.pair}
                                  onChange={(e) =>
                                    handleChangeMarket(e.target.value, index, 2)
                                  }
                                  className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="ETH/HND"
                                />
                              </div>
                              <div className="flex flex-col space-y-2">
                                <div className="text-sz18 text-blue">
                                  Pair Link
                                </div>
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={market.pairlink}
                                  onChange={(e) =>
                                    handleChangeMarket(e.target.value, index, 3)
                                  }
                                  className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="https://uniswap.com"
                                />
                              </div>
                            </div>
                          </>
                        ))}
                        <div
                          onClick={handleAddMarket}
                          className="cursor-pointer text-sz18 text-blue flex flex-row items-center space-x-2"
                        >
                          <img src={addItem} alt="addItem"></img>
                          <div>Add Market</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
            <div className="font-Manrope py-4 px-10 flex flex-row gap-4">
              <div className="w-full flex flex-col space-y-2 pr-8 border-r">
                {project?.market_data?.map((exch: any, index: number) => (
                  <>
                    {index % 2 === 0 && (
                      <a
                        href={exch.pairlink}
                        key={index}
                        className="pb-4 border-b border-blue border-darkgray flex flex-row items-center justify-between"
                      >
                        <div className="py-1 px-4 rounded-lg border border-blue flex flex-row items-center space-x-2">
                          <img
                            className="w-8 h-8"
                            src={getNetworkImage(exch.network)}
                            alt="network"
                          ></img>
                          <div>{exch.network}</div>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                          <img src={exch.logo} alt="icon1"></img>
                          <div>{exch.name}</div>
                        </div>
                        <div className="text-blue">{exch.pair}</div>
                        <div className="rounded-full font-light text-sz16 px-4 py-1 shadow-inner">
                          <span className="text-green">Buy</span> /{" "}
                          <span className="text-pink">Sell</span>
                        </div>
                      </a>
                    )}
                  </>
                ))}
              </div>
              <div className="pl-4 w-full flex flex-col space-y-2">
                {project?.market_data?.map((exch: any, index: number) => (
                  <>
                    {index % 2 === 1 && (
                      <a
                        href={exch.pairlink}
                        key={index}
                        className="pb-4 border-b border-blue border-darkgray flex flex-row items-center justify-between"
                      >
                        <div className="py-1 px-4 rounded-lg border border-blue flex flex-row items-center space-x-2">
                          <img
                            className="w-8 h-8"
                            src={getNetworkImage(exch.network)}
                            alt="network"
                          ></img>
                          <div>{exch.network}</div>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                          <img src={exch.logo} alt="icon1"></img>
                          <div>{exch.name}</div>
                        </div>
                        <div className="text-blue">{exch.pair}</div>
                        <div className="rounded-full font-light text-sz16 px-4 py-1 shadow-inner">
                          <span className="text-green">Buy</span> /{" "}
                          <span className="text-pink">Sell</span>
                        </div>
                      </a>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>

          <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
            <div className="bg-gray px-6 py-4 rounded-t-xl flex flex-row items-start">
              <div className="w-full pl-4 text-blue text-sz18 md:text-sz20 font-bold font-pilat text-center">
                Project Team Members & Developers
              </div>
              {/* <div
                className="text-blue text-sz18 font-Manrope flex flex-row items-center space-x-2 cursor-pointer"
                onClick={() => setShowTeamModal(true)}
              >
                <img src={edit} alt="edit"></img>
                <div>Edit</div>
              </div> */}
              {showTeamModal ? (
                <>
                  <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative my-6 w-5/6 md:w-2/3 lg:w-3/5 xl:w-1/3 rounded-xl shadow-xl font-Manrope">
                      {/*content*/}
                      <div className="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex flex-row bg-gray items-center px-8 py-4 space-x-8 rounded-t-lg">
                          <div
                            className="flex flex-row items-center cursor-pointer gap-2"
                            onClick={handleSaveTeamModal}
                          >
                            <img src={save} alt="save"></img>
                            <div className="text-sz18 text-pink">Save</div>
                          </div>
                          <div
                            className="flex flex-row items-center cursor-pointer gap-2"
                            onClick={handleDiscardTeamModal}
                          >
                            <img src={discard} alt="discard"></img>
                            <div className="text-sz18 text-blue">Discard</div>
                          </div>
                        </div>
                        {/*body*/}
                        <div
                          className="text-sz18 text-left bg-lightgray relative p-8 rounded-b-xl flex flex-col space-y-3 overflow-y-auto"
                          style={{ height: "700px" }}
                        >
                          {/* <div className="flex flex-col space-y-2">
                            <div className="text-sz18 text-blue">
                              Edit H1 Text
                            </div>
                            <input
                              type="text"
                              id="website-admin"
                              value={memberTitle}
                              onChange={(e) => setMemberTitle(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Project Teams Members And Developers"
                            />
                          </div> */}
                          {/* <div className="flex flex-col space-y-2">
                            <div className="text-sz18 text-blue">Note</div>
                            <textarea
                              rows={4}
                              value={memberNote}
                              onChange={(e) => setMemberNote(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Please be advised that verified check mark only applies to members who are doxed or verified their identity for public view. WHD reserves the right to verify individuals privately and provide check mark to any projects, developers or project team ."
                            />
                          </div> */}
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz18 text-blue">
                              Edit Team Member
                            </div>
                            {memberList.map((member: any, index: number) => (
                              <div className="w-full flex flex-col space-y-2">
                                <div className="text-sz18 text-blue">
                                  Team Member {index + 1}
                                </div>
                                <div className="flex flex-row items-start space-x-4">
                                  <label
                                    htmlFor={`dropzone-file${index}`}
                                    className="h-10 w-36 py-1 rounded-lg shadow-sm border border-blue flex flex-row items-center justify-center"
                                  >
                                    <img src={upload} alt="upload"></img>
                                    <div className="text-sz18">Upload Pic</div>
                                    <input
                                      id={`dropzone-file${index}`}
                                      className="hidden"
                                      type="file"
                                      onChange={(e) =>
                                        handleFileChange(e, index, 4)
                                      }
                                      accept="/image/*"
                                    />
                                  </label>
                                  <div className="flex flex-row items-center space-x-2">
                                    <div
                                      onClick={() =>
                                        handleMemberVerified(
                                          index,
                                          !member.verified
                                        )
                                      }
                                      className="w-10 h-10 border border-blue rounded-md flex flex-col p-1"
                                    >
                                      {member.verified && (
                                        <img src={check} alt="check"></img>
                                      )}
                                    </div>
                                    <div className="text-sz14">
                                      Add verified checkmark
                                    </div>
                                  </div>
                                </div>
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={member.name}
                                  onChange={(e) =>
                                    handleMember(e.target.value, index, 0)
                                  }
                                  className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Name"
                                />
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={member.role}
                                  onChange={(e) =>
                                    handleMember(e.target.value, index, 1)
                                  }
                                  className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Marketing manager"
                                />
                                <div className="flex flex-col space-y-2">
                                  <div className="flex flex-row items-center space-x-4">
                                    <SelectNetwork
                                      index={index}
                                      value={member?.address}
                                      handleNetworkChange={handleNetworkChange}
                                    ></SelectNetwork>
                                    <input
                                      type="text"
                                      id="website-admin"
                                      value={member?.address?.address}
                                      onChange={(e) =>
                                        handleTokenAddress(
                                          e.target.value,
                                          index
                                        )
                                      }
                                      className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="WHITE HAT DAO"
                                    />
                                  </div>
                                  <div className="grid grid-cols-3 space-x-2">
                                    <div className="flex flex-row items-center justify-end space-x-2">
                                      <img src={twit} alt="twitter"></img>
                                      <div className="text-sz16 text-blue">
                                        Twitter
                                      </div>
                                    </div>
                                    <input
                                      type="text"
                                      id="website-admin"
                                      value={member.twitter}
                                      onChange={(e) =>
                                        handleMember(e.target.value, index, 3)
                                      }
                                      className="col-span-2 shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="0xd4ebc61981e5B9AB392b68f2638012E2346D534C"
                                    />
                                  </div>
                                  <div className="grid grid-cols-3 space-x-2">
                                    <div className="flex flex-row items-center justify-end space-x-2">
                                      <img src={linkedin} alt="Linkedin"></img>
                                      <div className="text-sz16 text-blue">
                                        Linkedin
                                      </div>
                                    </div>
                                    <input
                                      type="text"
                                      id="website-admin"
                                      value={member.linkedin}
                                      onChange={(e) =>
                                        handleMember(e.target.value, index, 4)
                                      }
                                      className="col-span-2 shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="LInkedin.com"
                                    />
                                  </div>
                                  <div className="grid grid-cols-3 space-x-2">
                                    <div className="flex flex-row items-center justify-end space-x-2">
                                      <img src={mail} alt="mail"></img>
                                      <div className="text-sz16 text-blue">
                                        Mail
                                      </div>
                                    </div>
                                    <input
                                      type="text"
                                      id="website-admin"
                                      value={member.mail}
                                      onChange={(e) =>
                                        handleMember(e.target.value, index, 5)
                                      }
                                      className="col-span-2 shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="mailbnlala.com"
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                            <div
                              onClick={addNewTeamMember}
                              className="cursor-pointer text-sz18 text-blue flex flex-row items-center space-x-2"
                            >
                              <img src={addItem} alt="addItem"></img>
                              <div>Add New Member</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>
            <div className="p-8 font-Manrope font-light flex flex-col space-y-8">
              <div className="rounded-md shadow-inner flex flex-col p-6">
                <div className="border-b border-blue pb-3 flex flex-row space-x-2">
                  <img src={info} alt="info"></img>
                  <div className="text-sz18 md:text-sz18 font-blue text-blue">
                    Note!
                  </div>
                </div>
                <div className="text-blue text-sz16 md:text-sz18">
                  Please be advised that verified check mark only applies to
                  members who are doxed or verified their identity for public
                  view. WHD reserves the right to verify individuals privately
                  and provide check mark to any projects, developers or project
                  team members. WHD also reserves the right to publish project
                  team members identity for public view, in the event of any
                  fraudulent activity or misconducts by any project team.
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-8">
                {project?.member?.map((member: any) => (
                  <div className="rounded-xl shadow-xl flex flex-col items-center justify-center space-y-2 p-4 text-center">
                    <div className="rounded-full shadow-inner flex flex-col items-center justify-center">
                      <img
                        className="p-4 w-48 h-48 rounded-full rounded-full"
                        src={member.image}
                        alt="member1"
                      ></img>
                    </div>
                    <div className="flex flex-row items-center space-x-2 text-sz18">
                      <div>{member?.name}</div>
                      {member?.verified && (
                        <img src={verify} alt="verify"></img>
                      )}
                    </div>
                    <div className="text-sz18 text-darkgray">
                      {member?.role}
                    </div>
                    <div className="flex flex-row items-center space-x-8">
                      {member?.twitter && (
                        <a href={member?.twitter}>
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
                        </a>
                      )}
                      {member?.linkedin && (
                        <a href={member?.linkedin}>
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
                        </a>
                      )}
                      {member?.mail && (
                        <a href={member?.mail}>
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
                        </a>
                      )}
                    </div>
                    {member?.address && (
                      <MemberContract
                        address={member?.address}
                      ></MemberContract>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
            <div className="bg-gray px-6 py-4 rounded-t-xl flex flex-row items-start">
              <div className="w-full pl-4 text-pink text-sz18 md:text-sz20 font-bold font-pilat text-center">
                Disclaimer
              </div>
              {/* <div
                className="text-blue text-sz18 font-Manrope flex flex-row items-center space-x-2 cursor-pointer"
                onClick={() => setShowForthModal(true)}
              >
                <img src={edit} alt="edit"></img>
                <div>Edit</div>
              </div> */}
              {showForthModal ? (
                <>
                  <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative my-6 w-5/6 md:w-2/3 lg:w-3/5 xl:w-1/3 rounded-xl shadow-xl font-Manrope">
                      {/*content*/}
                      <div className="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex flex-row bg-gray items-center px-8 py-4 space-x-8 rounded-t-lg">
                          <div
                            className="flex flex-row items-center cursor-pointer gap-2"
                            onClick={handleSaveForthModal}
                          >
                            <img src={save} alt="save"></img>
                            <div className="text-sz18 text-pink">Save</div>
                          </div>
                          <div
                            className="flex flex-row items-center cursor-pointer gap-2"
                            onClick={handleDiscardForthModal}
                          >
                            <img src={discard} alt="discard"></img>
                            <div className="text-sz18 text-blue">Discard</div>
                          </div>
                        </div>
                        {/*body*/}
                        <div className="text-sz18 text-left bg-lightgray relative p-8 rounded-b-xl flex flex-col space-y-3">
                          {/* <div className="flex flex-col space-y-2">
                            <div className="text-sz18 text-blue">
                              Edit H1 Text
                            </div>
                            <input
                              type="text"
                              id="website-admin"
                              value={disclaimer}
                              onChange={(e) => setDisclaimer(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Disclaimer"
                            />
                          </div> */}
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz18 text-blue">Text</div>
                            <textarea
                              rows={4}
                              value={disclaimerText}
                              onChange={(e) =>
                                setDisclaimerText(e.target.value)
                              }
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Cryptocurrencies are speculative, complex and involve significant risks – they are highly volatile and sensitive to secondary activity. Performance is unpredictable and past performance is no guarantee of future performance. Consider your own "
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
            <div className="p-8 text-sz16 md:text-sz18 font-Manrope font-light">
              {project.disclaimer_text}
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen"></div>
      )}
    </>
  );
};

export default Rating;
