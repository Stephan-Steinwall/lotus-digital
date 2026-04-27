"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

const stats = [
  { value: "340%", label: "Avg Conversion Lift" },
  { value: "120+", label: "Clients Served" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "$12M+", label: "Revenue Generated" },
];

const trustedBy = [
  "Clarity Studio", "Apex Services", "NovaCare", "Elevate Pro", "Meridian Co.", "BrightPath"
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
      {/* Background Orbs */}
      <div className={styles.orbGreen} aria-hidden="true" />
      <div className={styles.orbLime} aria-hidden="true" />
      <div className={styles.gridPattern} aria-hidden="true" />

      <div className="container">
        <div className={styles.heroInner}>
          {/* Left Content */}
          <div className={styles.heroContent}>
            <div className={`badge badge-green badge-dot ${styles.heroTag}`}>
              Conversion-First Design Agency
            </div>

            <h1 className={styles.heroHeadline}>
              We Turn Websites Into
              <span className={`text-gradient ${styles.headlineAccent}`}>
                {" "}Customer-Generating{" "}
              </span>
              Machines
            </h1>

            <p className={styles.heroDescription}>
              At Lotus Digital, we don&apos;t just build websites — we design digital
              experiences that guide visitors into becoming paying customers, using
              strategy, clarity, and conversion-focused design.
            </p>

            <div className={styles.heroActions}>
              <a
                href="#contact"
                className="btn btn-primary btn-lg"
                id="hero-cta-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Your Free Audit
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#work"
                className="btn btn-outline btn-lg"
                id="hero-cta-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                See Our Work
              </a>
            </div>

            {/* Trust Indicators */}
            <div className={styles.trustSection}>
              <p className={styles.trustLabel}>Trusted by service businesses across industries</p>
              <div className={styles.trustedLogos}>
                {trustedBy.map((name) => (
                  <span key={name} className={styles.trustedLogo}>{name}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className={styles.heroVisual}>
            <div className={`${styles.visualCard} animate-float`}>
              {/* Mockup Browser */}
              <div className={styles.browserMockup}>
                <div className={styles.browserBar}>
                  <div className={styles.browserDots}>
                    <span /><span /><span />
                  </div>
                  <div className={styles.browserUrl}>lotusdigital.co</div>
                </div>
                <div className={styles.browserContent}>
                  {/* Conversion Graph */}
                  <div className={styles.conversionGraph}>
                    <div className={styles.graphLabel}>Conversion Rate</div>
                    <div className={styles.graphValue}>+340%</div>
                    <div className={styles.graphBars}>
                      {[30, 45, 38, 60, 55, 78, 92].map((h, i) => (
                        <div
                          key={i}
                          className={styles.graphBar}
                          style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                    <div className={styles.graphXlabels}>
                      {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                        <span key={i}>{d}</span>
                      ))}
                    </div>
                  </div>

                  {/* Mini stat cards */}
                  <div className={styles.miniStats}>
                    <div className={styles.miniStat}>
                      <div className={styles.miniStatIcon}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8 2l1.5 4.5H14L10.5 9l1.5 4.5L8 11l-4 2.5L5.5 9 2 6.5h4.5L8 2z" fill="var(--lotus-lime)" />
                        </svg>
                      </div>
                      <div>
                        <div className={styles.miniStatValue}>2.4x</div>
                        <div className={styles.miniStatLabel}>Lead Volume</div>
                      </div>
                    </div>
                    <div className={styles.miniStat}>
                      <div className={styles.miniStatIcon} style={{ background: "rgba(0,200,150,0.12)" }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M13 4L7 10L4 7" stroke="var(--lotus-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <div className={styles.miniStatValue} style={{ color: "var(--lotus-green)" }}>98%</div>
                        <div className={styles.miniStatLabel}>Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className={`${styles.floatingBadge} ${styles.badgeTopLeft}`}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="9" fill="rgba(0,200,150,0.15)" />
                  <path d="M5 9l3 3 5-5" stroke="var(--lotus-green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Strategy-Led</span>
              </div>
              <div className={`${styles.floatingBadge} ${styles.badgeBottomRight}`}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="9" fill="rgba(198,241,53,0.15)" />
                  <path d="M9 4v5l3 3" stroke="var(--lotus-lime)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className={styles.statsRow}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
