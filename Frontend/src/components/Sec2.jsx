import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./sec2.css";
import shopifyLogo from "../assets/shopify.png";
// import zapierLogo from '../assets/zapier.png';
// import oktaLogo from '../assets/okta.png';
// import atlassianLogo from '../assets/atlassian.png';
// import deloitteLogo from '../assets/deloitte.png';

const Sec2 = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="sec2" ref={ref}>
      <div className="sec2-left">
        <h1>Numbers are telling our story</h1>
        <p>
          Proven results, measurable success. Our Salesforce solutions drive
          efficiency, automation, and business growth.
        </p>
      </div>

      <div className="sec2-right">
        <div className="stats-card vertical">
          <div className="stat">
            <h2 className="highlight">
              {inView && <CountUp end={500} duration={2} />}+
            </h2>
            <p>Enterprises Transformed</p>
          </div>
          <div className="stat">
            <h2>
              {inView && <CountUp end={1000000} duration={2} separator="," />}+
            </h2>
            <p>Automated Workflows</p>
          </div>
          <div className="stat">
            <h2>{inView && <CountUp end={99} duration={2} />}%</h2>
            <p>Customer satisfaction rate</p>
          </div>
        </div>
      </div>

      <div className="sec2-logos">
        {/* <img src={zapierLogo} alt="Zapier" /> */}
        {/* <img src={oktaLogo} alt="Okta" /> */}
        {/* <img src={atlassianLogo} alt="Atlassian" /> */}
        {/* <img src={deloitteLogo} alt="Deloitte" /> */}
        <img src={shopifyLogo} alt="Shopify" />
      </div>
    </section>
  );
};

export default Sec2;
