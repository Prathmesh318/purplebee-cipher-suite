import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/profile-blazer.png";

const terminalSequences = [
  [
    "$ whoami",
    "prathmesh_m — offensive security engineer",
    "$ cat specialization.txt",
    "Web App VAPT | Purple Teaming | SOC | AppSec",
    "$ nmap -sV target.purplebeesec.io",
    "PORT   STATE  SERVICE",
    "443    open   portfolio-v2.0",
    "$ status --ready",
    "[ ✓ ] Available for Security Engineering & VAPT opportunities in your organization",
  ],
  [
    "$ curl -s https://purplebeesec.io/api/status",
    '{ "engineer": "prathmesh_m", "status": "active" }',
    "$ gobuster dir -u https://target.local -w common.txt",
    "/admin        (Status: 403)",
    "/api/v1       (Status: 200)",
    "/backup       (Status: 200) [Size: 4096]",
    "$ cat findings.txt",
    "[CRITICAL] Unauthenticated API endpoint exposed",
    "[ ✓ ] Report submitted to client",
  ],
  [
    "$ ffuf -u https://target.local/FUZZ -w wordlist.txt",
    "[Status: 200] → /dashboard",
    "[Status: 302] → /admin/login",
    "$ curl -X POST /api/auth -d 'admin:admin'",
    '{ "token": "eyJhbGci...", "role": "admin" }',
    "$ echo 'Authentication bypass confirmed'",
    "[HIGH] Default credentials on admin panel",
    "$ status --engagement",
    "[ ✓ ] VAPT engagement in progress",
  ],
];

export default function HeroSection() {
  const sequence = useMemo(
    () => terminalSequences[Math.floor(Math.random() * terminalSequences.length)],
    []
  );
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= sequence.length) return;
    const line = sequence[currentLine];

    if (currentChar < line.length) {
      const t = setTimeout(() => {
        setDisplayedLines((prev) => {
          const copy = [...prev];
          copy[currentLine] = line.slice(0, currentChar + 1);
          return copy;
        });
        setCurrentChar(currentChar + 1);
      }, line.startsWith("$") ? 40 : 15);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setCurrentLine(currentLine + 1);
        setCurrentChar(0);
        setDisplayedLines((prev) => [...prev, ""]);
      }, 400);
      return () => clearTimeout(t);
    }
  }, [currentLine, currentChar, sequence]);

  return (
    <section className="relative min-h-screen flex items-center justify-center grid-pattern">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full glass text-xs font-mono text-primary tracking-wider">
              OFFENSIVE SECURITY • VAPT • PURPLE TEAMING
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
              <span className="text-foreground">Prathmesh </span>
              <span className="gradient-text">M</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Cybersecurity Professional — Breaking systems to make them stronger.
              <br />
              <span className="text-primary font-mono text-sm">PurpleBeeSec</span>
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity text-sm">
                View Projects
              </a>
              <a href="#contact" className="px-5 py-2.5 rounded-lg glass glass-hover font-medium text-foreground text-sm">
                Get In Touch
              </a>
              <a
                href="/resumes/ats-resume.pdf"
                download
                className="px-5 py-2.5 rounded-lg border border-primary text-primary font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Download Resume (ATS)
              </a>
              <a
                href="/resumes/technical-resume.pdf"
                download
                className="px-5 py-2.5 rounded-lg border border-accent text-accent font-medium text-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                Download Resume (Technical)
              </a>
            </div>
          </motion.div>

          {/* Right — Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 blur-lg" />
              <img
                src={profileImage}
                alt="Prathmesh M — Offensive Security Engineer"
                className="relative w-72 md:w-80 rounded-2xl object-cover aspect-[3/4] border border-cyber-border"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl mx-auto mt-16 glass rounded-xl overflow-hidden glow-cyber"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <span className="w-3 h-3 rounded-full bg-destructive" />
            <span className="w-3 h-3 rounded-full" style={{ background: "oklch(0.8 0.18 85)" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "oklch(0.7 0.17 145)" }} />
            <span className="ml-4 text-xs text-muted-foreground font-mono">purplebeesec@kali:~</span>
          </div>
          <div className="p-5 text-left font-mono text-sm leading-relaxed min-h-[240px]">
            {displayedLines.map((line, i) => (
              <div key={i} className={line.startsWith("$") ? "text-primary" : line.startsWith("[") ? "text-accent" : "text-muted-foreground"}>
                {line}
                {i === currentLine && currentLine < sequence.length && (
                  <span className="cursor-blink text-primary">▌</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
