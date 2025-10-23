import React from "react";
import { Link } from "react-router";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          SKY AUTO BODY
        </Link>
      </div>
    </nav>
  );
}
