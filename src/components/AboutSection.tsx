import { motion } from "framer-motion";
import profileCasual from "../assets/profile-casual.png";

const stats = [
  { value: "50+", label: "Security Labs Completed" },
  { value: "Top 8%", label: "TryHackMe Global" },
  { value: "10+", label: "Client Deployments" },
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

          <div className="grid md:grid-cols-3 gap-12">
            {/* Text */}
            <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm <span className="text-foreground font-semibold">Prathmesh M</span>, a cybersecurity professional with 1+ year of hands-on experience across web application VAPT, threat analysis, and enterprise security operations.
              </p>
              <p>
                My day-to-day involves performing web application security assessments, conducting vulnerability validation and reporting aligned with OWASP Top 10 and CVSS severity scoring, and working with enterprise security platforms.
              </p>
              <p>
                I've gained hands-on experience with Burp Suite, Nmap, Metasploit, and manual testing methodologies. On the enterprise side, I've worked on deploying and supporting EDR/XDR, DLP, and WAF platforms across multiple client environments.
              </p>
              <p>
                Currently pursuing CEH Practical and CPENT certifications while deepening expertise in AppSec and detection engineering.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="glass glass-hover rounded-xl p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-primary text-glow-cyber">{s.value}</div>
                    <div className="text-[10px] text-muted-foreground mt-1">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Secondary image */}
            <div className="hidden md:flex justify-center items-start">
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 blur-md" />
                <img
                  src={profileCasual}
                  alt="Prathmesh M working on security research"
                  className="relative w-full max-w-[260px] rounded-2xl object-cover aspect-[3/4] border border-cyber-border"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
