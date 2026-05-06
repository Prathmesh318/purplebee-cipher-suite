import { motion } from "framer-motion";

const projects = [
  {
    name: "Phishing_Email_Analysis",
    desc: "Email header analysis & phishing detection toolkit",
    tags: ["Python", "Email Security", "Threat Intel"],
    github: "https://github.com/Prathmesh318/Phishing_Email_Analysis",
  },
  {
    name: "Nmap_Port_Scan",
    desc: "Automated port scanning & service enumeration tool",
    tags: ["Python", "Nmap", "Recon"],
    github: "https://github.com/Prathmesh318/Nmap_Port_Scan",
  },
  {
    name: "Vuln_Scan",
    desc: "Web vulnerability scanner for common security flaws",
    tags: ["Python", "OWASP", "Automation"],
    github: "https://github.com/Prathmesh318/Vuln_Scan",
  },
  {
    name: "Firewall",
    desc: "Network firewall implementation and rule management",
    tags: ["Networking", "Security", "Firewall"],
    github: "https://github.com/Prathmesh318/Firewall",
  },
  {
    name: "Prathmesh318.github.io",
    desc: "Cybersecurity portfolio website",
    tags: ["HTML", "Portfolio", "Web"],
    github: "https://github.com/Prathmesh318/Prathmesh318.github.io",
  },
];

const labs = [
  { name: "TryHackMe Labs", stat: "50+ rooms completed", detail: "Top 8% global rank, offensive security focus" },
  { name: "Attack Kill-Chain", stat: "Full simulation", detail: "Recon → Access → Exploit → Post-Exploit workflows" },
  { name: "Virtual Lab Env", stat: "Custom built", detail: "Segmented subnets, firewall rules, Wireshark analysis" },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2"><span className="gradient-text">Projects & Labs</span></h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <h3 className="text-lg font-semibold text-foreground mb-6">GitHub Repositories</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {projects.map((p, i) => (
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
              <p className="text-xs text-muted-foreground mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary text-secondary-foreground">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-6">Security Labs</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {labs.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-5"
            >
              <h4 className="text-sm font-bold text-foreground">{l.name}</h4>
              <p className="text-lg font-bold text-primary mt-1">{l.stat}</p>
              <p className="text-xs text-muted-foreground mt-1">{l.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
