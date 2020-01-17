import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from "../../assets/placeholder.png";

import './style.css'

export default class VideoAndPhoto extends Component {
  render() {
    return (
      <div className="video-photo-container">
        <div className="title">
          <h1>Video and photo</h1>
        </div>
        <div className="content">
          <Carousel showStatus={false}>
            <div>
              <img src={Image1} alt="ph" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src={Image1} alt="ph" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src={Image1} alt="ph" />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}
