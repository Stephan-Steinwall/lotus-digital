"use client";

import styles from "./Work.module.css";

const projects = [
  {
    id: "work-1",
    label: "Restaurant",
    title: "Salt & Stone Kitchen",
    description: "Full website redesign with menu integration, online reservation CTA, and Google Maps embed. Mobile-first with clear social proof placement.",
    tags: ["Web Design", "Copywriting", "Dev"],
    color: "#BFF747",
    icon: "🍽️",
  },
  {
    id: "work-2",
    label: "Fitness Studio",
    title: "Apex Performance Gym",
    description: "Landing page focused on class bookings and trial sign-ups. A/B-tested headline copy resulted in 40% more form submissions.",
    tags: ["Landing Page", "CRO", "Copy"],
    color: "#BFF747",
    icon: "💪",
  },
  {
    id: "work-3",
    label: "Real Estate",
    title: "Rivera Property Group",
    description: "Professional agency site with property search CTA, agent profiles, and local SEO setup. Built to win trust fast and generate buyer inquiries.",
    tags: ["Real Estate", "SEO", "Design"],
    color: "#BFF747",
    icon: "🏡",
  },
  {
    id: "work-4",
    label: "Home Services",
    title: "ClearPath Cleaning Co.",
    description: "Simple, fast-loading landing page with instant quote form. Focused messaging on reliability — page speed score went from 41 to 94.",
    tags: ["Landing Page", "Speed", "Forms"],
    color: "#BFF747",
    icon: "✨",
  },
];

export default function Work() {
  return (
    <section className={`section ${styles.work}`} id="work">
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className="container">
        <div className={styles.header}>
          <div>
            <div className="badge badge-green">Our Work</div>
            <h2 className={styles.heading}>
              Projects Built to{" "}
              <span className="text-gradient">Convert</span>
            </h2>
          </div>
          <p className={styles.headerDesc}>
            Strategy-led design work for service businesses across the UK.
            Every project starts with a goal — more leads, more bookings, more calls.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`${styles.card} ${i === 0 ? styles.featured : ""}`}
              id={project.id}
            >
              <div className={styles.cardInner}>
                <div className={styles.cardIcon}>
                  <span>{project.icon}</span>
                </div>
                <div className={styles.cardLabel}>{project.label}</div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
                <div className={styles.cardTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className={styles.cardArrow}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.cardGlow} aria-hidden="true" />
            </div>
          ))}
        </div>

        <div className={styles.noteSm}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" stroke="rgba(191,247,71,0.5)" strokeWidth="1.3"/>
            <path d="M8 7v4M8 5v.5" stroke="rgba(191,247,71,0.5)" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
          <span>
            We&apos;re a growing studio — project names are representative of the type of work we do.
            Contact us to discuss your project.
          </span>
        </div>
      </div>
    </section>
  );
}
