import React, { useState } from "react";
import "./navbar.css";
import logo from "../Navbar/Images/logo.png";
import { Globe, Menu, X } from "lucide-react";

const navLinks = ["Home", "About", "Exhibit", "Visit", "Sponsorship", "News"];

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="NavBar">
      <div className="Navbar-Wrapper">
        {/* LOGO */}
        <div className="Logo-Container">
          <img src={logo} alt="Logo" />
        </div>

        {/* DESKTOP LINKS */}
        <ul className="Nav-Links">
          {navLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>

        {/* DESKTOP RIGHT */}
        <div className="ContactUS-sesction">
          <Globe size={20} /> |
          <button className="contactBtn">Contact Us</button>
        </div>

        {/* HAMBURGER ICON */}
        <div className="Hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`Mobile-Menu ${menuOpen ? "open" : ""}`}>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index} onClick={() => setMenuOpen(false)}>
              {link}
            </li>
          ))}
        </ul>
        <div className="Mobile-Bottom">
          <Globe size={20} />
          <button className="contactBtn">Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;