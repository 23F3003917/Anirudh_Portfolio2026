import { motion } from "framer-motion";

const education = [
  {
    institution: "IMS Engineering College",
    degree: "B.Tech CSE (AIML)",
    score: "SGPA: 7.9",
    period: "2022–2026"
  },
  {
    institution: "IIT Madras",
    degree: "BSc (Online Degree)",
    score: "CGPA: 7.20",
    period: "2023–2025"
  }
];

export function Education() {
  return (
    <section id="education" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-black uppercase tracking-tighter inline-block relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">EDUCATION</span>
            <span className="absolute -top-4 -right-8 text-xs font-mono text-muted-foreground opacity-50">教育</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 border border-border relative group overflow-hidden bg-background"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="text-sm font-mono text-primary mb-2">
                {edu.period}
              </div>
              <h3 className="text-xl font-bold mb-1 text-foreground">
                {edu.institution}
              </h3>
              <div className="text-secondary font-mono text-sm mb-4">
                {edu.degree}
              </div>
              <div className="inline-block px-3 py-1 bg-muted/50 border border-border text-sm">
                {edu.score}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}