import React from "react";
import Navbar from "./pages/Navbar";
import "./assets/style/app.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dao from "./pages/Dao";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div className="background">
      <div className="container mx-auto flex flex-col">
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/dao" element={<Dao/>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
