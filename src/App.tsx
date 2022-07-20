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

const App = () => {
  return (
    <div className="background">
      <div className="container flex flex-col mx-auto">
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/dao" element={<Dao/>}></Route>
            <Route path="/safety-ratings" element={<SafetyRatings />}></Route>
            <Route path="/audit" element={<Audit />}></Route>
            <Route path="/safety-ratings/rating" element={<Rating />}></Route>
            <Route path="/audit/item" element={<AuditItem />}></Route>
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
