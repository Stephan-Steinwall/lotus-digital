"use client";

import styles from "./Work.module.css";

const projects = [
  {
    id: "apex-hvac",
    category: "Conversion Redesign",
    title: "Apex HVAC Services",
    result: "+280% lead gen",
    description: "Complete homepage overhaul for a local HVAC company. Redesigned with clear value props, trust signals, and a dominant CTA above the fold.",
    tags: ["Landing Page", "CRO", "Local Business"],
    metric1: { label: "Conv. Rate", before: "1.2%", after: "4.6%" },
    metric2: { label: "Leads/mo", before: "18", after: "69" },
    color: "green",
  },
  {
    id: "nova-coaching",
    category: "Sales Funnel",
    title: "Nova Business Coaching",
    result: "+520% discovery calls",
    description: "Built a complete sales funnel — from opt-in page to application form — for a high-ticket business coaching offer. Strategy, copy, design, and dev.",
    tags: ["Sales Funnel", "Copywriting", "High-Ticket"],
    metric1: { label: "Page Views → Calls", before: "0.4%", after: "2.5%" },
    metric2: { label: "Revenue Attributed", before: "$0", after: "$380k" },
    color: "lime",
  },
  {
    id: "meridian-law",
    category: "Brand + Web",
    title: "Meridian Law Group",
    result: "+195% qualified leads",
    description: "Repositioned a law firm's brand and rebuilt their site to attract higher-value cases. New messaging, visual identity, and conversion-optimized service pages.",
    tags: ["Brand Identity", "Web Design", "Professional Services"],
    metric1: { label: "Lead Quality Score", before: "3.1", after: "7.8" },
    metric2: { label: "Inquiry Value", before: "$2.1k", after: "$8.4k" },
    color: "green",
  },
  {
    id: "brightpath",
    category: "E-Commerce CRO",
    title: "BrightPath Supplements",
    result: "+88% add-to-cart rate",
    description: "CRO audit and redesign of product detail pages and checkout flow for a health supplement brand. Removed friction, added social proof, optimized the flow.",
    tags: ["E-Commerce", "CRO", "Product Pages"],
    metric1: { label: "Cart Abandonment", before: "78%", after: "51%" },
    metric2: { label: "ROAS", before: "1.4x", after: "3.2x" },
    color: "lime",
  },
];

export default function Work() {
  return (
    <section className={`section ${styles.work}`} id="work">
      <div className="container">
        <div className={`section-header center ${styles.header}`}>
          <div className="badge badge-green">Case Studies</div>
          <h2>
            Real Businesses, <span className="text-gradient">Real Results</span>
          </h2>
          <p>
            We don&apos;t just promise conversions — we deliver them. Here&apos;s what
            happened when real clients trusted us with their growth.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`${styles.card} ${styles[`card-${project.color}`]}`}
              id={`work-${project.id}`}
            >
              {/* Visual Placeholder */}
              <div className={`${styles.cardVisual} ${styles[`visual-${project.color}`]}`}>
                <div className={styles.visualInner}>
                  <div className={styles.visualBrowser}>
                    <div className={styles.vbBar}>
                      <span /><span /><span />
                    </div>
                    <div className={styles.vbBody}>
                      <div className={styles.vbLine} style={{ width: "60%" }} />
                      <div className={styles.vbLine} style={{ width: "80%" }} />
                      <div className={styles.vbLine} style={{ width: "45%" }} />
                      <div className={styles.vbBtn} />
                    </div>
                  </div>
                  <div className={styles.resultTag}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 10l3-4 3 2 3-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {project.result}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={styles.cardContent}>
                <span className={`badge ${project.color === "green" ? "badge-green" : "badge-lime"}`}>
                  {project.category}
                </span>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>

                {/* Metrics */}
                <div className={styles.metrics}>
                  <div className={styles.metric}>
                    <div className={styles.metricLabel}>{project.metric1.label}</div>
                    <div className={styles.metricRow}>
                      <span className={styles.metricBefore}>{project.metric1.before}</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className={`${styles.metricAfter} ${project.color === "green" ? styles.afterGreen : styles.afterLime}`}>
                        {project.metric1.after}
                      </span>
                    </div>
                  </div>
                  <div className={styles.metric}>
                    <div className={styles.metricLabel}>{project.metric2.label}</div>
                    <div className={styles.metricRow}>
                      <span className={styles.metricBefore}>{project.metric2.before}</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className={`${styles.metricAfter} ${project.color === "green" ? styles.afterGreen : styles.afterLime}`}>
                        {project.metric2.after}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className={styles.tags}>
                  {project.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottomCta}>
          <p>Want to see more? We have 100+ successful projects under our belt.</p>
          <a
            href="#contact"
            className="btn btn-primary"
            id="work-cta"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
