import info from "../assets/images/dao/info.svg";
import governance_img from "../assets/images/dao/governance.png";
import save from "../assets/images/modal/save.png";
import discard from "../assets/images/modal/discard.png";
import edit from "../assets/images/edit.png";
import Circle from "../components/Circle";

import axios from "axios";
import { BACKEND_SERVER } from "../global/global";

import { useState, useEffect } from "react";

const responsibilities = [
  "Facilitate weekly meetings Facilitate work sessions",
  "Facilitate work sessions",
  "Take and facilitate meeting notes",
  "Ensure that members are up to speed with important project info",
  "Assist in the formulation of key deliverables",
  "Track and remind team of action items",
  "Organize and direct people to the right information",
  "Liaison with others to ensure that objectives are aligned",
  "Facilitate fair compensation to DAO members for their contribution",
  "Project management",
  "Team management",
  "Technical Development",
  "Payroll, Quotation & Bookkeeping  ( manage - A/C payable - A/C receivable )",
  "Client management ",
  "Advertising / Marketing",
  "Treasury management",
  "Community management",
  "Promote WHD and it's values ",
  "Maintain and moderating Community to create safe environment",
];

const dev_responsibilities = [
  "Research, design, develop, and test blockchain technologies",
  "Brainstorm and help evaluate applications for new tools and technologies as they continually evolve",
  "Maintain and extend current client- and server-side applications responsible for integration and business logic",
  "Payroll, Quotation & Bookkeeping  ( manage - A/C payable - A/C receivable )",
  "Be involved in the global blockchain community—work on implementing and integrating the latest improvement proposals",
  "Demonstrate and provide information about project products/services",
  "Document new solutions as well as maintaining that of existing ones",
];

const ambassadors = [
  "Promote WHD and it's values ",
  "Oversee development of social media plan/strategy",
  "Liaison with content promoter and coordinator to direct talents/influencers to projects",
  "Create a positive image for the project and encourage people to join",
  "Mention and direct to the DAO on social media platforms",
  "Mention and direct to the DAO on social media platforms",
  "Formulate strategies for growing users/followers",
  "Maintain and moderating Community to create safe environment ",
  "On-boarding newcomers into the DAO",
];

interface daoProps {
  mainProData: any;
  count: number,
  handleCount: (count: number) => void
}

