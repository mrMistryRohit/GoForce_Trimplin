import React, { useState } from "react";
import "./sec4.css";
// import bgImage from "/mnt/data/eaface2d-fcdd-4bc9-8f87-fc0b2932b117.png"; // Adjust path if needed

const services = [
  {
    title: "Salesforce Strategy & Digital Transformation",
    tags: [
      "API automation",
      "Cloud integration",
      "IT infrastructure",
      "Business efficiency",
      "Workflow automation",
    ],
    description:
      "Transform your operations using Salesforce by leveraging a data-driven strategy that aligns with modern IT needs.",
    button: "View full services details",
    // image: bgImage,
  },
  {
    title: "AI-Enabled CRM & ERP Solutions",
    description:
      "We build intelligent CRM and ERP ecosystems powered by AI for predictive insights and automation.",
  },
  {
    title: "Intelligent Business Automation & RPA",
    description:
      "Automate your repetitive workflows and business processes using Robotic Process Automation (RPA).",
  },
  {
    title: "Seamless System Integration & API Development",
    description:
      "Enable frictionless data exchange between systems through robust API design and system integrations.",
  },
  {
    title: "Ongoing Salesforce Optimization & Support",
    description:
      "Ensure peak performance and user adoption through continuous monitoring, updates, and support.",
  },
  {
    title: "Custom Salesforce App & Product Development",
    description:
      "We create scalable, secure Salesforce apps tailored to your business models and customer journeys.",
  },
];

const Sec4 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleExpand = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="sec4-container">
      <h2 className="sec4-heading">Our Cutting-Edge Salesforce Services</h2>
      <p className="sec4-subheading">
        Transform Your Business with AI-Powered, Scalable, and Intelligent
        Solutions
      </p>
      <div className="sec4-list">
        {services.map((service, index) => (
          <div
            key={index}
            className={`sec4-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleExpand(index)}
          >
            <div className="sec4-title">
              <span className="sec4-index">
                {String(index + 1).padStart(2, "0")}.
              </span>
              <span className="sec4-label">{service.title}</span>
            </div>
            <div
              className="sec4-content"
              style={{ maxHeight: activeIndex === index ? "1000px" : "0px" }}
            >
              <div
                className="sec4-details"
                style={{ backgroundImage: `url(${service.image || ""})` }}
              >
                <p>{service.description}</p>
                {service.tags && (
                  <div className="sec4-tags">
                    {service.tags.map((tag, i) => (
                      <span className="sec4-tag" key={i}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {service.button && (
                  <button className="sec4-btn">{service.button} →</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sec4;
