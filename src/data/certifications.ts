export interface Certification {
  name: string;
  org: string;
  year: string;
  icon: string;
  status: "earned" | "in-progress" | "planned";
  credentialUrl?: string; // link to verify
  badgeImage?: string; // path to badge/logo image
}

const certifications: Certification[] = [
  {
    name: "Certified Penetration Tester (CPT)",
    org: "RedTeam Academy, Chennai",
    year: "2025",
    icon: "🏴",
    status: "earned",
    credentialUrl: "",
  },
  {
    name: "Pre-Security Path (New)",
    org: "TryHackMe",
    year: "2026",
    icon: "🔐",
    status: "earned",
    credentialUrl: "",
  },
  {
    name: "AWS Cloud Security Intro",
    org: "TryHackMe",
    year: "2025",
    icon: "☁️",
    status: "earned",
    credentialUrl: "",
  },
  {
    name: "SentinelOne Admin & Pre-Sales Expert",
    org: "Credly Badge",
    year: "2025",
    icon: "🛡️",
    status: "earned",
    credentialUrl: "",
  },
  {
    name: "Google Cybersecurity Professional",
    org: "Coursera",
    year: "2024",
    icon: "🎓",
    status: "earned",
    credentialUrl: "",
  },
  {
    name: "Cybersecurity Essentials",
    org: "IBM (Coursera)",
    year: "2023",
    icon: "📘",
    status: "earned",
    credentialUrl: "",
  },
  {
    name: "CEH Practical",
    org: "EC-Council",
    year: "2025",
    icon: "🎯",
    status: "in-progress",
  },
  {
    name: "CPENT",
    org: "EC-Council",
    year: "2025",
    icon: "⚔️",
    status: "planned",
  },
  {
    name: "BSCP",
    org: "PortSwigger",
    year: "2025",
    icon: "🔬",
    status: "planned",
  },
];

export default certifications;
