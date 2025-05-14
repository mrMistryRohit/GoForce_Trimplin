import React, { useState } from "react";
import "./sec5.css";
import healthcareImg from "./../../assets/sec5.png"; // Update with your image path

const industries = [
  "Health care",
  "Finance & Banking",
  "Manufacturing",
  "Retail & E-Commerce",
  "Technology & Startups",
];

const Sec5 = () => {
  const [active, setActive] = useState("Health care");

  return (
    <section className="sec5">
      <h2 className="sec5-title">Industry-Specific Salesforce Solutions</h2>
      <div className="sec5-subtitles">
        <p className="bold">
          Tailored for Your Industry – Not Just Another Generic Solution
        </p>
        <p className="light">
          We don’t just implement Salesforce. We customize it for your
          industry’s success.
        </p>
      </div>

      <div className="sec5-tabs">
        {industries.map((name) => (
          <button
            key={name}
            className={`sec5-tab ${active === name ? "active" : ""}`}
            onClick={() => setActive(name)}
          >
            {name}
          </button>
        ))}
      </div>

      {active === "Health care" && (
        <div className="sec5-content">
          <div className="sec5-left">
            <img src={healthcareImg} alt="Healthcare" />
          </div>
          <div className="sec5-right">
            <h3>Challenges:</h3>
            <ul className="challenges">
              <li>
                <span>1</span> Complex patient data management & regulatory
                compliance.
              </li>
              <li>
                <span>2</span> Manual workflows affecting patient engagement.
              </li>
              <li>
                <span>3</span> Lack of AI-driven predictive healthcare insights.
              </li>
            </ul>

            <h3>Our AI-powered Solutions:</h3>
            <ul className="solutions">
              <li>HIPAA-compliant Salesforce CRM with AI-driven analytics.</li>
              <li>Automated patient outreach & telehealth integrations.</li>
              <li>Predictive analytics for better treatment outcomes.</li>
            </ul>

            <button className="case-button">See Health Care Casestudy ↗</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Sec5;
