import React from "react";
import { Link } from "react-router";
import "../app.css";
import "./BusinessInfo.css";

export function BusinessInfo() {
  const date = new Date();
  const hours = date.getHours();
  const day = date.getDay();
  const openDays = [1, 2, 3, 4, 5]; // Monday-Friday
  const isOpen = openDays.includes(day) && hours >= 8 && hours <= 17;
  const businessStatus = isOpen ? "Open" : "Currently Closed";
  const googleMapsLink =
    "https://www.google.com/maps?ll=42.33829,-122.89063&z=11&t=m&hl=en-US&gl=US&mapclient=embed&daddr=Sky%20Auto%20Body%20OR@42.33829,-122.89063";

  return (
    <div className="business-info-container">
      <div className="business-info-content">
        <div className="business-info-left">
          <h1 className="business-info-header">HOURS & LOCATION</h1>
          <div className="business-info-text">
            <div className="business-address">
              <ul>
                <li>
                  <Link
                    to={googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="business-link"
                  >
                    1385 Sage Rd
                  </Link>
                </li>
                <li>
                  <Link
                    to={googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="business-link"
                  >
                    Medford, OR 97501
                  </Link>
                </li>
                <li>
                  <Link to="tel:5415003811" className="business-link">
                    (541) 500-3811
                  </Link>
                </li>
              </ul>
            </div>
            <div className="business-hours">
              <ol>
                <li>
                  <h2 className={isOpen ? "status-open" : "status-closed"}>
                    {businessStatus}
                  </h2>
                </li>
                <li>
                  Mon-Fri: 800am-5:00pm<span style={{ color: "#fff" }}>*</span>
                </li>
                <li>Sat: Closed</li>
                <li>Sun: Closed</li>
              </ol>
              <p className="business-disclaimer">
                *Holidays may affect these hours
              </p>
            </div>
          </div>
        </div>
        <div className="business-info-map">
          <iframe
            src="https://www.google.com/maps?q=42.33829,-122.89063&hl=en&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sky Auto Body Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
