import React from "react";
import Navbar from "./pages/Navbar";
import "./assets/style/app.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dao from "./pages/Dao";
import Footer from "./pages/Footer";
import SafetyRatings from "./pages/SafetyRatings";
import Audit from "./pages/Audit";
import Rating from "./pages/Rating";
import AuditItem from "./pages/AuditItem";
import BlogPost from "./pages/BlogPost";
// import BlogPost2 from "./pages/BlogPost2";
import TopicCreate from "./pages/TopicCreate";
import TopicItem1 from "./pages/TopicShow/TopicItem1";
import TopicItem2 from "./pages/TopicShow/TopicItem2";
import TopicItem3 from "./pages/TopicShow/TopicItem3";
import Settings from "./pages/Profile/Settings";
import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_SERVER } from "./global/global";
import GiftCards from "./pages/GiftCards";
import Card from "./pages/Card";
import Cart from "./pages/Cart";

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [auditProjects, setAuditProjects] = useState<any[]>([]);
  const [mainProData, setMainProData] = useState<any>();
  const [showMenu, setShowMenu] = useState(false);
  const [topic, setTopic] = useState<any>();

  const handleShowMenu = (show: boolean) => {
    setShowMenu(show);
  };

  const getAuditedProjects = async () => {
    try {
      const res = await axios.get(BACKEND_SERVER + "/api/projects");
      if (res.status === 200) {
        setAuditProjects(res.data.data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleCount = (c: number) => {
    setCount(c);
  };

  const getMainPro = async () => {
    try {
      const res = await axios.get(BACKEND_SERVER + "/api/main-pro");
      if (res.status === 200 && res.data.data.length > 0) {
        setMainProData(res.data.data[0]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleSelectedTopic = (selectedTopic: any) => {
    setTopic(selectedTopic);
  };

  useEffect(() => {
    getAuditedProjects();
    getMainPro();
  }, [count]);

  return (
    <div className="background">
      <div className="px-2 sm:px-8 lg:px-24 container flex flex-col mx-auto">
        <Navbar showMenu={showMenu} handleShowMenu={handleShowMenu}></Navbar>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                auditProjects={auditProjects}
                mainProData={mainProData}
                count={count}
                handleCount={handleCount}
                handleSelectedTopic={handleSelectedTopic}
              />
            }
          ></Route>
          <Route
            path="/dao"
            element={
              <Dao
                mainProData={mainProData}
                count={count}
                handleCount={handleCount}
              />
            }
          ></Route>
          <Route
            path="/safety-ratings"
            element={
              <SafetyRatings
                auditProjects={auditProjects}
                mainProData={mainProData}
                count={count}
                handleCount={handleCount}
              />
            }
          ></Route>
          <Route
            path="/audit"
            element={
              <Audit
                auditProjects={auditProjects}
                mainProData={mainProData}
                count={count}
                handleCount={handleCount}
              />
            }
          ></Route>
          <Route
            path="/safety-ratings/rating/:id"
            element={
              <Rating
                auditProjects={auditProjects}
								mainProData={mainProData}
                count={count}
                handleCount={handleCount}
              />
            }
          ></Route>
          <Route path="/gift-cards" element={<GiftCards />}></Route>
          <Route path="/gift-cards/card" element={<Card />}></Route>
          <Route path="/gift-cards/cart" element={<Cart />}></Route>
          <Route
            path="/audit/:id"
            element={<AuditItem auditProjects={auditProjects} />}
          ></Route>
          <Route
            path="/blogpost"
            element={<BlogPost handleSelectedTopic={handleSelectedTopic} />}
          ></Route>
          <Route
            path="/topic-item"
            element={<TopicItem1 topic={topic} />}
          ></Route>
          <Route path="/topicItem2" element={<TopicItem2 />}></Route>
          <Route path="/proposal-item" element={<TopicItem3 />}></Route>
          <Route path="/topic-create" element={<TopicCreate />}></Route>
          <Route path="/profile/summary" element={<Settings />}></Route>
          <Route path="/profile/activity" element={<Settings />}></Route>
          <Route path="/profile/notifications" element={<Settings />}></Route>
          <Route path="/profile/settings" element={<Settings />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
