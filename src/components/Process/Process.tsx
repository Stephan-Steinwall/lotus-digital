"use client";

import styles from "./Process.module.css";

const steps = [
  {
    id: "step-1",
    step: "01",
    title: "Free Website Audit",
    description:
      "We start with an honest, no-obligation audit of your current website. We review your messaging, layout, mobile experience, loading speed, and conversion paths.",
    detail: "Delivered within 48 hours of your request",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "step-2",
    step: "02",
    title: "Strategy & Proposal",
    description:
      "Based on the audit, we propose a clear strategy and scope. You receive a fixed-price quote with no hourly billing, no hidden fees, and a clear timeline.",
    detail: "Fixed-price quote — no surprises",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "step-3",
    step: "03",
    title: "Design & Build",
    description:
      "We design and develop your site with clear milestones. You track everything in a shared client portal so you know exactly where things stand at every stage.",
    detail: "Shared portal — full transparency",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M3 9h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M9 21V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "step-4",
    step: "04",
    title: "Review & Refine",
    description:
      "You review the site and provide feedback. We refine, adjust, and polish until everything feels exactly right — with clear revision rounds built in.",
    detail: "Clear revisions — no back-and-forth confusion",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "step-5",
    step: "05",
    title: "Launch & Support",
    description:
      "We launch your site and make sure everything is running correctly. Analytics are set up, and we stay available for support, updates, and future improvements.",
    detail: "Post-launch support included",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section className={`section ${styles.process}`} id="process">
      <div className="container">
        <div className={`section-header center ${styles.header}`}>
          <div className="badge badge-green">How It Works</div>
          <h2>
            A Simple, Clear{" "}
            <span className="text-gradient">5-Step Process</span>
          </h2>
          <p>
            No agency complexity. No jargon. Just a clear, structured
            process that gets your website from idea to live — fast.
          </p>
        </div>

        {/* Steps */}
        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={step.id} className={styles.stepRow} id={step.id}>
              {/* Left: Number + Line */}
              <div className={styles.stepLeft}>
                <div className={styles.stepNum}>{step.step}</div>
                {i < steps.length - 1 && <div className={styles.stepLine} />}
              </div>

              {/* Right: Card */}
              <div className={styles.stepCard}>
                <div className={styles.stepTop}>
                  <div className={styles.stepIcon}>{step.icon}</div>
                  <div className={styles.stepDetail}>{step.detail}</div>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <div className={styles.ctaText}>
            <h3>Ready to start? It begins with a free audit.</h3>
            <p>No commitment. Just honest feedback on your current website.</p>
          </div>
          <a
            href="#contact"
            className="btn btn-primary btn-lg"
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
