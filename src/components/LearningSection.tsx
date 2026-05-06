import { motion } from "framer-motion";

const items = [
  { label: "CEH Practical", progress: 60 },
  { label: "CPENT", progress: 30 },
  { label: "Advanced Web Hacking", progress: 75 },
  { label: "Active Directory Attacks", progress: 40 },
  { label: "Cloud Security (AWS)", progress: 50 },
];

export default function LearningSection() {
  return (
    <section id="learning" className="relative z-10">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2"><span className="gradient-text">Currently Learning</span></h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex justify-between text-sm mb-2">
                <span className="text-foreground font-medium">{item.label}</span>
                <span className="text-primary font-mono">{item.progress}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, var(--primary), var(--accent))" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
