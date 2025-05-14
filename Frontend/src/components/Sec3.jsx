import React from "react";
import "./sec3.css";
import bgImg from "../assets/Home_sec3_bg.png";

const features = [
  "AI & Automation Powered Customizations",
  "Seamless Data Integration & Migration",
  "Industry-Specific AI Models",
  "Real-Time Predictive Analytics",
  "Salesforce Certified AI Experts",
];

const Sec3 = () => {
  return (
    <section className="sec3">
      <div className="sec3-content">
        <h2>Intelligence at the Core of Digital Transformation</h2>
        <p>
          Unlike traditional IT solutions, GoForce integrates AI-driven
          insights, predictive analytics, and automation to future-proof your
          business.
        </p>

        <div
          className="sec3-cards"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          {features.map((text, index) => (
            <div
              key={index}
              className="sec3-card"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sec3;
