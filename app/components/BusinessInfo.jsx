import React from "react";
import "../app.css";
import "./BusinessInfo.css";

export function BusinessInfo() {
  const date = new Date();
  const hours = date.getHours();
  const day = date.getDay();
  const openDays = [1, 2, 3, 4, 5]; // Monday-Friday
  const isOpen = openDays.includes(day) && hours >= 8 && hours <= 17;
  const businessStatus = isOpen ? "Open" : "Currently Closed";

  return (
    <div className="business-info-container">
      <div className="business-info-content">
        <div className="business-info-left">
          <h1 className="business-info-header">Hours and Location</h1>
          <div className="business-info-text">
            <div className="business-address">
              <ul>
                <li>1385 Sage Rd</li>
                <li>Medford, OR 97501</li>
                <li>(541) 841-4806</li>
              </ul>
            </div>
            <div className="business-hours">
              <ol>
                <li>
                  <h2 className={isOpen ? "status-open" : "status-closed"}>
                    {businessStatus}
                  </h2>
                </li>
                <li>Mon-Fri: 800am-5:00pm</li>
                <li>Sat: Closed</li>
                <li>Sun: Closed</li>
              </ol>
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
