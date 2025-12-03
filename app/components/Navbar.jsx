import React, { useState, useEffect } from "react";
import { Button } from "./Button.jsx";
import { Link, useNavigate, useLocation } from "react-router";
import { getMapsUrl } from "../utils/maps";
import "./Navbar.css";

export function Navbar() {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleHoursClick = (e) => {
    e.preventDefault();
    closeMobileMenu();
    if (location.pathname !== "/") {
      navigate("/");
      // Use requestAnimationFrame to wait for next render cycle
      requestAnimationFrame(() => {
        setTimeout(() => {
          const element = document.getElementById("business-info");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 200);
      });
    } else {
      // Already on home page, just scroll
      const element = document.getElementById("business-info");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

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
          <img
            src="/images/sky-logo-cropped.webp"
            alt="Sky Auto Body"
            className="navbar-logo-image"
          />
        </Link>
        {/* <div className="direction-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div> */}
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <div className="mobile-action-buttons">
          <Link
            to={getMapsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-icon-button"
          >
            <i className="fa-solid fa-location-dot"></i>
          </Link>
          <Link to="tel:5415003811" className="mobile-icon-button">
            <i className="fa-solid fa-phone"></i>
          </Link>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a
              href="/#business-info"
              className="nav-links"
              onClick={handleHoursClick}
            >
              Hours
            </a>
          </li>
          <li className="nav-item">
            <Link
              to="/about-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/faq" className="nav-links" onClick={closeMobileMenu}>
              FAQ
            </Link>
          </li>
          <li className="nav-item nav-contact">
            <Link
              to={getMapsUrl()}
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
                to="tel:5415003811"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <i className="fa-solid fa-phone"></i> (541) 500-3811
              </Link>
            </li>
          )}
        </ul>
        {button && (
          <Button className="large-contact">
            <i className="fa-solid fa-phone"></i> (541) 500-3811
          </Button>
        )}
      </div>
    </nav>
  );
}
