import { motion } from "framer-motion";

const certs = [
  { name: "Certified Penetration Tester (CPT)", org: "RedTeam Academy, Chennai", year: "2025", icon: "🏴" },
  { name: "Pre-Security Path (New)", org: "TryHackMe", year: "2026", icon: "🔐" },
  { name: "AWS Cloud Security Intro", org: "TryHackMe", year: "2025", icon: "☁️" },
  { name: "SentinelOne Admin & Pre-Sales Expert", org: "Credly Badge", year: "2025", icon: "🛡️" },
  { name: "Google Cybersecurity Professional", org: "Coursera", year: "2024", icon: "🎓" },
  { name: "Cybersecurity Essentials", org: "IBM (Coursera)", year: "2023", icon: "📘" },
];

const pursuing = ["CEH Practical", "CPENT"];

export default function CertificationsSection() {
  return (
    <section id="certs" className="relative z-10">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2"><span className="gradient-text">Certifications</span></h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass glass-hover rounded-xl p-5 flex items-start gap-4"
            >
              <span className="text-2xl">{c.icon}</span>
              <div>
                <h3 className="text-sm font-semibold text-foreground">{c.name}</h3>
                <p className="text-xs text-muted-foreground">{c.org}</p>
                <span className="text-[10px] font-mono text-primary">{c.year}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 glass rounded-xl p-5"
        >
          <h3 className="text-sm font-semibold text-accent mb-3">🎯 Currently Pursuing</h3>
          <div className="flex gap-3">
            {pursuing.map((p) => (
              <span key={p} className="text-xs font-mono px-3 py-1.5 rounded-lg border border-accent text-accent">{p}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
