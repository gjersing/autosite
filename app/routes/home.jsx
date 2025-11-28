import { Welcome } from "../welcome/welcome";

export function meta() {
  const title = "Sky Auto Body";
  const description =
    "Sky Auto Body & Collision Repair in Medford, Oregon. I-CAR Certified technicians providing expert collision repair, refinishing, and paint matching. Free estimates, no appointment needed. We work with all insurance companies. Call (541) 841-4806.";
  const url = "https://skyautobody.co";

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "auto body repair Medford, collision repair Oregon, car body shop Medford, auto body shop 97501, I-CAR certified, paint matching, refinishing, free estimates, insurance direct billing",
    },
    // Open Graph tags
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:locale", content: "en_US" },
    // Twitter Card tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
}

export default function Home() {
  return <Welcome />;
}
