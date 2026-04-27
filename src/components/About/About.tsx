"use client";

import styles from "./About.module.css";

const values = [
  {
    icon: "🎯",
    title: "Conversion-First",
    description: "Every design decision is evaluated against one question: does this help the visitor convert?",
  },
  {
    icon: "🔬",
    title: "Data-Driven",
    description: "We don't rely on gut feelings or trends. We use heatmaps, analytics, and user testing to guide our work.",
  },
  {
    icon: "⚡",
    title: "Fast Execution",
    description: "We move with urgency. Most projects launch in 3–6 weeks, without sacrificing quality or strategy.",
  },
  {
    icon: "🤝",
    title: "Radical Transparency",
    description: "You'll always know where your project stands, what we're working on, and why every decision was made.",
  },
];

const team = [
  { name: "Maya Patel", role: "Founder & Creative Director", initials: "MP", color: "green" },
  { name: "Jordan Lee", role: "Head of Strategy & CRO", initials: "JL", color: "lime" },
  { name: "Remi Okafor", role: "Lead Developer", initials: "RO", color: "green" },
  { name: "Sofia Reyes", role: "Senior Copywriter", initials: "SR", color: "lime" },
];

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        {/* Mission Block */}
        <div className={styles.missionBlock}>
          <div className={styles.missionContent}>
            <div className="badge badge-green badge-dot">Our Mission</div>
            <h2>
              We Exist to Turn Your{" "}
              <span className="text-gradient">Website Into Your Best Salesperson</span>
            </h2>
            <p>
              At Lotus Digital, we don&apos;t just build websites — we design digital
              experiences that guide visitors into becoming paying customers,
              using strategy, clarity, and conversion-focused design.
            </p>
            <p>
              We work exclusively with service businesses who are serious about
              growth. If you want a pretty brochure site, we&apos;re probably not the
              right fit. But if you want a site that works as hard as you do —
              let&apos;s talk.
            </p>
            <div className={styles.missionCta}>
              <a
                href="#contact"
                className="btn btn-primary"
                id="about-cta"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              >
                Work With Us
              </a>
              <div className={styles.missionStat}>
                <span className={styles.missionStatVal}>120+</span>
                <span className={styles.missionStatLab}>Happy Clients</span>
              </div>
              <div className={styles.missionStat}>
                <span className={styles.missionStatVal}>$12M+</span>
                <span className={styles.missionStatLab}>Revenue Generated</span>
              </div>
            </div>
          </div>
          <div className={styles.missionVisual}>
            <div className={styles.visualCard}>
              <div className={styles.visualCardInner}>
                {/* Decorative elements */}
                <div className={styles.vcTitle}>
                  <div className={styles.vcDot} />
                  Lotus Digital Studio
                </div>
                <div className={styles.vcTagline}>
                  &ldquo;We design for one outcome: conversions.&rdquo;
                </div>
                <div className={styles.vcStats}>
                  <div className={styles.vcStat}>
                    <span className={styles.vcStatNum}>340%</span>
                    <span className={styles.vcStatLab}>Avg Lift</span>
                  </div>
                  <div className={styles.vcDivider} />
                  <div className={styles.vcStat}>
                    <span className={styles.vcStatNum}>6 yrs</span>
                    <span className={styles.vcStatLab}>Experience</span>
                  </div>
                  <div className={styles.vcDivider} />
                  <div className={styles.vcStat}>
                    <span className={styles.vcStatNum}>100%</span>
                    <span className={styles.vcStatLab}>Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className={styles.valuesSection}>
          <h3 className={styles.valuesTitle}>What We Stand For</h3>
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

        {/* Team */}
        <div className={styles.teamSection}>
          <div className={styles.teamHeader}>
            <h3>The People Behind Your Growth</h3>
            <p>A tight-knit team of strategists, designers, and developers — all obsessed with conversions.</p>
          </div>
          <div className={styles.teamGrid}>
            {team.map((member) => (
              <div key={member.name} className={styles.teamCard} id={`team-${member.name.toLowerCase().replace(" ", "-")}`}>
                <div className={`${styles.teamAvatar} ${styles[`avatar-${member.color}`]}`}>
                  {member.initials}
                </div>
                <div className={styles.teamInfo}>
                  <h4 className={styles.teamName}>{member.name}</h4>
                  <p className={styles.teamRole}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
