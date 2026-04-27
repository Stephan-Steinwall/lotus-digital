"use client";

import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className={`section ${styles.testimonials}`} id="testimonials">
      <div className={styles.bgDecor} aria-hidden="true" />
      <div className="container">
        <div className={`section-header center ${styles.header}`}>
          <div className="badge badge-green">Why Choose Us</div>
          <h2>
            What You Can Expect{" "}
            <span className="text-gradient">Working With Us</span>
          </h2>
          <p>
            We&apos;re a new studio and we won&apos;t pretend to have hundreds of reviews.
            What we can promise is a clear process, honest communication, and
            a genuine focus on your results.
          </p>
        </div>

        {/* Promise Grid */}
        <div className={styles.promiseGrid}>
          {[
            {
              icon: "🔍",
              title: "Free Website Audit",
              body: "Every engagement starts with an honest, no-obligation review of your current site. You'll get real, actionable feedback — whether you work with us or not.",
            },
            {
              icon: "💬",
              title: "Clear Communication",
              body: "We reply promptly, update you regularly, and keep things simple. No agency jargon — just honest updates on where things stand.",
            },
            {
              icon: "🗂️",
              title: "Client Portal Included",
              body: "Every project gets a shared portal so you can track progress, review deliverables, and see exactly what's happening at every stage.",
            },
            {
              icon: "📱",
              title: "Mobile-First by Default",
              body: "Every site we build is designed and tested on mobile first. Most of your visitors are on their phone — your site needs to work perfectly for them.",
            },
            {
              icon: "⚡",
              title: "Built for Speed",
              body: "We build with modern, fast technology. A slow website loses visitors before they even read your headline.",
            },
            {
              icon: "✅",
              title: "Fixed-Price Quotes",
              body: "After your free audit, we provide a clear, fixed-price quote. No hourly surprises, no scope creep — just a clear price for a clear result.",
            },
          ].map((item) => (
            <div key={item.title} className={styles.promiseCard}>
              <div className={styles.promiseIcon}>{item.icon}</div>
              <h4 className={styles.promiseTitle}>{item.title}</h4>
              <p className={styles.promiseBody}>{item.body}</p>
            </div>
          ))}
        </div>

        {/* Social Proof Bar */}
        <div className={styles.proofBar}>
          <div className={styles.proofItem}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm0 4v5l3 3" stroke="var(--lotus-lime)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={styles.proofText}><strong>3–6 week</strong> average delivery time</span>
          </div>
          <div className={styles.proofDivider} />
          <div className={styles.proofItem}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="9" stroke="var(--lotus-green)" strokeWidth="1.5"/>
              <path d="M6 10l3 3 5-5" stroke="var(--lotus-green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={styles.proofText}><strong>Fixed-price</strong> quotes on every project</span>
          </div>
          <div className={styles.proofDivider} />
          <div className={styles.proofItem}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="3" y="4" width="14" height="12" rx="2" stroke="var(--lotus-green)" strokeWidth="1.5"/>
              <path d="M3 8h14" stroke="var(--lotus-green)" strokeWidth="1.5"/>
              <path d="M7 12h6" stroke="var(--lotus-green)" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            <span className={styles.proofText}><strong>Client portal</strong> included with every project</span>
          </div>
        </div>
      </div>
    </section>
  );
}
