import { Article } from "../components/Article";

export function meta() {
  return [
    {
      title: "Refinishing Techniques - Sky Auto Body & Collision Repair",
    },
    {
      name: "description",
      content:
        "Learn about Sky Auto Body's professional refinishing process, including three-stage paint systems, advanced color matching technology, and lifetime warranty on paint work.",
    },
  ];
}

export default function RefinishingTechniques() {
  return (
    <Article
      header="Refinishing Techniques"
      image="/images/refinish-technique.avif"
    >
      <p>
        A quality paint job is about more than just making your vehicle look
        good—it's about protecting it and ensuring the finish lasts. At Sky Auto
        Body, our refinishing process combines proven techniques with modern
        technology to deliver results that look factory-fresh and stand the test
        of time.
      </p>
      <p>
        We use a three-stage paint system that provides superior coverage,
        durability, and color depth. The first stage is the primer, which
        creates a smooth, uniform surface and ensures proper paint adhesion.
        Next comes the base coat, which provides the actual color. Finally, the
        clear coat protects the color and gives it that deep, glossy finish.
        This three-stage system is the industry standard for a reason: it
        produces results that last.
      </p>
      <p>
        Color matching is where technology really shines. Our paint department
        uses advanced color matching systems that analyze your vehicle's
        original paint, accounting for factors like sun fade, age, and
        environmental exposure. We can match virtually any color, from standard
        factory colors to custom paints and even rare or discontinued shades.
        The goal is simple: when we're done, you shouldn't be able to tell where
        the new paint begins and the original ends.
      </p>
      <p>
        The actual painting happens in a controlled environment—our paint booth
        is designed to minimize dust, control temperature and humidity, and
        ensure optimal conditions for paint application. After the paint is
        applied, it's baked at the proper temperature to ensure proper curing.
        This isn't just about speed; proper curing is essential for the paint's
        durability and resistance to fading, chipping, and peeling.
      </p>
      <p>
        We're so confident in our paint work that we offer a lifetime warranty
        on all refinishing services. If the paint we apply ever fades, peels, or
        fails due to workmanship or materials, we'll fix it at no charge. This
        warranty is our commitment to quality and your peace of mind. We stand
        behind our work because we know it's done right.
      </p>
      <p>
        Whether you need a small touch-up or a complete repaint, our refinishing
        process ensures your vehicle looks its best and stays that way. We take
        pride in delivering finishes that not only match your vehicle's original
        appearance but exceed it in quality and durability.
      </p>
    </Article>
  );
}
