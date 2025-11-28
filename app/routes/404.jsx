import React, { useState, useEffect, useRef } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { Link } from "react-router";
import "../app.css";
import "../components/Hero.css";
import "./404.css";

export function meta() {
  return [
    { title: "404 - Page Not Found - Sky Auto Body & Collision Repair" },
    {
      name: "description",
      content:
        "The page you're looking for could not be found. Return to Sky Auto Body & Collision Repair homepage.",
    },
  ];
}

export default function NotFound() {
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
        if (video.readyState >= 3 && video.paused && !hasPlayed) {
          setTimeout(() => {
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
    <main>
      <Navbar />
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
          <h1 className="hero-header">PAGE NOT FOUND</h1>
        </div>
        <div className="not-found-info">
          <p className="not-found-message">
            Sorry, the page you're looking for doesn't exist.
          </p>
          <div className="not-found-btns">
            <Link to="/">
              <Button
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large"
              >
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

