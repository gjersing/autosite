import React from "react";
import { Navbar } from "../components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router";

export function Welcome() {
  return (
    <main>
      <section id="home">
        <Navbar />
        <Routes>
          <Route path="/*" />
        </Routes>
      </section>
      <section id="services" className="mt-400"></section>
    </main>
  );
}
