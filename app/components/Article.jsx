import React from "react";
import { Navbar } from "./Navbar";
import { CallToAction } from "./CallToAction";
import { Footer } from "./Footer";
import { Link } from "react-router";
import "../app.css";
import "./Article.css";

/**
 * Article template component for reusable article pages
 * @param {Object} props - Component props
 * @param {string} props.header - Required header text for the article
 * @param {string} [props.image="/images/cars.jpg"] - Optional image path (defaults to cars.jpg)
 * @param {React.ReactNode} props.children - Article content (paragraph text)
 */
export function Article({ header, image = "/images/cars.jpg", children }) {
  return (
    <main>
      <Navbar />
      <div className="article-container">
        <div className="article-content">
          <Link to="/articles" className="article-back-link">
            ← Back to Articles
          </Link>
          <h1 className="article-header">{header}</h1>
          <div className="article-image-container">
            <div className="article-image-wrapper">
              <img
                src={image}
                alt={header}
                className="article-image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="article-body">{children}</div>
        </div>
      </div>
      <section id="call-to-action">
        <CallToAction />
      </section>
      <Footer />
    </main>
  );
}
