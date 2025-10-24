import React from "react";
import "../app.css";
import "./Hero.css";
import { Button } from "./Button";
import { Link } from "react-router";

export function Hero() {
  const date = new Date();
  const hours = date.getHours();
  const day = date.getDay();
  const openDays = [0, 1, 2, 3, 4];
  const isOpen = openDays.includes(day) && hours >= 8 && hours <= 17;
  const businessStatus = isOpen ? "Open" : "Closed";

  return (
    <div className="hero-container">
      <video src="/videos/hero.mp4" autoPlay loop muted />
      <div className="hero-header-container">
        <h1 className="hero-header">Sky Auto Body & Collision Repair</h1>
      </div>
      <div className="hero-info">
        <div className="hero-address">
          <ul>
            <li>1234 Address St</li>
            <li>Medford, OR 97555</li>
            <li>(541) 000-0000</li>
          </ul>
        </div>
        <div className="hero-hours">
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
        <div className="hero-btns">
          <Link to="tel:5418414806">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              <i className="fa-solid fa-phone"></i> (541) 000-0000
            </Button>
          </Link>
          <Link
            to="https://www.google.com/maps?ll=42.3555057,-122.8703965&z=11&t=m&hl=en-US&gl=US&mapclient=embed&daddr=undefined%20OR@42.3555057,-122.8703965"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="btns"
              buttonStyle="btn--primary"
              buttonSize="btn--large"
            >
              <i className="fa-solid fa-location-dot"></i> Directions
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
