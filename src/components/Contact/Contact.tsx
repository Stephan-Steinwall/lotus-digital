"use client";

import { useState, useRef } from "react";
import styles from "./Contact.module.css";

/* ── Types ── */
type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  businessName: string;
  businessType: string;
  website: string;
  websiteStatus: string;
  projectType: string;
  message: string;
  company_website_check: string; // honeypot — hidden from users
}

const INITIAL: FormData = {
  name: "",
  email: "",
  businessName: "",
  businessType: "",
  website: "",
  websiteStatus: "",
  projectType: "",
  message: "",
  company_website_check: "",
};

/* ── Component ── */
export default function Contact() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [state, setState] = useState<FormState>("idle");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const formRef = useRef<HTMLFormElement>(null);

  /* ── Handlers ── */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear per-field error on change
    if (fieldErrors[name as keyof FormData]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const errors: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) errors.name = "Please enter your name.";
    if (!form.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) errors.message = "Please describe what you need help with.";
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setState("success");
        setForm(INITIAL);
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  const isLoading = state === "loading";

  /* ── Render ── */
  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className="container">
        <div className={styles.inner}>

          {/* ── Left Info Panel ── */}
          <div className={styles.info}>
            <div className="badge badge-green">Get in Touch</div>
            <h2 className={styles.heading}>
              Let&apos;s Build Something&nbsp;<br />
              <span className="text-gradient">That Works for You</span>
            </h2>
            <p className={styles.desc}>
              Start with a free website audit. We&apos;ll review your current site and
              give you honest, actionable feedback — no commitment required.
            </p>

            <div className={styles.contactDetails}>
              <a
                href="mailto:hello@lotusdigital.co"
                className={styles.detailRow}
                id="contact-email-link"
              >
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

          {/* ── Right Form Panel ── */}
          <div className={styles.formWrap}>

            {/* ── Success State ── */}
            {state === "success" ? (
              <div className={styles.successState} role="status" aria-live="polite">
                <div className={styles.successIcon} aria-hidden="true">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="17" stroke="#BFF747" strokeWidth="2"/>
                    <path d="M10 18l6 6 10-10" stroke="#BFF747" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Request Received!</h3>
                <p>
                  Thanks — your request has been received. We&apos;ll review your
                  details and get back to you soon.
                </p>
                <p className={styles.successSub}>
                  Check your inbox — a confirmation email is on its way.
                </p>
                <button
                  className="btn btn-outline btn-sm"
                  onClick={() => setState("idle")}
                  id="contact-reset"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form
                className={styles.form}
                onSubmit={handleSubmit}
                id="contact-form"
                noValidate
                ref={formRef}
              >
                {/* ── Honeypot (hidden from humans, filled by bots) ── */}
                <div className={styles.honeypot} aria-hidden="true">
                  <label htmlFor="company_website_check">Website</label>
                  <input
                    id="company_website_check"
                    name="company_website_check"
                    type="text"
                    value={form.company_website_check}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* ── Error Banner ── */}
                {state === "error" && (
                  <div className={styles.errorBanner} role="alert" aria-live="assertive">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.4"/>
                      <path d="M8 5v3.5M8 10.5v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                    Something went wrong. Please try again or email us directly at&nbsp;
                    <a href="mailto:hello@lotusdigital.co">hello@lotusdigital.co</a>
                  </div>
                )}

                {/* Row 1 — Name + Email */}
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label htmlFor="contact-name" className={styles.label}>
                      Your Name <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!fieldErrors.name}
                      aria-describedby={fieldErrors.name ? "err-name" : undefined}
                      className={fieldErrors.name ? styles.inputError : ""}
                      disabled={isLoading}
                    />
                    {fieldErrors.name && (
                      <span id="err-name" className={styles.fieldError} role="alert">
                        {fieldErrors.name}
                      </span>
                    )}
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="contact-email-field" className={styles.label}>
                      Email Address <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="contact-email-field"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!fieldErrors.email}
                      aria-describedby={fieldErrors.email ? "err-email" : undefined}
                      className={fieldErrors.email ? styles.inputError : ""}
                      disabled={isLoading}
                    />
                    {fieldErrors.email && (
                      <span id="err-email" className={styles.fieldError} role="alert">
                        {fieldErrors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Row 2 — Business Name + Business Type */}
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label htmlFor="contact-biz-name" className={styles.label}>
                      Business Name
                    </label>
                    <input
                      id="contact-biz-name"
                      name="businessName"
                      type="text"
                      placeholder="Salt & Stone Kitchen"
                      value={form.businessName}
                      onChange={handleChange}
                      disabled={isLoading}
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="contact-biz-type" className={styles.label}>
                      Business Type
                    </label>
                    <select
                      id="contact-biz-type"
                      name="businessType"
                      value={form.businessType}
                      onChange={handleChange}
                      disabled={isLoading}
                    >
                      <option value="">Select type...</option>
                      <option value="Restaurant / Café">Restaurant / Café</option>
                      <option value="Gym / Fitness Studio">Gym / Fitness Studio</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="Cleaning / Home Service">Cleaning / Home Service</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Row 3 — Website URL + Website Status */}
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label htmlFor="contact-website" className={styles.label}>
                      Current Website URL
                    </label>
                    <input
                      id="contact-website"
                      name="website"
                      type="url"
                      placeholder="https://yourwebsite.com"
                      value={form.website}
                      onChange={handleChange}
                      disabled={isLoading}
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="contact-website-status" className={styles.label}>
                      Website Status
                    </label>
                    <select
                      id="contact-website-status"
                      name="websiteStatus"
                      value={form.websiteStatus}
                      onChange={handleChange}
                      disabled={isLoading}
                    >
                      <option value="">Select status...</option>
                      <option value="I have a website">I have a website</option>
                      <option value="I do not have a website">I do not have a website</option>
                      <option value="I am not sure">I am not sure</option>
                    </select>
                  </div>
                </div>

                {/* Project Type */}
                <div className={styles.field}>
                  <label htmlFor="contact-project-type" className={styles.label}>
                    Project Type
                  </label>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    disabled={isLoading}
                  >
                    <option value="">Select project type...</option>
                    <option value="New website">New website</option>
                    <option value="Website redesign">Website redesign</option>
                    <option value="Landing page">Landing page</option>
                    <option value="Website audit">Website audit</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                {/* Message */}
                <div className={styles.field}>
                  <label htmlFor="contact-message" className={styles.label}>
                    What do you need help with? <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your business and what you're hoping to achieve..."
                    value={form.message}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!fieldErrors.message}
                    aria-describedby={fieldErrors.message ? "err-message" : undefined}
                    className={fieldErrors.message ? styles.inputError : ""}
                    disabled={isLoading}
                  />
                  {fieldErrors.message && (
                    <span id="err-message" className={styles.fieldError} role="alert">
                      {fieldErrors.message}
                    </span>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className={`btn btn-primary btn-lg ${styles.submitBtn}`}
                  id="contact-submit"
                  disabled={isLoading}
                  aria-disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className={styles.spinner} aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Request Free Audit
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
