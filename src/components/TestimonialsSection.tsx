import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Prathmesh demonstrated strong technical skills during his VAPT internship. His reports were thorough and professional.",
    name: "Security Lead",
    role: "K7 Computing",
  },
  {
    quote: "Great at client communication and understanding enterprise security needs. A valuable addition to the team.",
    name: "Team Manager",
    role: "Ladera Technology",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative z-10">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2"><span className="gradient-text">Testimonials</span></h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6"
            >
              <p className="text-muted-foreground text-sm italic leading-relaxed mb-4">"{t.quote}"</p>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-primary">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center mt-6">* Placeholder testimonials — will be updated with real references.</p>
      </div>
    </section>
  );
}
