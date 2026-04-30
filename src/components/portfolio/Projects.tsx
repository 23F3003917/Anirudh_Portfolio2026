import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Virtual Heart Rate Monitor",
    category: "CV",
    tech: ["Python", "OpenCV", "MediaPipe", "pyVHR"],
    desc: "Detects BPM from face video with real-time overlay visualization without dedicated hardware.",
    github: "https://github.com/23F3003917/Virtual-Heart-Rate-Monitor",
  },
  {
    title: "Vid-Vision",
    category: "CV / AI",
    tech: ["Python", "OpenCV", "MediaPipe"],
    desc: "Motion capture using webcam, converts video to body + hand landmarks, eliminating need for expensive hardware.",
    link: "https://devfolio.co/projects/vidvisiond-ac20",
  },
  {
    title: "Face Recognition Attendance",
    category: "AI / CV",
    tech: ["Python", "OpenCV", "face_recognition"],
    desc: "Face + voice authentication with real-time attendance logging and CSV export.",
    github: "https://github.com/23F3003917/Face-Recogn-Attendance-Sys",
  },
  {
    title: "Quiz Master",
    category: "Web",
    tech: ["Flask", "SQLite", "HTML", "CSS"],
    desc: "Multi-user exam platform with full admin + user system authentication and result tracking.",
    link: "https://drive.google.com/file/d/1lQbeuGcIAKxJ1wvUA0ICyNNFISZDl4P6/view",
  },
  {
    title: "Dyslexia Helper",
    category: "Web / AI",
    tech: ["React", "TypeScript", "Web Speech API", "Vercel"],
    desc: "Accessibility-first reading aid that helps users with dyslexia decode and pronounce words through a specialised interface and integrated assistive utilities.",
    link: "https://dyslexia-alpha.vercel.app/",
    isLive: true,
  }
];

const filters = ["All", "AI", "Web", "CV", "Blockchain"];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(p => {
    if (activeFilter === "All") return true;
    return p.category.includes(activeFilter);
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="text-4xl font-black uppercase tracking-tighter inline-block relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">PROJECTS</span>
            <span className="absolute -top-4 -right-8 text-xs font-mono text-muted-foreground opacity-50">アニルード</span>
          </h2>
          
          <div className="flex flex-wrap gap-2">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 text-sm font-mono border transition-colors ${
                  activeFilter === f 
                    ? 'border-primary bg-primary/10 text-primary' 
                    : 'border-border text-muted-foreground hover:border-primary/50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[400px]">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ delay: i * 0.1 }}
              className="group relative border border-border bg-card/50 backdrop-blur-sm p-6 hover:border-primary/50 transition-colors"
            >
              <div className="absolute top-0 right-0 p-2 opacity-30 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 border-t-2 border-r-2 border-primary/50" />
              </div>
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <span className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/20">
                  {project.category}
                </span>
              </div>
              
              <p className="text-muted-foreground mb-6 h-12">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, j) => (
                  <span key={j} className="text-xs font-mono text-foreground/70 bg-secondary/10 px-2 py-1 border border-secondary/20">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors flex items-center gap-2">
                    GITHUB <span className="text-primary">→</span>
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-sm font-bold uppercase tracking-wider hover:text-secondary transition-colors flex items-center gap-2">
                    {project.isLive ? "LIVE SITE" : "GITHUB"} <span className="text-secondary">→</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}