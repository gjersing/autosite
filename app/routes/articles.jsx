import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Link } from "react-router";
import "../app.css";
import "./articles.css";

export function meta() {
  const title =
    "Articles & Guides - Sky Auto Body & Collision Repair | Medford, OR";
  const description =
    "Expert articles and guides about auto body repair, collision repair costs, choosing a body shop, insurance, estimates, and refinishing techniques. Free resources from Sky Auto Body in Medford, Oregon.";
  const url = "https://skyautobody.co/articles";

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "auto body repair articles, collision repair guides, body shop tips, car repair information, auto body shop Medford, collision repair Oregon",
    },
    { rel: "canonical", href: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
}

const articles = [
  {
    title: "Frequently Asked Questions",
    route: "/faq",
  },
  {
    title: "How to Choose the Right Auto Body Shop in Medford, Oregon",
    route: "/choosing-body-shop",
  },
  {
    title: "Understanding Auto Body Repair Costs: A Complete Guide",
    route: "/repair-costs",
  },
  {
    title: "Estimates and Insurance Billing",
    route: "/estimates",
  },
  {
    title: "The Collision Repair Process",
    route: "/repair-process",
  },
  {
    title: "Refinishing Techniques",
    route: "/refinishing",
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
