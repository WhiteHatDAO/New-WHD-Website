import line from "../assets/images/blogpost/line.png";
import plus from "../assets/images/blogpost/plus.png";
import dot from "../assets/images/blogpost/dot.png";
// import talk from "../assets/images/blogpost/talk.png";
// import bold from "../assets/images/blogpost/bold.png";
// import italic from "../assets/images/blogpost/italic.png";
// import link from "../assets/images/blogpost/link.png";
// import quote from "../assets/images/blogpost/quote.png";
// import code from "../assets/images/blogpost/code.png";
// import image from "../assets/images/blogpost/image.png";
// import olist from "../assets/images/blogpost/olist.png";
// import uolist from "../assets/images/blogpost/uolist.png";
// import smile from "../assets/images/blogpost/smile.png";
// import calendar from "../assets/images/blogpost/calendar.png";
// import setting from "../assets/images/blogpost/setting.png";
import create from "../assets/images/blogpost/create.png";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { BACKEND_SERVER } from "../global/global";
import { useAppContext } from "../context/appContext";
import { FormatDate } from "../utils/utils";
import BlogComponent from "../components/BlogComponent";
import { useNavigate } from "react-router-dom";
import SlateEditor from "../components/SlateEditor/Editor";

const TopicCreate = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [curTag, setCurTag] = useState<string>();
  const [title, setTitle] = useState<string>("");
  const [topic, setTopic] = useState<string>("");
  const [profile, setProfile] = useState<any>();
  const [category, setCategory] = useState<string>("");
  const navigate = useNavigate();

  const [appState] = useAppContext();

  const { address } = appState;

  const handleAddTag = () => {
    if (curTag?.length === 0) return;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i] === curTag) {
        return;
      }
    }
    let t = [];
    for (let i = 0; i < tags.length; i++) {
      t.push(tags[i]);
    }
    t.push(curTag);
    setTags(t as string[]);
    setCurTag("") 
  };

  const getProfile = useCallback(async () => {
    const params = new URLSearchParams([["wallet", String(address)]]);
    try {
      const res = await axios.get(BACKEND_SERVER + "/api/profile", { params });
      if (res.status === 200 && res.data.data.length > 0) {
        const prof = res.data.data[0];
        setProfile(prof);
      }
    } catch (e) {
      console.error(e);
    }
  }, [address]);

  const createTopic = async () => {
    if (!profile) return;
    try {
      await axios.post(BACKEND_SERVER + "/api/topics", {
        title: title,
        author: profile.username,
        topic: topic,
        category: category,
        tags: tags,
        image: "",
        like: [],
        dislike: [],
        comments: [],
        vote_yes: [],
        vote_no: [],
        vote_more: [],
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  const handleChangeText = useCallback(async (value: any) => {
    console.log("value", value);
    setTopic(value);
  }, []);

  const handleCreateTopic = () => {
    if (
      tags.length === 0 ||
      title.length === 0 ||
      topic.length === 0
    )
      return;
    createTopic();
    navigate("/blogpost");
  };

  return (
    <div className="flex my-20 gap-x-16">
      <div className="w-2/3 border shadow-xl p-middle rounded-xl bg-lightgray border-blue">
        <div className="mb-5 font-medium leading-6 text-blue font-Manrope text-sz16">
          <span>WhiteHatDAO</span>
          <span className="font-semibold"> / Create a new topic</span>
        </div>
        <div>
          <img src={line} alt="line" className="w-full mb-5" />
          <div className="flex items-center mb-6">
            <img src={profile?.pic} alt="dummy" className="mr-4" />
            <div className="mr-2 font-semibold leading-6 font-Manrope text-sz16">
              {profile ? profile?.username : ""}
            </div>
            <img src={dot} alt="dot" className="mr-2" />
            <div className="font-normal leading-6 font-Manrope text-sz16">
              {profile ? FormatDate(profile?.createdAt) : ""}
            </div>
          </div>
          <div className="flex items-center justify-between mb-5 font-normal text-sz16 font-Manrope">
            <input
              className="w-2/3 h-12 px-3 py-5 leading-6 border rounded-lg shadow-inner border-blue bg-lightgray"
              placeholder="Type title, or paste a link here"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <select
              id="role"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-52 h-12 box-border-blue bg-transparent border border-blue text-sz18 rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="General" selected>General</option>
              <option value="Proposals">Proposals</option>
              <option value="Web3 News Article">Web3 News Article</option>
              <option value="Web3 Education / Academy">
                Web3 Education / Academy
              </option>
              <option value="Support / Suggestions">
                Support / Suggestions
              </option>
              <option value="New Projects Discussion">
                New Projects Discussion
              </option>
              <option value="WHD Announcements & Updates">
                WHD Announcements & Updates
              </option>
              <option value="WHD Partnership & Collaborations">
                WHD Partnership & Collaborations
              </option>
            </select>
          </div>
          <div className="flex items-center space-x-2 mb-6 font-medium leading-6 text-sz16 text-blue font-Manrope">
            {tags.map((tag: any, index: number) => (
              <div
                className={
                  index % 3 === 0
                    ? "px-3 py-1 rounded-3xl bg-blue text-white"
                    : index % 3 === 1
                    ? "px-3 py-1 rounded-3xl bg-pink text-white"
                    : "px-3 py-1 rounded-3xl bg-purple text-white"
                }
              >
                {tag}
              </div>
            ))}
            <input
              type="text"
              id="website-admin"
              value={curTag}
              onChange={(e) => setCurTag(e.target.value)}
              className="text-black shadow-inner w-20 rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sz16 p-2.5 border-gray-300 dark:focus:ring-blue-500"
              placeholder="Tag"
            />
            <div onClick={handleAddTag} className="cursor-pointer flex flex-row items-center">
              <img src={plus} alt="plus" />
              <div>Add Tags on your Article</div>
            </div>
          </div>
          <div className="mb-6 border rounded-lg border-blue">
            <SlateEditor
              readOnly={false}
              text={[
                {
                  type: "paragaph",
                  children: [{ text: "" }],
                },
              ]}
              handleChangeText={handleChangeText}
            ></SlateEditor>
            {/* <div className="flex items-center px-8 py-4 rounded-t-lg bg-gray">
              <img src={talk} alt="talk" className="mr-10" />
              <img src={bold} alt="bold" className="mr-10" />
              <img src={italic} alt="italic" className="mr-10" />
              <img src={link} alt="link" className="mr-10" />
              <img src={quote} alt="quote" className="mr-10" />
              <img src={code} alt="code" className="mr-10" />
              <img src={image} alt="img" className="mr-10" />
              <img src={olist} alt="olist" className="mr-10" />
              <img src={uolist} alt="uolist" className="mr-10" />
              <img src={smile} alt="smile" className="mr-10" />
              <img src={calendar} alt="calendar" className="mr-10" />
              <img src={setting} alt="setting" className="mr-10" />
            </div>
            <textarea
              className="w-full h-56 px-3 py-5 leading-6 rounded-b-lg shadow-inner font-Manrope text-sz16 bg-lightgray"
              placeholder="Select a category before typing here."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            ></textarea> */}
          </div>
          <div className="flex items-center justify-start mb-8">
            <div className="mr-10 cursor-pointer rounded shadow-xl p-border bg-gradient-to-r from-pink to-blue">
              <div
                onClick={() => handleCreateTopic()}
                className="flex px-6 py-2 font-bold leading-8 text-center rounded bg-gray text-blue font-Manrope text-sz18"
              >
                <img src={create} alt="create" className="h-8 mr-2" />
                Create Topic
              </div>
            </div>
            <div
              onClick={() => navigate("/blogpost")}
              className="cursor-pointer mr-10 font-semibold leading-8 text-pink text-sz18 font-Manrope"
            >
              Cancel
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/3">
        <BlogComponent></BlogComponent>
      </div>
    </div>
  );
};

export default TopicCreate;
