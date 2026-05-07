import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/projects";
import type { Project } from "../data/projects";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass glass-hover rounded-xl overflow-hidden"
    >
      {/* Header image placeholder */}
      <div className="h-48 bg-secondary flex items-center justify-center border-b border-border">
        <span className="text-muted-foreground text-sm font-mono">Add Project Screenshot</span>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((t) => (
            <span key={t} className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">{t}</span>
          ))}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs font-mono text-primary hover:text-accent transition-colors"
        >
          {expanded ? "▲ Collapse Details" : "▼ View Case Study"}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-4 border-t border-border pt-4">
                <div>
                  <h4 className="text-xs font-bold text-primary mb-1">Methodology</h4>
                  <p className="text-xs text-muted-foreground">{project.methodology}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-primary mb-1">Tools Used</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-primary mb-1">Findings</h4>
                  <p className="text-xs text-muted-foreground">{project.findings}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-primary mb-1">Remediation</h4>
                  <p className="text-xs text-muted-foreground">{project.remediation}</p>
                </div>

                {/* Screenshot placeholders */}
                <div>
                  <h4 className="text-xs font-bold text-primary mb-2">Evidence & Screenshots</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {project.screenshots.map((ss) => (
                      <div key={ss.label} className="rounded-lg bg-secondary border border-border p-4 flex flex-col items-center justify-center min-h-[100px]">
                        {ss.src ? (
                          <img src={ss.src} alt={ss.label} className="rounded max-w-full" />
                        ) : (
                          <span className="text-[10px] text-muted-foreground font-mono text-center">{ss.label}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// GitHub repos (kept from original)
const githubRepos = [
  { name: "Phishing_Email_Analysis", desc: "Email header analysis & phishing detection toolkit", tags: ["Python", "Email Security"], github: "https://github.com/Prathmesh318/Phishing_Email_Analysis" },
  { name: "Nmap_Port_Scan", desc: "Automated port scanning & service enumeration", tags: ["Python", "Nmap"], github: "https://github.com/Prathmesh318/Nmap_Port_Scan" },
  { name: "Vuln_Scan", desc: "Web vulnerability scanner for common flaws", tags: ["Python", "OWASP"], github: "https://github.com/Prathmesh318/Vuln_Scan" },
  { name: "Firewall", desc: "Network firewall implementation", tags: ["Networking", "Security"], github: "https://github.com/Prathmesh318/Firewall" },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2"><span className="gradient-text">Projects & Case Studies</span></h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* GitHub Repos */}
        <h3 className="text-lg font-semibold text-foreground mb-6">Security Research & Scripts</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {githubRepos.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass glass-hover rounded-xl p-5 block group"
            >
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span className="text-sm font-mono font-semibold text-foreground group-hover:text-primary transition-colors">{p.name}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary text-secondary-foreground">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/Prathmesh318"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg glass glass-hover font-medium text-primary text-sm hover:glow-cyber transition-all duration-300"
          >
            View All GitHub Projects →
          </a>
        </div>
      </div>
    </section>
  );
}
