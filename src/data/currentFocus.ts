export interface FocusItem {
  title: string;
  description: string;
  icon: string;
}

const currentFocus: FocusItem[] = [
  {
    title: "CEH Practical Preparation",
    description: "Hands-on lab practice for EC-Council CEH Practical examination.",
    icon: "🎯",
  },
  {
    title: "Advanced Burp Suite Workflows",
    description: "Mastering Burp Suite extensions, macros, and advanced testing techniques.",
    icon: "🔧",
  },
  {
    title: "AppSec & Secure SDLC",
    description: "Learning application security principles and integrating security into development lifecycle.",
    icon: "🛡️",
  },
  {
    title: "Detection Engineering Fundamentals",
    description: "Building detection rules, understanding telemetry, and purple team workflows.",
    icon: "📡",
  },
  // Add new focus items here:
  // {
  //   title: "New Focus Area",
  //   description: "What you're working on",
  //   icon: "🔥",
  // },
];

export default currentFocus;
