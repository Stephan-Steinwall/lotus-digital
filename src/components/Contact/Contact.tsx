"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
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
              Let&apos;s Build Something That{" "}
              <span className="text-gradient">Actually Converts</span>
            </h2>
            <p>
              Fill out the form and we&apos;ll get back to you within one business
              day with a plan — not a sales pitch.
            </p>

            <div className={styles.guaranteeBox}>
              <div className={styles.guaranteeIcon}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 2l2 7h7l-5.5 4 2 7L11 16l-5.5 4 2-7L2 9h7l2-7z" fill="var(--lotus-lime)" />
                </svg>
              </div>
              <div>
                <div className={styles.guaranteeTitle}>Free Conversion Audit</div>
                <p className={styles.guaranteeDesc}>
                  Every project starts with a free audit of your current site. No
                  obligation, no pitch — just real insights.
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
                    <path d="M3 4.5A1.5 1.5 0 0 1 4.5 3h.879a1.5 1.5 0 0 1 1.415 1l.894 2.683a1.5 1.5 0 0 1-.424 1.578L6.5 9.5a10.07 10.07 0 0 0 2 2l1.239-.764a1.5 1.5 0 0 1 1.578-.424L14 11.206A1.5 1.5 0 0 1 15 12.621V13.5A1.5 1.5 0 0 1 13.5 15C7.701 15 3 10.299 3 4.5z" stroke="var(--lotus-green)" strokeWidth="1.3"/>
                  </svg>
                </div>
                <span>+1 (555) 012-3456</span>
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
                  Expect a reply from us within one business day. In the meantime,
                  feel free to browse our case studies.
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
                      placeholder="James Harrington"
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
                      placeholder="james@example.com"
                      required
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-company" className={styles.label}>Company / Business</label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Harrington Plumbing Co."
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
                      <option value="conversion-design">Conversion-First Web Design</option>
                      <option value="brand-strategy">Brand Strategy & Identity</option>
                      <option value="cro">Conversion Rate Optimization</option>
                      <option value="copywriting">Conversion Copywriting</option>
                      <option value="speed-audit">Speed & Performance Audit</option>
                      <option value="funnel">Sales Funnel Design</option>
                      <option value="audit-only">Just the Free Audit</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="contact-budget" className={styles.label}>Approximate Budget</label>
                  <select
                    id="contact-budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select budget range...</option>
                    <option value="under-3k">Under $3,000</option>
                    <option value="3k-7k">$3,000 – $7,000</option>
                    <option value="7k-15k">$7,000 – $15,000</option>
                    <option value="15k-plus">$15,000+</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="contact-message" className={styles.label}>Tell Us About Your Business *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="What does your business do? What's your biggest challenge with your current website? What does success look like for you?"
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
