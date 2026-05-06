import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Security Labs" },
  { value: "Top 8%", label: "TryHackMe" },
  { value: "10+", label: "Enterprise Clients" },
  { value: "7+", label: "Pentests Delivered" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm <span className="text-foreground font-semibold">Prathmesh M</span>, a cybersecurity professional with 1+ year of hands-on experience in Web Application VAPT, threat analysis, and enterprise security deployments.
              </p>
              <p>
                Proficient in identifying, exploiting, and reporting vulnerabilities aligned with OWASP Top 10 and CVSS severity scoring. Skilled in Burp Suite, Nmap, Metasploit, and manual testing methodologies.
              </p>
              <p>
                Additional experience deploying and supporting enterprise EDR/XDR, DLP, and WAF platforms across 10+ client environments. Actively pursuing CEH Practical and CPENT certifications.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="glass glass-hover rounded-xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-primary text-glow-cyber">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-2">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
