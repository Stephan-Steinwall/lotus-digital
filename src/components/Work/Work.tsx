"use client";

import styles from "./Work.module.css";

const projects = [
  {
    id: "restaurant-concept",
    category: "Concept Project",
    title: "Restaurant Website Redesign Concept",
    description:
      "A sample redesign for a local restaurant — focused on showcasing the menu, atmosphere, and making it easy to reserve a table or place an order online.",
    tags: ["Restaurant", "Web Design", "Mobile-First"],
    highlights: [
      "Clear above-the-fold CTA",
      "Menu & gallery integration",
      "Online booking prompt",
    ],
    color: "green",
  },
  {
    id: "gym-concept",
    category: "Concept Project",
    title: "Gym Landing Page Concept",
    description:
      "A conversion-focused landing page for a gym or fitness studio — designed to drive trial sign-ups and membership inquiries with trust signals and clear offers.",
    tags: ["Gym & Fitness", "Landing Page", "Lead Generation"],
    highlights: [
      "Strong headline & value prop",
      "Membership offer section",
      "Social proof & testimonial layout",
    ],
    color: "lime",
  },
  {
    id: "realestate-concept",
    category: "Concept Project",
    title: "Real Estate Lead Capture Concept",
    description:
      "A real estate professional&apos;s website designed around one goal: capturing buyer and seller leads. Listings, trust, and a clear path to booking a call.",
    tags: ["Real Estate", "Lead Capture", "Professional Services"],
    highlights: [
      "Lead capture form above fold",
      "Agent credibility section",
      "Property listings integration",
    ],
    color: "green",
  },
  {
    id: "cleaning-concept",
    category: "Concept Project",
    title: "Cleaning Business Website Concept",
    description:
      "A simple, trustworthy website for a home or commercial cleaning business — designed to make getting a quote quick and easy, with clear service details.",
    tags: ["Home Services", "Web Design", "Local Business"],
    highlights: [
      "Instant quote request form",
      "Services & pricing section",
      "Trust-building review section",
    ],
    color: "lime",
  },
];

export default function Work() {
  return (
    <section className={`section ${styles.work}`} id="work">
      <div className="container">
        <div className={`section-header center ${styles.header}`}>
          <div className="badge badge-green">Sample Projects</div>
          <h2>
            Sample Website <span className="text-gradient">Transformations</span>
          </h2>
          <p>
            These are examples of the type of work Lotus Digital can create for
            your business. Each concept is tailored to a specific industry and
            conversion goal.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${styles.card} ${styles[`card-${project.color}`]}`}
              id={`work-${project.id}`}
            >
              {/* Visual Placeholder */}
              <div className={`${styles.cardVisual} ${styles[`visual-${project.color}`]}`}>
                <div className={styles.visualInner}>
                  <div className={styles.visualBrowser}>
                    <div className={styles.vbBar}>
                      <span /><span /><span />
                    </div>
                    <div className={styles.vbBody}>
                      <div className={styles.vbLine} style={{ width: "60%" }} />
                      <div className={styles.vbLine} style={{ width: "80%" }} />
                      <div className={styles.vbLine} style={{ width: "45%" }} />
                      <div className={styles.vbBtn} />
                    </div>
                  </div>
                  <div className={styles.conceptTag}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3"/>
                      <path d="M7 4v3l2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Concept Example
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={styles.cardContent}>
                <span className={`badge ${project.color === "green" ? "badge-green" : "badge-lime"}`}>
                  {project.category}
                </span>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>

                {/* Highlights */}
                <ul className={styles.highlights}>
                  {project.highlights.map((h) => (
                    <li key={h} className={styles.highlightItem}>
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M2 6.5l3 3 6-6" stroke={project.color === "green" ? "var(--lotus-green)" : "var(--lotus-lime)"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className={styles.tags}>
                  {project.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottomCta}>
          <p>Ready to create something like this for your business?</p>
          <a
            href="#contact"
            className="btn btn-primary"
            id="work-cta"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
          >
            Get a Free Website Audit
          </a>
        </div>
      </div>
    </section>
  );
}
