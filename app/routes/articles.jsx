import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Link } from "react-router";
import "../app.css";
import "./articles.css";

export function meta() {
  return [
    { title: "Articles - Sky Auto Body & Collision Repair" },
    {
      name: "description",
      content:
        "Read articles about collision repair, auto body services, and vehicle maintenance from Sky Auto Body & Collision Repair in Medford, Oregon.",
    },
  ];
}

const articles = [
  {
    title: "Estimates and Insurance Billing",
    route: "/estimates",
    image: "/images/estimating-process.webp",
    excerpt:
      "Free estimates with no appointment necessary. We work with all insurance companies and offer direct billing.",
  },
  {
    title: "The Collision Repair Process",
    route: "/repair-process",
    image: "/images/repair-process.jpg",
    excerpt:
      "Learn about our comprehensive collision repair process from initial estimate to final inspection.",
  },

  {
    title: "Refinishing Techniques",
    route: "/refinishing",
    image: "/images/refinish-technique.avif",
    excerpt:
      "Professional paint matching and refinishing with three-stage paint systems and lifetime warranty.",
  },
];

export default function Articles() {
  return (
    <main>
      <Navbar />
      <div className="articles-container">
        <div className="articles-content">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
          <h1 className="articles-header">Articles</h1>
          <div className="articles-grid">
            {articles.map((article) => (
              <Link
                key={article.route}
                to={article.route}
                className="article-card"
              >
                <h2 className="article-card-title">{article.title}</h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
