import { motion } from "framer-motion";

const skillsData = [
  { 
    group: "Core AI & CV", 
    skills: [
      { name: "Python", level: 90 },
      { name: "Computer Vision", level: 85 },
      { name: "OpenCV", level: 85 },
      { name: "MediaPipe", level: 80 }
    ] 
  },
  { 
    group: "Web Dev", 
    skills: [
      { name: "React", level: 75 },
      { name: "HTML/CSS", level: 80 },
      { name: "Flask", level: 85 },
      { name: "REST APIs", level: 80 }
    ] 
  },
  { 
    group: "Database & Blockchain", 
    skills: [
      { name: "SQLite / MySQL", level: 80 },
      { name: "Solidity", level: 70 },
      { name: "Web3", level: 65 },
      { name: "Unity3D", level: 60 }
    ] 
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-black uppercase tracking-tighter inline-block relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">SKILLS</span>
            <span className="absolute -top-4 -right-8 text-xs font-mono text-muted-foreground opacity-50">スキル</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillsData.map((category, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 border border-border bg-card/20 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-6 font-mono text-secondary border-b border-border/50 pb-2 inline-block">
                {category.group}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, j) => (
                  <div key={j} className="space-y-2">
                    <div className="flex justify-between text-sm font-mono">
                      <span>{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-background border border-border overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (j * 0.1) }}
                        className="h-full bg-gradient-to-r from-primary to-secondary relative"
                      >
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4yKSIvPjwvc3ZnPg==')] opacity-50" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}