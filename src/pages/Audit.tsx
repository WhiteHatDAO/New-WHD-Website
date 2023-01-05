import auditFileLink from "../assets/images/audit/files_icon.png";
import info from "../assets/images/dao/info.svg";
import audit from "../assets/images/audit/audit.png";

import step1 from "../assets/images/audit/step1.svg";
import step2 from "../assets/images/audit/step2.svg";
import step3 from "../assets/images/audit/step3.svg";
import step4 from "../assets/images/audit/step4.svg";
import step5 from "../assets/images/audit/step5.svg";

import arrow from "../assets/images/audit/arrow.svg";

import searchImage from "../assets/images/search.svg";
// import auditWHD from "../assets/images/auditWHD.svg";
// import auditExt from "../assets/images/auditExt.svg";
import addItem from "../assets/images/addItem.png";

import CircleProgressBar from "../components/CircleProgressBar";

import prevImage from "../assets/images/prev.svg";
import nextImage from "../assets/images/next.svg";
import save from "../assets/images/modal/save.png";
import discard from "../assets/images/modal/discard.png";
// import edit from "../assets/images/edit.png";

import { FormatYMD } from "../utils/utils";
import { useState, useEffect } from "react";

import axios from "axios";
import { BACKEND_SERVER } from "../global/global";
import { useNavigate } from "react-router-dom";
import { useCoingeckoAPI } from "../utils/useCoingeckoAPI";

interface AuditProps {
  auditProjects: any[];
  mainProData: any;
  count: number;
  handleCount: (count: number) => void;
}

