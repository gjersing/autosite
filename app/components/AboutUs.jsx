import React from "react";
import "../app.css";
import "./AboutUs.css";

export function AboutUs() {
  return (
    <div className="services-container">
      <div className="services-content">
        <div className="services-left">
          <h1 className="services-header">About Us</h1>
          <div className="about-us-text">
            <p>
              Sky Auto Body & Collision Repair provides honest and exceptional
              auto body repair services with a commitment to quality and
              customer satisfaction.
            </p>
            <p>
              As a locally owned and operated business, we understand the
              importance of getting you back on the road safely and quickly. Our
              I-CAR Certified technicians bring years of experience and
              expertise to every repair, ensuring your vehicle is restored to
              its pre-accident condition.
            </p>
            <p>
              We work with all insurance companies and offer free estimates
              without appointments, making the repair process as convenient as
              possible for our customers. Trust Sky Auto Body for all your
              collision repair and refinishing needs.
            </p>
          </div>
        </div>
        <div className="services-cards">
          <div className="service-card">
            <h2>Estimates and Insurance Billing</h2>
            <p>
              Get free estimates without an appointment. We work directly with
              your insurance company to handle all billing and paperwork.
            </p>
          </div>
          <div className="service-card">
            <h2>Collision Repair</h2>
            <p>
              We work on all makes and models. Expert collision repair services
              by I-CAR Certified technicians. We restore your vehicle to its
              pre-accident condition with precision and care.
            </p>
          </div>
          <div className="service-card">
            <h2>Refinishing</h2>
            <p>
              Professional paint matching and refinishing services. Our
              certified technicians ensure a flawless finish that matches your
              vehicle's original color.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
