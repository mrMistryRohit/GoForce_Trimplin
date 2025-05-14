import React from "react";
import "./HeroSection.css"; // Import the CSS file

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Orbits and Circles */}
      <div className="orbit-container">
        <div className="orbit1">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
          <div className="circle circle4"></div>
          <div className="circle circle5"></div>
          <div className="circle circle6"></div>
        </div>
        <div className="orbit2">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
          <div className="circle circle4"></div>
          <div className="circle circle5"></div>
          <div className="circle circle6"></div>
        </div>
      </div>

      {/* Content */}
      <div className="content">
        <div className="trusted-badge">
          <span className="dot"></span>
          Trusted by 500+ Enterprises Worldwide
        </div>

        <h1 className="heading">
          <span className="ai-text">AI-Driven</span> Salesforce Solutions for
          <br />
          Intelligent Business Growth
        </h1>

        <p className="subheading">
          Revolutionizing legacy systems with AI, automation, and seamless
          <br />
          integrations for scalable enterprises
        </p>

        <div className="button-container">
          <button className="primary-button">Book consultation</button>
          <button className="secondary-button">Explore our services</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