const Audit = ({
  auditProjects,
  mainProData,
  count,
  handleCount,
}: AuditProps) => {
  const navigate = useNavigate();

  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showThirdModal, setShowThirdModal] = useState(false);

	const {fetchTokensData } = useCoingeckoAPI();
  const [diligenceAuditing, setDiligenceAuditing] = useState<string>();
  const [diligenceAuditingTxt, setDiligenceAuditingTxt] = useState<string>();
  const [diligenceAuditingNote, setDiligenceAuditingNote] = useState<string>();
  const [diligenceAuditingBtn, setDiligenceAuditingBtn] = useState<string>();
  const [diligenceAuditingBtnLink, setDiligenceAuditingBtnLink] =
    useState<string>();
  const [terms, setTerms] = useState<string>();
  const [termsText, setTermsText] = useState<string[]>([]);
  const [auditReport, setAuditReport] = useState<string>();
  const [auditReportText, setAuditReportText] = useState<string>();
	const [tokensData, setTokensData] = useState<any[]>([]);

  const [searchText, setSearchText] = useState<string>("");
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
	const [page, setPage] = useState(0);

  useEffect(() => {
    if (auditProjects && searchText.length === 0) {
      let projects = auditProjects;
      setFilteredProjects(projects);
    }
  }, [auditProjects, searchText.length]);

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

  const prev = () => (page > 0) && setPage(x=>x-=1)
	const next = () => (page < Math.ceil(filteredProjects.length / 10) - 1) && setPage(x=>x+=1)

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

  useEffect(() => {
    if (auditProjects && mainProData) {
      setDiligenceAuditing(mainProData.audit.diligence_auditing);
      setDiligenceAuditingTxt(mainProData.audit.diligence_auditing_text);
      setDiligenceAuditingNote(mainProData.audit.diligence_auditing_note);
      setDiligenceAuditingBtn(mainProData.audit.diligence_auditing_button);
      setDiligenceAuditingBtnLink(
        mainProData.audit.diligence_auditing_button_link
      );
      setTerms(mainProData.audit.terms);
      setTermsText(mainProData.audit.terms_text);
      setAuditReport(mainProData.audit.audit_report);
      setAuditReportText(mainProData.audit.audit_report_text);
    }
  }, [auditProjects, mainProData]);

  const addNewItem = () => {
    let tempArr = [...termsText];
    tempArr.push("");
    setTermsText(tempArr);
  };

  const handleTermsText = (value: string, index: number) => {
    let tempArr = [];
    for (let i = 0; i < index; i++) {
      tempArr.push(termsText[i]);
    }

    tempArr.push(value);

    for (let i = index + 1; i < termsText.length; i++) {
      tempArr.push(termsText[i]);
    }

    setTermsText(tempArr);
  };

  const handleSaveFirstModal = async () => {
    try {
      const data = {
        id: mainProData._id,
        home: mainProData.home,
        dao: mainProData.dao,
        rating: mainProData.rating,
        audit: {
          diligence_auditing: diligenceAuditing,
          diligence_auditing_text: diligenceAuditingTxt,
          diligence_auditing_note: diligenceAuditingNote,
          diligence_auditing_button: diligenceAuditingBtn,
          diligence_auditing_button_link: diligenceAuditingBtnLink,
          terms: mainProData.audit.terms,
          terms_text: mainProData.audit.terms_text,
          audit_report: mainProData.audit.audit_report,
          audit_report_text: mainProData.audit.audit_report_text,
        },
      };

      const res = await axios.put(BACKEND_SERVER + "/api/main-pro", data);

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
    setDiligenceAuditing(mainProData.audit.diligence_auditing);
    setDiligenceAuditingTxt(mainProData.audit.diligence_auditing_text);
    setDiligenceAuditingNote(mainProData.audit.diligence_auditing_note);
    setDiligenceAuditingBtn(mainProData.audit.diligence_auditing_button);
    setDiligenceAuditingBtnLink(
      mainProData.audit.diligence_auditing_button_link
    );
    setShowFirstModal(false);
  };

  const handleSaveSecondModal = async () => {
    try {
      const data = {
        id: mainProData._id,
        home: mainProData.home,
        dao: mainProData.dao,
        rating: mainProData.rating,
        audit: {
          diligence_auditing: mainProData.audit.diligence_auditing,
          diligence_auditing_text: mainProData.audit.diligence_auditing_text,
          diligence_auditing_note: mainProData.audit.diligence_auditing_note,
          diligence_auditing_button:
          mainProData.audit.diligence_auditing_button,
          diligence_auditing_button_link:
            mainProData.audit.diligence_auditing_button_link,
          terms: terms,
          terms_text: termsText,
          audit_report: mainProData.audit.audit_report,
          audit_report_text: mainProData.audit.audit_report_text,
        },
      };

      const res = await axios.put(BACKEND_SERVER + "/api/main-pro", data);

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
    setTerms(mainProData.audit.terms);
    setTermsText(mainProData.audit.terms_text);
    setShowSecondModal(false);
  };

  const handleSaveThirdModal = async () => {
    try {
      const data = {
        id: mainProData._id,
        home: mainProData.home,
        dao: mainProData.dao,
        rating: mainProData.rating,
        audit: {
          diligence_auditing: mainProData.audit.diligence_auditing,
          diligence_auditing_text: mainProData.audit.diligence_auditing_text,
          diligence_auditing_note: mainProData.audit.diligence_auditing_note,
          diligence_auditing_button:
            mainProData.audit.diligence_auditing_button,
          diligence_auditing_button_link:
            mainProData.audit.diligence_auditing_button_link,
          terms: mainProData.audit.terms,
          terms_text: mainProData.audit.terms_text,
          audit_report: auditReport,
          audit_report_text: auditReportText,
        },
      };

      const res = await axios.put(BACKEND_SERVER + "/api/main-pro", data);

      if (res.status === 200) {
        let c = count + 1;
        handleCount(c);
      }
    } catch (e) {
      console.log(e);
    }
    setShowThirdModal(false);
  };

  const handleDiscardThirdModal = () => {
    setAuditReport(mainProData.audit.audit_report);
    setAuditReportText(mainProData.audit.audit_report_text);
    setShowThirdModal(false);
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
        <div className="mx-[7px] md:mx-4 my-10 flex flex-col space-y-[60px] md:space-y-5">
          <div className="bg-lightgray rounded-xl shadow-xl flex flex-col">
            <div className="bg-gray px-6 py-4 rounded-t-xl flex flex-row items-start">
              <div className="w-full md:pl-4 text-blue text-sz16 md:text-sz20 leading-ht20 md:leading-auto font-bold font-pilat text-center">
                {mainProData.audit.diligence_auditing}
              </div>
              {/* <div
                className="text-sz18 text-blue font-Manrope flex flex-row items-center space-x-2 cursor-pointer"
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
                            <div className="text-sz18 text-blue">Discard</div>
                          </div>
                        </div>
                        {/*body*/}
                        <div className="text-sz18 text-left bg-lightgray relative p-8 rounded-b-xl flex flex-col space-y-3">
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz18 text-blue">
                              Edit H1 Text
                            </div>
                            <input
                              type="text"
                              id="website-admin"
                              value={diligenceAuditing}
                              onChange={(e) =>
                                setDiligenceAuditing(e.target.value)
                              }
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Due-Diligence / Auditing"
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="text-blue">Text</div>
                            <textarea
                              rows={4}
                              value={diligenceAuditingTxt}
                              onChange={(e) =>
                                setDiligenceAuditingTxt(e.target.value)
                              }
                              className="text-sz14 shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="We provide Due-Diligence, Safety Rating and a Comprehensive Security Assessment of your smart contract and blockchain code to identify vulnerabilities and recommend ways to fix them."
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="text-blue">Note</div>
                            <textarea
                              rows={3}
                              value={diligenceAuditingNote}
                              onChange={(e) =>
                                setDiligenceAuditingNote(e.target.value)
                              }
                              className="text-sz14 shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Our industry-leading audit methodology and tooling includes a review of your code’s logic, with a mathematical approach to ensure your program works as intended."
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz18 text-blue">
                              Edit Button{" "}
                            </div>
                            <input
                              type="text"
                              id="website-admin"
                              value={diligenceAuditingBtn}
                              onChange={(e) =>
                                setDiligenceAuditingBtn(e.target.value)
                              }
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Apply For Smart Contract Audit"
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz18 text-blue">
                              Edit Button Link
                            </div>
                            <input
                              type="text"
                              id="website-admin"
                              value={diligenceAuditingBtnLink}
                              onChange={(e) =>
                                setDiligenceAuditingBtnLink(e.target.value)
                              }
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="https://example.link"
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
            <div className="px-[15px] py-5 md:p-8 flex flex-col font-Manrope font-light space-y-5 md:space-y-4">
              <div className="text-sz16 md:text-sz18 leading-ht24.66 md:leading-auto font-medium text-grey">
                {mainProData.audit.diligence_auditing_text}
              </div>
              <div className="flex flex-col md:flex-row items-start gap-[30px] md:gap-8">
                <div className="flex flex-col space-y-5 md:space-y-8">
                  <div className="p-[15px] pb-[73px] md:p-6 shadow-inner rounded-md text-blue font-Manrope flex flex-col space-y-5 md:space-y-4">
                    <div className="w-full pb-[10px] md:pb-4 border-b border-blue flex flex-row items-center space-x-2 text-sz18">
                      <img src={info} alt="info"></img>
                      <div>Note!</div>
                    </div>
                    <div className="text-sz12 md:text-sz18 leading-ht18.49 md:leading-auto font-medium">
                      {mainProData.audit.diligence_auditing_note}
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 rounded-md shadow-sm p-[10px] md:p-4 border border-blue text-pink text-sz16 md:text-sz18 flex flex-row items-center justify-center space-x-2 md:space-x-0">
                    <div>
                      <a className="font-Manrope font-bold md:font-small text-sz16 leading-ht25 md:leading-auto"
                        href={mainProData.audit.diligence_auditing_button_link} target="_blank" rel="noreferrer"
                      >
                        {mainProData.audit.diligence_auditing_button}
                      </a>
                    </div>
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
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <img src={audit} alt="audit"></img>
              </div>
            </div>
          </div>
          <div className="font-Manrope flex flex-col text-center space-y-10 md:space-y-8">
            <div className="font-pilat font-semibold text-sz20 leading-ht25.7">
              Our Services Includes
            </div>
            <div className="font-light grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
              <div className="py-4 md:p-4 shadow-xl border border-blue rounded-md flex flex-col text-center space-y-5 md:space-y-0">
                <div className="font-bold md:font-small font-pilat text-sz20 md:text-sz18 leading-ht30 text-blue">
                  Identify Errors & Risks
                </div>
                <div className="text-sz12 font-medium leading-ht18.49 text-grey">
                  Have your code reviewed by W-HAT team of seasoned security
                  experts.
                </div>
              </div>
              <div className="py-4 md:p-4 shadow-xl border border-blue rounded-md flex flex-col text-center space-y-5 md:space-y-0">
                <div className="font-bold md:font-small font-pilat text-sz20 md:text-sz18 leading-ht30 text-blue">
                  Remediate Vulnerabilities
                </div>
                <div className="text-sz12 font-medium leading-ht18.49 text-grey">
                  Receive reporting and recommendations on how to remediate
                  vulnerabilities.
                </div>
              </div>
              <div className="py-4 md:p-4 shadow-xl border border-blue rounded-md flex flex-col text-center space-y-5 md:space-y-0">
                <div className="font-bold md:font-small font-pilat text-sz20 md:text-sz18 leading-ht30 text-blue">
                  Verify Your Contracts
                </div>
                <div className="text-sz12 font-medium leading-ht18.49 text-grey">
                  Prove the correctness of your contract code with highly
                  scalable Formal Verification techniques.
                </div>
              </div>
            </div>
          </div>
          <div className="bg-lightgray rounded-xl shadow-xl flex flex-col">
            <div className="bg-gray px-6 py-4 rounded-t-xl">
              <div className="md:pl-4 text-blue text-sz16 md:text-sz20 leading-ht20 font-bold font-pilat text-center">
                Audit Process
              </div>
            </div>
            <div className="py-8 md:p-8 flex flex-col font-Manrope font-light space-y-[30px] md:space-y-4">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between">
                <div className="md:w-40 text-center flex flex-col items-center space-y-[10px] md:space-y-2">
                  <div className="w-32 h-32 rounded-[40px] shadow-inner flex flex-col items-center justify-center">
                    <img src={step1} alt="step1"></img>
                  </div>
                  <div className="text-pink text-sz16 leading-ht20 font-medium">Step 1</div>
                  <div className="text-sz24 md:text-sz18 font-semibold leading-ht30 md:leading-auto text-grey">Share Source Code</div>
                </div>
                <img
                  className="mb-8 md:mb-0 mt-8 md:mt-14 transform rotate-90 md:rotate-0"
                  src={arrow}
                  alt="arrow"
                ></img>
                <div className="md:w-40 text-center flex flex-col items-center space-y-[10px] md:space-y-2">
                  <div className="w-32 h-32 rounded-[40px] shadow-inner flex flex-col items-center justify-center">
                    <img src={step2} alt="step2"></img>
                  </div>
                  <div className="text-pink text-sz16 leading-ht20 font-medium">Step 2</div>
                  <div className="text-sz24 md:text-sz18 font-semibold leading-ht30 md:leading-auto text-grey">Review & Quote</div>
                </div>
                <img
                  className="mb-8 md:mb-0 mt-8 md:mt-14 transform rotate-90 md:rotate-0"
                  src={arrow}
                  alt="arrow"
                ></img>
                <div className="md:w-40 text-center flex flex-col items-center space-y-[10px] md:space-y-2">
                  <div className="w-32 h-32 rounded-[40px] shadow-inner flex flex-col items-center justify-center">
                    <img src={step3} alt="step3"></img>
                  </div>
                  <div className="text-pink text-sz16 leading-ht20 font-medium">Step 3</div>
                  <div className="text-sz24 md:text-sz18 font-semibold leading-ht30 md:leading-auto text-grey">
                    Begin Vulnerability Inspection
                  </div>
                </div>
                <img
                  className="mb-8 md:mb-0 mt-8 md:mt-14 transform rotate-90 md:rotate-0"
                  src={arrow}
                  alt="arrow"
                ></img>
                <div className="md:w-40 text-center flex flex-col items-center space-y-[10px] md:space-y-2">
                  <div className="w-32 h-32 rounded-[40px] shadow-inner flex flex-col items-center justify-center">
                    <img src={step4} alt="step4"></img>
                  </div>
                  <div className="text-pink text-sz16 leading-ht20 font-medium">Step 4</div>
                  <div className="text-sz24 md:text-sz18 font-semibold leading-ht30 md:leading-auto text-grey">Suggest Remediations</div>
                </div>
                <img
                  className="mb-8 md:mb-0 mt-8 md:mt-14 transform rotate-90 md:rotate-0"
                  src={arrow}
                  alt="arrow"
                ></img>
                <div className="md:w-40 text-center flex flex-col items-center space-y-[10px] md:space-y-2">
                  <div className="w-32 h-32 rounded-[40px] shadow-inner flex flex-col items-center justify-center">
                    <img src={step5} alt="step5"></img>
                  </div>
                  <div className="text-pink text-sz16 leading-ht20 font-medium">Step 5</div>
                  <div className="text-sz24 md:text-sz18 font-semibold leading-ht30 md:leading-auto text-grey">Deliver Report</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-lightgray rounded-xl shadow-xl flex flex-col">
            <div className="bg-gray px-6 py-4 rounded-t-xl flex flex-row items-start">
              <div className="w-full md:pl-4 text-blue text-sz16 md:text-sz20 leading-ht20 font-bold font-pilat text-center">
                {mainProData.audit.terms}
              </div>
              {/* <div
                className="text-sz18 text-blue font-Manrope flex flex-row items-center space-x-2 cursor-pointer"
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
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz18 text-blue">
                              Edit H1 Text
                            </div>
                            <input
                              type="text"
                              id="website-admin"
                              value={terms}
                              onChange={(e) => setTerms(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Due-Diligence / Auditing"
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="text-blue">Edit Text</div>
                            {termsText.map((term: string, index: number) => (
                              <input
                                type="text"
                                id="website-admin"
                                value={term}
                                onChange={(e) =>
                                  handleTermsText(e.target.value, index)
                                }
                                className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Due-Diligence / Auditing"
                              />
                            ))}
                          </div>
                          <div
                            className="text-sz18 text-blue flex flex-row items-center space-x-2 cursor-pointer"
                            onClick={() => addNewItem()}
                          >
                            <img src={addItem} alt="addItem"></img>
                            <div>Add Item</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>
            <div className="px-[15px] pt-5 pb-[112px] md:p-8 flex flex-col font-Manrope font-light space-y-4">
              <div
                className="text-sz16 md:text-sz18 p-6 rounded-md shadow-inner flex flex-col space-y-4"
              >
                <ul className="pl-8 list-outside list-disc space-y-4">
                  {mainProData.audit.terms_text.map((text: string, i: number) => (
                    <li key={i} className="text-blue">
                      <div className="text-black">{text}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-lightgray rounded-xl shadow-xl flex flex-col">
            <div className="bg-gray px-6 py-4 rounded-t-xl flex flex-row items-start">
              <div className="w-full pl-4 text-blue text-sz16 md:text-sz20 font-bold font-pilat text-center">
                {mainProData.audit.audit_report}
              </div>
              {/* <div
                className="text-sz18 text-blue font-Manrope flex flex-row items-center space-x-2 cursor-pointer"
                onClick={() => setShowThirdModal(true)}
              >
                <img src={edit} alt="edit"></img>
                <div>Edit</div>
              </div> */}
              {showThirdModal ? (
                <>
                  <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative my-6 w-5/6 md:w-2/3 lg:w-3/5 xl:w-1/3 rounded-xl shadow-xl font-Manrope">
                      {/*content*/}
                      <div className="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex flex-row bg-gray items-center px-8 py-4 space-x-8 rounded-t-lg">
                          <div
                            className="flex flex-row items-center cursor-pointer gap-2"
                            onClick={handleSaveThirdModal}
                          >
                            <img src={save} alt="save"></img>
                            <div className="text-sz18 text-pink">Save</div>
                          </div>
                          <div
                            className="flex flex-row items-center cursor-pointer gap-2"
                            onClick={handleDiscardThirdModal}
                          >
                            <img src={discard} alt="discard"></img>
                            <div className="text-sz18 text-blue">Discard</div>
                          </div>
                        </div>
                        {/*body*/}
                        <div className="text-sz18 text-left bg-lightgray relative p-8 rounded-b-xl flex flex-col space-y-3">
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz18 text-blue">
                              Edit H1 Text
                            </div>
                            <input
                              type="text"
                              id="website-admin"
                              value={auditReport}
                              onChange={(e) => setAuditReport(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Due-Diligence / Auditing"
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="text-blue">Text</div>
                            <textarea
                              rows={3}
                              value={auditReportText}
                              onChange={(e) =>
                                setAuditReportText(e.target.value)
                              }
                              className="text-sz14 shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Our audit reports are custom, thorough, and transparent. The report will contain the details of any identified vulnerabilities and classify them by severity (Critical, Major, Medium, Low, and Informational), along with suggested remediations."
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
            <div className="px-[15px] pt-5 pb-[112px] md:p-8 flex flex-col font-Manrope font-light space-y-[80px] md:space-y-4">
              <div className="text-sz12 md:text-sz18 font-medium leading-ht18.49 md:leading-auto text-grey">
                {mainProData.audit.audit_report_text}
              </div>
              <div className="text-sz12 md:text-sz18 font-medium leading-ht18.49 md:leading-auto text-grey">
                With every successful audit, we’ll provide you with a listing on
                the W-HAT Safety rating leaderboard that is shared publicly with
                the entire crypto community. The Leaderboard contains the
                details of projects alongside their audit reports, as well as
                the community’s security sentiment of the project.
              </div>
            </div>
          </div>
          <div className="pt-[10px] md:py-10 flex flex-col space-y-8">
            <div className="font-pilat text-sz18 md:text-sz20 text-center">
              Audit Leaderboard
            </div>
            <div className="text-black font-Manrope font-light flex flex-row flex-wrap items-center gap-4">
              <select
                id="role" defaultValue="choose"
                onChange={handleChangeNetwork}
                className="w-72 h-12 box-border-blue bg-transparent border border-blue text-sz18 rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                className="w-72 h-12 box-border-blue bg-transparent text-sz18 rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="choose">
                  Choose a category
                </option>
                <option value="Defi">Defi</option>
                <option value="NFT">NFT</option>
                <option value="Token">Token</option>
              </select>
              <div className="w-full flex">
                <div
                  onClick={handleSearchItem}
                  className="inline-flex items-center px-3 text-sm text-gray-900 bg-blue rounded-l-md border border-r-0 border-blue md:border-gray"
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
            <div className="mt-10 mb-[30px] md:my-8 shadow-xl relative overflow-x-auto rounded-lg">
              <table className="w-full font-Manrope font-light text-sm text-center text-black">
                <thead className="bg-gray text-blue uppercase border-b border-blue">
                  <tr>
                    <th scope="col" className="px-6 py-4"></th>
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
                      onClick={() => navigate(`/safety-ratings/rating/${index}`)}
                      className={
                        filteredProjects?.length === index + 1
                          ? "cursor-pointer bg-lightgray border-none"
                          : "cursor-pointer bg-lightgray border-b border-blue"
                      }
                    >
                      <td className="px-6 py-3">
                        <img className="rounded-full w-8 h-8" src={project.logo} alt="" />
                      </td>
                      <td className="px-6 py-3">{project.name}</td>
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
                        {/* {(project.price === -1 || project.price === undefined) ? "N/A" : "$ "+project.price} */}
                      </td>
                      <td className="px-6 py-3">
                        {
												  (tokensData && tokensData[index]) ? (
												    ((tokensData[index]?.market_cap === 0) ? "N/A" : (tokensData[index]?.market_cap !== undefined && "$ ") + tokensData[index]?.market_cap )
												  ) : "N/A"
												}
                        {/* {(project.market === "-1" || project.market === undefined)
                          ? "N/A"
                          : "$ "+FormatNumber(project.market)} */}
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
              <div className="shadow-sm w-12 h-12 flex flex-row items-center justify-center" onClick={prev}>
                <img src={prevImage} alt="prev"></img>
              </div>
							{Array(Math.ceil(filteredProjects.length / 10)).fill("").map((x, i) =>
								<div key={i} className={(page === i ? "shadow-sm " : "") + "w-12 h-12 flex flex-row items-center justify-center cursor-pointer"} onClick={() => setPage(i)}>
									{i+1}
								</div>
							)}
              <div className="shadow-sm w-12 h-12 flex flex-row items-center justify-center" onClick={next}>
                <img src={nextImage} alt="next"></img>
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

export default Audit;
