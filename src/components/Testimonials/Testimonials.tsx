"use client";

import { useState } from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    id: 0,
    name: "James Harrington",
    title: "Owner, Harrington Plumbing Co.",
    initials: "JH",
    rating: 5,
    quote:
      "Before Lotus Digital, my website was just a business card on the internet. Now it generates 40–50 leads per month on autopilot. The ROI has been unreal — best money I've ever spent on my business.",
    result: "43 leads/month avg",
    color: "green",
  },
  {
    id: 1,
    name: "Priya Sharma",
    title: "Founder, MindShift Coaching",
    initials: "PS",
    rating: 5,
    quote:
      "I was skeptical about spending money on a redesign. Maya walked me through the strategy and I immediately saw the vision. My discovery call bookings tripled in the first 6 weeks. This isn't just design — it's a growth system.",
    result: "3x discovery calls",
    color: "lime",
  },
  {
    id: 2,
    name: "David Chen",
    title: "CEO, Apex Financial Services",
    initials: "DC",
    rating: 5,
    quote:
      "Jordan and the team took the time to understand our clients deeply. The new site speaks directly to their fears and goals. Qualified leads are up, and our sales team is closing at a much higher rate. The strategic clarity was the game-changer.",
    result: "+195% qualified leads",
    color: "green",
  },
  {
    id: 3,
    name: "Sarah Mitchell",
    title: "Director, Meridian Law Group",
    initials: "SM",
    rating: 5,
    quote:
      "We went from getting 5 inquiries a week to 18 — and the quality is dramatically better. Cases that are a perfect fit for our firm. Lotus Digital truly understood our brand and elevated it in every way. Exceptional work.",
    result: "3.6x inquiry volume",
    color: "lime",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className={`section ${styles.testimonials}`} id="testimonials">
      <div className={styles.bgDecor} aria-hidden="true" />
      <div className="container">
        <div className={`section-header center ${styles.header}`}>
          <div className="badge badge-green">Client Love</div>
          <h2>
            Don&apos;t Take Our Word For It —{" "}
            <span className="text-gradient">Take Theirs</span>
          </h2>
          <p>
            Real results from real service business owners who bet on
            conversion-focused design — and won.
          </p>
        </div>

        <div className={styles.testimonialLayout}>
          {/* Featured Testimonial */}
          <div className={styles.featured} key={t.id}>
            <div className={styles.quoteIcon}>&ldquo;</div>
            <div className={styles.stars}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 1l2 5.5h5.5L12 10l2 5.5L9 13l-5 2.5L6 10 1.5 6.5H7L9 1z" fill="#FFB800"/>
                </svg>
              ))}
            </div>
            <blockquote className={styles.quote}>{t.quote}</blockquote>
            <div className={styles.authorRow}>
              <div className={`${styles.avatar} ${styles[`avatar-${t.color}`]}`}>{t.initials}</div>
              <div>
                <div className={styles.authorName}>{t.name}</div>
                <div className={styles.authorTitle}>{t.title}</div>
              </div>
              <div className={`${styles.resultBadge} ${styles[`result-${t.color}`]}`}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 9l2.5-3.5 2.5 1.5 2.5-4L12 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {t.result}
              </div>
            </div>
          </div>

          {/* Nav */}
          <div className={styles.navPanel}>
            {testimonials.map((item) => (
              <button
                key={item.id}
                className={`${styles.navItem} ${active === item.id ? styles.navActive : ""}`}
                onClick={() => setActive(item.id)}
                id={`testimonial-nav-${item.id}`}
                aria-selected={active === item.id}
              >
                <div className={`${styles.navAvatar} ${styles[`avatar-${item.color}`]}`}>{item.initials}</div>
                <div className={styles.navInfo}>
                  <div className={styles.navName}>{item.name}</div>
                  <div className={styles.navTitle}>{item.title}</div>
                </div>
                {active === item.id && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={styles.navCheck}>
                    <path d="M3 8l3.5 3.5 6.5-7" stroke="var(--lotus-green)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Social Proof Bar */}
        <div className={styles.proofBar}>
          <div className={styles.proofItem}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 1l2.5 6.5H19L14 11l2.5 7L10 14.5l-6.5 3.5L6 11 1 7.5h6.5L10 1z" fill="#FFB800"/>
            </svg>
            <span className={styles.proofText}><strong>4.9/5</strong> average rating across all projects</span>
          </div>
          <div className={styles.proofDivider} />
          <div className={styles.proofItem}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="9" stroke="var(--lotus-green)" strokeWidth="1.5"/>
              <path d="M6 10l3 3 5-5" stroke="var(--lotus-green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={styles.proofText}><strong>100%</strong> of clients would recommend us</span>
          </div>
          <div className={styles.proofDivider} />
          <div className={styles.proofItem}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm0 4v5l3 3" stroke="var(--lotus-lime)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={styles.proofText}><strong>3–6 week</strong> average delivery time</span>
          </div>
        </div>
      </div>
    </section>
  );
}
