import React from "react";
import { Link } from "react-router";
import "../app.css";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top-row">
          <div className="footer-section footer-location">
            <Link
              to="https://www.google.com/maps?ll=42.33829,-122.89063&z=11&t=m&hl=en-US&gl=US&mapclient=embed&daddr=Sky%20Auto%20Body%20OR@42.33829,-122.89063"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              1385 Sage Rd
            </Link>
            <Link
              to="https://www.google.com/maps?ll=42.33829,-122.89063&z=11&t=m&hl=en-US&gl=US&mapclient=embed&daddr=Sky%20Auto%20Body%20OR@42.33829,-122.89063"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Medford, OR 97501
            </Link>
            <Link to="tel:5415003811" className="footer-link">
              (541) 500-3811
            </Link>
          </div>
          <div className="footer-logo">
            <Link to="/">
              <img
                src="/images/sky-logo-cropped.webp"
                alt="Sky Auto Body"
                className="footer-logo-image"
                loading="lazy"
                decoding="async"
              />
            </Link>
          </div>
          <div className="footer-section footer-hours">
            <p>Mon-Fri: 8:00am - 5:00pm</p>
            <p>Sat-Sun: Closed</p>
          </div>
        </div>
        <div className="footer-links">
          <Link to="/about-us" className="footer-link">
            About Us
          </Link>
          <span className="footer-separator">|</span>
          <Link to="/articles" className="footer-link">
            Articles
          </Link>
          <span className="footer-separator">|</span>
          <Link to="/faq" className="footer-link">
            FAQ
          </Link>
        </div>
        <div className="footer-copyright">
          <p>
            &copy; {new Date().getFullYear()} Sky Auto Body & Collision Repair.
            All rights reserved.
          </p>
          <p>Developed locally in Medford, Oregon.</p>
        </div>
      </div>
    </footer>
  );
}
