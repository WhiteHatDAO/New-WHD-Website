import avatar from "../../assets/images/profile/blank.png";
import pen from "../../assets/images/profile/pen.png";
import info from "../../assets/images/profile/info.png";
import up from "../../assets/images/profile/up.png";
import walletpng from "../../assets/images/profile/wallet.png";
import deletion from "../../assets/images/profile/delete.png";
import heart from "../../assets/images/profile/heart.png";
import swol from "../../assets/images/profile/swol.png";
import reply from "../../assets/images/profile/reply.png";
import dot from "../../assets/images/blogpost/dot.png";
import openfile from "../../assets/images/blogpost/openfile.png";
import line from "../../assets/images/blogpost/line.png";
import comment from "../../assets/images/profile/comment.png";

import storage from "../../utils/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import axios from "axios";
import { BACKEND_SERVER } from "../../global/global";

import { useAppContext } from "../../context/appContext";

import { FormatDate } from "../../utils/utils";

import { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Settings = () => {
  const [appState] = useAppContext();

  const { address } = appState;

  const navigate = useNavigate();
  const location = useLocation();

  const [edtUsername, setEdtUsername] = useState<boolean>(false);
  const [edtWebsite, setEdtWebsite] = useState<boolean>(false);
  const [edtWallet, setEdtWallet] = useState<boolean>(false);
  const [edtEmail, setEdtEmail] = useState<boolean>(false);
  const [edtTwitter, setEdtTwitter] = useState<boolean>(false);
  const [edtGithub, setEdtGithub] = useState<boolean>(false);
  const [edtTimezone, setEdtTimezone] = useState<boolean>(false);
  const [edtDiscord, setEditDiscord] = useState<boolean>(false);

  const [id, setId] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [website, setWebsite] = useState<string>();
  const [uploadPic, setUploadPic] = useState<string>();
  const [bio, setBio] = useState<string>();
  const [wallet, setWallet] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [twitter, setTwitter] = useState<string>();
  const [github, setGithub] = useState<string>();
  const [timezone, setTimezone] = useState<string>();
  const [discord, setDiscord] = useState<string>();
  const [project, setProject] = useState<string>();
  const [prof, setProfile] = useState<any>();
  const [joined, setJoined] = useState<string>();
  const [views, setViews] = useState<number>(0);
  const [trustLevel, setTrustLevel] = useState<string>();
  const [seen, setSeen] = useState<String>();
  const [lastPostDate, setLastPostDate] = useState<any>();

  const [topicViewed, setTopicViewed] = useState<number>(0);
  const [postRead, setPostRead] = useState<number>(0);
  const [starGiven, setStarGiven] = useState<number>(0);
  const [starRecieved, setStarRecieved] = useState<number>(0);
  const [topicsCount, setTopicsCount] = useState<number>(0);
  const [postsCount, setPostsCount] = useState<number>(0);
  const [topReplies, setTopReplies] = useState<any[]>([]);
  const [topTopics, setToptopics] = useState<any[]>([]);
  const [mostLikedBy, setMostLikedBy] = useState<any[]>([]);
  const [mostLiked, setMostLiked] = useState<any[]>([]);
  const [latestReplies, setLatestReplies] = useState<any[]>([]);
  const [latestTopics, setLatesttopics] = useState<any[]>([]);

  const [stateActivity, setStateActivity] = useState<string>("Topics");
  const [stateNotifications, setStateNotifications] =
    useState<string>("Responses");

  const [notifReplies, setNotifReplies] = useState<any[]>([]);
  const [notifMentions, setNotifMentions] = useState<any[]>([]);
  // const [mostRepliedTo, setMostRepliedTo] = useState<any[]>([]);

  const getComments = useCallback(async () => {
    if (notifReplies.length > 0) return;
    var replies: any[] = [];
    for (let i = 0; i < topTopics.length; i++) {
      const id = topTopics[i]._id;
      const params = new URLSearchParams([["topic", String(id)]]);
      try {
        const res = await axios.get(BACKEND_SERVER + "/api/replies", {
          params,
        });
        if (res.status === 200) {
          for (let j = 0; j < res.data.data.length; j++) {
            replies.push(res.data.data[j]);
          }
        }
      } catch (e) {
        console.error(e);
      }
      setNotifReplies(replies);
    }
  }, [topTopics, notifReplies]);

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

  const getMentions = useCallback(async () => {
    if (!prof) return;
    let topics = [],
      mentions = [];
    try {
      const res = await axios.get(BACKEND_SERVER + "/api/topics");
      if (res.status === 200) {
        topics = res.data.data;
      }
    } catch (e) {
      console.error(e);
    }

    for (let i = 0; i < topics.length; i++) {
      if (topics[i].topic.includes(prof?.username)) {
        mentions.push(topics[i]);
      }
    }

    setNotifMentions(mentions);
  }, [prof]);

  const getTopReplies = useCallback(async () => {
    if (!prof) return;
    const params = new URLSearchParams([["author", String(prof?.username)]]);
    try {
      const res = await axios.get(BACKEND_SERVER + "/api/replies/top_replies", {
        params,
      });
      if (res.status === 200) {
        setTopReplies(res.data.data);
      }
    } catch (e) {
      console.error(e);
    }
  }, [prof]);

  const getLatestReplies = useCallback(async () => {
    if (!prof) return;
    const params = new URLSearchParams([["author", String(prof?.username)]]);
    try {
      const res = await axios.get(
        BACKEND_SERVER + "/api/replies/latest_replies",
        {
          params,
        }
      );
      if (res.status === 200) {
        setLatestReplies(res.data.data);
      }
    } catch (e) {
      console.error(e);
    }
  }, [prof]);

  const getTopTopics = useCallback(async () => {
    if (!prof) return;
    const params = new URLSearchParams([["author", String(prof?.username)]]);
    try {
      const res = await axios.get(BACKEND_SERVER + "/api/topics/top_topics", {
        params,
      });
      if (res.status === 200) {
        setToptopics(res.data.data);
      }
    } catch (e) {
      console.error(e);
    }
  }, [prof]);

  const getLatestTopics = useCallback(async () => {
    if (!prof) return;
    const params = new URLSearchParams([["author", String(prof?.username)]]);
    try {
      const res = await axios.get(
        BACKEND_SERVER + "/api/topics/latest_topics",
        {
          params,
        }
      );
      if (res.status === 200) {
        setLatesttopics(res.data.data);
      }
    } catch (e) {
      console.error(e);
    }
  }, [prof]);

  const getTopicsCount = useCallback(async () => {
    if (!prof) return;
    const params = new URLSearchParams([["author", String(prof?.username)]]);
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
  }, [prof]);

  const getPostsCount = useCallback(async () => {
    if (!prof) return;
    const params = new URLSearchParams([["author", String(prof?.username)]]);
    try {
      const res = await axios.get(BACKEND_SERVER + "/api/replies", {
        params,
      });
      if (res.status === 200) {
        setPostsCount(res.data.data.length);
      }
    } catch (e) {
      console.error(e);
    }
  }, [prof]);

  const getStarGiven = useCallback(async () => {
    if (!prof) return;
    let count = 0;
    const name = prof?.username;
    try {
      const res = await axios.get(BACKEND_SERVER + "/api/topics");
      if (res.status === 200 && res.data.data.length > 0) {
        const data = res.data.data;
        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < data[i].like.length; j++) {
            if (data[i].like[j] === name) {
              count++;
              break;
            }
          }
        }
      }
    } catch (e) {
      console.error(e);
    }

    try {
      const res = await axios.get(BACKEND_SERVER + "/api/replies");
      if (res.status === 200 && res.data.data.length > 0) {
        const data = res.data.data;
        const name = prof?.username;
        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < data[i].like.length; j++) {
            if (data[i].like[j] === name) {
              count++;
              break;
            }
          }
        }
      }
    } catch (e) {
      console.error(e);
    }

    setStarGiven(count);
  }, [prof]);

  const getMostLikedBy = useCallback(async () => {
    if (!prof) return;
    const name = prof?.username;
    let list = [];
    try {
      const res = await axios.get(BACKEND_SERVER + "/api/topics");
      if (res.status === 200 && res.data.data.length > 0) {
        const server_data = res.data.data;

        for (let i = 0; i < server_data.length; i++) {
          var b = false;
          for (let j = 0; j < list.length; j++) {
            if (list[j].author === server_data[i].author) {
              b = true;
              break;
            }
          }

          if (!b) {
            let count = 0;
            for (let j = 0; j < server_data.length; j++) {
              for (let k = 0; k < server_data[j].like.length; k++) {
                if (server_data[j].like[k] === name) {
                  count++;
                  break;
                }
              }
            }

            // console.log('author:', server_data[i].author, 'stars', count)
            list.push({ author: server_data[i].author, stars: count });
          } else {
            continue;
          }
        }
      }
    } catch (e) {
      console.error(e);
    }

    const data_list = list.sort((a, b) => {
      return b.stars - a.stars;
    });

    setMostLikedBy(data_list);
  }, [prof]);

  const getMostLiked = useCallback(async () => {
    if (!prof) return;
    let list = [];
    let profiles = [];

    try {
      const res = await axios.get(BACKEND_SERVER + "/api/profile");
      if (res.status === 200) {
        profiles = res.data.data;
      }
    } catch (e) {
      console.error(e);
    }

    const params = new URLSearchParams([["author", String(prof?.username)]]);
    try {
      const res = await axios.get(BACKEND_SERVER + "/api/topics", {
        params,
      });
      if (res.status === 200 && res.data.data.length > 0) {
        const server_data = res.data.data;

        for (let i = 0; i < profiles.length; i++) {
          let count = 0;
          for (let j = 0; j < server_data.length; j++) {
            for (let k = 0; k < server_data[j].like.length; k++) {
              if (profiles[i].username === server_data[j].like[k]) {
                count++;
              }
            }
          }
          list.push({ author: profiles[i].username, stars: count });
        }
      }
    } catch (e) {
      console.error(e);
    }

    const data = list.sort((a, b) => {
      return b.stars - a.stars;
    });

    setMostLiked(data);
  }, [prof]);

  const getStarRecieved = useCallback(async () => {
    if (!prof) return;
    let count = 0;
    const name = prof?.username;
    try {
      const res = await axios.get(BACKEND_SERVER + "/api/topics");
      if (res.status === 200 && res.data.data.length > 0) {
        const data = res.data.data;
        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < data[i].like.length; j++) {
            if (data[i].like[j] !== name) {
              count++;
              break;
            }
          }
        }
      }
    } catch (e) {
      console.error(e);
    }

    try {
      const res = await axios.get(BACKEND_SERVER + "/api/replies");
      if (res.status === 200 && res.data.data.length > 0) {
        const data = res.data.data;
        const name = prof?.username;
        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < data[i].like.length; j++) {
            if (data[i].like[j] !== name) {
              count++;
              break;
            }
          }
        }
      }
    } catch (e) {
      console.error(e);
    }

    setStarRecieved(count);
  }, [prof]);

  const getTopicViewed = useCallback(async () => {
    if (!prof) return;
    try {
      const res = await axios.get(BACKEND_SERVER + "/api/topics");
      if (res.status === 200 && res.data.data.length > 0) {
        const data = res.data.data;
        let count = 0;
        const name = prof?.username;
        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < data[i].like.length; j++) {
            if (data[i].like[j] === name) {
              count++;
              break;
            }
          }
          for (let j = 0; j < data[i].dislike.length; j++) {
            if (data[i].dislike[j] === name) {
              count++;
              break;
            }
          }
          for (let j = 0; j < data[i].comments.length; j++) {
            if (data[i].comments[j] === name) {
              count++;
              break;
            }
          }
        }
        setTopicViewed(count);
      }
    } catch (e) {
      console.error(e);
    }
  }, [prof]);

  const getPostRead = useCallback(async () => {
    if (!prof) return;
    try {
      const res = await axios.get(BACKEND_SERVER + "/api/replies");
      if (res.status === 200 && res.data.data.length > 0) {
        const data = res.data.data;
        let count = 0;
        const name = prof?.username;
        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < data[i].like.length; j++) {
            if (data[i].like[j] === name) {
              count++;
              break;
            }
          }
          for (let j = 0; j < data[i].dislike.length; j++) {
            if (data[i].dislike[j] === name) {
              count++;
              break;
            }
          }
          for (let j = 0; j < data[i].comments.length; j++) {
            if (data[i].comments[j] === name) {
              count++;
              break;
            }
          }
        }
        setPostRead(count);
      }
    } catch (e) {
      console.error(e);
    }
  }, [prof]);

  const getLastReplyDate = useCallback(async () => {
    if (!prof) return;
    const params = new URLSearchParams([["author", String(prof?.username)]]);
    try {
      const res = await axios.get(BACKEND_SERVER + "/api/last_reply", {
        params,
      });
      if (res.status === 200) {
        setLastPostDate(res.data.data);
      }
    } catch (e) {
      console.error(e);
    }
  }, [prof]);

  useEffect(() => {
    getLastReplyDate();
    getTopicViewed();
    getPostRead();
    getStarGiven();
    getStarRecieved();
    getTopicsCount();
    getPostsCount();
    getTopReplies();
    getTopTopics();
    getMostLikedBy();
    getMostLiked();
    getLatestReplies();
    getLatestTopics();
    getComments();
    getMentions();
  }, [
    prof,
    getLastReplyDate,
    getTopicViewed,
    getPostRead,
    getStarGiven,
    getStarRecieved,
    getTopicsCount,
    getPostsCount,
    getTopReplies,
    getTopTopics,
    getMostLikedBy,
    getMostLiked,
    getLatestReplies,
    getLatestTopics,
    getComments,
    getMentions,
  ]);

  const getProfile = useCallback(async () => {
    const params = new URLSearchParams([["wallet", String(address)]]);
    try {
      const res = await axios.get(BACKEND_SERVER + "/api/profile", { params });
      if (res.status === 200 && res.data.data.length > 0) {
        const profile = res.data.data[0];
        setId(profile._id);
        setUsername(profile.username);
        setWebsite(profile.website);
        setUploadPic(profile.pic);
        setBio(profile.bio);
        setWallet(profile.wallet);
        setEmail(profile.email);
        setTwitter(profile.twitter);
        setGithub(profile.github);
        setTimezone(profile.timezone);
        setDiscord(profile.discord);
        setProject(profile.project_dao);

        const date = new Date(profile.createdAt);

        const str = FormatDate(date);

        setJoined(str);
        setViews(profile.views);
        setTrustLevel(profile.trust_level);

        setSeen(showTime(profile.updatedAt));

        setProfile(profile);
      }
    } catch (e) {
      console.error(e);
    }
  }, [address]);

  const getSubAddress = (str: string) => {
    return `${str.substring(0, 5)}...${str.substring(
      str.length - 3,
      str.length
    )}`;
  };

  const updateViews = useCallback(async () => {
    let t = views + 1;
    try {
      const data = {
        id: id,
        views: t,
      };

      await axios.put(BACKEND_SERVER + "/api/profile", data);
    } catch (e) {
      console.log(e);
    }
  }, [id, views]);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  useEffect(() => {
    updateViews();
  }, [prof, updateViews]);

  const isExistProfile = async (addr: string) => {
    const params = new URLSearchParams([["wallet", String(addr)]]);
    try {
      const res = await axios.get(BACKEND_SERVER + "/api/profile", { params });
      if (res.status === 200 && res.data.data.length > 0) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.error(e);
    }
    return false;
  };

  const handleSave = async () => {
    try {
      const data = {
        id: id,
        username: username,
        website: website,
        pic: uploadPic,
        bio: bio,
        wallet: wallet === undefined ? address : wallet,
        email: email,
        twitter: twitter,
        github: github,
        timezone: timezone,
        discord: discord,
        project_dao: project,
      };

      let res;

      if ((await isExistProfile(address as string)) === true) {
        res = await axios.put(BACKEND_SERVER + "/api/profile", data);
      } else {
        res = await axios.post(BACKEND_SERVER + "/api/profile", data);
      }

      getProfile();

      if (res.status === 200) {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(BACKEND_SERVER + `/api/profile/${id}`);
    } catch (e) {
      console.error(e);
    }
  };

  const showTime = (time: Date) => {
    let now = new Date().getTime();
    let ttt = new Date(time).getTime();
    let value = (now - ttt) / 1000;

    if (value >= 3600 * 24) {
      return (value / 3600 / 24).toFixed(0).toString() + " days";
    } else if (value >= 3600) {
      return (value / 3600).toFixed(0).toString() + " hours";
    } else if (value >= 60) {
      return (value / 60).toFixed(0).toString() + " minutes";
    } else {
      return value.toFixed(0).toString() + " seconds";
    }
  };

  const getDays = (time: any) => {
    let now = new Date().getTime();
    let ttt = new Date(time).getTime();
    let value = (now - ttt) / 1000;
    if (value >= 3600 * 24) {
      return (value / 3600 / 24).toFixed(0).toString();
    } else {
      return "1 day";
    }
  };

  const handleFileChange = (event: any) => {
    handleUpload(event.target.files[0]);
  };

  const handleUpload = (file: any) => {
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
          setUploadPic(url);
        });
      }
    );
  };

  return (
    <>
      <div className="my-20 mx-4">
        <div className="p-5 border shadow-xl rounded-xl border-blue font-Manrope mb-14">
          <div className="flex items-start mb-10">
            <img src={uploadPic?uploadPic:avatar} alt="avatar" className="mr-5 h-32 w-32" />
            <div>
              <div className="mb-2 font-bold leading-8 text-sz18">
                {prof?.username}
              </div>
              <div className="mb-3 font-medium leading-6 text-sz18 text-pink">
                {prof?.website}
              </div>
              <div className="leading-5 text-sz16">{prof?.bio}</div>
            </div>
          </div>
          <div className="flex px-5 py-2 font-medium bg-gray text-ligthgrey">
            <div className="flex items-center mr-8">
              Joined <span className="ml-1 text-lightblack">{joined}</span>
            </div>
            <div className="flex items-center mr-8">
              Views <span className="ml-1 text-lightblack">{views}</span>
            </div>
            <div className="flex items-center mr-8">
              Last Post{" "}
              <span className="ml-1 text-lightblack">
                {FormatDate(lastPostDate)}
              </span>
            </div>
            <div className="flex items-center mr-8">
              Trust Level{" "}
              <span className="ml-1 text-lightblack">{trustLevel}</span>
            </div>
            <div className="flex items-center mr-8">
              Seen <span className="ml-1 text-lightblack">{seen}</span>
            </div>
          </div>
        </div>

        <div className="border p-middle font-Manrope border-blue rounded-xl">
          <div className="flex items-center mb-12 font-bold leading-8 gap-x-7 text-sz18">
            <div
              onClick={() => navigate("/profile/summary")}
              className={
                location.pathname === "/profile/summary"
                  ? "px-5 py-1 rounded bg-darkwhite text-blue cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Summary
            </div>
            <div
              onClick={() => navigate("/profile/activity")}
              className={
                location.pathname === "/profile/activity"
                  ? "px-5 py-1 rounded bg-darkwhite text-blue cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Activity
            </div>
            <div
              onClick={() => navigate("/profile/notifications")}
              className={
                location.pathname === "/profile/notifications"
                  ? "px-5 py-1 rounded bg-darkwhite text-blue cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Notifications
            </div>
            <div
              onClick={() => navigate("/profile/settings")}
              className={
                location.pathname === "/profile/settings"
                  ? "px-5 py-1 rounded bg-darkwhite text-blue cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Settings
            </div>
          </div>

          {location.pathname === "/profile/summary" ? (
            <>
              <div className="flex items-center mb-4 font-bold leading-8 text-sz18">
                Stats
              </div>
              <div className="flex px-5 py-2 mb-8 font-medium bg-gray text-ligthgrey">
                <div className="flex items-center mr-8">
                  <span className="mr-1 text-lightblack">
                    {" "}
                    {getDays(prof?.createdAt)}
                  </span>{" "}
                  days visited
                </div>
                <div className="flex items-center mr-8">
                  <span className="mr-1 text-lightblack"> 2h</span> read time
                </div>
                <div className="flex items-center mr-8">
                  <span className="mr-1 text-lightblack"> {topicViewed}</span>{" "}
                  topic viewed
                </div>
                <div className="flex items-center mr-8">
                  <span className="mr-1 text-lightblack"> {postRead}</span>{" "}
                  posts read
                </div>
                <div className="flex items-center mr-8">
                  <span className="text-lightblack"> {starGiven}</span>{" "}
                  <img src={heart} alt="heart" className="mx-1" />
                  given
                </div>
                <div className="flex items-center mr-8">
                  <span className="text-lightblack"> {starRecieved}</span>{" "}
                  <img src={heart} alt="heart" className="mx-1" />
                  received
                </div>
                <div className="flex items-center mr-8">
                  <span className="mr-1 text-lightblack"> {topicsCount}</span>{" "}
                  topic created
                </div>
                <div className="flex items-center mr-8">
                  <span className="mr-1 text-lightblack"> {postsCount}</span>{" "}
                  posts created
                </div>
              </div>
              <div className="flex items-start mb-11 gap-x-12">
                <div className="w-1/2 p-5 rounded bg-gray">
                  <div className="flex items-center mb-4 font-bold leading-8 text-sz18">
                    TOP REPLIES
                  </div>
                  {topReplies.map((reply: any, index: number) => (
                    <div
                      key={index}
                      className="p-3 mb-4 font-medium leading-5 rounded bg-darkwhite text-sz18"
                    >
                      <div className="text-blue">{reply.text}</div>
                      <div className="flex items-center text-ligthgrey">
                        <div className="font-normal leading-6 font-Manrope text-sz16">
                          {getDays(reply.createdAt)}
                        </div>
                        <img src={dot} alt="dot" className="mx-2" />
                        <div className="font-normal leading-6 font-Manrope text-sz16">
                          {reply.like.length}
                        </div>
                        <img src={heart} alt="heart" className="mx-1" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-1/2 p-5 rounded bg-gray">
                  <div className="flex items-center mb-4 font-bold leading-8 text-sz18">
                    TOP TOPICS
                  </div>
                  {topTopics?.map((topic: any, index: number) => (
                    <div
                      key={index}
                      className="p-3 mb-4 font-medium leading-5 rounded bg-darkwhite text-sz18"
                    >
                      <div className="text-blue">
                        ({topic.category}) {topic.title}
                      </div>
                      <div className="flex items-center text-ligthgrey">
                        <div className="font-normal leading-6 font-Manrope text-sz16">
                          {getDays(topic.createdAt)}
                        </div>
                        <img src={dot} alt="dot" className="mx-2" />
                        <div className="font-normal leading-6 font-Manrope text-sz16">
                          {topic.like.length}
                        </div>
                        <img src={heart} alt="heart" className="mx-1" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-start leading-7 mb-11 text-sz18 gap-x-12">
                <div className="w-1/2 p-5 rounded bg-gray">
                  <div className="flex items-center mb-4 font-bold leading-8 text-sz18">
                    TOP LINKS
                  </div>
                  <div className="p-3 mb-4 font-medium leading-5 rounded bg-darkwhite text-sz18">
                    <div className="mb-1 text-blue">
                      (GENERAL) WhiteHatDAO Governance structure...
                    </div>
                    <div className="flex items-center leading-5 text-sz14 text-ligthgrey">
                      www.nfthinker.com/profile
                    </div>
                  </div>
                </div>
                <div className="w-1/2 p-5 rounded bg-gray">
                  <div className="flex items-center mb-4 font-bold leading-8 text-sz18">
                    MOST REPLIED TO
                  </div>
                  <div className="flex p-3 mb-4 font-medium leading-5 rounded bg-darkwhite text-sz18">
                    <img src={swol} alt="avatar" className="mr-3" />
                    <div className="flex flex-col">
                      <div className="text-blue">Swolchase</div>
                      <div className="flex items-center gap-x-1">
                        <img src={reply} alt="reply" />3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start leading-7 text-sz18 gap-x-12">
                <div className="w-1/2 p-5 rounded bg-gray">
                  <div className="flex items-center mb-4 font-bold leading-8 text-sz18">
                    MOST LIKED BY
                  </div>
                  {mostLikedBy.map((item: any) => (
                    <div className="flex p-3 mb-4 font-medium leading-5 rounded bg-darkwhite text-sz18">
                      <img src={swol} alt="avatar" className="mr-3" />
                      <div className="flex flex-col">
                        <div className="text-blue">{item.author}</div>
                        <div className="flex items-center gap-x-1">
                          <img src={heart} alt="reply" />
                          {item.stars}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-1/2 p-5 rounded bg-gray">
                  <div className="flex items-center mb-4 font-bold leading-8 text-sz18">
                    MOST LIKED
                  </div>
                  {mostLiked.map((item: any) => (
                    <div className="flex p-3 mb-4 font-medium leading-5 rounded bg-darkwhite text-sz18">
                      <img src={swol} alt="avatar" className="mr-3" />
                      <div className="flex flex-col">
                        <div className="text-blue">{item.author}</div>
                        <div className="flex items-center gap-x-1">
                          <img src={heart} alt="reply" />
                          {item.stars}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : location.pathname === "/profile/activity" ? (
            <div className="flex items-start gap-x-16 mb-11 font-Manrope">
              <div className="w-1/4 p-5 rounded bg-gray">
                <div className="w-full px-4 py-3 font-semibold leading-6 rounded bg-lightgray text-blue text-sz18">
                  All
                </div>
                <div className="pt-5 space-y-5 leading-6 text-sz16 px-middle">
                  <div onClick={() => setStateActivity("Topics")}>Topics</div>
                  <div onClick={() => setStateActivity("Replies")}>Replies</div>
                  <div onClick={() => setStateActivity("Read")}>Read</div>
                  <div onClick={() => setStateActivity("Drafts")}>Drafts</div>
                  <div onClick={() => setStateActivity("Likes")}>Likes</div>
                  <div onClick={() => setStateActivity("Bookmarks")}>
                    Bookmarks
                  </div>
                </div>
              </div>

              <div className="w-3/4 rounded p-middle bg-gray">
                {stateActivity === "Topics" ? (
                  <>
                    {latestTopics.map((topic: any) => (
                      <>
                        <div>
                          <div className="flex items-center mb-4">
                            <img src={swol} alt="avatar" className="mr-2" />
                            <div className="font-medium leading-5 rounded text-sz18">
                              <div className="mb-1 text-blue">
                                {topic.category} for WhiteHatDAO meetings
                              </div>
                              <div className="flex items-center text-ligthgrey">
                                <img
                                  src={openfile}
                                  alt="openfile"
                                  className="mr-2"
                                />
                                <div className="font-normal leading-6 font-Manrope text-sz16">
                                  {topic.category}
                                </div>
                                <img src={dot} alt="dot" className="mx-2" />
                                <div className="font-normal leading-6 font-Manrope text-sz16">
                                  {FormatDate(topic.createdAt)}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="font-medium leading-5 text-sz16">
                            {getTextFromTopic(topic.topic)}
                          </div>
                        </div>
                        <img src={line} alt="line" className="w-full my-5" />
                      </>
                    ))}
                  </>
                ) : stateActivity === "Replies" ? (
                  <>
                    {latestReplies.map((reply: any) => (
                      <>
                        <div>
                          <div className="flex items-center mb-4">
                            <img src={swol} alt="avatar" className="mr-2" />
                            <div className="font-medium leading-5 rounded text-sz18">
                              <div className="mb-1 text-blue">
                                Reply for WhiteHatDAO meetings
                              </div>
                              <div className="flex items-center text-ligthgrey">
                                <img
                                  src={openfile}
                                  alt="openfile"
                                  className="mr-2"
                                />
                                <div className="font-normal leading-6 font-Manrope text-sz16">
                                  Reply
                                </div>
                                <img src={dot} alt="dot" className="mx-2" />
                                <div className="font-normal leading-6 font-Manrope text-sz16">
                                  {FormatDate(reply.createdAt)}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="font-medium leading-5 text-sz16">
                            {reply.text}
                          </div>
                        </div>
                        <img src={line} alt="line" className="w-full my-5" />
                      </>
                    ))}
                  </>
                ) : stateActivity === "Read" ? (
                  <></>
                ) : stateActivity === "Drafts" ? (
                  <></>
                ) : stateActivity === "Likes" ? (
                  <>
                    {topTopics.map((topic: any) => (
                      <>
                        <div>
                          <div className="flex items-center mb-4">
                            <img src={swol} alt="avatar" className="mr-2" />
                            <div className="font-medium leading-5 rounded text-sz18">
                              <div className="mb-1 text-blue">
                                {topic.category} for WhiteHatDAO meetings
                              </div>
                              <div className="flex items-center text-ligthgrey">
                                <img
                                  src={openfile}
                                  alt="openfile"
                                  className="mr-2"
                                />
                                <div className="font-normal leading-6 font-Manrope text-sz16">
                                  {topic.category}
                                </div>
                                <img src={dot} alt="dot" className="mx-2" />
                                <div className="font-normal leading-6 font-Manrope text-sz16">
                                  {FormatDate(topic.createdAt)}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="font-medium leading-5 text-sz16">
                            {topic.topic}
                          </div>
                        </div>
                        <img src={line} alt="line" className="w-full my-5" />
                      </>
                    ))}
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ) : location.pathname === "/profile/notifications" ? (
            <div className="flex items-start gap-x-16 mb-11 font-Manrope">
              <div className="w-1/4 p-5 rounded bg-gray">
                <div className="w-full px-4 py-3 font-semibold leading-6 rounded bg-lightgray text-blue text-sz18">
                  All
                </div>
                <div className="pt-5 space-y-5 leading-6 text-sz16 px-middle">
                  <div onClick={() => setStateNotifications("Responses")}>
                    Responses
                  </div>
                  <div onClick={() => setStateNotifications("Likes")}>
                    Likes
                  </div>
                  <div onClick={() => setStateNotifications("Mentions")}>
                    Mentions
                  </div>
                </div>
              </div>

              <div className="w-3/4 rounded p-middle bg-gray">
                {stateNotifications === "Responses" ? (
                  <>
                    {notifReplies.map((reply: any) => (
                      <>
                        <div>
                          <div className="flex items-center mb-4 leading-5 text-sz18">
                            <img src={comment} alt="comment" className="mr-2" />
                            Comment
                          </div>
                          <div className="font-medium leading-5 text-blue text-sz16">
                            {reply.text}
                          </div>
                        </div>
                        <img src={line} alt="line" className="w-full my-5" />
                      </>
                    ))}
                  </>
                ) : stateNotifications === "Likes" ? (
                  <>
                    {topTopics.map((topic: any) => (
                      <>
                        {topic.like.length > 0 && (
                          <>
                            <div>
                              <div className="flex items-center mb-4 leading-5 text-sz18">
                                <img src={heart} alt="heart" className="mr-2" />
                                Like
                              </div>
                              <div className="font-medium leading-5 text-blue text-sz16">
                                {topic.title}
                              </div>
                            </div>
                            <img
                              src={line}
                              alt="line"
                              className="w-full my-5"
                            />
                          </>
                        )}
                      </>
                    ))}
                  </>
                ) : (
                  <>
                    {notifMentions.map((mention: any) => (
                      <>
                        <div>
                          <div className="flex items-center mb-4 leading-5 text-sz18">
                            <img src={mention} alt="mention" className="mr-2" />
                            Mentions
                          </div>
                          <div className="font-medium leading-5 text-blue text-sz16">
                            {mention.topic}
                          </div>
                        </div>
                        <img src={line} alt="line" className="w-full mt-5" />
                      </>
                    ))}
                  </>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-start gap-x-16 mb-11 font-Manrope">
              <div className="w-1/4 p-5 rounded bg-gray">
                <div className="w-full px-4 py-3 font-semibold leading-6 rounded bg-lightgray text-blue text-sz18">
                  All
                </div>
                <div className="pt-5 space-y-5 leading-6 text-sz16 px-middle">
                  Profile
                </div>
              </div>

              <div className="w-3/4 py-5 rounded px-middle bg-gray">
                <div className="flex mb-10 gap-x-16">
                  <div className="w-5/12 font-bold leading-6 text-sz18">
                    <div className="mb-4">Username</div>
                    <div className="flex flex-row items-center">
                      {edtUsername ? (
                        <div className="w-full flex flex-row items-center space-x-2">
                          <input
                            type="text"
                            id="website-admin"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="WHITE HAT DAO"
                          />
                          <img
                            onClick={() => setEdtUsername(false)}
                            src={pen}
                            alt="pen"
                          />
                        </div>
                      ) : (
                        <div className="w-full flex items-center justify-between px-5 py-3 font-medium leading-5 rounded shadow-sm text-blue text-sz18 bg-gray">
                          <div>{username}</div>
                          <img
                            onClick={() => setEdtUsername(true)}
                            src={pen}
                            alt="pen"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="w-5/12 font-bold leading-6 text-sz18">
                    <div className="mb-4">Website</div>
                    <div className="flex flex-row items-center">
                      {edtWebsite ? (
                        <div className="w-full flex flex-row items-center space-x-2">
                          <input
                            type="text"
                            id="website-admin"
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                            className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="WHITE HAT DAO"
                          />
                          <img
                            onClick={() => setEdtWebsite(false)}
                            src={pen}
                            alt="pen"
                          />
                        </div>
                      ) : (
                        <div className="w-full flex items-center justify-between px-5 py-3 font-medium leading-5 rounded shadow-sm text-blue text-sz18 bg-gray">
                          <div>{website}</div>
                          <img
                            onClick={() => setEdtWebsite(true)}
                            src={pen}
                            alt="pen"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex mb-10 gap-x-16">
                  <div className="w-5/12 font-bold leading-6 text-sz18">
                    <div className="mb-4">Profile Picture</div>
                    <div className="flex items-center justify-start ">
                      {uploadPic && (
                        <img
                          src={uploadPic}
                          alt="avatar"
                          className="mr-6 w-12 h-12 rounded-full"
                        />
                      )}
                      <label
                        htmlFor="dropzone-file"
                        className="flex items-center justify-center shadow-sm h-11 w-11"
                      >
                        <img src={up} alt="up" />
                        <input
                          id="dropzone-file"
                          className="hidden"
                          type="file"
                          onChange={(e) => handleFileChange(e)}
                          accept="/image/*"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="w-6/12 font-bold leading-6 text-sz18">
                    <div className="mb-4">Bio</div>
                    <textarea
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      className="w-full p-3 leading-6 rounded-lg shadow-inner h-28 text-sz16 bg-lightgray"
                      placeholder="Add a short bio about yourself"
                    ></textarea>
                  </div>
                </div>

                <div className="flex mb-10 gap-x-16">
                  <div className="w-5/12 font-bold leading-6 text-sz18">
                    <div className="mb-4">Wallet Address</div>
                    <div className="flex flex-row items-center">
                      {edtWallet ? (
                        <div className="w-full flex flex-row items-center space-x-2">
                          <input
                            type="text"
                            id="website-admin"
                            value={wallet}
                            onChange={(e) => setWallet(e.target.value)}
                            className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="WHITE HAT DAO"
                          />
                          <img
                            onClick={() => setEdtWallet(false)}
                            src={walletpng}
                            alt="pen"
                          />
                        </div>
                      ) : (
                        <div className="w-full flex items-center justify-between px-5 py-3 font-medium leading-5 rounded shadow-sm text-blue text-sz18 bg-gray">
                          <div>
                            {getSubAddress(
                              String(wallet === undefined ? address : wallet)
                            )}
                          </div>
                          <img
                            onClick={() => setEdtWallet(true)}
                            src={walletpng}
                            alt="pen"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="w-5/12 font-bold leading-6 text-sz18">
                    <div className="mb-4">Email Address</div>
                    <div className="flex flex-row items-center">
                      {edtEmail ? (
                        <div className="w-full flex flex-row items-center space-x-2">
                          <input
                            type="text"
                            id="website-admin"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="WHITE HAT DAO"
                          />
                          <img
                            onClick={() => setEdtEmail(false)}
                            src={pen}
                            alt="pen"
                          />
                        </div>
                      ) : (
                        <div className="w-full flex items-center justify-between px-5 py-3 font-medium leading-5 rounded shadow-sm text-blue text-sz18 bg-gray">
                          <div>{email}</div>
                          <img
                            onClick={() => setEdtEmail(true)}
                            src={pen}
                            alt="pen"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex mb-10 gap-x-16">
                  <div className="w-5/12 font-bold leading-6 text-sz18">
                    <div className="mb-4">Twitter</div>
                    <div className="flex flex-row items-center">
                      {edtTwitter ? (
                        <div className="w-full flex flex-row items-center space-x-2">
                          <input
                            type="text"
                            id="website-admin"
                            value={twitter}
                            onChange={(e) => setTwitter(e.target.value)}
                            className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="WHITE HAT DAO"
                          />
                          <img
                            onClick={() => setEdtTwitter(false)}
                            src={pen}
                            alt="pen"
                          />
                        </div>
                      ) : (
                        <div className="w-full flex items-center justify-between px-5 py-3 font-medium leading-5 rounded shadow-sm text-blue text-sz18 bg-gray">
                          <div>{twitter}</div>
                          <img
                            onClick={() => setEdtTwitter(true)}
                            src={pen}
                            alt="pen"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="w-5/12 font-bold leading-6 text-sz18">
                    <div className="mb-4">Github</div>
                    <div className="flex flex-row items-center">
                      {edtGithub ? (
                        <div className="w-full flex flex-row items-center space-x-2">
                          <input
                            type="text"
                            id="website-admin"
                            value={github}
                            onChange={(e) => setGithub(e.target.value)}
                            className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="WHITE HAT DAO"
                          />
                          <img
                            onClick={() => setEdtGithub(false)}
                            src={pen}
                            alt="pen"
                          />
                        </div>
                      ) : (
                        <div className="w-full flex items-center justify-between px-5 py-3 font-medium leading-5 rounded shadow-sm text-blue text-sz18 bg-gray">
                          <div>{github}</div>
                          <img
                            onClick={() => setEdtGithub(true)}
                            src={pen}
                            alt="pen"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex mb-10 gap-x-16">
                  <div className="w-5/12 font-bold leading-6 text-sz18">
                    <div className="mb-4">Timezone</div>
                    <div className="flex flex-row items-center">
                      {edtTimezone ? (
                        <div className="w-full flex flex-row items-center space-x-2">
                          <input
                            type="text"
                            id="website-admin"
                            value={timezone}
                            onChange={(e) => setTimezone(e.target.value)}
                            className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="WHITE HAT DAO"
                          />
                          <img
                            onClick={() => setEdtTimezone(false)}
                            src={pen}
                            alt="pen"
                          />
                        </div>
                      ) : (
                        <div className="w-full flex items-center justify-between px-5 py-3 font-medium leading-5 rounded shadow-sm text-blue text-sz18 bg-gray">
                          <div>{timezone}</div>
                          <img
                            onClick={() => setEdtTimezone(true)}
                            src={pen}
                            alt="pen"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="w-5/12 font-bold leading-6 text-sz18">
                    <div className="mb-4">Discord ID</div>
                    <div className="flex flex-row items-center">
                      {edtDiscord ? (
                        <div className="w-full flex flex-row items-center space-x-2">
                          <input
                            type="text"
                            id="website-admin"
                            value={discord}
                            onChange={(e) => setDiscord(e.target.value)}
                            className="shadow-inner w-full rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="WHITE HAT DAO"
                          />
                          <img
                            onClick={() => setEditDiscord(false)}
                            src={pen}
                            alt="pen"
                          />
                        </div>
                      ) : (
                        <div className="w-full flex items-center justify-between px-5 py-3 font-medium leading-5 rounded shadow-sm text-blue text-sz18 bg-gray">
                          <div>{discord}</div>
                          <img
                            onClick={() => setEditDiscord(true)}
                            src={pen}
                            alt="pen"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-5/12 mb-16 font-bold leading-6 text-sz18">
                  <div className="flex items-center mb-4 gap-x-1">
                    Project or DAOs
                    <img src={info} alt="info" />
                  </div>
                  <textarea
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    className="w-full p-4 leading-6 border rounded-lg shadow-inner h-28 border-blue text-sz16 bg-lightgray"
                    placeholder="List of projects currently contributing at"
                  ></textarea>
                </div>

                <div className="flex items-center justify-start mb-8">
                  <div
                    className="mr-10 cursor-pointer rounded shadow-xl p-border bg-blue"
                    onClick={handleSave}
                  >
                    <div className="flex px-6 py-2 font-bold leading-8 text-center rounded bg-gray text-blue font-Manrope text-sz18">
                      Save Changes
                    </div>
                  </div>
                  <div
                    className="cursor-pointer flex items-center mr-10 font-semibold leading-8 gap-x-3 text-pink text-sz18 font-Manrope"
                    onClick={handleDelete}
                  >
                    <img src={deletion} alt="delete" />
                    Delete my account
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Settings;
