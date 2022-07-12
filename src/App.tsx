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

const App = () => {
  return (
    <div className="background">
      <div className="container mx-auto flex flex-col">
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/dao" element={<Dao/>}></Route>
            <Route path="/safety-ratings" element={<SafetyRatings />}></Route>
            <Route path="/audit" element={<Audit />}></Route>
            <Route path="/safety-ratings/rating" element={<Rating />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
