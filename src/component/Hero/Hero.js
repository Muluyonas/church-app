import React, { Component } from "react";
import Quote from "../Quotes/Quotes";

import "./style.css";
import RightSideBar from "./RightSideBar";
import LeftSideBar from "./LeftSideBar";
import MainContent from "./MainContent";

export default class Hero extends Component {
  render() {
    return (
      <>
        <div className="quote-container">
          <Quote />
        </div>
        <div className="hero-container">
          <div className="welcome-container">
            <LeftSideBar />
            <MainContent />
            <RightSideBar />
          </div>
        </div>
      </>
    );
  }
}


