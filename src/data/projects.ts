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
    id: "active-directory-lab",
    title: "Active Directory Attack Lab",
    description: "Built and attacked a multi-tier Active Directory environment simulating enterprise network compromise from initial foothold to domain admin.",
    tags: ["Active Directory", "Privilege Escalation", "Lateral Movement", "Kerberos"],
    methodology: "Deployed a segmented AD lab with Domain Controller, workstations, and services. Performed AS-REP roasting, Kerberoasting, Pass-the-Hash, and DCSync attacks.",
    tools: ["Impacket", "BloodHound", "Mimikatz", "CrackMapExec", "Rubeus"],
    findings: "Add findings from your AD lab exploitation here.",
    remediation: "Add hardening recommendations and detection strategies.",
    screenshots: [
      { label: "Add Architecture Diagram", src: "" },
      { label: "Add BloodHound Graph", src: "" },
      { label: "Add Attack Path Screenshot", src: "" },
    ],
  },
  {
    id: "soc-detection-lab",
    title: "SOC Detection Engineering Lab",
    description: "Purple team lab focused on creating detection rules, analyzing telemetry, and building alerting pipelines for common attack techniques.",
    tags: ["Detection Engineering", "SIEM", "MITRE ATT&CK", "Purple Team"],
    methodology: "Mapped attack techniques to MITRE ATT&CK framework, simulated adversary behavior, and built custom detection rules and dashboards.",
    tools: ["Splunk", "Elastic SIEM", "Sigma Rules", "Atomic Red Team", "Sysmon"],
    findings: "Add detection coverage results and gap analysis here.",
    remediation: "Add detection rules created and tuning recommendations.",
    screenshots: [
      { label: "Add SIEM Dashboard Screenshot", src: "" },
      { label: "Add Detection Rule Output", src: "" },
      { label: "Add Alert Pipeline Diagram", src: "" },
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
