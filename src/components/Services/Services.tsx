"use client";

import styles from "./Services.module.css";

const services = [
  {
    id: "web-design",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="4" width="24" height="18" rx="3" stroke="var(--lotus-green)" strokeWidth="2"/>
        <path d="M2 9h24" stroke="var(--lotus-green)" strokeWidth="2"/>
        <circle cx="6" cy="6.5" r="1" fill="var(--lotus-green)"/>
        <circle cx="10" cy="6.5" r="1" fill="var(--lotus-green)"/>
        <circle cx="14" cy="6.5" r="1" fill="var(--lotus-green)"/>
      </svg>
    ),
    label: "Core Service",
    title: "Website Design & Redesign",
    description:
      "We design clear, modern websites that reflect your brand and guide visitors toward taking action. Built mobile-first, fast, and ready to convert.",
    features: ["Mobile-first responsive design", "Conversion-focused layouts", "Brand-aligned visual identity", "Performance optimised"],
    accent: "green",
    comingSoon: false,
  },
  {
    id: "landing-pages",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 6h20M4 12h14M4 18h10" stroke="var(--lotus-lime)" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="22" cy="18" r="4" stroke="var(--lotus-lime)" strokeWidth="2"/>
        <path d="M20.5 18l1 1 2-2" stroke="var(--lotus-lime)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "High Impact",
    title: "Landing Pages",
    description:
      "Focused, single-purpose pages designed to turn ad traffic and inquiries into leads. Built around one goal: getting your visitor to take action.",
    features: ["Single goal focus", "Clear headline & CTA", "Trust signals & social proof", "A/B ready structure"],
    accent: "lime",
    comingSoon: false,
  },
  {
    id: "copywriting",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="16" rx="3" stroke="var(--lotus-green)" strokeWidth="2"/>
        <path d="M9 11h10M9 15h7" stroke="var(--lotus-green)" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    label: "Words That Convert",
    title: "Conversion Copywriting",
    description:
      "We help you communicate your value clearly. Copy that speaks to what your customers actually care about — and moves them to reach out.",
    features: ["Homepage & service page copy", "Clear value proposition", "Tone of voice guidance", "Call-to-action writing"],
    accent: "green",
    comingSoon: false,
  },
  {
    id: "speed",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l-2 8h8l-8 12" stroke="var(--lotus-lime)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Performance",
    title: "Website Speed & Performance",
    description:
      "Slow websites lose visitors. We audit and improve your site&apos;s Core Web Vitals, load times, and mobile performance so you stop losing leads.",
    features: ["Core Web Vitals audit", "Image & asset optimisation", "Mobile performance review", "Technical SEO check"],
    accent: "lime",
    comingSoon: false,
  },
  {
    id: "brand-identity",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="var(--lotus-green)" strokeWidth="2"/>
        <path d="M14 8v6l4 2" stroke="var(--lotus-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Brand Foundations",
    title: "Brand Identity Basics",
    description:
      "For businesses that need a visual foundation before the website. We help you establish a clear logo, colour palette, and brand style that looks professional.",
    features: ["Logo design", "Colour palette & typography", "Basic brand style guide", "Consistent visual language"],
    accent: "green",
    comingSoon: false,
  },
  {
    id: "ai-automations",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="6" y="6" width="16" height="16" rx="4" stroke="var(--lotus-lime)" strokeWidth="2"/>
        <path d="M10 14h8M14 10v8" stroke="var(--lotus-lime)" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="10" cy="10" r="1.5" fill="var(--lotus-lime)"/>
        <circle cx="18" cy="10" r="1.5" fill="var(--lotus-lime)"/>
        <circle cx="10" cy="18" r="1.5" fill="var(--lotus-lime)"/>
        <circle cx="18" cy="18" r="1.5" fill="var(--lotus-lime)"/>
      </svg>
    ),
    label: "Coming Soon",
    title: "AI Automations & Business Workflows",
    description:
      "We&apos;re working on a service that helps service businesses save time with smart automations — from lead follow-up to booking workflows. Join the waitlist.",
    features: ["Lead follow-up automation", "Booking & scheduling flows", "CRM integration", "Notification systems"],
    accent: "lime",
    comingSoon: true,
  },
];

export default function Services() {
  return (
    <section className={`section ${styles.services}`} id="services">
      <div className="container">
        <div className={`section-header center ${styles.header}`}>
          <div className="badge badge-green badge-dot">What We Offer</div>
          <h2>
            Services Built Around{" "}
            <span className="text-gradient">Your Business Goals</span>
          </h2>
          <p>
            We focus on the services that matter most for service businesses:
            a professional online presence, clear messaging, and a site that
            actually generates inquiries.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`${styles.card} ${styles[`accent-${service.accent}`]} ${service.comingSoon ? styles.comingSoonCard : ""}`}
              style={{ animationDelay: `${i * 0.08}s` }}
              id={`service-${service.id}`}
            >
              {service.comingSoon && (
                <div className={styles.comingSoonRibbon}>Coming Soon</div>
              )}
              <div className={styles.cardHeader}>
                <div className={`${styles.iconWrap} ${styles[`icon-${service.accent}`]}`}>
                  {service.icon}
                </div>
                <span className={`badge ${service.accent === "green" ? "badge-green" : "badge-lime"}`}>
                  {service.label}
                </span>
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <ul className={styles.featureList}>
                {service.features.map((f) => (
                  <li key={f} className={styles.featureItem}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7l3.5 3.5 6.5-7" stroke={service.accent === "green" ? "var(--lotus-green)" : "var(--lotus-lime)"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              {!service.comingSoon && (
                <a href="#contact" className={`btn ${service.accent === "green" ? "btn-ghost" : "btn-outline"} btn-sm ${styles.cardBtn}`}
                  onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>
                  Learn More
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              )}
              {service.comingSoon && (
                <a href="#contact" className={`btn btn-outline btn-sm ${styles.cardBtn}`}
                  onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>
                  Join the Waitlist
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
