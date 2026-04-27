"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className="container">
        <div className={styles.inner}>
          {/* Left Info */}
          <div className={styles.info}>
            <div className="badge badge-green">Get in Touch</div>
            <h2 className={styles.heading}>
              Let&apos;s Build Something <br />
              <span className="text-gradient">That Works for You</span>
            </h2>
            <p className={styles.desc}>
              Start with a free website audit. We&apos;ll review your current site and give you
              honest, actionable feedback — no commitment required.
            </p>

            <div className={styles.contactDetails}>
              <a href="mailto:hello@lotusdigital.co" className={styles.detailRow} id="contact-email">
                <div className={styles.detailIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#BFF747" strokeWidth="1.8"/>
                    <path d="M22 6l-10 7L2 6" stroke="#BFF747" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <span className={styles.detailLabel}>Email</span>
                  <span className={styles.detailValue}>hello@lotusdigital.co</span>
                </div>
              </a>

              <div className={styles.detailRow}>
                <div className={styles.detailIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="10" r="3" stroke="#BFF747" strokeWidth="1.8"/>
                    <path d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8z" stroke="#BFF747" strokeWidth="1.8"/>
                  </svg>
                </div>
                <div>
                  <span className={styles.detailLabel}>Based in</span>
                  <span className={styles.detailValue}>United Kingdom</span>
                </div>
              </div>

              <div className={styles.detailRow}>
                <div className={styles.detailIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#BFF747" strokeWidth="1.8"/>
                    <path d="M12 6v6l4 2" stroke="#BFF747" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <span className={styles.detailLabel}>Response Time</span>
                  <span className={styles.detailValue}>Within 1 business day</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className={styles.formWrap}>
            {submitted ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="15" stroke="#BFF747" strokeWidth="2"/>
                    <path d="M9 16l5 5 9-9" stroke="#BFF747" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Message Received!</h3>
                <p>We&apos;ll get back to you within one business day. Check your inbox — we&apos;ll also send a confirmation email.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} id="contact-form" noValidate>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label htmlFor="contact-name" className={styles.label}>Your Name *</label>
                    <input id="contact-name" name="name" type="text" placeholder="John Smith" required />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="contact-email" className={styles.label}>Email Address *</label>
                    <input id="contact-email" name="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-business" className={styles.label}>Business Type</label>
                  <select id="contact-business" name="business">
                    <option value="">Select your business type...</option>
                    <option value="restaurant">Restaurant / Café</option>
                    <option value="gym">Gym / Fitness Studio</option>
                    <option value="realestate">Real Estate</option>
                    <option value="cleaning">Cleaning / Home Services</option>
                    <option value="other">Other Service Business</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-website" className={styles.label}>Current Website URL</label>
                  <input id="contact-website" name="website" type="url" placeholder="https://yourwebsite.com (leave blank if none)" />
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-message" className={styles.label}>What do you need help with? *</label>
                  <textarea id="contact-message" name="message" rows={4} placeholder="Tell us about your business and what you're hoping to achieve..." required />
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary btn-lg ${styles.submitBtn}`}
                  id="contact-submit"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className={styles.spinner} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Request Free Audit
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>

                <p className={styles.formNote}>
                  By submitting, you agree to be contacted regarding your enquiry.
                  No spam — we hate it too.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
