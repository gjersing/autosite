import React, { useState, useEffect } from "react";
import { Button } from "./Button.jsx";
import { Link, useNavigate, useLocation } from "react-router";
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
            to="https://www.google.com/maps?ll=42.33829,-122.89063&z=11&t=m&hl=en-US&gl=US&mapclient=embed&daddr=Sky%20Auto%20Body%20OR@42.33829,-122.89063"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-icon-button"
          >
            <i className="fa-solid fa-location-dot"></i>
          </Link>
          <Link to="tel:5418414806" className="mobile-icon-button">
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
            <Link
              to="/faq"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              FAQ
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
