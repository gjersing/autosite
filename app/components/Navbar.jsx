import React, { useState, useEffect } from "react";
import { Button } from "./Button.jsx";
import { Link } from "react-router";
import "./Navbar.css";

export function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          SKY AUTO BODY
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="#" className="nav-links" onClick={closeMobileMenu}>
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
          <li className="nav-item nav-contact">
            <Link
              to="https://www.google.com/maps?ll=42.3555057,-122.8703965&z=11&t=m&hl=en-US&gl=US&mapclient=embed&daddr=undefined%20OR@42.3555057,-122.8703965"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <i className="fa-solid fa-location-dot info-icon"></i> Directions
            </Link>
          </li>
          {!button && (
            <li className="nav-item nav-contact">
              <Link
                to="tel:5418414806"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <i className="fa-solid fa-phone"></i> (541) 000-0000
              </Link>
            </li>
          )}
        </ul>
        {button && (
          <Button className="large-contact">
            <i className="fa-solid fa-phone"></i> (541) 000-0000
          </Button>
        )}
      </div>
    </nav>
  );
}
