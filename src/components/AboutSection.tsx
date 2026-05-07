import { motion } from "framer-motion";
import profileCasual from "../assets/profile-casual.png";

const stats = [
  { value: "25+", label: "Security Labs Completed" },
  { value: "Top 8%", label: "TryHackMe Global", href: "https://tryhackme.com/p/purplebee" },
  { value: "✓", label: "Enterprise Security Exposure" },
  { value: "✓", label: "Web App VAPT Experience" },
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
                I'm <span className="text-foreground font-semibold">Prathmesh M</span>, a cybersecurity professional focused on web application security, VAPT, and enterprise security operations.
              </p>
              <p>
                My experience includes performing web application security assessments, validating vulnerabilities aligned with OWASP methodologies, supporting enterprise security deployments, and working with security tooling across real-world environments.
              </p>
              <p>
                I've worked hands-on with tools such as Burp Suite, Nmap, Wireshark, Metasploit, and CrowdStrike while also building deeper expertise through labs, security research, and practical learning platforms.
              </p>
              <p>
                Currently focused on advancing practical offensive security skills, improving web application testing methodologies, and preparing for advanced certifications.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                {stats.map((s, i) => {
                  const inner = (
                    <>
                      <div className="text-2xl font-bold text-primary text-glow-cyber">{s.value}</div>
                      <div className="text-[10px] text-muted-foreground mt-1">{s.label}</div>
                    </>
                  );
                  return (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="glass glass-hover rounded-xl p-4 text-center"
                    >
                      {'href' in s && s.href ? (
                        <a href={s.href} target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                          {inner}
                        </a>
                      ) : inner}
                    </motion.div>
                  );
                })}
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
