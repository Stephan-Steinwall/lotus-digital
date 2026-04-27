"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

const socials = [
  {
    label: "Twitter / X",
    href: "https://twitter.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M9.37 6.77L15.1 0h-1.37L8.76 5.88 4.67 0H0l5.97 8.68L0 15.56h1.37l5.22-5.83 4.17 5.83H16L9.37 6.77z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M14.82 14.07V14.07h.01V8.91c0-2.53-.55-4.48-3.5-4.48-1.42 0-2.38.78-2.77 1.52h-.04V4.63H5.88v9.44h2.74V9.4c0-1.23.23-2.41 1.75-2.41 1.5 0 1.52 1.4 1.52 2.49v4.59h2.93zM1.88 4.63H4.63v9.44H1.88V4.63zM3.25 0C2.35 0 1.63.73 1.63 1.63s.72 1.65 1.62 1.65 1.63-.74 1.63-1.65C4.88.73 4.16 0 3.25 0z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="1" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="11.5" cy="4.5" r="0.8" fill="currentColor"/>
      </svg>
    ),
  },
];

const footerLinks = {
  Services: [
    "Conversion Web Design",
    "Brand Strategy",
    "CRO Consulting",
    "Conversion Copywriting",
    "Speed Audit",
    "Sales Funnel Design",
  ],
  Company: ["About Us", "Our Work", "Process", "Testimonials", "Blog"],
  Resources: ["Free Audit", "Case Studies", "FAQ", "Contact"],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="footer">
      {/* CTA Strip */}
      <div className={styles.ctaStrip}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h3 className={styles.ctaTitle}>
                Ready to turn your site into a conversion machine?
              </h3>
              <p className={styles.ctaSub}>
                Get your free audit today. No commitment, real insights.
              </p>
            </div>
            <a
              href="#contact"
              className="btn btn-lime btn-lg"
              id="footer-cta"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            >
              Claim Your Free Audit
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand Col */}
            <div className={styles.brandCol}>
              <Link href="/" className={styles.logo}>
                <div className={styles.logoIcon}>
                  <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                    <path d="M14 2C14 2 6 8 6 16C6 20.4183 9.58172 24 14 24C18.4183 24 22 20.4183 22 16C22 8 14 2 14 2Z" fill="url(#fLogoGrad)" />
                    <path d="M14 10C14 10 10 13 10 17C10 19.2091 11.7909 21 14 21C16.2091 21 18 19.2091 18 17C18 13 14 10 14 10Z" fill="#0A0E0D" fillOpacity="0.6" />
                    <defs>
                      <linearGradient id="fLogoGrad" x1="6" y1="2" x2="22" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00E5A8"/>
                        <stop offset="1" stopColor="#C6F135"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className={styles.logoText}>Lotus<span className={styles.logoDot}>Digital</span></span>
              </Link>
              <p className={styles.tagline}>
                We design digital experiences that guide visitors into becoming paying
                customers — using strategy, clarity, and conversion-focused design.
              </p>
              <div className={styles.socials}>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className={styles.social}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group} className={styles.linkCol}>
                <h5 className={styles.colTitle}>{group}</h5>
                <ul className={styles.linkList}>
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className={styles.footerLink}
                        onClick={(e) => e.preventDefault()}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter */}
            <div className={styles.linkCol}>
              <h5 className={styles.colTitle}>Stay in the Loop</h5>
              <p className={styles.newsletterDesc}>
                Weekly insights on conversion design, CRO tactics, and growth
                strategy for service businesses.
              </p>
              <div className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  id="footer-newsletter-email"
                  aria-label="Newsletter email"
                  style={{ borderRadius: "var(--radius-md) var(--radius-md) 0 0", marginBottom: "0" }}
                />
                <button className={styles.subscribeBtn} id="footer-newsletter-btn">
                  Subscribe
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className={styles.bottom}>
            <p className={styles.copy}>
              © {year} Lotus Digital. All rights reserved.
            </p>
            <div className={styles.bottomLinks}>
              <a href="#" className={styles.bottomLink} onClick={(e) => e.preventDefault()}>Privacy Policy</a>
              <a href="#" className={styles.bottomLink} onClick={(e) => e.preventDefault()}>Terms of Service</a>
              <a href="#" className={styles.bottomLink} onClick={(e) => e.preventDefault()}>Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
