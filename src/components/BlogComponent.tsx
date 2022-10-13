import whitehatlogo from "../assets/images/blogpost/what_shield1.png";
import people from "../assets/images/blogpost/people.png";
import chatBubble from "../assets/images/blogpost/chat-bubble.png";
import chart from "../assets/images/blogpost/chart.png";
import { BACKEND_SERVER } from "../global/global";
import axios from "axios";
import { useState, useEffect } from "react";

const BlogComponent = () => {
  const [memberCount, setMemberCount] = useState<number>(0);
  const [topicsCount, setTopicsCount] = useState<number>(0);
  const [proposalsCount, setProposalsCount] = useState<number>(0);

  const getProfilesCount = async () => {
    try {
      const res = await axios.get(BACKEND_SERVER + "/api/profile");
      if (res.status === 200) {
        setMemberCount(res.data.data.length);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const getTopicsCount = async () => {
    const params = new URLSearchParams([["category", "General"]]);
    try {
      const res = await axios.get(BACKEND_SERVER + "/api/topics", {
        params,
      });
      if (res.status === 200) {
        setTopicsCount(res.data.data.length);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const getProposalsCount = async () => {
    const params = new URLSearchParams([["category", "Proposals"]]);
    try {
      const res = await axios.get(BACKEND_SERVER + "/api/topics", {
        params,
      });
      if (res.status === 200) {
        setProposalsCount(res.data.data.length);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getProfilesCount();
    getProposalsCount();
    getTopicsCount();
  }, []);

  return (
    <div className="shadow-xl p-border bg-blue rounded-xl mb-14">
      <div className="flex justify-center py-6 bg-gradient-to-r from-blue to-pink rounded-t-xl">
        <img className="w-18 h-auto" src={whitehatlogo} alt="logo" />
      </div>
      <div className="px-5 pt-5 pb-middle bg-lightgray rounded-b-xl">
        <div className="mb-4 font-bold leading-8 font-pilat text-sz18">
          WHITE HAT DAO
        </div>
        <div className="mb-2 leading-6 font-Manrope text-sz18 text-pink">
          www.whitehatdao.com
        </div>
        <div className="mb-5 leading-6 font-Manrope text-sz18 text-grey">
          Empowering community voice
        </div>
        <div className="flex mb-4 leading-6 font-Manrope text-sz16 text-blue">
          <img src={people} alt="people" className="h-4 mr-2" />
          {memberCount} Members
        </div>
        <div className="flex mb-4 leading-6 font-Manrope text-sz16 text-blue">
          <img src={chatBubble} alt="people" className="h-5 mr-2" />
          {topicsCount} Topics
        </div>
        <div className="flex mb-4 leading-6 font-Manrope text-sz16 text-blue">
          <img src={chart} alt="people" className="h-5 mr-2" />
          {proposalsCount} Proposals
        </div>
        <div className="cursor-pointer rounded shadow-xl p-border bg-gradient-to-r from-pink to-blue">
          <div className="py-3 font-bold leading-8 text-center rounded bg-gray text-blue font-Manrope text-sz18">
            Get your membership NFT
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
