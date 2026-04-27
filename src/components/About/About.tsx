"use client";

import styles from "./About.module.css";

const values = [
  {
    icon: "🎯",
    title: "Conversion-First Design",
    description: "Every design decision is evaluated against one question: does this help the visitor take action? We design for outcomes, not aesthetics alone.",
  },
  {
    icon: "🗣️",
    title: "Clear Communication",
    description: "You'll always know where your project stands. No jargon, no surprises — just clear updates and honest timelines from first message to launch.",
  },
  {
    icon: "⚡",
    title: "Fast, Organised Delivery",
    description: "We move efficiently. Projects are tracked in a shared client portal so you always know what's next, what's done, and what needs your input.",
  },
  {
    icon: "🏗️",
    title: "Modern Web Technology",
    description: "Built with fast, scalable technology. Your site loads quickly, works perfectly on mobile, and is built to grow as your business does.",
  },
];

const focusAreas = [
  { label: "Design", desc: "Clean, purposeful interfaces that reflect your brand." },
  { label: "Development", desc: "Fast, responsive sites built for performance." },
  { label: "Strategy", desc: "Clarity on messaging, structure, and conversion paths." },
  { label: "Client Experience", desc: "A clear portal, regular updates, and no guesswork." },
];

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        {/* Mission Block */}
        <div className={styles.missionBlock}>
          <div className={styles.missionContent}>
            <div className="badge badge-green badge-dot">About Us</div>
            <h2>
              A Founder-Led Studio{" "}
              <span className="text-gradient">Focused on Your Growth</span>
            </h2>
            <p>
              Lotus Digital is a founder-led digital studio focused on helping
              service businesses create websites that look professional,
              communicate clearly, and convert visitors into inquiries.
            </p>
            <p>
              We focus on design, development, strategy, and a clear client
              experience — so you always know what&apos;s happening and why.
            </p>
            <div className={styles.missionCta}>
              <a
                href="#contact"
                className="btn btn-primary"
                id="about-cta"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              >
                Start a Conversation
              </a>
            </div>
          </div>

          <div className={styles.missionVisual}>
            <div className={styles.visualCard}>
              <div className={styles.visualCardInner}>
                <div className={styles.vcTitle}>
                  <div className={styles.vcDot} />
                  Lotus Digital Studio
                </div>
                <div className={styles.vcTagline}>
                  &ldquo;We design for one outcome: helping your business get more inquiries.&rdquo;
                </div>
                <div className={styles.focusGrid}>
                  {focusAreas.map((f) => (
                    <div key={f.label} className={styles.focusItem}>
                      <div className={styles.focusLabel}>{f.label}</div>
                      <div className={styles.focusDesc}>{f.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className={styles.valuesSection}>
          <h3 className={styles.valuesTitle}>What We Focus On</h3>
          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h4 className={styles.valueName}>{v.title}</h4>
                <p className={styles.valueDesc}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Free Audit CTA */}
        <div className={styles.auditCta}>
          <div className={styles.auditCtaText}>
            <h3>Not sure where to start?</h3>
            <p>
              Book a free website audit. We&apos;ll review your current site and share
              honest, actionable feedback — no obligation required.
            </p>
          </div>
          <a
            href="#contact"
            className="btn btn-lime btn-lg"
            id="about-audit-cta"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
          >
            Get Your Free Audit
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
