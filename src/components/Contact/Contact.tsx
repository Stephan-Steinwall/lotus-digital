"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className={styles.bgDecor} aria-hidden="true" />
      <div className="container">
        <div className={styles.layout}>
          {/* Left Info */}
          <div className={styles.info}>
            <div className="badge badge-green badge-dot">Get in Touch</div>
            <h2>
              Let&apos;s Talk About{" "}
              <span className="text-gradient">Your Website</span>
            </h2>
            <p>
              Fill out the form and we&apos;ll get back to you within one business
              day. No sales pitch — just an honest conversation about your
              business and how we can help.
            </p>

            <div className={styles.guaranteeBox}>
              <div className={styles.guaranteeIcon}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 2l2 7h7l-5.5 4 2 7L11 16l-5.5 4 2-7L2 9h7l2-7z" fill="var(--lotus-lime)" />
                </svg>
              </div>
              <div>
                <div className={styles.guaranteeTitle}>Free Website Audit</div>
                <p className={styles.guaranteeDesc}>
                  Every enquiry starts with a free audit of your current site. No
                  obligation, no pitch — just real, actionable insights.
                </p>
              </div>
            </div>

            <div className={styles.contactDetails}>
              <div className={styles.detail}>
                <div className={styles.detailIcon}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4zm7 2L5 9.5 9 12l5-3.5-1-3.5z" stroke="var(--lotus-green)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>hello@lotusdigital.co</span>
              </div>
              <div className={styles.detail}>
                <div className={styles.detailIcon}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="8" r="2.5" stroke="var(--lotus-green)" strokeWidth="1.3"/>
                    <path d="M9 1a7 7 0 0 1 7 7c0 5-7 10-7 10S2 13 2 8a7 7 0 0 1 7-7z" stroke="var(--lotus-green)" strokeWidth="1.3"/>
                  </svg>
                </div>
                <span>Remote — serving clients worldwide</span>
              </div>
              <div className={styles.detail}>
                <div className={styles.detailIcon}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M15.5 12.5c-.3-.6-1.8-1.4-2.5-1.7-.5-.2-.7-.2-1 .2-.2.3-.7.9-.9 1.1-.2.2-.4.2-.7.1-.8-.4-2.1-1.3-2.9-2.1-.8-.8-1.6-2-2-2.7-.1-.3 0-.5.1-.7.2-.2.5-.5.7-.8.2-.3.2-.5.1-.8C6.1 4.3 5.2 2.8 4.7 2.5c-.3-.2-.6-.2-.9 0L3 3.3c-.7.7-.9 1.6-.5 2.5 1.1 2.7 3.5 5.5 6.2 6.6.9.4 1.8.2 2.5-.5l.7-.7c.3-.3.3-.7 0-.9l-.4-.3z" stroke="var(--lotus-green)" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                </div>
                <span>WhatsApp available after inquiry</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={styles.formWrap}>
            {submitted ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="17" stroke="var(--lotus-green)" strokeWidth="2"/>
                    <path d="M10 18l5 5 11-11" stroke="var(--lotus-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>We&apos;ve Got Your Message!</h3>
                <p>
                  Expect a reply from us within one business day. We&apos;ll start by
                  reviewing your current website and come back to you with
                  honest feedback.
                </p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-name" className={styles.label}>Your Name *</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-email" className={styles.label}>Email Address *</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-company" className={styles.label}>Business Name</label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your business name"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-service" className={styles.label}>Service Interested In</label>
                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service...</option>
                      <option value="website-design">Website Design & Redesign</option>
                      <option value="landing-page">Landing Page</option>
                      <option value="copywriting">Conversion Copywriting</option>
                      <option value="speed-audit">Website Speed & Performance</option>
                      <option value="brand-identity">Brand Identity Basics</option>
                      <option value="ai-automations">AI Automations (Waitlist)</option>
                      <option value="audit-only">Just the Free Audit</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="contact-message" className={styles.label}>Tell Us About Your Business *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="What does your business do? What are you looking to improve with your website? Any specific goals or challenges?"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary btn-lg ${styles.submitBtn}`}
                  id="contact-submit"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <div className={styles.spinner} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send My Message
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>

                <p className={styles.formNote}>
                  🔒 We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
