import React, { useState } from "react";
import { Button } from "./Button.jsx";
import { Link } from "react-router";

export function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [button, setButton] = useState(true);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          SKY AUTO BODY
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="#home" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="#services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="tel:5418414806"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us <i className="fa-solid fa-phone"></i>
            </Link>
          </li>
        </ul>
        {button && (
          <Button>
            Contact Us <i className="fa-solid fa-phone"></i>
          </Button>
        )}
      </div>
    </nav>
  );
}
