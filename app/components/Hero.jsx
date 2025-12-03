import React, { useState, useEffect, useRef } from "react";
import "../app.css";
import "./Hero.css";
import { Button } from "./Button";
import { Link } from "react-router";

export function Hero() {
  const [hideVideo, setHideVideo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const checkReducedMotion = () => {
      setHideVideo(mediaQuery.matches);
    };

    checkReducedMotion();
    mediaQuery.addEventListener("change", checkReducedMotion);

    // Check if video is paused due to iOS low power mode
    if (videoRef.current) {
      const video = videoRef.current;
      let hasPlayed = false;

      const handlePlay = () => {
        hasPlayed = true;
      };

      const checkVideoPlayback = () => {
        // Only check if video is fully loaded (readyState >= 3) and hasn't played
        // Wait longer to avoid false positives on slow connections
        if (video.readyState >= 3 && video.paused && !hasPlayed) {
          setTimeout(() => {
            // If video is fully ready but still paused and never played, likely iOS low power mode
            if (
              video.readyState >= 3 &&
              video.paused &&
              !hasPlayed &&
              !mediaQuery.matches
            ) {
              setHideVideo(true);
            }
          }, 2000);
        }
      };

      video.addEventListener("play", handlePlay);
      video.addEventListener("canplaythrough", checkVideoPlayback);

      return () => {
        mediaQuery.removeEventListener("change", checkReducedMotion);
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("canplaythrough", checkVideoPlayback);
      };
    }

    return () => {
      mediaQuery.removeEventListener("change", checkReducedMotion);
    };
  }, []);

  return (
    <div className="hero-container">
      <img
        src="/images/heroFrame.png"
        alt="Sky Auto Body & Collision Repair"
        fetchPriority="high"
      />
      {!hideVideo && (
        <video
          ref={videoRef}
          src="/videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      )}
      <div className="hero-header-container">
        <h1 className="hero-header">SKY AUTO BODY & COLLISION REPAIR</h1>
      </div>
      <div className="hero-info">
        <ul className="hero-features">
          <li>Locally Owned & Operated</li>
          <li>Free Estimates Without Appointment</li>
          <li>Insurance Direct Billing</li>
          <li>Certified Technicians & Quality Repairs</li>
        </ul>
        <div className="hero-btns">
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
