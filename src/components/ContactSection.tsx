import { useState } from "react";
import { motion } from "framer-motion";

const socials = [
  { name: "GitHub", url: "https://github.com/Prathmesh318", label: "GH" },
  { name: "LinkedIn", url: "https://linkedin.com/in/prathmesh-murugan", label: "LI" },
  { name: "Medium", url: "https://medium.com/@murugan.prathmesh", label: "M" },
  { name: "TryHackMe", url: "https://tryhackme.com/p/purplebee", label: "TH" },
];

const email = "prathmeshmurugan.cy@gmail.com";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative z-10">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2"><span className="gradient-text">Get In Touch</span></h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Looking to discuss security opportunities, collaborate on security projects, or connect professionally? I'm open to roles in offensive security, VAPT, SOC, and purple teaming.
              </p>

              <div className="glass rounded-xl p-5 mb-4">
                <div className="font-mono text-sm flex items-center gap-3 flex-wrap">
                  <div>
                    <span className="text-primary">$ </span>
                    <span className="text-muted-foreground">echo $CONTACT_EMAIL</span>
                    <br />
                    <span className="text-foreground">{email}</span>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="ml-auto px-3 py-1.5 text-xs rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-lg glass glass-hover flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-cyber transition-all duration-300"
                    title={s.name}
                  >
                    <span className="text-xs font-mono font-bold">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Recruiter CTA */}
            <div className="glass glow-purple rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-3">👋 For Recruiters</h3>
              <p className="text-sm text-muted-foreground mb-4">
                I'm actively seeking roles in offensive security, VAPT, SOC, and purple teaming. Open to on-site, hybrid, or remote positions across India.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-center gap-2"><span className="text-accent">✓</span> 1+ year hands-on security experience</li>
                <li className="flex items-center gap-2"><span className="text-accent">✓</span> Enterprise client-facing background</li>
                <li className="flex items-center gap-2"><span className="text-accent">✓</span> CPT certified, pursuing CEH & CPENT</li>
                <li className="flex items-center gap-2"><span className="text-accent">✓</span> TryHackMe Top 8% globally</li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${email}?subject=Opportunity%20from%20PurpleBeeSec`}
                  className="inline-block px-5 py-2.5 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  Discuss Security Opportunities
                </a>
                <a
                  href="/resumes/ats-resume.pdf"
                  download
                  className="inline-block px-5 py-2.5 rounded-lg border border-accent text-accent font-medium text-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
