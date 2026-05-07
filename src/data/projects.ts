export interface ProjectScreenshot {
  label: string;
  src: string; // path to image, empty = placeholder
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  methodology: string;
  tools: string[];
  findings: string;
  remediation: string;
  screenshots: ProjectScreenshot[];
}

const projects: Project[] = [
  {
    id: "web-app-pentest",
    title: "Web Application Penetration Test",
    description: "Full-scope VAPT engagement on a production web application covering OWASP Top 10 vulnerabilities, authentication bypass, and business logic flaws.",
    tags: ["VAPT", "OWASP Top 10", "Burp Suite", "Manual Testing"],
    methodology: "Performed reconnaissance, endpoint enumeration, manual and automated testing for XSS, SQLi, IDOR, SSRF, and authentication flaws. Followed PTES methodology.",
    tools: ["Burp Suite Professional", "Nmap", "SQLmap", "Gobuster", "ffuf"],
    findings: "Add your vulnerability findings here — describe severity, CVSS score, and impact.",
    remediation: "Add remediation steps provided to the client and validation results.",
    screenshots: [
      { label: "Add Burp Suite Screenshot", src: "" },
      { label: "Add Recon Output", src: "" },
      { label: "Add Vulnerability Evidence", src: "" },
    ],
  },
  {
    id: "recon-automation",
    title: "Recon Automation Toolkit",
    description: "Custom Python-based reconnaissance automation framework for bug bounty and VAPT engagements combining subdomain enumeration, port scanning, and content discovery.",
    tags: ["Python", "Automation", "Recon", "Bug Bounty"],
    methodology: "Built modular scripts for automated subdomain discovery, port scanning, technology fingerprinting, and vulnerability correlation.",
    tools: ["Python", "Nmap", "Amass", "httpx", "Nuclei"],
    findings: "Add sample recon output and discovered assets here.",
    remediation: "Add workflow improvements and integration notes.",
    screenshots: [
      { label: "Add Tool Output Screenshot", src: "" },
      { label: "Add Workflow Diagram", src: "" },
    ],
  },
];

export default projects;
