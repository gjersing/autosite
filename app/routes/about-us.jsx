import { Navbar } from "../components/Navbar";
import { CallToAction } from "../components/CallToAction";
import { Footer } from "../components/Footer";
import React, { useState, useEffect, useRef } from "react";
import "../app.css";
import "../components/AboutUs.css";

export function meta() {
  return [
    { title: "About Us - Sky Auto Body & Collision Repair" },
    {
      name: "description",
      content: "Learn about Sky Auto Body & Collision Repair",
    },
  ];
}

export default function AboutUsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const images = [
    "/images/cars.jpg",
    "/images/repair-process.jpg",
    "/images/estimating-process.webp",
    "/images/refinish-technique.avif",
  ];

  useEffect(() => {
    const startInterval = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 8000);
    };

    startInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images.length]);

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    resetInterval();
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    resetInterval();
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
    resetInterval();
  };

  return (
    <main>
      <Navbar />
      <div className="services-container">
        <div className="services-content">
          <div className="carousel-container">
            <div className="carousel-wrapper">
              <button
                className="carousel-button carousel-button-prev"
                onClick={goToPrevious}
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <div className="carousel-image-container">
                <img
                  src={images[currentIndex]}
                  alt={`Body shop ${currentIndex + 1}`}
                  className="carousel-image"
                />
              </div>
              <button
                className="carousel-button carousel-button-next"
                onClick={goToNext}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
              <div className="carousel-indicators">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-indicator ${index === currentIndex ? "active" : ""}`}
                    onClick={() => goToIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="services-right">
            <h1 className="services-header">ABOUT US</h1>
            <div className="about-us-text">
              <p>
                Sky Auto Body & Collision Repair provides honest and exceptional
                auto body repair services with a commitment to quality and
                customer satisfaction.
              </p>
              <p>
                As a locally owned and operated business, we understand the
                importance of getting you back on the road safely and quickly.
                Our I-CAR Certified technicians bring years of experience and
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
        </div>
      </div>
      <section id="call-to-action">
        <CallToAction />
      </section>
      <Footer />
    </main>
  );
}
