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
          <span className="navbar-logo-short">SKY AUTO</span>
          <span className="navbar-logo-full">SKY AUTO BODY</span>
        </Link>
        {/* <div className="direction-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div> */}
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="#business-info"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Hours
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="#about-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>
          <li className="nav-item nav-contact">
            <Link
              to="https://www.google.com/maps?ll=42.33829,-122.89063&z=11&t=m&hl=en-US&gl=US&mapclient=embed&daddr=Sky%20Auto%20Body%20OR@42.33829,-122.89063"
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
                <i className="fa-solid fa-phone"></i> (541) 841-4806
              </Link>
            </li>
          )}
        </ul>
        {button && (
          <Button className="large-contact">
            <i className="fa-solid fa-phone"></i> (541) 841-4806
          </Button>
        )}
      </div>
    </nav>
  );
}
