import ellipse2 from "../../assets/images/blogpost/ellipse2.png";
import dot from "../../assets/images/blogpost/dot.png";
import like from "../../assets/images/blogpost/like.png";
import dislike from "../../assets/images/blogpost/dislike.png";
import message from "../../assets/images/blogpost/message.png";
import share from "../../assets/images/blogpost/share.png";
import dummy from "../../assets/images/blogpost/dummy.png";
import { useAppContext } from "../../context/appContext";
import { useState, useEffect, useCallback } from "react";
import { BACKEND_SERVER } from "../../global/global";
import { FormatDate } from "../../utils/utils";
import ProgressBar from "../../components/ProgressBar";
import axios from "axios";
import BlogComponent from "../../components/BlogComponent";
import SlateEditor from "../../components/SlateEditor/Editor";

interface topicItemProps {
  topic: any;
}

const TopicItem1 = ({ topic }: topicItemProps) => {
  const [appState] = useAppContext();
  const [profile, setProfile] = useState<any>();
  const [comment, setComment] = useState<string>();
  const [topicItem, setTopicItem] = useState<any>();
  const [id, setId] = useState<string>();
  const [replies, setReplies] = useState<any[]>([]);
  const [likes, setLikes] = useState<string[]>([]);
  const [dislikes, setDislikes] = useState<string[]>([]);
  const [votesYes, setVotesYes] = useState<string[]>([]);
  const [votesNo, setVotesNo] = useState<string[]>([]);
  const [votesMore, setVotesMore] = useState<string[]>([]);

  const [isVotedYes, setIsVotedYes] = useState<boolean>(false);
  const [isVotedNo, setIsVotedNo] = useState<boolean>(false);
  const [isVotedMore, setIsVotedMore] = useState<boolean>(false);

  const [voteYesRate, setVoteYesRate] = useState<number>(0.0);
  const [voteNoRate, setVoteNoRate] = useState<number>(0.0);
  const [voteMoreRate, setVoteMoreRate] = useState<number>(0.0);

  const [showTipAuthor, setShowTipAuthor] = useState<boolean>(false);

  const { address } = appState;

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

  const getTopic = useCallback(async () => {
    const params = new URLSearchParams([["id", String(id)]]);
    try {
      const res = await axios.get(BACKEND_SERVER + "/api/topics", { params });
      if (res.status === 200 && res.data.data.length > 0) {
        const prof = res.data.data[0];
        setTopicItem(prof);
      }
    } catch (e) {
      console.error(e);
    }
  }, [id]);

  const createReply = async () => {
    if (!profile || comment?.length === 0) return;
    try {
      await axios.post(BACKEND_SERVER + "/api/replies", {
        text: comment,
        author: profile.username,
        like: [],
        dislike: [],
        comments: [],
        topic: id,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const getReplies = useCallback(async () => {
    const params = new URLSearchParams([["topic", String(id)]]);
    try {
      const res = await axios.get(BACKEND_SERVER + "/api/replies", { params });
      if (res.status === 200 && res.data.data.length > 0) {
        setReplies(res.data.data);
      }
    } catch (e) {
      console.error(e);
    }
  }, [id]);

  const handleReply = async () => {
    setComment("");
    createReply();
    getTopic();
  };

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  useEffect(() => {
    console.log('topic', topic)
    setId(topic._id);
    setTopicItem(topic);
    getReplies();
  }, [topic, topicItem, getReplies]);

  useEffect(() => {
    if (!topicItem || !profile) return;

    setLikes(topicItem.like);
    setDislikes(topicItem.dislike);
    setVotesYes(topicItem.vote_yes);
    setVotesNo(topicItem.vote_no);
    setVotesMore(topicItem.vote_more);

    let is_vote_yes = false,
      is_vote_no = false,
      is_vote_more = false;
    for (let i = 0; i < topicItem.vote_yes.length; i++) {
      if (topicItem.vote_yes[i] === profile.username) {
        is_vote_yes = true;
      }
    }
    for (let i = 0; i < topicItem.vote_no.length; i++) {
      if (topicItem.vote_no[i] === profile.username) {
        is_vote_no = true;
      }
    }
    for (let i = 0; i < topicItem.vote_more.length; i++) {
      if (topicItem.vote_more[i] === profile.username) {
        is_vote_more = true;
      }
    }

    setIsVotedYes(is_vote_yes);
    setIsVotedNo(is_vote_no);
    setIsVotedMore(is_vote_more);
  }, [topicItem, profile]);

  const handleLike = async () => {
    let isContain = false;
    for (let i = 0; i < likes.length; i++) {
      if (likes[i] === profile.username) {
        isContain = true;
        break;
      }
    }

    let temp = [];
    if (isContain) {
      for (let i = 0; i < likes.length; i++) {
        if (likes[i] === profile.username) continue;
        temp.push(likes[i]);
      }
    } else {
      for (let i = 0; i < likes.length; i++) {
        temp.push(likes[i]);
      }
      temp.push(profile.username);
    }

    try {
      const data = {
        id: id,
        like: temp,
      };

      const res = await axios.put(BACKEND_SERVER + "/api/topics", data);

      console.log("res", res);
    } catch (e) {
      console.log(e);
    }

    setLikes(temp);
  };

  const handleDislike = async () => {
    let isContain = false;
    for (let i = 0; i < dislikes.length; i++) {
      if (dislikes[i] === profile.username) {
        isContain = true;
        break;
      }
    }

    let temp = [];
    if (isContain) {
      for (let i = 0; i < dislikes.length; i++) {
        if (dislikes[i] === profile.username) continue;
        temp.push(dislikes[i]);
      }
    } else {
      for (let i = 0; i < dislikes.length; i++) {
        temp.push(dislikes[i]);
      }
      temp.push(profile.username);
    }

    try {
      const data = {
        id: id,
        dislike: temp,
      };

      await axios.put(BACKEND_SERVER + "/api/topics", data);
    } catch (e) {
      console.log(e);
    }

    setDislikes(temp);
  };

  const handleVoteYes = async () => {
    setIsVotedYes(!isVotedYes);

    let isContain = false;
    for (let i = 0; i < votesYes.length; i++) {
      if (votesYes[i] === profile.username) {
        isContain = true;
        break;
      }
    }

    let temp = [];
    if (isContain) {
      for (let i = 0; i < votesYes.length; i++) {
        if (votesYes[i] === profile.username) continue;
        temp.push(votesYes[i]);
      }
    } else {
      for (let i = 0; i < votesYes.length; i++) {
        temp.push(votesYes[i]);
      }
      temp.push(profile.username);
    }

    try {
      const data = {
        id: id,
        vote_yes: temp,
      };

      await axios.put(BACKEND_SERVER + "/api/topics", data);
    } catch (e) {
      console.log(e);
    }

    setVotesYes(temp);
  };

  const handleVoteNo = async () => {
    setIsVotedNo(!isVotedNo);

    let isContain = false;
    for (let i = 0; i < votesNo.length; i++) {
      if (votesNo[i] === profile.username) {
        isContain = true;
        break;
      }
    }

    let temp = [];
    if (isContain) {
      for (let i = 0; i < votesNo.length; i++) {
        if (votesNo[i] === profile.username) continue;
        temp.push(votesNo[i]);
      }
    } else {
      for (let i = 0; i < votesNo.length; i++) {
        temp.push(votesNo[i]);
      }
      temp.push(profile.username);
    }

    try {
      const data = {
        id: id,
        vote_no: temp,
      };

      await axios.put(BACKEND_SERVER + "/api/topics", data);
    } catch (e) {
      console.log(e);
    }

    setVotesNo(temp);
  };

  const handleVoteMore = async () => {
    setIsVotedMore(!isVotedMore);

    let isContain = false;
    for (let i = 0; i < votesMore.length; i++) {
      if (votesMore[i] === profile.username) {
        isContain = true;
        break;
      }
    }

    let temp = [];
    if (isContain) {
      for (let i = 0; i < votesMore.length; i++) {
        if (votesMore[i] === profile.username) continue;
        temp.push(votesMore[i]);
      }
    } else {
      for (let i = 0; i < votesMore.length; i++) {
        temp.push(votesMore[i]);
      }
      temp.push(profile.username);
    }

    try {
      const data = {
        id: id,
        vote_more: temp,
      };

      await axios.put(BACKEND_SERVER + "/api/topics", data);
    } catch (e) {
      console.log(e);
    }

    setVotesMore(temp);
  };

  useEffect(() => {
    if (
      votesYes.length === 0 &&
      votesNo.length === 0 &&
      votesMore.length === 0
    ) {
      setVoteYesRate(0.0);
      setVoteNoRate(0.0);
      setVoteMoreRate(0.0);
    } else {
      const total = votesYes.length + votesNo.length + votesMore.length;
      const yes = (votesYes.length / total) * 100;
      const no = (votesNo.length / total) * 100;
      const more = (votesMore.length / total) * 100;

      setVoteYesRate(parseFloat(yes.toFixed(2)));
      setVoteNoRate(parseFloat(no.toFixed(2)));
      setVoteMoreRate(parseFloat(more.toFixed(2)));
    }
  }, [votesYes, votesNo, votesMore]);

  const handleChangeText = useCallback(async (value: any) => {
  }, [])

  return (
    <>
      {topic && profile ? (
        <div className="flex my-20 gap-x-16">
          <div className="w-2/3 border shadow-xl p-middle rounded-xl bg-lightgray border-blue">
            <div className="mb-5 font-medium leading-6 text-blue font-Manrope text-sz16">
              <span>WhiteHatDAO</span>
              <span className="font-semibold"> / {topicItem.category}</span>
            </div>

            <div className="pt-4 border-t border-blue">
              <div className="flex items-center">
                <img src={dummy} alt="dummy" className="w-10 h-10 mr-4" />
                <div className="mr-2 font-semibold leading-6 font-Manrope text-sz16">
                  {profile?.username}
                </div>
                <img src={dot} alt="dot" className="w-1 h-1 mr-2" />
                <div className="font-normal leading-6 font-Manrope text-sz16">
                  {FormatDate(profile.createdAt)}
                </div>
              </div>
              <div className="flex mb-4 font-medium leading-3 text-center text-white gap-x-3 ml-14 text-sz10 font-Manrope">
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
              </div>
              <div className="mb-5 font-semibold leading-6 font-Manrope text-sz18 text-grey">
                {topicItem.title}
              </div>
              <div className="mb-5 font-medium leading-6 font-Manrope text-sz16 text-grey">
                <SlateEditor readOnly={true} text={topicItem.topic} handleChangeText={handleChangeText}></SlateEditor>
              </div>
              {topicItem.category === "Proposals" && (
                <div className="flex justify-between px-middle mb-11 gap-x-12">
                  <div className="w-1/2 border shadow-xl rounded-xl border-blue text-sz18">
                    <div className="py-4 font-semibold leading-5 text-blue font-pilat px-middle bg-gray rounded-t-xl">
                      Cast your vote
                    </div>
                    <div className="flex flex-col py-5 font-semibold leading-6 px-middle font-Manrope">
                      <div
                        onClick={() => handleVoteYes()}
                        className={
                          isVotedYes
                            ? "w-full py-3 mb-4 text-center border rounded-full border-blue bg-blue text-white"
                            : "w-full py-3 mb-4 text-center border rounded-full border-blue bg-transparent text-black"
                        }
                      >
                        Vote-YES
                      </div>
                      <div
                        onClick={() => handleVoteNo()}
                        className={
                          isVotedNo
                            ? "w-full py-3 mb-4 text-center border rounded-full border-blue bg-blue text-white"
                            : "w-full py-3 mb-4 text-center border rounded-full border-blue bg-transparent text-black"
                        }
                      >
                        Vote-NO
                      </div>
                      <div
                        onClick={() => handleVoteMore()}
                        className={
                          isVotedMore
                            ? "w-full py-3 mb-4 text-center border rounded-full border-blue bg-blue text-white"
                            : "w-full py-3 mb-4 text-center border rounded-full border-blue bg-transparent text-black"
                        }
                      >
                        More discussions needed
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 border shadow-xl rounded-xl border-blue text-sz18">
                    <div className="py-4 font-semibold leading-5 text-blue font-pilat px-middle bg-gray rounded-t-xl">
                      Cast your vote
                    </div>
                    <div className="flex flex-col pt-6 font-semibold leading-6 pb-middle px-middle font-Manrope">
                      <div className="w-full mb-6">
                        <div className="mb-3">
                          Vote-YES{" "}
                          <span className="text-blue">({voteYesRate}%)</span>
                        </div>
                        <ProgressBar percentage={voteYesRate} />
                      </div>
                      <div className="w-full mb-6">
                        <div className="mb-3">
                          Vote-NO{" "}
                          <span className="text-blue">({voteNoRate}%)</span>
                        </div>
                        <ProgressBar percentage={voteNoRate} />
                      </div>
                      <div className="w-full">
                        <div className="mb-3">
                          More discussions needed{" "}
                          <span className="text-blue">({voteMoreRate}%)</span>
                        </div>
                        <ProgressBar percentage={voteMoreRate} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="border-b pb-4 border-blue flex flex-row items-center justify-between mb-5 leading-6 font-Manrope text-sz16 text-blue">
                <div className="flex">
                  <div
                    onClick={handleLike}
                    className="flex flex-row items-center"
                  >
                    <img src={like} alt="like" className="h-6 mr-2" />
                    <div>{likes.length} like</div>
                  </div>
                  <div
                    onClick={handleDislike}
                    className="flex flex-row items-center"
                  >
                    <img
                      src={dislike}
                      alt="dislike"
                      className="h-6 ml-5 mr-2"
                    />{" "}
                    <div>{dislikes.length} dislike</div>
                  </div>
                  <div className="flex flex-row items-center">
                    <img
                      src={message}
                      alt="message"
                      className="h-6 ml-5 mr-2"
                    />{" "}
                    <div>{replies.length} Comments</div>
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <div className="flex">
                    Share Post{" "}
                    <img src={share} alt="share" className="h-6 ml-3" />
                  </div>
                  <div
                    onClick={() => setShowTipAuthor(true)}
                    className="rounded-lg shadow-xl p-border bg-gradient-to-r from-pink to-blue"
                  >
                    <div className="px-4 py-2 font-bold leading-8 text-center rounded-lg bg-gray text-blue font-Manrope text-sz16 flex flex-row items-center space-x-2">
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 0.5C4.486 0.5 0 4.986 0 10.5C0 16.014 4.486 20.5 10 20.5C15.514 20.5 20 16.014 20 10.5C20 4.986 15.514 0.5 10 0.5ZM11 15.415V16.5H9V15.42C6.661 15.053 6 13.418 6 12.5H8C8.011 12.643 8.159 13.5 10 13.5C11.38 13.5 12 12.915 12 12.5C12 12.176 12 11.5 10 11.5C6.52 11.5 6 9.62 6 8.5C6 7.212 7.029 5.916 9 5.585V4.512H11V5.621C12.734 6.031 13.4 7.474 13.4 8.5H12.4L11.4 8.518C11.386 8.138 11.185 7.5 10 7.5C8.701 7.5 8 8.016 8 8.5C8 8.874 8 9.5 10 9.5C13.48 9.5 14 11.38 14 12.5C14 13.788 12.971 15.084 11 15.415Z"
                          fill="#346DA1"
                        />
                      </svg>
                      <div>Tip Author</div>
                    </div>
                  </div>
                  {showTipAuthor ? (
                    <>
                      <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative my-6 w-5/6 md:w-2/3 lg:w-3/5 xl:w-1/2 rounded-xl shadow-xl font-Manrope">
                          {/*content*/}
                          <div className="text-black border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*body*/}
                            <div className="text-left bg-lightgray relative p-8 rounded-xl flex flex-col space-y-4">
                              <div className="border-b border-blue pb-4 text-sz16 text-blue">
                                WhiteHatDao / {topicItem.category} /{" "}
                                <span className="font-bold">
                                  {topicItem.title}
                                </span>
                              </div>
                              <div className="pt-3 text-sz18 font-bold font-pilat">
                                Tip Author
                              </div>
                              <div className="pt-3 flex flex-row items-end justify-between">
                                <div className="flex flex-row items-center space-x-2">
                                  <img src={dummy} alt="dummy"></img>
                                  <div className="text-sz18 flex flex-row items-center space-x-1">
                                    <div className="font-bold">
                                      {profile.username}
                                    </div>
                                    <img src={dot} alt="dot"></img>
                                    <div>{FormatDate(profile.createdAt)}</div>
                                  </div>
                                </div>
                                <div className="flex mb-4 font-medium leading-3 text-center text-white gap-x-3 ml-14 text-sz10 font-Manrope">
                                  {topic?.tags?.map(
                                    (tag: string, index: number) => (
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
                                    )
                                  )}
                                </div>
                              </div>
                              <div className="pt-3 text-sz16">
                                {topicItem.topic}
                              </div>
                              <div className="border-b border-blue pb-8 flex text-blue">
                                <div className="flex flex-row items-center">
                                  <img
                                    src={like}
                                    alt="like"
                                    className="h-6 mr-2"
                                  />
                                  <div>{likes.length} like</div>
                                </div>
                                <div className="flex flex-row items-center">
                                  <img
                                    src={dislike}
                                    alt="dislike"
                                    className="h-6 ml-5 mr-2"
                                  />{" "}
                                  <div>{dislikes.length} dislike</div>
                                </div>
                                <div className="flex flex-row items-center">
                                  <img
                                    src={message}
                                    alt="message"
                                    className="h-6 ml-5 mr-2"
                                  />{" "}
                                  <div>{replies.length} Comments</div>
                                </div>
                              </div>
                              <div className="pt-4 text-blue text-sz18">
                                Enter amount
                              </div>
                              <div className="pb-4 flex flex-col lg:flex-row items-start lg:items-center gap-6">
                                <input
                                  type="text"
                                  id="website-admin"
                                  className="shadow-inner rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="$ 10.00 - 500.00"
                                />
                                <select
                                  id="category"
                                  className="bg-transparent shadow-sm border border-blue text-sz18 rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                  <option selected>
                                    (0 BTC) Estimated price
                                  </option>
                                  <option value="frontend">Solidity</option>
                                  <option value="backend">Web3</option>
                                  <option value="fullstack">Nest</option>
                                  <option value="BlockChain">React</option>
                                </select>
                              </div>
                              <div onClick={() => setShowTipAuthor(false)} className="rounded-lg shadow-sm p-border bg-gradient-to-r from-pink to-blue">
                                <div className="px-4 py-2 font-bold leading-8 text-center rounded-lg bg-gray text-blue font-Manrope text-sz18 flex flex-row items-center justify-center space-x-2">
                                  <svg
                                    width="20"
                                    height="21"
                                    viewBox="0 0 20 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10 0.5C4.486 0.5 0 4.986 0 10.5C0 16.014 4.486 20.5 10 20.5C15.514 20.5 20 16.014 20 10.5C20 4.986 15.514 0.5 10 0.5ZM11 15.415V16.5H9V15.42C6.661 15.053 6 13.418 6 12.5H8C8.011 12.643 8.159 13.5 10 13.5C11.38 13.5 12 12.915 12 12.5C12 12.176 12 11.5 10 11.5C6.52 11.5 6 9.62 6 8.5C6 7.212 7.029 5.916 9 5.585V4.512H11V5.621C12.734 6.031 13.4 7.474 13.4 8.5H12.4L11.4 8.518C11.386 8.138 11.185 7.5 10 7.5C8.701 7.5 8 8.016 8 8.5C8 8.874 8 9.5 10 9.5C13.48 9.5 14 11.38 14 12.5C14 13.788 12.971 15.084 11 15.415Z"
                                      fill="#346DA1"
                                    />
                                  </svg>
                                  <div>Tip Author</div>
                                </div>
                              </div>
                              <div className="pt-2"></div>
                              <div className="my-8 p-4 bg-gray rounded-xl flex flex-col space-y-4">
                                <div className="text-sz18 font-bold text-blue pb-4 border-b border-blue flex flex-row items-center justify-between">
                                  <div>Add a Description</div>
                                  <svg
                                    width="16"
                                    height="8"
                                    viewBox="0 0 16 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M0 0L8 8L16 0H0Z" fill="#346DA1" />
                                  </svg>
                                </div>
                                <textarea
                                  rows={5}
                                  className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              </div>
              <div className="mb-6 leading-6 font-Manrope text-sz16">
                {topicItem.comments.length} Comment
              </div>
              <input
                className="w-full h-12 px-3 py-5 mb-6 font-normal leading-6 border rounded-lg shadow-inner border-blue bg-lightgray font-Manrope text-sz16"
                placeholder="Make a comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></input>
              <div className="flex items-center justify-end mb-8">
                <div className="cursor-pointer mr-10 font-semibold leading-8 text-pink text-sz18 font-Manrope">
                  Cancel
                </div>
                <div
                  onClick={handleReply}
                  className="rounded shadow-xl p-border bg-gradient-to-r from-pink to-blue"
                >
                  <div className="cursor-pointer px-12 py-3 font-bold leading-8 text-center rounded bg-gray text-blue font-Manrope text-sz18">
                    Post
                  </div>
                </div>
              </div>

              {replies.map((reply: any, index: number) => (
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <img src={ellipse2} alt="ellipse" className="mr-4" />
                    <div className="mr-2 font-semibold leading-6 font-Manrope text-sz16">
                      {reply.author}
                    </div>
                  </div>
                  <div className="mb-6 font-Manrope text-sz16">
                    <div className="p-4 rounded bg-gray">
                      <div className="mb-5 font-medium leading-5">
                        {reply.text}
                      </div>
                      <div className="flex items-center justify-between leading-6 text-blue">
                        <div className="flex">
                          <img src={like} alt="like" className="h-6 mr-2" />{" "}
                          {reply.like.length}
                          <img
                            src={dislike}
                            alt="dislike"
                            className="h-6 ml-5 mr-2"
                          />{" "}
                          {reply.dislike.length}
                          <img
                            src={message}
                            alt="message"
                            className="h-6 ml-5 mr-2"
                          />{" "}
                          {reply.comments.length}
                        </div>
                        Reply
                      </div>
                    </div>
                    {/* <div className="flex justify-start">
                      <div className="w-1/12">
                        <img src={reply} alt="reply" className="mr-4 ml-11" />
                      </div>
                      <div className="float-right w-11/12 p-4 mt-2 font-medium leading-5 rounded bg-gray">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </div>
                    </div> */}
                  </div>
                </div>
              ))}
              {/* <div className="mb-6">
                <div className="flex items-center mb-3">
                  <img src={ellipse} alt="ellipse" className="mr-4" />
                  <div className="mr-2 font-semibold leading-6 font-Manrope text-sz16">
                    Humanshield
                  </div>
                </div>
                <div className="mb-6 font-Manrope text-sz16">
                  <div className="p-4 rounded bg-gray">
                    <div className="mb-5 font-medium leading-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className="flex items-center justify-between leading-6 text-blue">
                      <div className="flex">
                        <img src={like} alt="like" className="h-6 mr-2" /> 2
                        <img
                          src={dislike}
                          alt="dislike"
                          className="h-6 ml-5 mr-2"
                        />{" "}
                        1
                        <img
                          src={message}
                          alt="message"
                          className="h-6 ml-5 mr-2"
                        />{" "}
                        1
                      </div>
                      Reply
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="flex flex-col w-1/3">
            <BlogComponent></BlogComponent>
          </div>
        </div>
      ): (
        <div className="h-screen"></div>
      )}
    </>
  );
};

export default TopicItem1;
