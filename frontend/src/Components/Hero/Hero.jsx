import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hi.webp";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
      <h2>New season, new styles</h2>
        <div>
          <div className="hero-hand-icon">
          </div>
          <pre>we don't make the rules.</pre>
        
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
