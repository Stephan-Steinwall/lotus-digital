"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    id: "faq-1",
    question: "How is Lotus Digital different from other web design agencies?",
    answer:
      "We focus on websites that actually generate inquiries — not just ones that look good. We work closely with you throughout the process, keep things transparent in a shared client portal, and we're honest about what we can and can't do. We're a focused studio, not a large agency.",
  },
  {
    id: "faq-2",
    question: "What types of businesses do you work with?",
    answer:
      "We focus on service businesses — restaurants, gyms, fitness studios, real estate professionals, cleaning and home service companies, and other local or online service providers. These businesses rely on trust and leads, and that's exactly what we help with.",
  },
  {
    id: "faq-3",
    question: "How long does a typical project take?",
    answer:
      "Most projects are completed in 3–6 weeks from kickoff to launch. A single landing page can be ready in 1–2 weeks. A full website with copywriting typically takes 4–8 weeks. We'll set clear milestones at the start so you always know what to expect.",
  },
  {
    id: "faq-4",
    question: "Do you write the copy for the website?",
    answer:
      "Yes, conversion copywriting is one of our core services. We help craft clear, compelling copy that communicates your value and encourages visitors to reach out. You can also choose to handle copy yourself and have us focus on design and development.",
  },
  {
    id: "faq-5",
    question: "What is the free website audit?",
    answer:
      "The free audit is a genuine review of your current website — we look at your messaging, layout, mobile experience, speed, and conversion paths. You'll receive honest, specific feedback on what's working and what could be improved. There's no obligation to work with us after.",
  },
  {
    id: "faq-6",
    question: "What are your prices?",
    answer:
      "Pricing depends on the scope of the project. Starter websites and landing pages are available for smaller budgets, while full website redesigns with copywriting cost more. After the free audit, we provide a clear fixed-price quote — no hourly billing, no surprises.",
  },
  {
    id: "faq-7",
    question: "What happens after the site launches?",
    answer:
      "After launch, we make sure everything is running correctly and set up basic analytics so you can see how visitors interact with your site. We're available for questions and offer ongoing support for updates and improvements.",
  },
  {
    id: "faq-8",
    question: "How do I get in touch?",
    answer:
      "The easiest way is to use the contact form below or email us directly at hello@lotusdigital.co. We respond within one business day. WhatsApp is also available after an initial inquiry.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <section className={`section ${styles.faq}`} id="faq">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.leftCol}>
            <div className="badge badge-green">FAQ</div>
            <h2>
              Questions We Get{" "}
              <span className="text-gradient">All the Time</span>
            </h2>
            <p>
              Can&apos;t find what you&apos;re looking for? Reach out and we&apos;ll reply within
              one business day.
            </p>
            <a
              href="#contact"
              className="btn btn-primary"
              id="faq-cta"
              style={{ marginTop: "28px" }}
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            >
              Ask Your Question
            </a>
          </div>

          <div className={styles.rightCol}>
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`${styles.item} ${openId === faq.id ? styles.open : ""}`}
                id={faq.id}
              >
                <button
                  className={styles.question}
                  onClick={() => toggle(faq.id)}
                  aria-expanded={openId === faq.id}
                >
                  <span>{faq.question}</span>
                  <div className={styles.icon}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
                <div className={styles.answer}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
