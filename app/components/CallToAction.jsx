import React from "react";
import { Link } from "react-router";
import { Button } from "./Button";
import "../app.css";
import "./CallToAction.css";

export function CallToAction() {
  return (
    <div className="cta-container">
      <div className="cta-content">
        <h1 className="cta-header">
          Ready to schedule an estimate or repairs?
        </h1>
        <h1 className="cta-header">Call or come in today!</h1>
        <div className="cta-buttons">
          <Link to="tel:5415003811">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              <i className="fa-solid fa-phone"></i> (541) 500-3811
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
