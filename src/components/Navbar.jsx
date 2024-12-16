import React from "react";
import "./CSS/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="navbar-logo">
        <button className="founderpro-button">FounderPro</button>
      </div>

      {/* Right Section */}
      <ul className="navbar-links">
        <li><a href="/">Leaderboard</a></li>
        <li><a href="#competitions">Competitions</a></li>
        <li><a href="#signup" className="signup-link">Sign Up</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
