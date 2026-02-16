import React from "react";
import "./navbar.css";
import logo from "../Navbar/Images/logo.png";
import { Globe } from "lucide-react";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="Navbar-Container">
        <div className="Navbar-Wrapper">
          <div className="Logo-Container">
            <img src={logo} alt="Logo" />
          </div>
          <li>Home</li>
          <li>About</li>
          <li>Exhibit</li>
          <li>Visit</li>
          <li>Sponsorship</li>
          <li>News</li>

          <div className="ContactUS-sesction">
            <Globe/ >|
            <button className="contactBtn">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
