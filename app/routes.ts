import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("about-us", "routes/about-us.jsx"),
  route("articles", "routes/articles.jsx"),
  route("repair-process", "routes/repair-process.jsx"),
  route("estimates", "routes/estimates.jsx"),
  route("refinishing", "routes/refinishing.jsx"),
  route("faq", "routes/faq.jsx"),
  route("*", "routes/404.jsx"),
] satisfies RouteConfig;
