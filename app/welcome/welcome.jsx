import React from "react";
import { Navbar } from "../components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "../app.css";
import { Hero } from "../components/Hero";

export function Welcome() {
  return (
    <main>
      <section id="">
        <Navbar />
        <Hero />
      </section>
      <section id="services"></section>
    </main>
  );
}
