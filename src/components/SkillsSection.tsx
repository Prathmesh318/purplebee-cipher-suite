import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Offensive Security",
    icon: "🎯",
    skills: ["Burp Suite", "Nmap", "Metasploit", "SQLmap", "Gobuster", "Hydra", "Nessus", "Wireshark", "OWASP Top 10", "DAST/SAST"],
  },
  {
    title: "Attack Techniques",
    icon: "⚡",
    skills: ["XSS", "SQL Injection", "IDOR", "SSRF", "Path Traversal", "Command Injection", "Auth Bypass", "Privilege Escalation", "Session Hijacking"],
  },
  {
    title: "Enterprise Security",
    icon: "🛡️",
    skills: ["CrowdStrike Falcon", "SentinelOne", "Cloudflare WAF", "Trellix DLP", "Proofpoint", "Barracuda"],
  },
  {
    title: "Security Frameworks",
    icon: "📋",
    skills: ["MITRE ATT&CK", "OWASP", "NIST CSF", "ISO 27001", "CIS Benchmarks", "PTES", "CVSS v3"],
  },
  {
    title: "Scripting & Systems",
    icon: "💻",
    skills: ["Python", "Bash", "PowerShell", "Kali Linux", "Ubuntu", "Active Directory", "AWS IAM"],
  },
  {
    title: "Networking",
    icon: "🌐",
    skills: ["TCP/IP", "DNS", "HTTP/S", "VLANs", "Firewalls", "VPNs", "IDS/IPS", "Packet Analysis"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative z-10">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2"><span className="gradient-text">Technical Arsenal</span></h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="glass glass-hover rounded-xl p-6"
            >
              <div className="text-2xl mb-3">{cat.icon}</div>
              <h3 className="text-sm font-bold text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span key={s} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
