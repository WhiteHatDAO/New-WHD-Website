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
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import TopicCreate from "./pages/TopicCreate";
import TopicItem1 from "./pages/TopicShow/TopicItem1";
import TopicItem2 from "./pages/TopicShow/TopicItem2";
import TopicItem3 from "./pages/TopicShow/TopicItem3";
import Summary from "./pages/Profile/Summary";
import Activity from "./pages/Profile/Activity";
import Notifications from "./pages/Profile/Notifications";
import Settings from "./pages/Profile/Settings";
import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_SERVER } from "./global/global";
import GiftCards from "./pages/GiftCards";
import Card from "./pages/Card";
import Cart from "./pages/Cart";

const App = () => {
  const [count, setCount] = useState<number>(0)
  const [auditProjects, setAuditProjects] = useState<any[]>([])
  const [mainProData, setMainProData] = useState<any>()

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
    setCount(c)
  }

  const getMainPro = async () => {
    try {
      const res = await axios.get(BACKEND_SERVER + "/api/main-pro");
      if(res.status === 200 && res.data.data.length > 0) {
        setMainProData(res.data.data[0]);
      }
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    console.log(count)

    getAuditedProjects()
    getMainPro()
  }, [count])

  return (
    <div className="background">
      <div className="container flex flex-col mx-auto">
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Home auditProjects={auditProjects} mainProData={mainProData} count={count} handleCount={handleCount}/>}></Route>
            <Route path="/dao" element={<Dao mainProData={mainProData} count={count} handleCount={handleCount}/>}></Route>
            <Route path="/safety-ratings" element={<SafetyRatings auditProjects={auditProjects} mainProData={mainProData} count={count} handleCount={handleCount}/>}></Route>
            <Route path="/audit" element={<Audit auditProjects={auditProjects} mainProData={mainProData} count={count} handleCount={handleCount}/>}></Route>
            <Route path="/safety-ratings/rating/:id" element={<Rating auditProjects={auditProjects} count={count} handleCount={handleCount}/>}></Route>
            <Route path="/gift-cards" element={<GiftCards />}></Route>
            <Route path="/gift-cards/card" element={<Card />}></Route>
            <Route path="/gift-cards/cart" element={<Cart />}></Route>
            <Route path="/audit/:id" element={<AuditItem auditProjects={auditProjects}/>}></Route>
            <Route path="/BlogPost1" element={<BlogPost1 />}></Route>
            <Route path="/BlogPost2" element={<BlogPost2 />}></Route>
            <Route path="/TopicItem1" element={<TopicItem1 />}></Route>
            <Route path="/TopicItem2" element={<TopicItem2 />}></Route>
            <Route path="/TopicItem3" element={<TopicItem3 />}></Route>
            <Route path="/TopicCreate" element={<TopicCreate />}></Route>
            <Route path="/Profile/Summary" element={<Summary />}></Route>
            <Route path="/Profile/Activity" element={<Activity />}></Route>
            <Route path="/Profile/Notifications" element={<Notifications />}></Route>
            <Route path="/Profile/Settings" element={<Settings />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
