"use client";

import styles from "./About.module.css";

const values = [
  { label: "Transparency", desc: "A shared client portal, clear pricing, and honest communication throughout." },
  { label: "Conversion First", desc: "Every design decision is made with your goal in mind — more inquiries." },
  { label: "No Fluff", desc: "We keep projects focused. No unnecessary complexity, no wasted time." },
];

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <div className={styles.inner}>
          {/* Left */}
          <div className={styles.left}>
            <div className="badge badge-green">About Us</div>
            <h2 className={styles.heading}>
              A Focused Studio,{" "}
              <span className="text-gradient">Not a Big Agency</span>
            </h2>
            <p className={styles.intro}>
              Lotus Digital is a founder-led studio. We work with a small number of
              clients at a time, which means you get direct access, real attention,
              and a genuine commitment to your results.
            </p>
            <p className={styles.body}>
              We started Lotus Digital because we noticed a gap — service businesses
              were paying agency prices for generic websites that didn&apos;t convert.
              We believe a well-designed, strategically built website is one of the
              best investments a local service business can make.
            </p>

            <div className={styles.values}>
              {values.map((v) => (
                <div key={v.label} className={styles.valueRow}>
                  <div className={styles.valueDot} />
                  <div>
                    <strong className={styles.valueLabel}>{v.label}</strong>
                    <p className={styles.valueDesc}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className={styles.right}>
            <div className={styles.profileCard}>
              <div className={styles.profileAvatar}>
                <div className={styles.avatarInitial}>LD</div>
              </div>
              <div className={styles.profileInfo}>
                <strong className={styles.profileName}>Lotus Digital Team</strong>
                <span className={styles.profileRole}>Founder-Led Design Studio</span>
              </div>

              <p className={styles.quote}>
                &ldquo;We believe every service business deserves a website that
                actually works for them — not just one that looks good in a portfolio.&rdquo;
              </p>

              <div className={styles.profileStats}>
                <div className={styles.stat}>
                  <strong>3–6</strong>
                  <span>Week Delivery</span>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.stat}>
                  <strong>Fixed</strong>
                  <span>Price Always</span>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.stat}>
                  <strong>100%</strong>
                  <span>Transparent</span>
                </div>
              </div>
            </div>

            {/* Commitment Card */}
            <div className={styles.commitCard}>
              <div className={styles.commitIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l2.5 5.5 6 .8-4.4 4.2 1.1 6L12 15.7l-5.2 2.8 1.1-6-4.4-4.2 6-.8L12 2z" stroke="#BFF747" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <strong className={styles.commitTitle}>Our Commitment</strong>
                <p className={styles.commitBody}>
                  If you&apos;re not happy with our work, we make it right.
                  Simple as that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
