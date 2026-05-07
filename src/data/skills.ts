export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Offensive Security",
    icon: "🎯",
    skills: ["Burp Suite", "Metasploit", "Nmap", "OWASP ZAP", "Wireshark", "SQLmap", "Gobuster", "Hydra", "Nessus", "ffuf"],
  },
  {
    title: "Web Security",
    icon: "🌐",
    skills: ["XSS", "SQL Injection", "SSRF", "IDOR", "Authentication Testing", "OWASP Top 10", "Path Traversal", "Command Injection", "CSRF", "Session Hijacking"],
  },
  {
    title: "Enterprise Security",
    icon: "🛡️",
    skills: ["CrowdStrike Falcon", "SentinelOne", "Cloudflare WAF", "Proofpoint", "Trellix DLP", "Barracuda", "EDR/XDR"],
  },
  {
    title: "Security & Automation",
    icon: "💻",
    skills: ["Python", "Bash", "PowerShell", "Linux", "Git", "API Testing", "Reconnaissance", "HTTP Protocol Analysis"],
  },
];

export default skillCategories;
