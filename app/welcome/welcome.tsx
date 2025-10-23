import React from "react";
import { Navbar } from "~/components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router";

export function Welcome() {
  return (
    <main>
      <Navbar />
    </main>
  );
}
