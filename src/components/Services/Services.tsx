"use client";

import styles from "./Services.module.css";

const services = [
  {
    id: "svc-1",
    number: "01",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="16" y="3" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="3" y="16" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="16" y="16" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
    title: "Conversion Website Design",
    description:
      "A website designed to turn visitors into leads. Every layout decision, CTA placement, and section is built with one goal — to get visitors to contact you.",
    tags: ["Strategy", "UX Design", "Dev"],
  },
  {
    id: "svc-2",
    number: "02",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l2.5 5.5 6 .8-4.4 4.2 1.1 6-5.2-2.8-5.2 2.8 1.1-6L5.5 10.3l6-.8L14 4z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Conversion Copywriting",
    description:
      "Clear, compelling copy that communicates your value and drives action. We craft headlines, service descriptions, and CTAs that resonate with your ideal customer.",
    tags: ["Messaging", "Copy", "Strategy"],
  },
  {
    id: "svc-3",
    number: "03",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M7 10h14M7 14h8M5 6h18v16H5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Landing Page Design",
    description:
      "High-converting, standalone landing pages for campaigns, product launches, or lead generation. Fast to launch, focused on a single action.",
    tags: ["Landing Page", "CRO", "Fast"],
  },
  {
    id: "svc-4",
    number: "04",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M4 10h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M10 16h8M10 20h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Website Redesign",
    description:
      "Already have a site that's underperforming? We audit it, identify the gaps, and redesign it to convert better — keeping what works, fixing what doesn't.",
    tags: ["Audit", "Redesign", "CRO"],
  },
  {
    id: "svc-5",
    number: "05",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Speed & SEO Optimisation",
    description:
      "A fast website ranks higher and converts better. We optimise load times, Core Web Vitals, and on-page SEO so you can be found and trusted.",
    tags: ["Performance", "SEO", "Technical"],
  },
  {
    id: "svc-6",
    number: "06",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C8.5 4 4 8.5 4 14s4.5 10 10 10 10-4.5 10-10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M20 4v8h-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Ongoing Support",
    description:
      "After launch, we stay available. Whether you need copy updates, new sections, or technical fixes — we offer flexible ongoing support packages.",
    tags: ["Maintenance", "Updates", "Support"],
  },
];

export default function Services() {
  return (
    <section className={`section ${styles.services}`} id="services">
      <div className="container">
        <div className={`section-header center ${styles.header}`}>
          <div className="badge badge-green">What We Do</div>
          <h2>
            Services Built for <br />
            <span className="text-gradient">Local Service Businesses</span>
          </h2>
          <p>
            We keep our offering focused and effective — every service is
            designed to help service businesses attract more inquiries online.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((svc) => (
            <div key={svc.id} className={styles.card} id={svc.id}>
              <div className={styles.cardTop}>
                <div className={styles.iconWrap}>{svc.icon}</div>
                <span className={styles.number}>{svc.number}</span>
              </div>
              <h3 className={styles.title}>{svc.title}</h3>
              <p className={styles.desc}>{svc.description}</p>
              <div className={styles.tags}>
                {svc.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <div className={styles.hoverLine} aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCta}>
          <p>Not sure which service fits you?</p>
          <a
            href="#contact"
            className="btn btn-primary"
            id="services-cta"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
          >
            Get a Free Audit — We&apos;ll Recommend the Best Fit
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
