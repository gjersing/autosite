import React from "react";
import "../app.css";
import "./Hero.css";
import { Button } from "./Button";
import { Link } from "react-router";

export function Hero() {
  return (
    <div className="hero-container">
      <img src="/images/heroFrame.png" />
      <video src="/videos/hero.mp4" autoPlay loop muted playsInline />
      <div className="hero-header-container">
        <h1 className="hero-header">Sky Auto Body & Collision Repair</h1>
      </div>
      <div className="hero-info">
        <ul className="hero-features">
          <li>Locally Owned & Operated</li>
          <li>Free Estimates Without Appointment</li>
          <li>Insurance Direct Billing</li>
          <li>Certified Technicians & Quality Repairs</li>
        </ul>
        <div className="hero-btns">
          <Link to="tel:5418414806">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              <i className="fa-solid fa-phone"></i> (541) 841-4806
            </Button>
          </Link>
          <Link
            to="https://www.google.com/maps?ll=42.33829,-122.89063&z=11&t=m&hl=en-US&gl=US&mapclient=embed&daddr=Sky%20Auto%20Body%20OR@42.33829,-122.89063"
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
