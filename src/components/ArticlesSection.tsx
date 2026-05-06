import { motion } from "framer-motion";

const articles = [
  {
    title: "I Have the Degree and the Experience — Here's Why I'm Starting Over",
    desc: "A reflection on restarting a cybersecurity career with real-world honesty and direction.",
    url: "https://medium.com/@murugan.prathmesh/i-have-the-degree-and-the-experience-heres-why-i-m-starting-over-09ca8adf4904",
    date: "2026",
  },
  {
    title: "TryHackMe Pre-Security Path Notes I Wish I Had on Day One",
    desc: "Comprehensive notes and insights from the TryHackMe Pre-Security learning path.",
    url: "https://medium.com/@murugan.prathmesh/tryhackme-pre-security-path-notes-i-wish-i-had-on-day-one-654a20458de0",
    date: "2026",
  },
];

export default function ArticlesSection() {
  return (
    <section id="articles" className="relative z-10">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2"><span className="gradient-text">Blog & Writeups</span></h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((a, i) => (
            <motion.a
              key={a.url}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass glass-hover rounded-xl p-6 block group"
            >
              <span className="text-[10px] font-mono text-primary">{a.date} • Medium</span>
              <h3 className="text-lg font-semibold text-foreground mt-2 group-hover:text-primary transition-colors">{a.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{a.desc}</p>
              <span className="text-xs text-primary mt-4 inline-block">Read Article →</span>
            </motion.a>
          ))}
        </div>

        {/* Blog placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 glass rounded-xl p-6 text-center"
        >
          <p className="text-sm text-muted-foreground">More technical writeups and CTF walkthroughs coming soon.</p>
        </motion.div>
      </div>
    </section>
  );
}
