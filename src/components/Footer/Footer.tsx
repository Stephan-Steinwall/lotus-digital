"use client";

import styles from "./Footer.module.css";

const footerLinks = {
  Services: [
    { label: "Conversion Website Design", href: "#services" },
    { label: "Landing Page Design", href: "#services" },
    { label: "Website Redesign", href: "#services" },
    { label: "Copywriting", href: "#services" },
    { label: "SEO & Speed", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Work", href: "#work" },
    { label: "Our Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topInner}>
            <div className={styles.brand}>
              {/* Logo */}
              <a href="#hero" className={styles.logo} onClick={(e) => scrollTo(e, "#hero")} id="footer-logo">
                <div className={styles.logoMark}>
                  <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="13" stroke="#BFF747" strokeWidth="2"/>
                    <path d="M8 14c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6" stroke="#BFF747" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="14" cy="14" r="2.5" fill="#BFF747"/>
                  </svg>
                </div>
                <span className={styles.logoText}>Lotus <span className={styles.logoAccent}>Digital</span></span>
              </a>
              <p className={styles.brandDesc}>
                A founder-led design studio building conversion-focused websites
                for service businesses across the UK.
              </p>
              <a href="mailto:hello@lotusdigital.co" className={styles.emailLink} id="footer-email">
                hello@lotusdigital.co
              </a>
            </div>

            <div className={styles.linkCols}>
              {Object.entries(footerLinks).map(([col, links]) => (
                <div key={col} className={styles.linkCol}>
                  <h4 className={styles.colTitle}>{col}</h4>
                  <ul className={styles.linkList}>
                    {links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className={styles.footerLink}
                          onClick={(e) => scrollTo(e, link.href)}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* CTA Card */}
            <div className={styles.ctaCard}>
              <div className={styles.ctaGlow} />
              <h4 className={styles.ctaTitle}>Ready to grow your business?</h4>
              <p className={styles.ctaText}>Start with a free website audit. No commitment.</p>
              <a
                href="#contact"
                className="btn btn-primary"
                id="footer-cta"
                onClick={(e) => scrollTo(e, "#contact")}
              >
                Get Free Audit
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Lotus Digital. All rights reserved.
            </p>
            <div className={styles.bottomLinks}>
              <a href="#" className={styles.bottomLink}>Privacy Policy</a>
              <span className={styles.dot}>·</span>
              <a href="#" className={styles.bottomLink}>Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
