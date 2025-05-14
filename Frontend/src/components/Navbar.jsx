import React from "react";
import "./Navbar.css";
import { ArrowUpRight } from "lucide-react"; // Requires: npm install lucide-react
import logo from "../assets/goforce-logo.png"; // Update the path to your logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Goforce Logo" className="logo" />
        <span className="brand-name">Goforce</span>
      </div>

      <div className="opts">
        <ul className="navbar-center">
          <li className="active">Goforce</li>
          <li>About Us</li>
          <li>Our Services</li>
          <li>Case Studies</li>
          <li>Blogs</li>
        </ul>

        <div className="navbar-right">
          <button className="consult-btn">
            Book Free Consultation <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
