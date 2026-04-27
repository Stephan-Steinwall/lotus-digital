"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

const trustPillars = [
  { label: "Conversion-focused strategy" },
  { label: "Mobile-first design" },
  { label: "Clear communication" },
  { label: "Fast, organised delivery" },
];

const niches = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 11l9-9 9 9M5 9v10a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Restaurants",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="4" y1="22" x2="4" y2="15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    label: "Gyms & Fitness",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Real Estate",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Home Services",
  },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      heroRef.current.style.setProperty("--mouse-x", `${x}%`);
      heroRef.current.style.setProperty("--mouse-y", `${y}%`);
    };
    const el = heroRef.current;
    el?.addEventListener("mousemove", handleMouseMove);
    return () => el?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className={styles.hero} ref={heroRef} id="hero">
      {/* Background Elements */}
      <div className={styles.gridBg} aria-hidden="true" />
      <div className={styles.orbGreen} aria-hidden="true" />
      <div className={styles.orbGreenSm} aria-hidden="true" />
      <div className={styles.mouseGlow} aria-hidden="true" />

      <div className="container">
        <div className={styles.heroInner}>
          {/* Left Content */}
          <div className={styles.heroContent}>
            <div className={`badge badge-green badge-dot ${styles.heroTag} animate-fadeInUp`}>
              Founder-Led Design Studio
            </div>

            <h1 className={`${styles.heroHeadline} animate-fadeInUp delay-1`}>
              Websites That Turn
              <br />
              <span className="text-gradient">Visitors Into</span>
              <br />
              Customers
            </h1>

            <p className={`${styles.heroDescription} animate-fadeInUp delay-2`}>
              Lotus Digital helps restaurants, gyms, real estate brands, and
              service businesses grow with clear, modern,
              conversion-focused websites.
            </p>

            <div className={`${styles.heroActions} animate-fadeInUp delay-3`}>
              <a
                href="#contact"
                className="btn btn-primary btn-lg"
                id="hero-cta-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get a Free Website Audit
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#process"
                className="btn btn-outline btn-lg"
                id="hero-cta-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#process")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                See How It Works
              </a>
            </div>

            {/* Trust Pillars */}
            <div className={`${styles.trustPillars} animate-fadeInUp delay-4`}>
              {trustPillars.map((p) => (
                <div key={p.label} className={styles.trustPill}>
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l3.5 3.5 6.5-7" stroke="#BFF747" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {p.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className={`${styles.heroVisual} animate-fadeInUp delay-2`}>
            {/* Floating Card — Browser Mockup */}
            <div className={`${styles.visualCard} animate-float`}>
              <div className={styles.browserMockup}>
                <div className={styles.browserBar}>
                  <div className={styles.browserDots}>
                    <span /><span /><span />
                  </div>
                  <div className={styles.browserUrl}>
                    <div className={styles.urlDot} />
                    lotusdigital.co
                  </div>
                </div>
                <div className={styles.browserContent}>
                  <div className={styles.sitePreview}>
                    <div className={styles.previewNav} />
                    <div className={styles.previewHero}>
                      <div className={styles.previewGlowLine} />
                      <div className={styles.previewH} style={{ width: "75%" }} />
                      <div className={styles.previewH} style={{ width: "55%", height: "9px", opacity: 0.4 }} />
                      <div className={styles.previewBtn} />
                    </div>
                    <div className={styles.previewCards}>
                      {[1, 2, 3].map((i) => (
                        <div key={i} className={styles.previewCard} />
                      ))}
                    </div>
                    <div className={styles.previewLine} style={{ width: "80%" }} />
                    <div className={styles.previewLine} style={{ width: "60%" }} />
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className={`${styles.floatingBadge} ${styles.badgeTopLeft}`}>
                <div className={styles.badgeIcon}>
                  <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                    <path d="M5 9l3 3 5-5" stroke="#BFF747" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span>Strategy-Led</span>
              </div>
              <div className={`${styles.floatingBadge} ${styles.badgeBottomRight}`}>
                <div className={styles.badgeIcon} style={{ background: "rgba(191,247,71,0.12)" }}>
                  <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                    <path d="M9 4v5l3 3" stroke="#BFF747" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span>Portal Included</span>
              </div>

              {/* Score Badge */}
              <div className={styles.scoreBadge}>
                <div className={styles.scoreRing}>
                  <svg width="44" height="44" viewBox="0 0 44 44">
                    <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3"/>
                    <circle cx="22" cy="22" r="18" fill="none" stroke="#BFF747" strokeWidth="3"
                      strokeDasharray="113" strokeDashoffset="14"
                      strokeLinecap="round"
                      style={{ transformOrigin: "center", transform: "rotate(-90deg)" }}
                    />
                  </svg>
                  <span className={styles.scoreNum}>88</span>
                </div>
                <div className={styles.scoreLabel}>
                  <strong>Perf Score</strong>
                  <span>After redesign</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Niche Section */}
        <div className={styles.nicheSection}>
          <p className={styles.nicheLabel}>
            Built for service businesses that rely on trust, leads, and local visibility
          </p>
          <div className={styles.nicheGrid}>
            {niches.map((n) => (
              <div key={n.label} className={styles.nicheCard}>
                <div className={styles.nicheIcon}>{n.icon}</div>
                <span className={styles.nicheText}>{n.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
