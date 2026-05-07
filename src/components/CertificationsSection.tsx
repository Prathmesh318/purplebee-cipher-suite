import { motion } from "framer-motion";
import certifications from "../data/certifications";

export default function CertificationsSection() {
  const earned = certifications.filter((c) => c.status === "earned");
  const upcoming = certifications.filter((c) => c.status !== "earned");

  return (
    <section id="certs" className="relative z-10">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2"><span className="gradient-text">Certifications</span></h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {earned.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass glass-hover rounded-xl p-5 flex items-start gap-4 group"
            >
              <span className="text-2xl">{c.icon}</span>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-foreground">{c.name}</h3>
                <p className="text-xs text-muted-foreground">{c.org}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] font-mono text-primary">{c.year}</span>
                  {c.credentialUrl && (
                    <a href={c.credentialUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono text-accent hover:underline">Verify →</a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {upcoming.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 glass rounded-xl p-5"
          >
            <h3 className="text-sm font-semibold text-accent mb-3">🎯 In Progress & Planned</h3>
            <div className="flex flex-wrap gap-3">
              {upcoming.map((c) => (
                <div key={c.name} className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-lg border border-accent/50 text-accent">
                  <span>{c.icon}</span>
                  <span>{c.name}</span>
                  <span className="text-[10px] text-muted-foreground">({c.status === "in-progress" ? "In Progress" : "Planned"})</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
