import React, { useState } from "react";
import "./css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      {/* <img
        src="https://www.iconpacks.net/icons/2/free-coin-dollar-icon-2686-thumb.png"
        className="logo-nav"
        alt="dollar"
      />
      <span className="nav-logo">crowdFund</span> */}

      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/home">HOME</Link>
        <Link to="/">ABOUT</Link>
        <Link to="/create">CREATE</Link>
        <Link to="/fund">FUND</Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
