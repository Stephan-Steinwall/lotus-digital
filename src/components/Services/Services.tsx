"use client";

import styles from "./Services.module.css";

const services = [
  {
    id: "conversion-design",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 22V14a10 10 0 0 1 20 0v8" stroke="var(--lotus-green)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4 18h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4zm20 0h-3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4z" stroke="var(--lotus-green)" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    label: "Most Popular",
    title: "Conversion-First Web Design",
    description:
      "We craft every pixel with one goal: turning browsers into buyers. Psychology-backed layouts, strategic CTAs, and UX that guides your visitors to act.",
    features: ["Landing pages", "Sales funnels", "Homepage redesign", "A/B testing"],
    accent: "green",
  },
  {
    id: "brand-strategy",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="var(--lotus-lime)" strokeWidth="2"/>
        <path d="M9 14l3 3 7-7" stroke="var(--lotus-lime)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Brand Building",
    title: "Brand Strategy & Identity",
    description:
      "A brand is more than a logo — it's your promise. We build visual identities and messaging that resonate, differentiate, and stick in your customers' minds.",
    features: ["Logo & visual identity", "Brand messaging", "Style guides", "Positioning"],
    accent: "lime",
  },
  {
    id: "cro",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 20l5-7 4 4 4-8 4 3" stroke="var(--lotus-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="22" cy="10" r="2" fill="var(--lotus-lime)" />
      </svg>
    ),
    label: "Growth",
    title: "Conversion Rate Optimization",
    description:
      "Your traffic is already there. We analyze, test, and iterate to squeeze every drop of value from your existing visitors — no extra ad spend required.",
    features: ["Heatmap analysis", "User testing", "Copy optimization", "CRO audits"],
    accent: "green",
  },
  {
    id: "copywriting",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="16" rx="3" stroke="var(--lotus-lime)" strokeWidth="2"/>
        <path d="M9 11h10M9 15h7" stroke="var(--lotus-lime)" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    label: "Words That Convert",
    title: "Conversion Copywriting",
    description:
      "Design without words is just decoration. We write sharp, persuasive copy that speaks to your ideal customer's desires and drives them to take action.",
    features: ["Homepage copy", "Sales page writing", "Email sequences", "Ad copy"],
    accent: "lime",
  },
  {
    id: "speed",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l-2 8h8l-8 12" stroke="var(--lotus-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Performance",
    title: "Speed & Performance Audit",
    description:
      "Every second of load time costs you conversions. We audit, optimize, and supercharge your site's Core Web Vitals for blazing fast load times.",
    features: ["Core Web Vitals", "Load time optimization", "SEO technical audit", "Image optimization"],
    accent: "green",
  },
  {
    id: "funnel",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 6h16l-6 8v7l-4-2v-5L6 6z" stroke="var(--lotus-lime)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "End-to-End",
    title: "Sales Funnel Design",
    description:
      "From the first click to the final purchase, we design complete funnels that nurture, persuade, and convert at every stage of the buyer journey.",
    features: ["Lead capture pages", "Upsell sequences", "Thank-you pages", "Retargeting assets"],
    accent: "lime",
  },
];

export default function Services() {
  return (
    <section className={`section ${styles.services}`} id="services">
      <div className="container">
        <div className={`section-header center ${styles.header}`}>
          <div className="badge badge-green badge-dot">What We Do</div>
          <h2>
            Services Built Around{" "}
            <span className="text-gradient">One Outcome</span>
          </h2>
          <p>
            Every service we offer traces back to a single north star: turning
            your website into a system that consistently generates customers.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`${styles.card} ${styles[`accent-${service.accent}`]}`}
              style={{ animationDelay: `${i * 0.08}s` }}
              id={`service-${service.id}`}
            >
              <div className={styles.cardHeader}>
                <div className={`${styles.iconWrap} ${styles[`icon-${service.accent}`]}`}>
                  {service.icon}
                </div>
                <span className={`badge ${service.accent === "green" ? "badge-green" : "badge-lime"}`}>
                  {service.label}
                </span>
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <ul className={styles.featureList}>
                {service.features.map((f) => (
                  <li key={f} className={styles.featureItem}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7l3.5 3.5 6.5-7" stroke={service.accent === "green" ? "var(--lotus-green)" : "var(--lotus-lime)"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${service.accent === "green" ? "btn-ghost" : "btn-outline"} btn-sm ${styles.cardBtn}`}
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>
                Learn More
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
