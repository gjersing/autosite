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
            <Link to="tel:5418414806" className="footer-link">
              (541) 841-4806
            </Link>
          </div>
          <div className="footer-logo">
            <img 
              src="/images/sky-logo-cropped.webp" 
              alt="Sky Auto Body" 
              className="footer-logo-image"
            />
          </div>
          <div className="footer-section footer-hours">
            <p>Mon-Fri: 8:00am - 5:00pm</p>
            <p>Sat-Sun: Closed</p>
          </div>
        </div>
        <div className="footer-links">
          <Link to="#about-us" className="footer-link">
            About Us
          </Link>
          <Link to="#" className="footer-link">
            Blogs
          </Link>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Sky Auto Body & Collision Repair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

