"use client";

import styles from "./Process.module.css";

const steps = [
  {
    number: "01",
    title: "Free Website Audit",
    description:
      "We start by reviewing your current website and sharing honest, actionable feedback. No obligation, no sales pitch — just real insights into what&apos;s working and what isn&apos;t.",
    details: ["Current site review", "Conversion gap analysis", "Mobile & speed check", "Clear written feedback"],
  },
  {
    number: "02",
    title: "Strategy & Scope",
    description:
      "If we move forward, we define the project scope, goals, and timeline together. You&apos;ll receive a clear, fixed-price quote — no hidden costs.",
    details: ["Goal alignment", "Fixed-price proposal", "Clear milestones", "Project portal set up"],
  },
  {
    number: "03",
    title: "Design Preview",
    description:
      "Before any development begins, we create a visual design preview for your review. You&apos;ll see exactly what your site will look like before we build it.",
    details: ["High-fidelity mockup", "Desktop & mobile views", "Feedback round", "Design sign-off"],
  },
  {
    number: "04",
    title: "Development",
    description:
      "We build your site using modern, fast web technology. Your project portal is updated throughout so you always know where things stand.",
    details: ["Responsive development", "Performance optimised", "CMS setup (if needed)", "Progress updates"],
  },
  {
    number: "05",
    title: "Review & Revisions",
    description:
      "You review the live staging site and request any final changes. We want you to be fully happy before anything goes live.",
    details: ["Staging site review", "Revision rounds included", "Final content check", "Launch preparation"],
  },
  {
    number: "06",
    title: "Launch & Support",
    description:
      "We launch your site and make sure everything is running smoothly. After launch, we&apos;re available to answer questions and help with updates.",
    details: ["Go-live support", "Analytics setup", "Post-launch check-in", "Ongoing support available"],
  },
];

export default function Process() {
  return (
    <section className={`section ${styles.process}`} id="process">
      {/* Background */}
      <div className={styles.bg} aria-hidden="true" />

      <div className="container">
        <div className={`section-header center ${styles.header}`}>
          <div className="badge badge-lime">How We Work</div>
          <h2>
            A Clear Process <span className="text-gradient">From First Message to Launch</span>
          </h2>
          <p>
            Every client gets a simple project portal to track progress,
            deliverables, and next steps — so you&apos;re never left guessing.
          </p>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((step, i) => (
            <div key={step.number} className={styles.step} id={`process-step-${i + 1}`}>
              <div className={styles.stepNumber}>{step.number}</div>
              {i < steps.length - 1 && (
                <div className={styles.connector} aria-hidden="true">
                  <svg width="100%" height="2" viewBox="0 0 100 2" preserveAspectRatio="none">
                    <path d="M0 1 H100" stroke="url(#connGrad)" strokeWidth="1.5" strokeDasharray="4 4"/>
                    <defs>
                      <linearGradient id="connGrad" x1="0" y1="0" x2="100" y2="0">
                        <stop stopColor="var(--lotus-green)" />
                        <stop offset="1" stopColor="var(--lotus-lime)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              )}
              <div className={styles.stepCard}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
                <ul className={styles.detailList}>
                  {step.details.map((d) => (
                    <li key={d} className={styles.detailItem}>
                      <span className={styles.detailDot} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Portal callout */}
        <div className={styles.portalBanner}>
          <div className={styles.portalIcon}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="3" y="5" width="22" height="18" rx="3" stroke="var(--lotus-lime)" strokeWidth="2"/>
              <path d="M3 10h22" stroke="var(--lotus-lime)" strokeWidth="2"/>
              <path d="M9 16h10M9 20h6" stroke="var(--lotus-lime)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className={styles.portalText}>
            <strong>Client Portal Included</strong>
            <p>Every project includes access to a shared portal where you can track progress, review deliverables, and see what&apos;s coming next.</p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaContent}>
            <h3>Ready to see what your site could be?</h3>
            <p>
              Start with a free website audit — we&apos;ll share honest feedback
              and a clear plan for improvement.
            </p>
          </div>
          <a
            href="#contact"
            className="btn btn-lime btn-lg"
            id="process-cta"
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
