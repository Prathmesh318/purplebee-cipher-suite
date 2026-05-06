import { motion } from "framer-motion";

const socials = [
  { name: "GitHub", url: "https://github.com/Prathmesh318", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/prathmesh-murugan", icon: "linkedin" },
  { name: "Medium", url: "https://medium.com/@murugan.prathmesh", icon: "medium" },
  { name: "TryHackMe", url: "https://tryhackme.com/p/purplebee", icon: "thm" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative z-10">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2"><span className="gradient-text">Get In Touch</span></h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left */}
            <div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Interested in collaborating on security projects, need a pentest, or looking to hire? I'm open to opportunities in offensive security, purple teaming, and security consulting.
              </p>

              <div className="glass rounded-xl p-5 mb-6">
                <div className="font-mono text-sm">
                  <span className="text-primary">$ </span>
                  <span className="text-muted-foreground">echo $CONTACT_EMAIL</span>
                  <br />
                  <span className="text-foreground">prathmeshmurugan.cy@gmail.com</span>
                </div>
              </div>

              <div className="flex gap-4">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg glass glass-hover flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                    title={s.name}
                  >
                    <span className="text-xs font-mono font-bold">{s.icon === "github" ? "GH" : s.icon === "linkedin" ? "LI" : s.icon === "medium" ? "M" : "TH"}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Recruiter CTA */}
            <div className="glass glow-purple rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-3">👋 For Recruiters</h3>
              <p className="text-sm text-muted-foreground mb-4">
                I'm actively seeking roles in offensive security, VAPT, SOC, and purple teaming. Open to on-site, hybrid, or remote positions in India.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-center gap-2"><span className="text-accent">✓</span> 1+ year hands-on security experience</li>
                <li className="flex items-center gap-2"><span className="text-accent">✓</span> Enterprise client-facing background</li>
                <li className="flex items-center gap-2"><span className="text-accent">✓</span> CPT certified, pursuing CEH & CPENT</li>
                <li className="flex items-center gap-2"><span className="text-accent">✓</span> TryHackMe Top 8% globally</li>
              </ul>
              <a
                href="mailto:prathmeshmurugan.cy@gmail.com?subject=Opportunity%20from%20PurpleBeeSec"
                className="inline-block px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
