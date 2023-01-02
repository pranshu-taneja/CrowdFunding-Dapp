import React, { useState } from "react";
import "./css/Navbar.css";
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
        <a href="/home">HOME</a>
        <a href="/">ABOUT</a>
        <a href="/create">CREATE</a>
        <a href="/fund">FUND</a>
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
