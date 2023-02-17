import addItem from '../assets/images/addItem.png';
import discord from '../assets/images/footer/discord_black.svg';
import github from '../assets/images/footer/github_black.svg';
import global from '../assets/images/footer/global.svg';
import medium from '../assets/images/footer/medium.png';
import telegram from '../assets/images/footer/telegram.svg';
import twitter from '../assets/images/footer/twitter_black.svg';
import upload from '../assets/images/upload.png';
import linkedin from '../assets/images/rating/linkedin.png';
import mail from '../assets/images/rating/mail.png';
import twit from '../assets/images/rating/twitter.png';
import deleteImage from '../assets/images/remove.png';
import ExitIcon from '../components/ExitIcon';
import SelectNetwork from './SelectNetwork';
import SelectBox from './SelectBox';
import back from '../assets/images/next-button.png';
import submit from '../assets/images/submit-button.png';

import axios from 'axios';
import { BACKEND_SERVER, SCORER_ENDPOINT } from '../global/global';

import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import storage from '../utils/firebaseConfig';
import { useAppContext } from '../context/appContext';

import { useState, useMemo } from 'react';

const ApplicationModal = () => {
	const [appState, setAppState] = useAppContext();
  const { address: walletAddress } = appState;
  const [submitting, setSubmitting] = useState(false);
	const [mintable, setMintable] = useState(false);
	const [enableThankyou, setEnableThankyou] = useState(false);
	const [authorName, setAuthorName] = useState<string>('')
	const [authorEmail, setAuthorEmail] = useState<string>('')
	const [authorDiscord, setAuthorDiscord] = useState<string>('')
	const [authorTelegram, setAuthorTelegram] = useState<string>('')
	const [authorNationality, setAuthorNationality] = useState<string>('')
	const [authorRelation, setAuthorRelation] = useState<string>('')
	const [projectName, setProjectName] = useState<string>('');
	const [projectImage, setProjectImage] = useState<string>('');
	const [socials, setSocials] = useState<any>();
	const [description, setDescription] = useState<string>();
	const [platform, setPlatform] = useState<string>();
	const [language, setLanguage] = useState<string>();
	const [codebase, setCodebase] = useState<string>();
	const [address, setAddress] = useState<any[]>([]);
	const [multisigAddress, setMultisigAddress] = useState<any[]>([]);
	const [contractAudits, setContractAudits] = useState<any[]>([]);
	const [platformAudits, setPlatformAudits] = useState<any[]>([]);
	const [bugBountyAudits, setBugBountyAudits] = useState<any[]>([]);
	const [distributionList, setDistributionList] = useState<any[]>([]);
	const [marketData, setMarketData] = useState<any[]>([]);
	const [memberList, setMemberList] = useState<any[]>([]);
	const [appStep, setAppStep] = useState(1);
  const [scorePoint, setScorePoint] = useState<Number>(0);

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

	const handleAddContractAddress = () => {
		let tAddress = [...address];
		tAddress.push({ network: 'ethereum', address: '' });
		setAddress(tAddress);
	};

	const handleDeleteContractAddress = (index: number) => {
		let tAddress = [];
		for (let i = 0; i < address.length; i++) {
			if (i !== index) tAddress.push(address[i]);
		}
		setAddress(tAddress);
	};

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
			network: 'ethereum',
			address: '',
		});

		setMultisigAddress(tMulti);
	};

	const handleDeleteMultisigAddress = (index: number) => {
		let tMulti = [];
		for (let i = 0; i < multisigAddress.length; i++) {
			if (i !== index) tMulti.push(multisigAddress[i]);
		}

		setMultisigAddress(tMulti);
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

	const addNewDistribution = () => {
		let tDistribution = [...distributionList];
		tDistribution.push({ color: 'Purple', percent: 0, tag: '' });
		setDistributionList(tDistribution);
	};

	const handleDeleteDistribution = (index: number) => {
		let tDistribution = [];
		for (let i = 0; i < distributionList.length; i++) {
			if (i !== index) tDistribution.push(distributionList[i]);
		}
		setDistributionList(tDistribution);
	};

	const addNewContractAudit = () => {
		let tAudits = [];
		for (let i = 0; i < contractAudits.length; i++) {
			tAudits.push(contractAudits[i]);
		}
		tAudits.push({ name: '', link: '' });
		setContractAudits(tAudits);
	};

	const handleDeleteContractAudit = (index: number) => {
		let tAudits = [];
		for (let i = 0; i < contractAudits.length; i++) {
			if (i !== index) tAudits.push(contractAudits[i]);
		}
		setContractAudits(tAudits);
	};

	const addNewPlatformAudit = () => {
		let tAudits = [];
		for (let i = 0; i < platformAudits.length; i++) {
			tAudits.push(platformAudits[i]);
		}
		tAudits.push({ name: '', link: '' });
		setPlatformAudits(tAudits);
	};

	const handleDeletePlatformAudit = (index: number) => {
		let tAudits = [];
		for (let i = 0; i < platformAudits.length; i++) {
			if (i !== index) tAudits.push(platformAudits[i]);
		}
		setPlatformAudits(tAudits);
	};

	const addNewBugBounty = () => {
		let tBounty = [];
		for (let i = 0; i < bugBountyAudits.length; i++) {
			tBounty.push(bugBountyAudits[i]);
		}
		tBounty.push({ name: '', link: '' });
		setBugBountyAudits(tBounty);
	};

	const handleDeleteBountyAudit = (index: number) => {
		let tBounty = [];
		for (let i = 0; i < bugBountyAudits.length; i++) {
			if (i !== index) tBounty.push(bugBountyAudits[i]);
		}
		setBugBountyAudits(tBounty);
	};

	const handleContractAuditLink = (value: string, index: number) => {
		let _contractAudits = [...contractAudits];
		let tempAudits = [];
		for (let i = 0; i < index; i++) {
			tempAudits.push(_contractAudits[i]);
		}
		let audit = _contractAudits[index];

		audit.logolink = value;

		tempAudits.push(audit);

		for (let i = index + 1; i < _contractAudits.length; i++) {
			tempAudits.push(_contractAudits[i]);
		}
		console.log("--------------------", tempAudits)
		setContractAudits(tempAudits);
	};

	const handlePlatformAuditLink = (value: string, index: number) => {
		let _platformAudits = [...platformAudits];
		let tempAudits = [];
		for (let i = 0; i < index; i++) {
			tempAudits.push(_platformAudits[i]);
		}
		let audit = _platformAudits[index];

		audit.logolink = value;

		tempAudits.push(audit);

		for (let i = index + 1; i < _platformAudits.length; i++) {
			tempAudits.push(_platformAudits[i]);
		}

		setPlatformAudits(tempAudits);
	};

	const handleBugBountyAuditLink = (value: string, index: number) => {
		let tempAudits = [];
		for (let i = 0; i < index; i++) {
			tempAudits.push(bugBountyAudits[i]);
		}
		let audit = bugBountyAudits[index];

		audit.logolink = value;

		tempAudits.push(audit);

		for (let i = index + 1; i < bugBountyAudits.length; i++) {
			tempAudits.push(bugBountyAudits[i]);
		}

		setBugBountyAudits(tempAudits);
	};

	const handleContractAudits = (e: any, index: number, type: number) => {
		let _contractAudits = [...contractAudits];
		let tempAudits = [];
		for (let i = 0; i < index; i++) {
			tempAudits.push(_contractAudits[i]);
		}
		let brand = _contractAudits[index];
		if (type === 0) {
			brand.name = e.target.value;
		} else if(type === 1) {
			brand.link = e.target.value;
		}
		tempAudits.push(brand);

		for (let i = index + 1; i < _contractAudits.length; i++) {
			tempAudits.push(_contractAudits[i]);
		}

		setContractAudits(tempAudits);
	};

	const handlePlatformAudits = (e: any, index: number, type: number) => {
		let _platformAudits = [...platformAudits];
		let tempAudits = [];
		for (let i = 0; i < index; i++) {
			tempAudits.push(_platformAudits[i]);
		}
		let audit = _platformAudits[index];
		if (type === 0) {
			audit.name = e.target.value;
		} else {
			audit.link = e.target.value;
		}
		tempAudits.push(audit);

		for (let i = index + 1; i < _platformAudits.length; i++) {
			tempAudits.push(_platformAudits[i]);
		}

		setPlatformAudits(tempAudits);
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

	const handleFileChange = (event: any, index: number, dataFormat: number) => {
		handleUpload(event.target.files[0], index, dataFormat);
	};

	const handleUpload = (file: any, index: number, dataFormat: number) => {
		if (!file) {
			alert('Please upload an image first!');
		}

		const storageRef = ref(storage, `/files/${file.name}`);

		// progress can be paused and resumed. It also exposes progress updates.
		// Receives the storage reference and the file to upload.
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			'state_changed',
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
	
	const handleAddMarket = () => {
		let tMarket = [...marketData];
		tMarket.push({
			name: '',
			logo: '',
			pair: '',
			pairlink: '',
			network: 'ethereum',
		});
		setMarketData(tMarket);
	};

	const handleDeleteMarket = (index: number) => {
		let tMarket = [];
		for (let i = 0; i < marketData.length; i++) {
			if (i !== index) tMarket.push(marketData[i]);
		}
		setMarketData(tMarket);
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

	const handleDeleteMember = (index: number) => {
		let tempList = [];
		console.log(memberList, index);
		for (let i = 0; i < memberList.length; i++) {
			if (i !== index) tempList.push(memberList[i]);
		}
		setMemberList(tempList);
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

	const addNewTeamMember = () => {
		let tMembers = [];
		for (let i = 0; i < memberList.length; i++) {
			tMembers.push(memberList[i]);
		}
		tMembers.push({
			name: '',
			image: '',
			verified: false,
			role: '',
			twitter: '',
			linkedin: '',
			mail: '',
			address: {
				network: 'ethereum',
				address: '',
			},
		});
		setMemberList(tMembers);
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

	const handleSubmitAppForm = async () => {
		if(appStep === 9) {
			setEnableThankyou(false)
			setAppStep(0)
			setAppState({
				...appState,
				openApplyModal: false
			})
		}
		if(appStep === 8) {
      setSubmitting(true)
      try {
        // const { data: {ip} } = await axios.get("https://api.ipify.org/?format=json");
        const data = {
          creator: walletAddress,
          authorName,
          authorEmail,
          authorTelegram,
          authorNationality,
          authorDiscord,
          authorRelation,
          authorIP: "",
          name: projectName,
          logo: projectImage,
          socials: socials,
          description: description,
          platform: platform,
          language: language,
          codebase: codebase,
          contract_addr: address,
          contract_audits: contractAudits,
          platform_audits: platformAudits,
          bug_bounty: bugBountyAudits,	
          mintable,
          multisig_address: multisigAddress,
          distribution_list: distributionList,
          market_data: marketData,
          member: memberList,
          reviewed: "pending",
        }
        const res = await axios.post(BACKEND_SERVER + '/api/project', data);
        if(res.status === 200) {
          setAppStep(9)
          setEnableThankyou(true)
        }
      } catch (e) {
        alert("Error while getting your IP address")
        console.log(e)
      }
      setSubmitting(false)
    }
	}

  useMemo(async() => {
    if(walletAddress) {
      try {
        const {data:{score}} = await axios.get(`${SCORER_ENDPOINT}/registry/score/51/${walletAddress}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer VBlZkarU.5fGCSZ7XPTFewJ7mVOY85DdwF21fD2k8`,
          },
        })
        setScorePoint(parseFloat(score))
      } catch(e) {
        console.log(e)
      }
    }
  }, [walletAddress])

  return (
    <>
      <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none overflow-auto">
        <div className="relative my-6 w-5/6 rounded-xl shadow-xl font-Manrope">
          <button className="absolute top-5 right-5 z-[1]" onClick={() => 
						setAppState({ ...appState, openApplyModal: false })
					}>
            <ExitIcon />
          </button>
          {/*content*/}
          <div className="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none max-h-[90vh]">
            <div className="text-sz18 text-left bg-lightgray relative p-8 rounded-xl flex flex-col space-y-3">
              <div className="text-sz20 text-pink font-pilat text-center font-semibold">
                White Hat DAO Safety Rating Application Form
              </div>
              <div>
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 rounded-t-lg shadow-sm p-6">
                  {appStep === 1 && (
                    <div className="flex flex-1 space-x-4 self-start overflow-auto max-w-full">
                      <div className='flex flex-col space-y-2'>
                        <div className='min-h-[46px] border border-blue rounded-lg shadow-sm px-4 py-2 font-Manrope text-blue whitespace-nowrap'>
                          Your Name
                        </div>
                        <div className='min-h-[46px] border border-blue rounded-lg shadow-sm px-4 py-2 font-Manrope text-blue whitespace-nowrap'>
                          Your Email
                        </div>
                        <div className='min-h-[46px] border border-blue rounded-lg shadow-sm px-4 py-2 font-Manrope text-blue whitespace-nowrap'>
                          Your Telegram Handle
                        </div>
                        {/* <div className='min-h-[46px] border border-blue rounded-lg shadow-sm px-4 py-2 font-Manrope text-blue whitespace-nowrap'>
                          Your Time Zone
                        </div> */}
                        <div className='min-h-[46px] border border-blue rounded-lg shadow-sm px-4 py-2 font-Manrope text-blue whitespace-nowrap'>
                          Your Nationality
                        </div>
                        <div className='min-h-[46px] border border-blue rounded-lg shadow-sm px-4 py-2 font-Manrope text-blue whitespace-nowrap'>
                          Your Discord Handle
                        </div>
                        <div className='min-h-[46px] border border-blue rounded-lg shadow-sm px-4 py-2 font-Manrope text-blue whitespace-nowrap'>
                          Your Role in Project
                        </div>
                      </div>
                      <div className='flex flex-col space-y-2'>
                        <input
                          value={authorName}
                          onChange={(e) => setAuthorName(e.target.value)}
                          className="shadow-inner rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        <input
                          value={authorEmail}
                          onChange={(e) => setAuthorEmail(e.target.value)}
                          className="shadow-inner rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        <input
                          value={authorTelegram}
                          onChange={(e) => setAuthorTelegram(e.target.value)}
                          className="shadow-inner rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        <input
                          value={authorNationality}
                          onChange={(e) => setAuthorNationality(e.target.value)}
                          className="shadow-inner rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        <input
                          value={authorDiscord}
                          onChange={(e) => setAuthorDiscord(e.target.value)}
                          className="shadow-inner rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        <input
                          value={authorRelation}
                          onChange={(e) => setAuthorRelation(e.target.value)}
                          className="shadow-inner rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      {/* <div className='flex flex-col space-y-5 border border-blue rounded-lg shadow-sm p-5'>
                        <div className='flex items-center space-x-4 text-blue'>
                          <img src={gitcoin} alt="" />
                          <span>Gitcoin Passport Verification</span>
                        </div>
                        <div className='flex flex-col rounded-lg bg-black1 p-4 whitespace-nowrap'>
                          <span className='text-green1 mb-2'>Verification Scores</span>
                          <div className="flex items-center space-x-4">
                            <div className="flex flex-col space-y-1">
                              <span className='flex-1 text-green1'># Excellent: 25+{">>"}</span>
                              <span className='flex-1 text-green1'># Average: {"<<"}19</span>
                            </div>
                            <div className="flex flex-col space-y-1">
                              <span className='flex-1 text-green1'># Good: 20+{">>"}</span>
                              <span className='flex-1 text-green1'># Low: {"<<"}15</span>
                            </div>
                          </div>
                          <div className='flex items-center space-x-4 mt-2 text-green1'>
                            <span>Your Score: {scorePoint.toFixed(3)}</span>
                            {scorePoint > 0 &&
                              <div className="px-2 text-black1 bg-green1 font-semibold">
                                {assessScore(scorePoint)}
                              </div>
                            }
                          </div>
                        </div>
                        <a href="https://passport.gitcoin.co/" target="_blank" rel="noreferrer" className="px-4 py-2 border border-blue rounded-lg shadow-sm text-center text-blue">Connect with Gitcoin Passport</a>
                      </div> */}
                    </div>
                  )}
                  {appStep === 2 && (
                    <div className="flex flex-1 flex-col lg:flex-row items-start space-y-3 lg:space-x-5 lg:space-y-0 self-start">
                      <div className="flex flex-col items-start space-y-2">
                        <span className="font-semibold text-blue">Project name</span>
                        <input
                          type="text"
                          id="website-admin"
                          value={projectName}
                          onChange={(e) => setProjectName(e.target.value)}
                          className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Project"
                        />
                        <div className="flex flex-col space-y-2">
                          <span className="font-semibold text-blue">Upload logo</span>
                          <label
                            htmlFor="dropzone-file-projimage"
                            className="h-10 w-28 py-1 rounded-lg shadow-sm border border-blue flex flex-row items-center justify-center"
                          >
                            <img src={upload} alt="upload"></img>
                            <div className="text-sz18">Upload</div>
                            <input
                              id="dropzone-file-projimage"
                              className="hidden"
                              type="file"
                              onChange={(e) => handleFileChange(e, 0, 5)}
                              accept="/image/*"
                            />
                          </label>
                        </div>
                        {projectImage !== "" && (
                          <img
                            className="w-32 h-32 rounded-full object-cover"
                            src={projectImage}
                            alt=""
                          ></img>
                        )}
                      </div>
                      <div className="flex flex-col space-y-2">
                        <span className="font-semibold text-blue">Edit Social Links</span>
                        <div className="flex flex-row items-center space-x-4">
                          <div className="w-40 border border-blue rounded-lg shadow-sm px-4 py-2 flex flex-row items-center justify-center space-x-2">
                            <img src={twitter} alt="twitter"></img>
                            <div className="text-sz18">Twitter</div>
                          </div>
                          <input
                            type="text"
                            id="website-admin"
                            value={socials?.twitter}
                            onChange={(e) => handleSocial(e.target.value, 0)}
                            className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Twitter Link"
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
                            onChange={(e) => handleSocial(e.target.value, 1)}
                            className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Github Link"
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
                            onChange={(e) => handleSocial(e.target.value, 2)}
                            className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Discord Link"
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
                            onChange={(e) => handleSocial(e.target.value, 3)}
                            className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Medium Link"
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
                            onChange={(e) => handleSocial(e.target.value, 4)}
                            className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Website Link"
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
                            onChange={(e) => handleSocial(e.target.value, 5)}
                            className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Telegram Link"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  {appStep === 3 && (
                    <div className="flex flex-1 flex-col lg:flex-row items-start space-y-3 lg:space-x-5 lg:space-y-0 self-start">
                      <div className="flex flex-col items-start space-y-6 text-blue">
                        <div className="flex flex-col space-y-2 w-full">
                          <span className="text-sz18">Short Project Description:</span>
                          <textarea
                            rows={5}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="text-sz14 shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          />
                        </div>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                          <div>
                            <span className="text-sz18">Network</span>
                            <input
                              type="text"
                              id="website-admin"
                              value={platform}
                              onChange={(e) => setPlatform(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="ETH (Multichain)"
                            />
                          </div>
                          <div>
                            <span className="text-sz18">Language Used</span>
                            <input
                              type="text"
                              id="website-admin"
                              value={language}
                              onChange={(e) => setLanguage(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Vyper"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start space-y-6 text-blue">
                        <div className='flex flex-col space-y-2'>
                          <span className="text-sz18">Source Code Link</span>
                          <input
                            type="text"
                            id="website-admin"
                            value={codebase}
                            onChange={(e) => setCodebase(e.target.value)}
                            className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder='https://github.com/contract'
                          />
                        </div>
                        {address?.map((addr: any, index: number) => (
                          <div className="flex flex-row items-center space-x-4">
                            <SelectNetwork
                              index={index}
                              value={addr}
                              handleNetworkChange={handleAddressChange}
                            ></SelectNetwork>
                            <div className="flex flex-row justify-between items-center">
                              <input
                                type="text"
                                id="website-admin"
                                value={addr.address}
                                onChange={(e) => handleAddressValueChange(e.target.value, index)}
                                className="shadow-inner w-4/5 rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Wallet address 0x.."
                              />
                              <img
                                onClick={() => handleDeleteContractAddress(index)}
                                className="w-8 h-8 cursor-pointer"
                                src={deleteImage}
                                alt="delete"
                              ></img>
                            </div>
                          </div>
                        ))}
                        <div
                          onClick={handleAddContractAddress}
                          className="cursor-pointer text-sz18 text-blue flex flex-row items-center space-x-2 border border-blue shadow-sm px-4 py-2 rounded-lg"
                        >
                          <img src={addItem} alt="addItem"></img>
                          <div>Add Contract Address</div>
                        </div>
                      </div>
                    </div>
                  )}
                  {appStep === 4 && (
                    <div className="flex flex-1 flex-col 1xl:flex-row items-start space-y-3 1xl:space-x-8 1xl:space-y-0 self-start">
                      <div className="flex flex-col items-start space-y-2 text-blue">
                        <span className="text-sz20">Token Smart Contract Audits</span>
                        {contractAudits.map((item: any, index: number) => (
                          <div key={index} className="flex flex-row items-center space-x-4">
                            <div className="flex flex-col space-y-2">
                              <div className="text-sz14">Upload logo</div>
                              <label
                                htmlFor={`dropzone-file-sc-audits${index}`}
                                className="h-10 w-28 py-1 rounded-lg shadow-sm border border-blue flex flex-row items-center justify-center"
                              >
                                <img src={upload} alt="upload"></img>
                                <div className="text-sz18">Upload</div>
                                <input
                                  id={`dropzone-file-sc-audits${index}`}
                                  className="hidden"
                                  type="file"
                                  onChange={(e) => handleFileChange(e, index, 0)}
                                  accept="/image/*"
                                />
                              </label>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="text-sz14">Edit project name</div>
                              <input
                                type="text"
                                id="website-admin"
                                value={item.name}
                                onChange={(e) => handleContractAudits(e, index, 0)}
                                className="h-10 text-sz16 shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2 dark:text-white"
                              />
                            </div>
                            <div className="w-1/2 flex flex-col space-y-2 ">
                              <div className="text-sz14">Edit link</div>
                              <div className="flex flex-row justify-between">
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={item.link}
                                  onChange={(e) => handleContractAudits(e, index, 1)}
                                  className="h-10 text-sz16 shadow-inner w-4/5 rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2 dark:text-white"
                                />
                                <img
                                  onClick={() => handleDeleteContractAudit(index)}
                                  className="w-8 h-8 cursor-pointer"
                                  src={deleteImage}
                                  alt="delete"
                                ></img>
                              </div>
                            </div>
                          </div>
                        ))}
                        <div
                          onClick={addNewContractAudit}
                          className="cursor-pointer text-sz18 text-blue flex flex-row items-center space-x-2 border border-blue shadow-sm px-4 py-2 rounded-lg w-full"
                        >
                          <img src={addItem} alt="addItem"></img>
                          <div>Add Audits</div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start space-y-2 text-blue">
                        <span className="text-sz20">Platform Audits</span>
                        {platformAudits.map((item: any, index: number) => (
                          <div className="flex flex-row items-center space-x-4">
                            <div className="flex flex-col space-y-2">
                              <div className="text-sz14">Upload logo</div>
                              <label
                                htmlFor={`dropzone-file-platform${index}`}
                                className="h-10 w-28 py-1 rounded-lg shadow-sm border border-blue flex flex-row items-center justify-center"
                              >
                                <img src={upload} alt="upload"></img>
                                <div className="text-sz18">Upload</div>
                                <input
                                  id={`dropzone-file-platform${index}`}
                                  className="hidden"
                                  type="file"
                                  onChange={(e) => handleFileChange(e, index, 1)}
                                  accept="/image/*"
                                />
                              </label>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="text-sz14">Edit project name</div>
                              <input
                                type="text"
                                id="website-admin"
                                value={item.name}
                                onChange={(e) => handlePlatformAudits(e, index, 0)}
                                className="h-10 text-sz16 shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2 dark:text-white"
                              />
                            </div>
                            <div className="w-1/2 flex flex-col space-y-2">
                              <div className="text-sz14">Edit link</div>
                              <div className="flex flex-row justify-between">
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={item.link}
                                  onChange={(e) => handlePlatformAudits(e, index, 1)}
                                  className="h-10 text-sz16 shadow-inner w-4/5 rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2 dark:text-white"
                                />
                                <img
                                  onClick={() => handleDeletePlatformAudit(index)}
                                  className="w-8 h-8 cursor-pointer"
                                  src={deleteImage}
                                  alt="delete"
                                ></img>
                              </div>
                            </div>
                          </div>
                        ))}
                        <div
                          onClick={addNewPlatformAudit}
                          className="cursor-pointer text-sz18 text-blue flex flex-row items-center space-x-2 border border-blue shadow-sm px-4 py-2 rounded-lg w-full"
                        >
                          <img src={addItem} alt="addItem"></img>
                          <div>Add Platform Audit</div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start space-y-2 text-blue">
                        <span className="text-sz20">Bug Bounty</span>
                        {bugBountyAudits.map((item: any, index: number) => (
                          <div className="flex flex-row items-center space-x-4">
                            <div className="flex flex-col space-y-2">
                              <div className="text-sz14">Upload logo</div>
                              <label
                                htmlFor={`dropzone-file-bug${index}`}
                                className="h-10 w-28 py-1 rounded-lg shadow-sm border border-blue flex flex-row items-center justify-center"
                              >
                                <img src={upload} alt="upload"></img>
                                <div className="text-sz18">Upload</div>
                                <input
                                  id={`dropzone-file-bug${index}`}
                                  className="hidden"
                                  type="file"
                                  onChange={(e) => handleFileChange(e, index, 2)}
                                  accept="/image/*"
                                />
                              </label>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="text-sz14">Edit project name</div>
                              <input
                                type="text"
                                id="website-admin"
                                value={item.name}
                                onChange={(e) => handleBugBountyAudits(e, index, 0)}
                                className="h-10 text-sz16 shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2 dark:text-white"
                              />
                            </div>
                            <div className="w-1/2 flex flex-col space-y-2">
                              <div className="text-sz14">Edit link</div>
                              <div className="flex flex-row justify-between">
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={item.link}
                                  onChange={(e) => handleBugBountyAudits(e, index, 1)}
                                  className="h-10 text-sz16 shadow-inner w-4/5 rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2 dark:text-white"
                                />
                                <img
                                  onClick={() => handleDeleteBountyAudit(index)}
                                  className="w-8 h-8 cursor-pointer"
                                  src={deleteImage}
                                  alt="delete"
                                ></img>
                              </div>
                            </div>
                          </div>
                        ))}
                        <div
                          onClick={addNewBugBounty}
                          className="cursor-pointer text-sz18 text-blue flex flex-row items-center space-x-2 border border-blue shadow-sm px-4 py-2 rounded-lg w-full"
                        >
                          <img src={addItem} alt="addItem"></img>
                          <div>Add Bug Bounty</div>
                        </div>
                      </div>
                    </div>
                  )}
                  {appStep === 5 && (
                    <div className="flex flex-1 flex-col 1xl:flex-row items-start space-y-3 1xl:space-x-20 1xl:space-y-0 self-start">
                      <div className="flex flex-col space-y-2">
                        <div className="flex flex-col space-y-2">
                          <div className="text-sz18 text-lightred">Is this token mintable?</div>
                          <select
                            defaultValue={mintable === true ? 1 : 0}
                            className="h-12 box-border-blue bg-transparent border border-blue text-sz18 rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={(e: any) => {
                              if (e.target.value === "1") setMintable(true);
                              if (e.target.value === "0") setMintable(false);
                            }}
                          >
                            <option value={1}>Yes</option>
                            <option value={0}>No</option>
                          </select>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <div className="text-sz18 text-blue">Edit Multisig Address</div>
                          {multisigAddress?.map((addr: any, index: number) => (
                            <div className="flex flex-row items-center space-x-4">
                              <SelectNetwork
                                index={index}
                                value={addr}
                                handleNetworkChange={handleMultiNetworkChange}
                              ></SelectNetwork>
                              <input
                                type="text"
                                id="website-admin"
                                value={addr?.address}
                                onChange={(e) => handleMultisigAddressChange(e.target.value, index)}
                                className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Wallet address 0x.."
                              />
                              <img
                                onClick={() => handleDeleteMultisigAddress(index)}
                                className="w-8 h-8 cursor-pointer"
                                src={deleteImage}
                                alt="delete"
                              ></img>
                            </div>
                          ))}
                        </div>
                        <div
                          onClick={addMultisigAddress}
                          className="cursor-pointer text-sz18 text-blue flex flex-row items-center space-x-2 border border-blue shadow-sm px-4 py-2 rounded-lg w-full"
                        >
                          <img src={addItem} alt="addItem"></img>
                          <div>Add New Address</div>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <div className="text-sz18 text-lightred">Tokenomics</div>
                        {distributionList.map((item: any, index: number) => (
                          <div className="flex flex-row items-center space-x-4">
                            <div className="flex flex-col space-y-2">
                              <div className="text-sz14">Choose colour</div>
                              <SelectBox
                                type={false}
                                index={index}
                                color={item ? item.color : "Purple"}
                                handleColor={handleDistributionColor}
                              ></SelectBox>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="text-sz14">Percentage (%)</div>
                              <input
                                type="text"
                                id="website-admin"
                                value={item?.percent}
                                onChange={(e) => handleDistribution(e.target.value, index, 1)}
                                className="h-10 text-sz16 shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2 dark:text-white"
                              />
                            </div>
                            <div className="w-1/2 flex flex-col space-y-2">
                              <div className="text-sz14">Tag</div>
                              <div className="flex flex-row justify-between items-center">
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={item?.tag}
                                  onChange={(e) => handleDistribution(e.target.value, index, 2)}
                                  className="h-10 text-sz16 shadow-inner w-5/6 rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2 dark:text-white"
                                />
                                <img
                                  onClick={() => handleDeleteDistribution(index)}
                                  className="w-8 h-8 cursor-pointer"
                                  src={deleteImage}
                                  alt="delete"
                                ></img>
                              </div>
                            </div>
                          </div>
                        ))}
                        <div
                          onClick={addNewDistribution}
                          className="cursor-pointer text-sz18 text-blue flex flex-row items-center space-x-2 border border-blue shadow-sm px-4 py-2 rounded-lg w-full"
                        >
                          <img src={addItem} alt="addItem"></img>
                          <div>Add New Item</div>
                        </div>
                      </div>
                    </div>
                  )}
                  {appStep === 6 && (
                    <div className="flex flex-col space-y-2">
                      <div className="text-sz18 text-lightred">Exchange:</div>
                      <div className="flex gap-3 flex-wrap">
                        {marketData.map((market: any, index: number) => (
                          <>
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
                                    onChange={(e) => handleFileChange(e, index, 6)}
                                    accept="/image/*"
                                  />
                                </label>
                              </div>
                              <div className="flex flex-col space-y-2">
                                <div className="text-sz18 text-blue">Exchange</div>
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={market.name}
                                  onChange={(e) => handleChangeMarket(e.target.value, index, 0)}
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
                                  onChange={(e) => handleChangeMarket(e.target.value, index, 2)}
                                  className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="ETH/HND"
                                />
                              </div>
                              <div className="flex flex-col space-y-2">
                                <div className="text-sz18 text-blue">Pair Link</div>
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={market.pairlink}
                                  onChange={(e) => handleChangeMarket(e.target.value, index, 3)}
                                  className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="https://uniswap.com"
                                />
                              </div>
                              <div className="flex flex-row justify-end">
                                <img
                                  onClick={() => handleDeleteMarket(index)}
                                  className="w-8 h-8 cursor-pointer"
                                  src={deleteImage}
                                  alt="delete"
                                ></img>
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                      <div
                        onClick={handleAddMarket}
                        className="cursor-pointer text-sz18 text-blue flex flex-row items-center space-x-2 border border-blue shadow-sm px-4 py-2 rounded-lg w-full"
                      >
                        <img src={addItem} alt="addItem"></img>
                        <div>Add Exchange info</div>
                      </div>
                    </div>
                  )}
                  {appStep === 7 && (
                    <div className="flex flex-col space-y-2">
                      <div className="text-sz18 text-blue">Team Member:</div>
                      <div className="flex gap-3 flex-wrap">
                        {memberList.map((member: any, index: number) => (
                          <div className="w-full flex flex-col space-y-2">
                            <div className="text-sz18 text-blue">Team Member {index + 1}</div>
                            <div className="flex flex-row justify-between items-start space-x-4">
                              <label
                                htmlFor={`dropzone-file-team${index}`}
                                className="h-10 w-36 py-1 rounded-lg shadow-sm border border-blue flex flex-row items-center justify-center"
                              >
                                <img src={upload} alt="upload"></img>
                                <div className="text-sz18">Upload Pic</div>
                                <input
                                  id={`dropzone-file-team${index}`}
                                  className="hidden"
                                  type="file"
                                  onChange={(e) => handleFileChange(e, index, 4)}
                                  accept="/image/*"
                                />
                              </label>
                              <img
                                onClick={() => handleDeleteMember(index)}
                                className="w-10 h-10 cursor-pointer"
                                src={deleteImage}
                                alt="delete"
                              ></img>
                            </div>
                            <input
                              type="text"
                              id="website-admin"
                              value={member.name}
                              onChange={(e) => handleMember(e.target.value, index, 0)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Name"
                            />
                            <input
                              type="text"
                              id="website-admin"
                              value={member.role}
                              onChange={(e) => handleMember(e.target.value, index, 1)}
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
                                  onChange={(e) => handleTokenAddress(e.target.value, index)}
                                  className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Wallet address 0x.."
                                />
                              </div>
                              <div className="grid grid-cols-3 space-x-2">
                                <div className="flex flex-row items-center justify-end space-x-2">
                                  <img src={twit} alt="twitter"></img>
                                  <div className="text-sz16 text-blue">Twitter</div>
                                </div>
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={member.twitter}
                                  onChange={(e) => handleMember(e.target.value, index, 3)}
                                  className="col-span-2 shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="twitter.com"
                                />
                              </div>
                              <div className="grid grid-cols-3 space-x-2">
                                <div className="flex flex-row items-center justify-end space-x-2">
                                  <img src={linkedin} alt="Linkedin"></img>
                                  <div className="text-sz16 text-blue">Linkedin</div>
                                </div>
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={member.linkedin}
                                  onChange={(e) => handleMember(e.target.value, index, 4)}
                                  className="col-span-2 shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="LInkedin.com"
                                />
                              </div>
                              <div className="grid grid-cols-3 space-x-2">
                                <div className="flex flex-row items-center justify-end space-x-2">
                                  <img src={mail} alt="mail"></img>
                                  <div className="text-sz16 text-blue">Mail</div>
                                </div>
                                <input
                                  type="text"
                                  id="website-admin"
                                  value={member.mail}
                                  onChange={(e) => handleMember(e.target.value, index, 5)}
                                  className="col-span-2 shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="mailbnlala.com"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div
                        onClick={addNewTeamMember}
                        className="cursor-pointer text-sz18 text-blue flex flex-row items-center space-x-2 border border-blue shadow-sm px-4 py-2 rounded-lg w-full"
                      >
                        <img src={addItem} alt="addItem"></img>
                        <div>Add New Member</div>
                      </div>
                    </div>
                  )}
                  {appStep === 8 && (
                    <div className="bg-lightgray rounded-xl shadow-xl flex flex-col">
                      <div className="bg-gray px-6 py-4 rounded-t-xl flex flex-row items-start">
                        <div className="w-full md:pl-4 text-blue font-bold font-pilat text-center">
                          Terms & Conditions
                        </div>
                      </div>
                      <div className="px-[15px] py-5 md:p-8 font-Manrope font-light flex flex-col space-y-10 md:space-y-8">
                        <div className="rounded-md shadow-inner flex flex-col p-[15px] md:p-6 font-medium">
                          I declare that the information provided on this form is accurate and
                          complete to the best of my knowledge. I acknowledge that White Hat DAO
                          reserves the right, in their sole discretion, to determine the suitability
                          of my request. In the event of a rejected request, White Hat DAO is not
                          obligated to provide any reasons for such refusal.
                        </div>
                      </div>
                    </div>
                  )}
                  {appStep === 9 && (
                    <div className="bg-lightgray rounded-xl shadow-xl flex flex-col">
                      <div className="bg-gray px-6 py-4 rounded-t-xl flex flex-row items-start">
                        <div className="w-full md:pl-4 text-blue font-bold font-pilat text-center">
                          Application Submitted!
                        </div>
                      </div>
                      <div className="px-[15px] py-5 md:p-8 font-Manrope font-light flex flex-col space-y-10 md:space-y-8">
                        <div className="rounded-md shadow-inner flex flex-col p-[15px] md:p-6 font-medium">
                          We have received your application. It will be under review by the WHD
                          Safety Rating team. Your project will be enlisted on WHD Safety Rating
                          Leaderboard if accepted. Please feel free to reach out via email, twitter
                          or discord if needed.
                          <br />
                          <br />
                          hello@whitehatdao.com
                          <br />
                          whitehatdao@gmail.com
                        </div>
                      </div>
                    </div>
                  )}
                  <img className="w-32 h-32" src="/favicon.png" alt="" />
                </div>
                <button
                  className="px-2 sm:px-0 py-4 rounded-b-lg bg-blue font-pilat flex flex-col items-center justify-center w-full shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
                  onClick={handleSubmitAppForm} disabled={submitting}
                >
                  <div className="flex flex-row items-center justify-center text-white">
                    {appStep < 8 &&
                      <div className="flex items-center space-x-8">
                        {appStep > 1 &&
                          <button className="flex items-center space-x-3 text-sz16 text-white pr-2" onClick={() => setAppStep(x=>x-=1)}>
                            <img className='w-8' src={back} alt="" />
                            <span>Back</span>
                          </button>}
                        {appStep < 8 &&
                          <button className="flex items-center space-x-3 text-sz16 text-white pr-2" onClick={() => setAppStep(x=>x+=1)}>
                            <span>Next</span>
                            {appStep>1 &&<img className='w-8 rotate-180' src={back} alt="" />}
                          </button>}
                      </div>
                    }
                    {appStep === 8 &&
                      <div className='flex items-center space-x-3'>
                        <span>Submit</span>
                        <img className='w-8 rotate-180' src={submit} alt="" />
                      </div>
                    }
                    {appStep === 9 && "Thank you !!"}
                  </div>
                </button>
              </div>
              <div className="flex justify-center items-center pt-5 space-x-2">
                <button
                  className={"w-8 h-3 bg-blue rounded-xl" + (appStep !== 1 ? " opacity-50" : "")}
                  onClick={() => setAppStep(1)}
                />
                <button
                  className={"w-8 h-3 bg-blue rounded-xl" + (appStep !== 2 ? " opacity-50" : "")}
                  onClick={() => setAppStep(2)}
                />
                <button
                  className={"w-8 h-3 bg-blue rounded-xl" + (appStep !== 3 ? " opacity-50" : "")}
                  onClick={() => setAppStep(3)}
                />
                <button
                  className={"w-8 h-3 bg-blue rounded-xl" + (appStep !== 4 ? " opacity-50" : "")}
                  onClick={() => setAppStep(4)}
                />
                <button
                  className={"w-8 h-3 bg-blue rounded-xl" + (appStep !== 5 ? " opacity-50" : "")}
                  onClick={() => setAppStep(5)}
                />
                <button
                  className={"w-8 h-3 bg-blue rounded-xl" + (appStep !== 6 ? " opacity-50" : "")}
                  onClick={() => setAppStep(6)}
                />
                <button
                  className={"w-8 h-3 bg-blue rounded-xl" + (appStep !== 7 ? " opacity-50" : "")}
                  onClick={() => setAppStep(7)}
                />
                <button
                  className={"w-8 h-3 bg-blue rounded-xl" + (appStep !== 8 ? " opacity-50" : "")}
                  onClick={() => setAppStep(8)}
                />
                {enableThankyou && (
                  <button
                    className={"w-8 h-3 bg-blue rounded-xl" + (appStep !== 9 ? " opacity-50" : "")}
                    onClick={() => setAppStep(9)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
};

export default ApplicationModal;
