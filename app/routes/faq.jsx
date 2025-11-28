import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { CallToAction } from "../components/CallToAction";
import { Footer } from "../components/Footer";
import { Link } from "react-router";
import "../app.css";
import "./faq.css";

export function meta() {
  return [
    { title: "FAQ - Frequently Asked Questions - Sky Auto Body & Collision Repair" },
    {
      name: "description",
      content:
        "Frequently asked questions about auto body repair, collision repair, estimates, insurance, and paint services at Sky Auto Body & Collision Repair in Medford, Oregon.",
    },
  ];
}

const faqs = [
  {
    question: "Do I need an appointment to get an estimate?",
    answer:
      "No, you don't need an appointment for a free estimate. Just bring your vehicle in during our business hours (Monday-Friday, 8:00am-5:00pm) and we'll take care of the rest. Our experienced estimators will inspect your vehicle and provide you with a detailed estimate, typically within about thirty minutes.",
  },
  {
    question: "Do you work with my insurance company?",
    answer:
      "Yes, we work with all major insurance companies including State Farm, Geico, Progressive, Allstate, Farmers, USAA, Travelers, Nationwide, Liberty Mutual, American Family, and many others. We handle all the billing and paperwork directly with your insurance company, so you don't have to worry about the back-and-forth. We also welcome self-pay customers if you prefer to pay out of pocket.",
  },
  {
    question: "How long will my repair take?",
    answer:
      "Repair times vary depending on the extent of the damage and the specific work required. After we complete your estimate, we'll provide you with an estimated timeline for your repair. Factors that affect repair time include parts availability, the complexity of the damage, and whether frame work is needed. We'll keep you updated throughout the process and work as efficiently as possible to get you back on the road.",
  },
  {
    question: "Will the paint match my vehicle's original color?",
    answer:
      "Yes, we use advanced color matching technology that analyzes your vehicle's original paint, accounting for factors like sun fade, age, and environmental exposure. Our three-stage paint system ensures superior coverage and durability. We're so confident in our paint work that we offer a lifetime warranty on all refinishing services. If the paint we apply ever fades, peels, or fails due to workmanship or materials, we'll fix it at no charge.",
  },
  {
    question: "What types of vehicles do you work on?",
    answer:
      "We work on all makes and models of vehicles, from compact cars to full-size trucks and SUVs. Our I-CAR Certified technicians have experience with domestic and import vehicles, and we have the equipment and expertise to handle everything from minor dents and scratches to major collision repairs and frame work.",
  },
  {
    question: "What is your warranty on repairs?",
    answer:
      "We stand behind our work with comprehensive warranties. All refinishing services come with a lifetime warranty against fading, peeling, or failure due to workmanship or materials. For collision repair work, we provide warranties that cover our workmanship. We're committed to quality and will make sure you're satisfied with the repair. If you ever have any concerns about work we've performed, please contact us and we'll address it promptly.",
  },
  {
    question: "Can I get a rental car while my vehicle is being repaired?",
    answer:
      "If you have rental car coverage as part of your insurance policy, we can help coordinate that for you. Many insurance policies include rental car coverage, and we work with your insurance company to arrange it. If you don't have rental coverage or prefer to make your own arrangements, there are several rental car agencies in the Medford area. We'll do our best to minimize the time your vehicle is in the shop.",
  },
];

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="faq-item">
      <button
        className={`faq-question ${isOpen ? "open" : ""}`}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="faq-question-text">{question}</span>
        <span className="faq-icon">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <main>
      <Navbar />
      <div className="faq-container">
        <div className="faq-content">
          <Link to="/articles" className="faq-back-link">
            ← Back to Articles
          </Link>
          <h1 className="faq-header">Frequently Asked Questions</h1>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openItems.has(index)}
                onToggle={() => toggleItem(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <section id="call-to-action">
        <CallToAction />
      </section>
      <Footer />
    </main>
  );
}

