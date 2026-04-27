"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`} id="navbar">
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#hero" className={styles.logo} onClick={(e) => scrollTo(e, "#hero")} id="navbar-logo">
          <span className={styles.logoMark}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="13" stroke="#BFF747" strokeWidth="2"/>
              <path d="M8 14c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6" stroke="#BFF747" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="14" cy="14" r="2.5" fill="#BFF747"/>
            </svg>
          </span>
          <span className={styles.logoText}>Lotus <span className={styles.logoAccent}>Digital</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className={styles.nav} aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.navLink}
              onClick={(e) => scrollTo(e, link.href)}
              id={`nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className={styles.actions}>
          <a
            href="#contact"
            className={`btn btn-primary btn-sm ${styles.ctaBtn}`}
            id="navbar-cta"
            onClick={(e) => scrollTo(e, "#contact")}
          >
            Get Free Audit
          </a>
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            id="hamburger-btn"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ""}`} aria-hidden={!menuOpen}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.mobileLink}
              onClick={(e) => scrollTo(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ marginTop: "12px", width: "100%", justifyContent: "center" }}
            onClick={(e) => scrollTo(e, "#contact")}
          >
            Get Free Audit
          </a>
        </nav>
      </div>
    </header>
  );
}
