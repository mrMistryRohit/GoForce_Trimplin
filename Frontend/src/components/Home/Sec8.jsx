import React, { useState } from "react";
import "./sec8.css";
import blog1 from "./../../assets/Sec8_1.png";
import blog2 from "./../../assets/Sec8_2.png";
import blog3 from "./../../assets/Sec8_3.png";

const Sec8 = () => {
  const [leftCard, setLeftCard] = useState({
    img: blog1,
    author: "Olivia Rhye",
    date: "20 Jan 2022",
    title: "AI & Salesforce Trends in 2025",
    desc: "How AI-driven CRM is changing sales & customer engagement.",
    tags: ["Salesforce", "AI", "Trends"],
  });

  const [rightCards, setRightCards] = useState([
    {
      img: blog2,
      author: "Phoenix Baker",
      date: "19 Jan 2022",
      title: "Best Practices for Digital Transformation",
      desc: "Essential steps to ensure smooth cloud & AI adoption for enterprises.",
      tags: ["Salesforce", "AI", "Trends"],
    },
    {
      img: blog3,
      author: "Phoenix Baker",
      date: "19 Jan 2022",
      title: "How AI is Changing CRM & ERP Systems",
      desc: "Integrating AI into Salesforce for intelligent automation & efficiency.",
      tags: ["Salesforce", "CRM & ERP"],
    },
  ]);

  const handleSwap = (index) => {
    const newLeft = rightCards[index];
    const newRight = [...rightCards];
    newRight[index] = leftCard;
    setLeftCard(newLeft);
    setRightCards(newRight);
  };

  return (
    <section className="sec8">
      <div className="sec8-container">
        <div className="sec8-header">
          <h2>Smart Reads For Smarter Businesses</h2>
          <p>
            Learn how Salesforce solutions can drive growth, efficiency, and
            innovation
          </p>
          <button className="view-all-btn">
            View all blogs <span>↗</span>
          </button>
        </div>

        <h3 className="recent-title">Recent blog posts</h3>

        <div className="blog-grid">
          {/* LEFT LARGE CARD */}
          <div className="left-gird">
            <div className="blog-card large">
              <img src={leftCard.img} alt={leftCard.title} />
              <div className="blog-content">
                <span className="blog-meta">
                  {leftCard.author} • {leftCard.date}
                </span>
                <h4>{leftCard.title}</h4>
                <p>{leftCard.desc}</p>
                <div className="tags">
                  {leftCard.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SMALL CARDS */}
          <div className="right-grid">
            {rightCards.map((card, index) => (
              <div
                className="blog-card small"
                key={index}
                onClick={() => handleSwap(index)}
              >
                <img src={card.img} alt={card.title} />
                <div className="blog-content">
                  <span className="blog-meta">
                    {card.author} • {card.date}
                  </span>
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                  <div className="tags">
                    {card.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec8;
