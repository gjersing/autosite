import { Article } from "../components/Article";

export function meta() {
  const title = "Estimates and Insurance Billing - Sky Auto Body & Collision Repair";
  const description =
    "Free auto body repair estimates in Medford, Oregon. No appointment needed. We work with all insurance companies including State Farm, Geico, Progressive, and more. Direct billing available.";
  const url = "https://skyautobody.co/estimates";

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "free auto body estimate Medford, collision repair estimate, insurance direct billing, auto body shop estimate, free estimate no appointment, insurance claim Medford",
    },
    { rel: "canonical", href: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "article" },
    { property: "og:url", content: url },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
}

export default function EstimatesInsurance() {
  return (
    <Article
      header="Estimates and Insurance Billing"
      image="/images/estimating-process.webp"
    >
      <p>
        Getting an estimate for collision repair shouldn't be complicated. At
        Sky Auto Body, we've made the process as straightforward as possible. No
        appointments needed—just bring your vehicle in during our business hours
        and we'll take care of the rest.
      </p>
      <p>
        Our free estimates are comprehensive and thorough. One of our
        experienced estimators will inspect your vehicle, documenting all
        visible damage and taking detailed photos. We'll measure everything,
        assess what needs to be repaired versus replaced, and provide you with a
        clear breakdown of the work required. The whole process typically takes
        about thirty minutes, and you'll leave with a detailed estimate in hand.
      </p>
      <p>
        When it comes to insurance, we work with all major insurance companies.
        Whether you have State Farm, Geico, Progressive, Allstate, Farmers,
        USAA, Travelers, Nationwide, Liberty Mutual, American Family, or any
        other provider, we can handle your claim. We work directly with your
        insurance company to handle all the billing and paperwork, so you don't
        have to worry about the back-and-forth. Our team knows the ins and outs
        of insurance claims and will make sure everything is processed
        correctly.
      </p>
      <p>
        We also welcome self-pay customers. If you prefer to pay out of pocket,
        or if your deductible is high and you want to avoid filing a claim,
        we're happy to work with you directly. We'll provide the same quality
        work and transparent pricing, regardless of how you choose to pay.
      </p>
      <p>
        The best part? There's no pressure. Get your estimate, take your time to
        review it, and decide when you're ready. We're here to answer any
        questions you might have about the repair process, insurance coverage,
        or payment options. Our goal is to make this as stress-free as possible
        for you.
      </p>
    </Article>
  );
}
