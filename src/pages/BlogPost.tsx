import home from "../assets/images/blogpost/home.png";
import file from "../assets/images/blogpost/file.svg";
import openfile from "../assets/images/blogpost/openfile.svg";
import dot from "../assets/images/blogpost/dot.png";
import like from "../assets/images/blogpost/like.png";
import message from "../assets/images/blogpost/message.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { BACKEND_SERVER } from "../global/global";
import axios from "axios";
import { FormatDate } from "../utils/utils";
import BlogComponent from "../components/BlogComponent";

interface blogPostInterface {
  handleSelectedTopic: (prof: any) => void;
}

const BlogPost = ({ handleSelectedTopic }: blogPostInterface) => {
  const navigate = useNavigate();
  const [topics, setTopics] = useState<any[]>([]);
  const [searchParam, setSearchParam] = useState("");

  const getTopics = useCallback(async () => {
    const params = new URLSearchParams([["category", searchParam]]);
    try {
      let res;
      if (searchParam.length === 0) {
        res = await axios.get(BACKEND_SERVER + "/api/topics/latest_topics");
      } else {
        res = await axios.get(BACKEND_SERVER + "/api/topics/latest_topics", {
          params,
        });
      }

      if (res.status === 200) {
        setTopics(res.data.data);
      }
    } catch (e) {
      console.error(e);
    }
  }, [searchParam]);

  useEffect(() => {
    getTopics();
  }, [searchParam, getTopics]);

  const handleOpen = (index: number) => {
    const topic = topics[index];
    handleSelectedTopic(topic);
    navigate("/topic-item");
  };

  const getTextFromTopic = (index: number) => {
    const topic = topics[index].topic;
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

  const getImageFromTopic = (index: number) => {
    const topic = topics[index].topic;
    let url = "";
    for (let i = 0; i < topic.length; i++) {
      if (topic[i].type === "image") {
        url = topic[i].url;
        break;
      }
    }
    return url;
  };

  return (
    <div className="flex my-20 gap-x-16">
      <div className="flex flex-col w-1/3">
        <BlogComponent></BlogComponent>
        <div className="shadow-xl p-border bg-blue rounded-xl">
          <div className="px-5 py-8 bg-lightgray rounded-xl">
            <div className="flex flex-row items-center px-4 py-3 mb-8 font-semibold leading-6 rounded-md bg-gray font-Manrope text-blue text-sz18">
              <img src={home} alt="home" className="w-5 h-5 mr-5" />
              Home
            </div>
            <div className="px-4">
              <div
                onClick={() => setSearchParam("")}
                className="cursor-pointer flex mb-5 font-semibold leading-6 rounded-md font-Manrope text-sz18"
              >
                <img src={searchParam === "" ? file : openfile} alt="file" className="w-5 h-auto mr-4" />
                <div className={searchParam === "" ? "text-blue" : "text-grey"}>Categories</div>
              </div>
              <div className="space-y-4">
                <div
                  onClick={() => setSearchParam("General")}
                  className="cursor-pointer flex font-medium leading-6 rounded-md font-Manrope text-sz16"
                >
                  <img
                    src={searchParam === "General" ? file : openfile}
                    alt="openfile"
                    className="w-5 h-auto mr-4"
                  />
                  <div className={searchParam === "General" ? "text-blue" : "text-grey"}>General</div>
                </div>
                <div
                  onClick={() => setSearchParam("Proposals")}
                  className="cursor-pointer flex font-medium leading-6 rounded-md font-Manrope text-sz16"
                >
                  <img
                    src={searchParam === "Proposals" ? file : openfile}
                    alt="openfile"
                    className="w-5 h-auto mr-4"
                  />
                  <div className={searchParam === "Proposals" ? "text-blue" : "text-grey"}>Proposals</div>
                </div>
                <div
                  onClick={() => setSearchParam("Web3 News Article")}
                  className="cursor-pointer flex font-medium leading-6 rounded-md font-Manrope text-grey text-sz16"
                >
                  <img
                    src={searchParam === "Web3 News Article" ? file : openfile}
                    alt="openfile"
                    className="w-5 h-auto mr-4"
                  />
                  <div className={searchParam === "Web3 News Article" ? "text-blue" : "text-grey"}>Web3 News Article</div>
                </div>
                <div
                  onClick={() => setSearchParam("Web3 Education / Academy")}
                  className="cursor-pointer flex font-medium leading-6 rounded-md font-Manrope text-grey text-sz16"
                >
                  <img
                    src={searchParam === "Web3 Education / Academy" ? file : openfile}
                    alt="openfile"
                    className="w-5 h-auto mr-4"
                  />
                  <div className={searchParam === "Web3 Education / Academy" ? "text-blue" : "text-grey"}>Web3 Education / Academy</div>
                </div>
                <div
                  onClick={() => setSearchParam("Support / Suggestions")}
                  className="cursor-pointer flex font-medium leading-6 rounded-md font-Manrope text-grey text-sz16"
                >
                  <img
                    src={searchParam === "Support / Suggestions" ? file : openfile}
                    alt="openfile"
                    className="w-5 h-auto mr-4"
                  />
                  <div className={searchParam === "Support / Suggestions" ? "text-blue" : "text-grey"}>Support / Suggestions</div>
                </div>
                <div
                  onClick={() => setSearchParam("New Projects Discussion")}
                  className="cursor-pointer flex font-medium leading-6 rounded-md font-Manrope text-grey text-sz16"
                >
                  <img
                    src={searchParam === "New Projects Discussion" ? file : openfile}
                    alt="openfile"
                    className="w-5 h-auto mr-4"
                  />
                  <div className={searchParam === "New Projects Discussion" ? "text-blue" : "text-grey"}>New Projects Discussion</div>
                </div>
                <div
                  onClick={() => setSearchParam("WHD Announcements & Updates")}
                  className="cursor-pointer flex font-medium leading-6 rounded-md font-Manrope text-grey text-sz16"
                >
                  <img
                    src={searchParam === "WHD Announcements & Updates" ? file : openfile}
                    alt="openfile"
                    className="w-5 h-auto mr-4"
                  />
                  <div className={searchParam === "WHD Announcements & Updates" ? "text-blue" : "text-grey"}>WHD Announcements & Updates</div>
                </div>
                <div
                  onClick={() =>
                    setSearchParam("WHD Partnership & Collaborations")
                  }
                  className="cursor-pointer flex font-medium leading-6 rounded-md font-Manrope text-grey text-sz16"
                >
                  <img
                    src={searchParam === "WHD Partnership & Collaborations" ? file : openfile}
                    alt="openfile"
                    className="w-5 h-auto mr-4"
                  />
                  <div className={searchParam === "WHD Partnership & Collaborations" ? "text-blue" : "text-grey"}>WHD Partnership & Collaborations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/3 border shadow-xl p-middle rounded-xl bg-lightgray border-blue">
        <div className="mb-12 font-bold leading-8 font-pilat text-sz18">
          All Topics
        </div>
        <div className="mb-3 rounded shadow-xl p-border bg-gradient-to-r from-pink to-blue">
          <div
            onClick={() => navigate("/topic-create")}
            className="cursor-pointer py-3 font-bold leading-8 text-center rounded bg-gray text-blue font-Manrope text-sz18"
          >
            Create a topic
          </div>
        </div>
        <div className="flex flex-col">
          {topics.map((topic: any, index: number) => (
            <div className="mt-4 border-t border-blue" key={index}>
              <div className="pt-4 flex flex-row items-start justify-between">
                <div className="flex flex-col items-start">
                  <div className="mb-2 font-semibold leading-6 font-Manrope text-sz20 text-grey">
                    {topic.title}
                  </div>
                  <div className="mb-2 font-medium leading-3 text-center text-white flex flex-row items-center gap-x-3 text-sz10 font-Manrope">
                    {topic?.tags?.map((tag: string, index: number) => (
                      <div
                        className={
                          index % 3 === 0
                            ? "px-3 py-1 rounded-3xl bg-blue"
                            : index % 3 === 1
                            ? "px-3 py-1 rounded-3xl bg-pink"
                            : "px-3 py-1 rounded-3xl bg-purple"
                        }
                      >
                        {tag}
                      </div>
                    ))}
                    <div className="text-black font-normal leading-6 font-Manrope text-sz14">
                      {topic.category}
                    </div>
                  </div>
                  <div className="ml-2 flex items-center">
                    <div className="mr-2 font-semibold leading-6 font-Manrope text-sz16">
                      by {topic.author}
                    </div>
                    <img src={dot} alt="dot" className="w-1 h-1 mx-2" />
                    <div className="font-normal leading-6 font-Manrope text-sz16">
                      {FormatDate(topic.createdAt)}
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => handleOpen(index)}
                  className="mt-2cursor-pointer px-3 py-1 rounded-3xl bg-pink text-white text-sz12 font-Manrope font-light"
                >
                  Open
                </div>
              </div>
              <div className="my-4 font-medium leading-6 font-Manrope text-sz16 text-grey">
                {getTextFromTopic(index)}
              </div>
              {getImageFromTopic(index).length !== 0 && (
                <img
                  src={getImageFromTopic(index)}
                  alt="web3"
                  className="mt-4 mb-5 w-full h-auto"
                />
              )}
              <div className="flex leading-6 font-Manrope text-sz16 text-blue">
                <img src={like} alt="like" className="h-5 mr-2" />{" "}
                {topic.like.length}
                <img
                  src={message}
                  alt="message"
                  className="h-5 ml-5 mr-2"
                />{" "}
                {topic.dislike.length}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