const Dao = ({ mainProData, count, handleCount }: daoProps) => {
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showThirdModal, setShowThirdModal] = useState(false);

  const [governance, setGovernance] = useState<string>();
  const [summary, setSummary] = useState<string>();
  const [governanceText, setGovernanceText] = useState<string>();
  const [compFeature, setCompFeature] = useState<string[]>([]);
  const [phase, setPhase] = useState<string[]>([]);
  const [strategyTitle, setStrategyTitle] = useState<string>();
  const [strategy1Btn, setStrategy1Btn] = useState<string>();
  const [strategy1BtnText, setStrategy1BtnText] = useState<string>();
  const [strategy2Btn, setStrategy2Btn] = useState<string>();
  const [strategy2BtnText, setStrategy2BtnText] = useState<string>();
  const [strategyText1, setStrategyText1] = useState<string>();
  const [strategyText2, setStrategyText2] = useState<string>();
  const [coreText, setCoreText] = useState<string>();
  const [coreSafetySecurity, setCoreSafetySecurity] = useState<string>();
  const [coreTransparency, setCoreTransparency] = useState<string>();
  const [coreSelfSovereignty, setCoreSelfSovereignty] = useState<string>();
  const [coreFairCompensation, setCoreFairCompensation] = useState<string>();
  const [coreIntegrity, setCoreIntegrity] = useState<string>();
  const [coreHonesty, setCoreHonesty] = useState<string>();
  const [coreCuriosity, setCoreCuriosity] = useState<string>();

  useEffect(() => {
    if (mainProData) {
      setGovernance(mainProData.dao.governance)
      setSummary(mainProData.dao.summary)
      setGovernanceText(mainProData.dao.governance_text)
      setStrategyTitle(mainProData.dao.strategy_title)
      setStrategy1Btn(mainProData.dao.strategy_first_button)
      setStrategy1BtnText(mainProData.dao.strategy_first_button_text)
      setStrategy2Btn(mainProData.dao.strategy_second_button)
      setStrategy2BtnText(mainProData.dao.strategy_second_button_text)
      setStrategyText1(mainProData.dao.strategy_text_first)
      setStrategyText2(mainProData.dao.strategy_text_second)
      setCoreText(mainProData.dao.core_text)
      setCoreSafetySecurity(mainProData.dao.core_safety_security)
      setCoreTransparency(mainProData.dao.core_transparency)
      setCoreSelfSovereignty(mainProData.dao.core_self_sovereignty)
      setCoreFairCompensation(mainProData.dao.core_fair_compensation)
      setCoreIntegrity(mainProData.dao.core_integrity)
      setCoreHonesty(mainProData.dao.core_honesty)
      setCoreCuriosity(mainProData.dao.core_curiosity)
    }
  }, [mainProData]);

  const handleCompFeature = (e: any, index: number) => {
    let tComp = [];
    for (let i = 0; i < index; i++) {
      tComp.push(compFeature[i]);
    }
    tComp.push(e.target.value);
    for (let i = index + 1; i < compFeature.length; i++) {
      tComp.push(compFeature[i]);
    }
    setCompFeature(tComp);
  };

  const handlePhase = (e: any, index: number) => {
    let tPhase = [];
    for (let i = 0; i < index; i++) {
      tPhase.push(phase[i]);
    }
    tPhase.push(e.target.value);
    for (let i = index + 1; i < phase.length; i++) {
      tPhase.push(phase[i]);
    }
    setPhase(tPhase);
  };

  const handleSaveFirstModal = async() => {
    try {
      const data = {
        id: mainProData._id,
        home: mainProData.home,
        dao: {
          governance: governance,
          summary: summary,
          governance_text: governanceText,
          component_feature: compFeature,
          phase_design: phase,
          strategy_title: mainProData.dao.strategy_title,
          strategy_first_button: mainProData.dao.strategy_first_button,
          strategy_first_button_text: mainProData.dao.strategy_first_button_text,
          strategy_second_button: mainProData.dao.strategy_second_button,
          strategy_second_button_text: mainProData.dao.strategy_second_button_text,
          strategy_text_first: mainProData.dao.strategy_text_first,
          strategy_text_second: mainProData.dao.strategy_text_second,
          core_text: mainProData.dao.core_text,
          core_safety_security: mainProData.dao.core_safety_security,
          core_transparency: mainProData.dao.core_transparency,
          core_self_sovereignty: mainProData.dao.core_self_sovereignty,
          core_fair_compensation: mainProData.dao.core_fair_compensation,
          core_integrity: mainProData.dao.core_integrity,
          core_honesty: mainProData.dao.core_honesty,
          core_curiosity: mainProData.dao.core_curiosity
        },
        rating: mainProData.rating,
        audit: mainProData.audit,
      };

      const res = await axios.put(BACKEND_SERVER + "/api/main-pro", data);

      if(res.status === 200) {
        let c = count + 1
        handleCount(c)
      }
    } catch (e) {
      console.log(e);
    }
    setShowFirstModal(false)
  };

  const handleDiscardFirstModal = () => {
    setGovernance(mainProData.dao.governance)
    setSummary(mainProData.dao.summary)
    setGovernanceText(mainProData.dao.governance_text)
    setShowFirstModal(false)
  }

  const handleSaveSecondModal = async() => {
    try {
      const data = {
        id: mainProData._id,
        home: mainProData.home,
        dao: {
          governance: mainProData.dao.governance,
          summary: mainProData.dao.summary,
          governance_text: mainProData.dao.governance_text,
          component_feature: mainProData.dao.component_feature,
          phase_design: mainProData.dao.phase_design,
          strategy_title: strategyTitle,
          strategy_first_button: strategy1Btn,
          strategy_first_button_text: strategy1BtnText,
          strategy_second_button: strategy2Btn,
          strategy_second_button_text: strategy2BtnText,
          strategy_text_first: strategyText1,
          strategy_text_second: strategyText2,
          core_text: mainProData.dao.core_text,
          core_safety_security: mainProData.dao.core_safety_security,
          core_transparency: mainProData.dao.core_transparency,
          core_self_sovereignty: mainProData.dao.core_self_sovereignty,
          core_fair_compensation: mainProData.dao.core_fair_compensation,
          core_integrity: mainProData.dao.core_integrity,
          core_honesty: mainProData.dao.core_honesty,
          core_curiosity: mainProData.dao.core_curiosity
        },
        rating: mainProData.rating,
        audit: mainProData.audit,
      };

      const res = await axios.put(BACKEND_SERVER + "/api/main-pro", data);

      if(res.status === 200) {
        let c = count + 1
        handleCount(c)
      }
    } catch (e) {
      console.log(e);
    }
    setShowSecondModal(false)
  };

  const handleDiscardSecondModal = () => {
    setStrategyTitle(mainProData.dao.strategy_title)
    setStrategy1Btn(mainProData.dao.strategy_first_button)
    setStrategy1BtnText(mainProData.dao.strategy_first_button_text)
    setStrategy2Btn(mainProData.dao.strategy_second_button)
    setStrategy2BtnText(mainProData.dao.strategy_second_button_text)
    setStrategyText1(mainProData.dao.strategy_text_first)
    setStrategyText2(mainProData.dao.strategy_text_second)
    setShowSecondModal(false)
  }

  const handleSaveThirdModal = async() => {
    try {
      const data = {
        id: mainProData._id,
        home: mainProData.home,
        dao: {
          governance: mainProData.dao.governance,
          summary: mainProData.dao.summary,
          governance_text: mainProData.dao.governance_text,
          component_feature: mainProData.dao.component_feature,
          phase_design: mainProData.dao.phase_design,
          strategy_title: mainProData.dao.strategy_title,
          strategy_first_button: mainProData.dao.strategy_first_button,
          strategy_first_button_text: mainProData.dao.strategy_first_button_text,
          strategy_second_button: mainProData.dao.strategy_second_button,
          strategy_second_button_text: mainProData.dao.strategy_second_button_text,
          strategy_text_first: mainProData.dao.strategy_text_first,
          strategy_text_second: mainProData.dao.strategy_text_second,
          core_text: coreText,
          core_safety_security: coreSafetySecurity,
          core_transparency: coreTransparency,
          core_self_sovereignty: coreSelfSovereignty,
          core_fair_compensation: coreFairCompensation,
          core_integrity: coreIntegrity,
          core_honesty: coreHonesty,
          core_curiosity: coreCuriosity
        },
        rating: mainProData.rating,
        audit: mainProData.audit,
      };

      const res = await axios.put(BACKEND_SERVER + "/api/main-pro", data);

      if(res.status === 200) {
        let c = count + 1
        handleCount(c)
      }
    } catch (e) {
      console.log(e);
    }
    setShowThirdModal(false)
  };

  const handleDiscardThirdModal = () => {
    setCoreText(mainProData.dao.core_text)
    setCoreSafetySecurity(mainProData.dao.core_safety_security)
    setCoreTransparency(mainProData.dao.core_transparency)
    setCoreSelfSovereignty(mainProData.dao.core_self_sovereignty)
    setCoreFairCompensation(mainProData.dao.core_fair_compensation)
    setCoreIntegrity(mainProData.dao.core_integrity)
    setCoreHonesty(mainProData.dao.core_honesty)
    setCoreCuriosity(mainProData.dao.core_curiosity)
    setShowThirdModal(false)
  }

  return (
    <>
      {mainProData && (
        <div className="px-4 md:px-0 py-10 flex flex-col">
          <div className="bg-lightgray rounded-xl shadow-xl flex flex-col">
            <div className="bg-gray px-6 py-4 rounded-t-xl flex flex-row items-start">
              <div className="w-full pl-4 text-blue text-sz20 md:text-sz30 font-bold font-pilat text-center">
                {mainProData.dao.governance}
              </div>
              {/* <div
                className="flex flex-row items-center font-light cursor-pointer space-x-2"
                onClick={() => setShowFirstModal(true)}
              >
                <img src={edit} alt="edit"></img>
                <div className="text-blue text-sz20 font-Manrope">Edit</div>
              </div> */}
              {showFirstModal ? (
                <>
                  <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative my-6 w-5/6 md:w-2/3 lg:w-3/5 xl:w-2/5 rounded-xl shadow-xl font-Manrope">
                      {/*content*/}
                      <div className="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex flex-row bg-gray items-center px-8 py-4 space-x-8 rounded-t-lg">
                          <div
                            className="flex flex-row items-center cursor-pointer gap-2"
                            onClick={handleSaveFirstModal}
                          >
                            <img src={save} alt="save"></img>
                            <div className="text-sz20 text-pink">Save</div>
                          </div>
                          <div
                            className="flex flex-row items-center cursor-pointer gap-2"
                            onClick={handleDiscardFirstModal}
                          >
                            <img src={discard} alt="discard"></img>
                            <div className="text-sz20 text-blue">Discard</div>
                          </div>
                        </div>
                        {/*body*/}
                        <div className="bg-lightgray relative px-8 py-2 rounded-b-xl flex flex-col space-y-3 overflow-y-scroll">
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz20 text-blue">
                              Edit H1 Text
                            </div>
                            <input
                              type="text"
                              id="website-admin"
                              value={governance}
                              onChange={(e) => setGovernance(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="WHITE HAT DAO"
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz20 text-blue">
                              Edit Summary
                            </div>
                            <textarea
                              rows={8}
                              value={summary}
                              onChange={(e) => setSummary(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="White Hat DAO is a decentralized autonomous organization. Governed by a clear set of rules and executes actions automatically. Thus, effectively disregarding intermediaries. White Hat DAO controlled by Governance token holders. It does not have any employees.  Any individuals, DAO members or development teams can propose any proposals draft via discord or community forum. Once submitted in Snapshot, the token holders will vote on whether to approve or reject these proposal."
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz20 text-blue">Edit Text</div>
                            <textarea
                              rows={5}
                              value={governanceText}
                              onChange={(e) =>
                                setGovernanceText(e.target.value)
                              }
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="White Hat DAO controlled by Governance token holders. It does not have any employees and will utilize the industry standard setup of Gnosis Safe, Snapshot, off-chain governance and multi-sig administrators in accordance with WHD members and the vision of Genesis team members."
                            />
                          </div>
                          <div className="flex flex-row items-start justify-between">
                            <div className="flex flex-col space-y-2">
                              <div className="text-blue text-sz20">
                                Component or Feature
                              </div>
                              <input
                                type="text"
                                id="website-admin"
                                value={compFeature[0]}
                                onChange={(e) => handleCompFeature(e, 0)}
                                className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="WHITE HAT DAO"
                              />
                              <input
                                type="text"
                                id="website-admin"
                                value={compFeature[1]}
                                onChange={(e) => handleCompFeature(e, 1)}
                                className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="WHITE HAT DAO"
                              />
                              <input
                                type="text"
                                id="website-admin"
                                value={compFeature[2]}
                                onChange={(e) => handleCompFeature(e, 2)}
                                className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="WHITE HAT DAO"
                              />
                              <input
                                type="text"
                                id="website-admin"
                                value={compFeature[3]}
                                onChange={(e) => handleCompFeature(e, 3)}
                                className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="WHITE HAT DAO"
                              />
                            </div>
                            <div className="flex flex-col space-y-2">
                              <div className="text-blue text-sz20">
                                Phase 1 Design
                              </div>
                              <input
                                type="text"
                                id="website-admin"
                                value={phase[0]}
                                onChange={(e) => handlePhase(e, 0)}
                                className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="WHITE HAT DAO"
                              />
                              <input
                                type="text"
                                id="website-admin"
                                value={phase[1]}
                                onChange={(e) => handlePhase(e, 1)}
                                className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="WHITE HAT DAO"
                              />
                              <input
                                type="text"
                                id="website-admin"
                                value={phase[2]}
                                onChange={(e) => handlePhase(e, 2)}
                                className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="WHITE HAT DAO"
                              />
                              <input
                                type="text"
                                id="website-admin"
                                value={phase[3]}
                                onChange={(e) => handlePhase(e, 3)}
                                className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="WHITE HAT DAO"
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
            <div className="p-8 flex flex-col font-Manrope font-light space-y-4">
              <div className="rounded-md shadow-sm w-56 px-8 py-2 text-center font-pilat font-bold text-pink text-sz16 md:text-sz24">
                Summary
              </div>
              <div className="text-sz16 md:text-sz22">
                {mainProData.dao.summary}
              </div>
              <div className="p-6 rounded-md shadow-inner flex flex-row items-start md:items-center space-x-4">
                <img src={info} alt="info"></img>
                <div className="text-sz16 md:text-sz20 text-blue">
                  {mainProData.dao.governance_text}
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="font-pilat font-bold text-sz20 md:text-sz24 text-pink text-center">
                  Key Governance Design Choices
                </div>
                <div className="my-8 shadow-xl rounded-lg relative overflow-x-auto flex flex-col text-sz14 md:text-sz20 font-Manrope font-bold text-center">
                  <div className="py-4 bg-gray text-blue grid grid-cols-2">
                    <div>Component or Feature</div>
                    <div>Phase 1 Design</div>
                  </div>
                  {mainProData.dao.component_feature.map(
                    (component: any, index: number) => (
                      <div className="border-b border-gray bg-lightgray font-normal grid grid-cols-2">
                        <div className="border-r border-gray py-2">
                          {component}
                        </div>
                        <div className="py-2">
                          {mainProData.dao.phase_design[index]}
                        </div>
                      </div>
                    )
                  )}
                </div>
                <div className="pt-2 md:pt-8 z-10 cursor-pointer">
                  <div className="shadow-sm text-2xl w-2/3 py-4 border rounded-xl gradient-box text-sz16 md:text-sz22 font-bold flex flex-col items-center">
                    Join our Snapshot Space
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
            <div className="bg-gray px-6 py-4 rounded-t-xl">
              <div className="pl-4 text-blue text-sz20 md:text-sz30 font-bold font-pilat text-center">
                Governance Policy & Constitution
              </div>
            </div>
            <div className="p-8 flex flex-col font-Manrope font-light space-y-4">
              <div className="text-sz16 md:text-sz22">
                White Hat DAO is a decentralized autonomous organization.
                Governed by a clear set of rules and executes actions
                automatically. Thus, effectively disregarding intermediaries.
                White Hat DAO controlled by Governance token holders. It does
                not have any employees. Any individuals, DAO members or
                development teams can propose any proposals draft via discord or
                community forum. Once submitted in Snapshot, the token holders
                will vote on whether to approve or reject these proposal.
              </div>
              <img src={governance_img} alt="governance"></img>
            </div>
          </div>
          <div className="bg-lightgray rounded-xl shadow-xl flex flex-col">
            <div className="bg-gray px-6 py-4 rounded-t-xl flex flex-row items-start">
              <div className="w-full pl-4 text-blue text-sz20 md:text-sz30 font-bold font-pilat text-center">
                {mainProData.dao.strategy_title}
              </div>
              {/* <div
                className="flex flex-row items-center font-light cursor-pointer space-x-2"
                onClick={() => setShowSecondModal(true)}
              >
                <img src={edit} alt="edit"></img>
                <div className="text-blue text-sz20 font-Manrope">Edit</div>
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
                            <div className="text-sz20 text-pink">Save</div>
                          </div>
                          <div
                            className="flex flex-row items-center cursor-pointer gap-2"
                            onClick={handleDiscardSecondModal}
                          >
                            <img src={discard} alt="discard"></img>
                            <div className="text-sz20 text-blue">Discard</div>
                          </div>
                        </div>
                        {/*body*/}
                        <div
                          className="bg-lightgray relative px-8 py-4 rounded-b-xl flex flex-col space-y-3 overflow-y-auto"
                          style={{ height: "700px" }}
                        >
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz20 text-blue">
                              Edit H1 Text
                            </div>
                            <input
                              type="text"
                              id="website-admin"
                              value={strategyTitle}
                              onChange={(e) => setStrategyTitle(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Governance Strategies"
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz20 text-blue">
                              Edit First Button
                            </div>
                            <input
                              type="text"
                              id="website-admin"
                              value={strategy1Btn}
                              onChange={(e) => setStrategy1Btn(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Snapshot Strategy"
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz20 text-blue">
                              Edit First Button Text
                            </div>
                            <textarea
                              rows={4}
                              value={strategy1BtnText}
                              onChange={(e) => setStrategy1BtnText(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Our initial settings for voting weight of each token would be ( 1 WHD gov token = 1 vote ) weight of voting power. Future strategies may include: allocating vote weight to LP tokens to enable gov token holders who have staked, wrapped, or provided liquidity to retain voting power."
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz20 text-blue">
                              Edit Second Button
                            </div>
                            <input
                              type="text"
                              id="website-admin"
                              value={strategy2Btn}
                              onChange={(e) => setStrategy2Btn(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Proposal Threshold"
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz20 text-blue">
                              Edit Second Button Text
                            </div>
                            <textarea
                              rows={5}
                              value={strategy2BtnText}
                              onChange={(e) => setStrategy2BtnText(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Proposal Threshold is typically defined as the number of votes required to create a proposal. In White Hat DAO Snapshot Space this is done through a visual filter, to only display proposals from users who have at least the threshold number of gov tokens in their address. "
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz20 text-blue">
                              Edit Text 1
                            </div>
                            <textarea
                              rows={2}
                              value={strategyText1}
                              onChange={(e) => setStrategyText1(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="If this minimum vote weight is not met on a proposal, the vote will be unsuccessful even if the majority of voters voted yes."
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz20 text-blue">
                              Edit Text 2
                            </div>
                            <textarea
                              rows={5}
                              value={strategyText2}
                              onChange={(e) => setStrategyText2(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="In Snapshot, the above parameters are policies and not enforced by code. White Hat DAO will not recognize any proposals that do not comply with the above settings."
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
            <div className="p-8 flex flex-col items-start font-Manrope font-light space-y-4">
              <div className="z-10 cursor-pointer">
                <div className="shadow-sm w-80 py-2 border rounded-xl gradient-box text-sz16 md:text-sz24 font-bold flex flex-col items-start">
                  <div className="text-blue">
                    {mainProData.dao.strategy_first_button}
                  </div>
                </div>
              </div>
              <div className="text-sz16 md:text-sz22">
                {mainProData.dao.strategy_first_button_text}
              </div>

              <div className="z-10 cursor-pointer">
                <div className="shadow-sm w-80 py-2 border rounded-xl gradient-box text-sz16 md:text-sz24 font-bold flex flex-col items-start">
                  <div className="text-blue">
                    {mainProData.dao.strategy_second_button}
                  </div>
                </div>
              </div>
              <div className="text-sz16 md:text-sz22">
                {mainProData.dao.strategy_second_button_text}
              </div>
              <div className="text-sz16 md:text-sz22">
                <span className="font-semibold">Snapshot Strategy</span> = 1 Gov
                Token = 1 Vote Weight <br />
                <span className="font-semibold">Proposal Threshold</span> = 5%
                of White Hat DAO Gov Tokens <br />
                <span className="font-semibold">Vote Duration</span> = Minimum 7
                days <br />
                <span className="font-semibold">
                  Minimum Vote Weight Threshold
                </span>{" "}
                = ( 30% of total token supply ) to pass any proposal.
              </div>

              <div className="w-full p-6 rounded-md shadow-inner flex flex-row items-start md:items-center space-x-4">
                <img src={info} alt="info"></img>
                <div className="text-sz16 md:text-sz20 text-blue">
                  {mainProData.dao.strategy_text_first}
                </div>
              </div>

              <div className="w-full p-6 rounded-md shadow-inner flex flex-row items-start md:items-center space-x-4">
                <img src={info} alt="info"></img>
                <div className="text-sz16 md:text-sz20 text-blue">
                  {mainProData.dao.strategy_text_second}
                </div>
              </div>

              <div className="text-sz16 md:text-sz22">
                The above settings can be changed via community discussion and
                snapshot voting in accordance with the already existing rules
                and regulation.
              </div>
            </div>
          </div>
          <div className="mt-8 bg-lightgray rounded-xl shadow-xl flex flex-col">
            <div className="bg-gray px-6 py-4 rounded-t-xl flex flex-row items-start">
              <div className="w-full pl-4 text-blue text-sz20 md:text-sz30 font-bold font-pilat text-center">
                {mainProData.dao.core_text}
              </div>
              {/* <div
                className="flex flex-row items-center font-light cursor-pointer space-x-2"
                onClick={() => setShowThirdModal(true)}
              >
                <img src={edit} alt="edit"></img>
                <div className="text-blue text-sz20 font-Manrope">Edit</div>
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
                            <div className="text-sz20 text-pink">Save</div>
                          </div>
                          <div
                            className="flex flex-row items-center cursor-pointer gap-2"
                            onClick={handleDiscardThirdModal}
                          >
                            <img src={discard} alt="discard"></img>
                            <div className="text-sz20 text-blue">Discard</div>
                          </div>
                        </div>
                        {/*body*/}
                        <div className="bg-lightgray relative px-8 py-2 rounded-b-xl flex flex-col space-y-3 h-full overflow-y-auto">
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz20 text-blue">
                              Edit H1 Text
                            </div>
                            <input
                              type="text"
                              id="website-admin"
                              value={coreText}
                              onChange={(e) => setCoreText(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="What’s In The Audit Report ?"
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz20 text-blue">
                              Promoting Safety & Security
                            </div>
                            <input
                              type="text"
                              id="website-admin"
                              value={coreSafetySecurity}
                              onChange={(e) => setCoreSafetySecurity(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="WHITE HAT DAO"
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz20 text-blue">
                              Transparency
                            </div>
                            <input
                              type="text"
                              id="website-admin"
                              value={coreTransparency}
                              onChange={(e) => setCoreTransparency(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="WHITE HAT DAO"
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz20 text-blue">
                              Self-Sovereignty
                            </div>
                            <input
                              type="text"
                              id="website-admin"
                              value={coreSelfSovereignty}
                              onChange={(e) => setCoreSelfSovereignty(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="WHITE HAT DAO"
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz20 text-blue">
                              Fair Compensation
                            </div>
                            <input
                              type="text"
                              id="website-admin"
                              value={coreFairCompensation}
                              onChange={(e) => setCoreFairCompensation(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="WHITE HAT DAO"
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz20 text-blue">Integrity</div>
                            <input
                              type="text"
                              id="website-admin"
                              value={coreIntegrity}
                              onChange={(e) => setCoreIntegrity(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="WHITE HAT DAO"
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz20 text-blue">Honesty</div>
                            <input
                              type="text"
                              id="website-admin"
                              value={coreHonesty}
                              onChange={(e) => setCoreHonesty(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="WHITE HAT DAO"
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <div className="text-sz20 text-blue">Curiosity</div>
                            <input
                              type="text"
                              id="website-admin"
                              value={coreCuriosity}
                              onChange={(e) => setCoreCuriosity(e.target.value)}
                              className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="WHITE HAT DAO"
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
            <div className="p-8 flex flex-col font-Manrope space-y-4 text-sz16 md:text-sz22 font-light">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                <div className="px-2 py-1 text-sz14 md:text-sz22 rounded-full shadow-inner font-bold">
                  Promoting Safety & Security
                </div>
                <div>-{mainProData.dao.core_safety_security}</div>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                <div className="px-2 py-1 text-sz14 md:text-sz22 rounded-full shadow-inner font-bold">
                  Transparency
                </div>
                <div>-{mainProData.dao.core_transparency}</div>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                <div className="px-2 py-1 text-sz14 md:text-sz22 rounded-full shadow-inner font-bold">
                  Self-Sovereignty
                </div>
                <div>-{mainProData.dao.core_self_sovereignty}</div>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                <div className="px-2 py-1 text-sz14 md:text-sz22 rounded-full shadow-inner font-bold">
                  Fair Compensation
                </div>
                <div>-{mainProData.dao.core_fair_compensation}</div>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                <div className="px-2 py-1 text-sz14 md:text-sz22 rounded-full shadow-inner font-bold">
                  Integrity
                </div>
                <div>-{mainProData.core_integrity}</div>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                <div className="px-2 py-1 text-sz14 md:text-sz22 rounded-full shadow-inner font-bold">
                  Honesty
                </div>
                <div>-{mainProData.dao.core_honesty}</div>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                <div className="px-2 py-1 text-sz14 md:text-sz22 rounded-full shadow-inner font-bold">
                  Curiosity
                </div>
                <div>-{mainProData.dao.core_curiosity}</div>
              </div>
            </div>
          </div>
          <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
            <div className="bg-gray px-6 py-4 rounded-t-xl">
              <div className="pl-4 text-blue text-sz20 md:text-sz30 font-bold font-pilat text-center">
                Contributors Responsibilities
              </div>
            </div>
            <div className="p-4 md:p-8 flex flex-col items-start font-Manrope font-light space-y-4">
              <div className="z-10 cursor-pointer">
                <div className="shadow-sm w-40 md:w-80 py-2 border rounded-xl gradient-box text-sz16 md:text-sz24 font-bold flex flex-col items-start">
                  <div>Overview</div>
                </div>
              </div>
              <div className="text-sz16 md:text-sz22">
                The nature and scope of this project is enormous. It will
                require a team of dedicated and highly committed individuals to
                keep things running. For the purposes of promoting
                accountability and enhancing commitments, the following roles
                are created. Dedicated project champions willing to stake time
                and put in the sweat to get the project running on a daily
                basis.
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col space-y-10">
                  <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
                    <div className="bg-gray px-6 py-4 rounded-t-xl">
                      <div className="pl-4 text-blue text-sz20 md:text-sz22 font-bold font-pilat text-center">
                        Administration's Responsibilities
                      </div>
                    </div>
                    <div className="p-4 md:p-6 flex flex-col items-start font-Manrope font-light gap-4">
                      {responsibilities.map((item) => (
                        <div className="w-full py-1 border-b border-gray flex flex-row items-center space-x-4">
                          <Circle></Circle>
                          <div className="font-Manrope text-sz16 md:text-sz20">
                            {item}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
                    <div className="bg-gray px-6 py-4 rounded-t-xl">
                      <div className="pl-4 text-blue text-sz20 md:text-sz22 font-bold font-pilat text-center">
                        Who can apply for the ambassador role ?
                      </div>
                    </div>
                    <div className="p-6 flex flex-col items-start font-Manrope font-light space-y-4">
                      <div className="p-2 rounded-md bg-gray text-sz16 md:text-sz18">
                        Anyone can apply to become an ambassador, so long as
                        they can positively contribute to the project and share
                        the same values / principles. White Hat DAO will be
                        accepting applications from all content niches and
                        industries.s will be responsible for designing,
                        implementing, and creating smart contracts and
                        integration them in the platform. And maintain the
                        protocol with up to date blockchain technology in the
                        market.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-10 justify-between">
                  <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
                    <div className="bg-gray px-6 py-4 rounded-t-xl">
                      <div className="pl-4 text-blue text-sz20 md:text-sz22 font-bold font-pilat text-center">
                        Developers Responsibilities
                      </div>
                    </div>
                    <div className="p-6 flex flex-col items-start font-Manrope font-light space-y-4">
                      <div className="p-2 rounded-md bg-gray text-sz16 md:text-sz20">
                        Devs will be responsible for designing, implementing,
                        and creating smart contracts and integration them in the
                        platform. And maintain the protocol with up to date
                        blockchain technology in the market.
                      </div>
                      {dev_responsibilities.map((item) => (
                        <div className="w-full py-1 border-b border-gray flex flex-row items-center space-x-4">
                          <Circle></Circle>
                          <div className="font-Manrope text-sz16 md:text-sz20">
                            {item}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
                    <div className="bg-gray px-6 py-4 rounded-t-xl">
                      <div className="pl-4 text-blue text-sz20 md:text-sz22 font-bold font-pilat text-center">
                        Community Ambassadors
                      </div>
                    </div>
                    <div className="p-6 flex flex-col items-start font-Manrope font-light space-y-4">
                      {ambassadors.map((item) => (
                        <div className="w-full py-1 border-b border-gray flex flex-row items-center space-x-4">
                          <Circle></Circle>
                          <div className="font-Manrope text-sz16 md:text-sz20">
                            {item}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-10 bg-lightgray rounded-xl shadow-xl flex flex-col">
            <div className="bg-gray px-6 py-4 rounded-t-xl">
              <div className="pl-4 text-pink text-sz20 md:text-sz30 font-bold font-pilat text-center">
                A message from White Hat DAO
              </div>
            </div>
            <div className="p-6 flex flex-col items-start font-Manrope font-light text-sz16 md:text-sz22 space-y-4">
              Devs will be responsible for designing, implementing, and creating
              smart contracts and integration them in the platform. And maintain
              the protocol with up to date blockchain technology in the market.
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dao;
