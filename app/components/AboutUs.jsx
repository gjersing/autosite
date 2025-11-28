import React from "react";
import { Link } from "react-router";
import { Button } from "./Button";
import "../app.css";
import "./AboutUs.css";

export function AboutUs() {
  return (
    <div className="services-container">
      <div className="services-content">
        <div className="carousel-container">
          <div className="about-us-image-wrapper">
            <img
              src="/images/cars.jpg"
              alt="Sky Auto Body"
              className="about-us-image"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div className="services-right">
          <h1 className="services-header">ABOUT US</h1>
          <div className="about-us-text">
            <p>
              Sky Auto Body & Collision Repair is a locally owned and operated
              business that provides honest and exceptional auto body repair
              services with a commitment to quality and customer satisfaction.
            </p>
          </div>
          <div className="about-us-button">
            <Link to="/about-us">
              <Button
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="services-cards-row">
        <div className="service-card">
          <img
            src="/images/estimating-process.webp"
            alt="Estimates and Insurance Billing"
            className="service-card-image"
            loading="lazy"
            decoding="async"
          />
          <h2>ESTIMATES AND INSURANCE</h2>
          <p>
            Get free estimates without an appointment. We work directly with
            your insurance company to handle all billing and paperwork.
          </p>
        </div>
        <div className="service-card">
          <img
            src="/images/repair-process.jpg"
            alt="Collision Repair"
            className="service-card-image"
            loading="lazy"
            decoding="async"
          />
          <h2>COLLISION REPAIR</h2>
          <p>
            We work on all makes and models. Expert collision repair services by
            I-CAR Certified technicians. We restore your vehicle to its
            pre-accident condition with precision and care.
          </p>
        </div>
        <div className="service-card">
          <img
            src="/images/refinish-technique.avif"
            alt="Refinishing"
            className="service-card-image"
            loading="lazy"
            decoding="async"
          />
          <h2>REFINISHING</h2>
          <p>
            Professional paint matching and refinishing services. Our certified
            technicians ensure a flawless finish that matches your vehicle's
            original color.
          </p>
        </div>
      </div>
    </div>
  );
}
