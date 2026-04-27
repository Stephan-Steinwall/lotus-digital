"use client";

import styles from "./Process.module.css";

const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    description:
      "We start with a deep-dive into your current site, audience, competitors, and business goals. Every decision we make is rooted in data, not guesses.",
    details: ["Analytics review", "Heatmap analysis", "Competitor benchmarking", "Customer interviews"],
  },
  {
    number: "02",
    title: "Strategy & Blueprint",
    description:
      "Before touching design, we map your conversion architecture — the exact path we want visitors to follow, and why each step matters.",
    details: ["User journey mapping", "CTA strategy", "Information hierarchy", "Content planning"],
  },
  {
    number: "03",
    title: "Design & Build",
    description:
      "Your site comes to life with precision-crafted design, pixel-perfect layouts, and seamless development — optimized for speed and performance.",
    details: ["High-fidelity mockups", "Responsive development", "Performance optimization", "Copy integration"],
  },
  {
    number: "04",
    title: "Launch & Optimize",
    description:
      "We don't just hand it over and disappear. We monitor, test, and continuously optimize your site to improve conversion rates over time.",
    details: ["A/B testing", "Analytics setup", "Conversion monitoring", "Ongoing iteration"],
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
            Our <span className="text-gradient">Proven Process</span> for
            Maximum Conversions
          </h2>
          <p>
            Four focused phases — each one designed to remove guesswork and
            build a site that reliably converts visitors into customers.
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

        {/* CTA Banner */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaContent}>
            <h3>Ready to see what your site is leaving on the table?</h3>
            <p>
              Get a free, no-obligation conversion audit — we&apos;ll show you exactly
              where you&apos;re losing customers and how to fix it.
            </p>
          </div>
          <a
            href="#contact"
            className="btn btn-lime btn-lg"
            id="process-cta"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
          >
            Claim Your Free Audit
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
