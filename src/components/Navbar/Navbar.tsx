"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`} id="navbar">
      <div className="container">
        <nav className={styles.nav}>
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="Lotus Digital Home">
            <div className={styles.logoIcon}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2C14 2 6 8 6 16C6 20.4183 9.58172 24 14 24C18.4183 24 22 20.4183 22 16C22 8 14 2 14 2Z" fill="url(#logoGrad)" />
                <path d="M14 10C14 10 10 13 10 17C10 19.2091 11.7909 21 14 21C16.2091 21 18 19.2091 18 17C18 13 14 10 14 10Z" fill="#0A0E0D" fillOpacity="0.6" />
                <defs>
                  <linearGradient id="logoGrad" x1="6" y1="2" x2="22" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00E5A8" />
                    <stop offset="1" stopColor="#C6F135" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className={styles.logoText}>Lotus<span className={styles.logoDot}>Digital</span></span>
          </Link>

          {/* Desktop Nav */}
          <ul className={styles.navLinks} role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={styles.navLink}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className={styles.headerActions}>
            <a
              href="#contact"
              className="btn btn-primary btn-sm"
              id="navbar-cta"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
            >
              Get Free Audit
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* Hamburger */}
            <button
              className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`} aria-hidden={!menuOpen}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={styles.mobileLink}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center", marginTop: "8px" }}
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
            >
              Get Free Audit
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
