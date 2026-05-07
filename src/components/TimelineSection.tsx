import { motion } from "framer-motion";

const experiences = [
  {
    role: "Pre-Sales Consultant (Trainee) — Cybersecurity",
    company: "Ladera Technology",
    period: "Oct 2025 — Apr 2026",
    highlights: [
      "Supported deployment and configuration of enterprise security solutions across client environments",
      "Worked with CrowdStrike Falcon, SentinelOne, Cloudflare WAF, Proofpoint, and Trellix DLP",
      "Assisted in infrastructure assessments to identify security gaps and recommend solutions",
      "Delivered product walkthroughs, POC sessions, and onboarding support for clients",
      "Handled L1 support tickets, incident triage, and SLA tracking",
    ],
    tags: ["CrowdStrike", "SentinelOne", "Cloudflare", "EDR/XDR", "DLP"],
  },
  {
    role: "VAPT Intern",
    company: "K7 Computing Pvt Ltd",
    period: "Dec 2024 — Jun 2025",
    highlights: [
      "Performed web application penetration tests using Burp Suite and manual testing techniques",
      "Identified and validated vulnerabilities including XSS, IDOR, SQLi, and authentication flaws",
      "Mapped findings to OWASP Top 10 categories and assigned CVSS v3 severity scores",
      "Conducted reconnaissance using Nmap and performed DAST/SAST assessments",
      "Authored professional pentest reports with PoC evidence and remediation guidance",
    ],
    tags: ["Burp Suite", "OWASP Top 10", "DAST", "Nmap", "CVSS"],
  },
  {
    role: "B.Tech Computer Science & Engineering",
    company: "Lovely Professional University",
    period: "Jun 2021 — Jun 2025",
    highlights: ["Percentage: 79.2%"],
    tags: ["CS Fundamentals", "Networking", "Python"],
  },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="relative z-10">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2"><span className="gradient-text">Experience</span></h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative mb-12 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"}`}
            >
              {/* Dot */}
              <div className={`absolute top-6 w-3 h-3 rounded-full bg-primary glow-cyber left-2.5 md:left-auto ${i % 2 === 0 ? "md:-right-1.5" : "md:-left-1.5"}`} />

              <div className="ml-10 md:ml-0 glass glass-hover rounded-xl p-6">
                <span className="text-xs font-mono text-primary">{exp.period}</span>
                <h3 className="text-lg font-bold text-foreground mt-1">{exp.role}</h3>
                <p className="text-sm text-accent mb-3">{exp.company}</p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 text-[8px]">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-border text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
