import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const lines = [
  "$ whoami",
  "prathmesh_m — offensive security engineer",
  "$ cat specialization.txt",
  "Web App VAPT | Purple Teaming | SOC | AppSec",
  "$ nmap -sV target.purplebeesec.io",
  "PORT   STATE  SERVICE",
  "443    open   portfolio-v2.0",
  "$ status --ready",
  "[ ✓ ] Open to opportunities",
];

export default function HeroSection() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= lines.length) return;
    const line = lines[currentLine];

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
  }, [currentLine, currentChar]);

  return (
    <section className="relative min-h-screen flex items-center justify-center grid-pattern">
      <div className="section-container relative z-10 text-center">
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

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Cybersecurity Professional — Breaking systems to make them stronger.
            <br />
            <span className="text-primary font-mono text-sm">PurpleBeeSec</span>
          </p>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto glass rounded-xl overflow-hidden glow-cyber"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <span className="w-3 h-3 rounded-full bg-destructive" />
            <span className="w-3 h-3 rounded-full" style={{ background: "oklch(0.8 0.18 85)" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "oklch(0.7 0.17 145)" }} />
            <span className="ml-4 text-xs text-muted-foreground font-mono">purplebeesec@kali:~</span>
          </div>
          <div className="p-5 text-left font-mono text-sm leading-relaxed min-h-[250px]">
            {displayedLines.map((line, i) => (
              <div key={i} className={line.startsWith("$") ? "text-primary" : line.startsWith("[") ? "text-accent" : "text-muted-foreground"}>
                {line}
                {i === currentLine && currentLine < lines.length && (
                  <span className="cursor-blink text-primary">▌</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a href="#projects" className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity text-sm">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 rounded-lg glass glass-hover font-medium text-foreground text-sm">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
