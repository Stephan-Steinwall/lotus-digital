"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    id: "faq-1",
    question: "How is Lotus Digital different from other web design agencies?",
    answer:
      "Most agencies optimize for how beautiful a site looks. We optimize for how well it converts. Every design decision — layout, copy placement, CTA language, color, spacing — is made with conversion psychology in mind. We don't deliver pretty portfolios; we deliver customer-generating systems.",
  },
  {
    id: "faq-2",
    question: "What types of businesses do you work with?",
    answer:
      "We specialize in service businesses: law firms, coaches, consultants, home services, healthcare practices, financial advisors, and agencies. We work best with businesses that have a proven offer and need their website to do a better job of communicating it.",
  },
  {
    id: "faq-3",
    question: "How long does a typical project take?",
    answer:
      "Most projects launch in 3–6 weeks from strategy kickoff to live site. Timeline depends on scope — a single landing page can be done in 1–2 weeks, while a full site with copywriting takes 4–8 weeks. We always set clear milestones upfront so there are no surprises.",
  },
  {
    id: "faq-4",
    question: "Do you write the copy for the website?",
    answer:
      "Yes — and we believe great copy is inseparable from great design. Our senior copywriter works alongside the designer from day one to ensure the words and visuals reinforce each other. Copy that converts requires an understanding of your customer's psychology, not just grammar.",
  },
  {
    id: "faq-5",
    question: "What happens after the site launches?",
    answer:
      "Launch is just the beginning. We set up analytics tracking, establish baseline conversion metrics, and provide a post-launch optimization report at 30 days. For ongoing clients, we run A/B tests, monitor conversion rates, and make continuous improvements as data comes in.",
  },
  {
    id: "faq-6",
    question: "How do you measure success?",
    answer:
      "Simple: did conversions go up? We establish clear KPIs at the start of each project — lead volume, conversion rate, revenue attributed — and measure our work against those. We're not interested in vanity metrics like bounce rate or time-on-page unless they correlate to revenue.",
  },
  {
    id: "faq-7",
    question: "What's included in the free audit?",
    answer:
      "Our free conversion audit is a real 15–20 minute video walkthrough of your current site, covering: your above-the-fold messaging, CTA placement and language, trust signals, page speed, and mobile experience. You'll leave with at least 5 actionable insights you can implement immediately — whether you work with us or not.",
  },
  {
    id: "faq-8",
    question: "What are your prices?",
    answer:
      "Projects typically range from $3,000 for a single landing page to $15,000+ for a full site with strategy and copywriting. We offer fixed-price quotes, not hourly billing, so you always know exactly what you're paying. We also offer monthly retainer options for ongoing CRO work.",
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
