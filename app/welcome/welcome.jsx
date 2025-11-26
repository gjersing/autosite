import React from "react";
import { Navbar } from "../components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "../app.css";
import { Hero } from "../components/Hero";
import { BusinessInfo } from "../components/BusinessInfo";
import { AboutUs } from "../components/AboutUs";
import { CallToAction } from "../components/CallToAction";
import { Footer } from "../components/Footer";

export function Welcome() {
  return (
    <main>
      <Navbar />
      <section id="">
        <Hero />
      </section>
      <section id="business-info">
        <BusinessInfo />
      </section>
      <section id="about-us">
        <AboutUs />
      </section>
      <section id="call-to-action">
        <CallToAction />
      </section>
      <Footer />
    </main>
  );
}
