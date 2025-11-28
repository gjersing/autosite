import { Article } from "../components/Article";

export function meta() {
  const title =
    "The Collision Repair Process - Sky Auto Body & Collision Repair";
  const description =
    "Complete guide to the collision repair process at Sky Auto Body in Medford, Oregon. Learn about estimates, disassembly, frame repair, paint matching, and quality control. I-CAR certified technicians.";
  const url = "https://skyautobody.co/repair-process";

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "collision repair process, auto body repair steps, frame repair Medford, paint matching, collision repair Medford Oregon, I-CAR certified repair",
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

export default function RepairProcess() {
  return (
    <Article
      header="The Collision Repair Process"
      image="/images/repair-process.jpg"
    >
      <p>
        When your vehicle needs collision repair, understanding the process can
        help set your mind at ease. At Sky Auto Body, we've refined our approach
        over years of working with Medford drivers, and we believe transparency
        builds trust. Here's what you can expect when you bring your vehicle to
        us.
      </p>
      <p>
        It all starts with the estimate. We offer free estimates without
        appointments because we know accidents don't happen on a schedule. One
        of our experienced estimators will thoroughly inspect your vehicle,
        documenting every scratch, dent, and damaged component. We'll take
        detailed photos and measurements, then work directly with your insurance
        company to handle the paperwork. No need to stress about the
        back-and-forth—we've got that covered.
      </p>
      <p>
        Once the estimate is approved, we move into the disassembly phase. Our
        technicians carefully remove damaged parts and trim pieces to get a
        complete picture of what's happening beneath the surface. This step is
        crucial because hidden damage isn't always visible from the outside. We
        document everything we find and update your insurance company
        immediately if we discover additional repairs that weren't apparent in
        the initial estimate.
      </p>
      <p>
        Next comes the actual repair work. Our I-CAR Certified technicians use
        industry-standard techniques to restore your vehicle's structure. We
        straighten frames when needed, replace damaged panels, and ensure
        everything meets factory specifications. This isn't just about making
        things look good—it's about making sure your vehicle is safe to drive
        and performs exactly as it did before the accident.
      </p>
      <p>
        After the structural work is complete, we move into body work and
        preparation. Every surface that will be painted gets carefully sanded,
        primed, and blocked to ensure a flawless finish. Our paint department
        uses advanced color matching technology to perfectly match your
        vehicle's original color, even accounting for sun fade and age. The
        paint is applied in a controlled environment, then baked to ensure
        proper curing and durability.
      </p>
      <p>
        Before we call your vehicle complete, it goes through our quality
        control process. We inspect every repair, test all systems, and make
        sure everything operates as it should. We'll wash and detail your
        vehicle, then walk through the completed work with you. Our goal is
        simple: you should leave our shop feeling confident that your vehicle is
        back to its pre-accident condition, both in appearance and performance.
      </p>
    </Article>
  );
}
