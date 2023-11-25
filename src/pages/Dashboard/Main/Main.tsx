import React from "react";
import { Navbar } from "../../../components/Navbar/Navbar";
import headerImg from "../../../assets/desktop.svg";
import "./style.scss";

export const Main = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="content">
        <div className="header">
          <div className="text">
            <h2>exams time</h2>
            <p>
              Here we are, Are ready to fight? Don't worry, we prepared some
              tips to be ready for your exams.
            </p>
            <p className="quote">
              "nothing happens until something moves" - Albert Einstein
            </p>
            <button className="view-tips">View exams tips</button>
          </div>
          <div className="header-img">
            <img src={headerImg} alt="header" />
          </div>
        </div>
      </div>
    </div>
  );
};
