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
    title: "The Collision Repair Process",
    route: "/repair-process",
    image: "/images/repair-process.jpg",
    excerpt:
      "Learn about our comprehensive collision repair process from initial estimate to final inspection.",
  },
];

export default function Articles() {
  return (
    <main>
      <Navbar />
      <div className="articles-container">
        <div className="articles-content">
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
