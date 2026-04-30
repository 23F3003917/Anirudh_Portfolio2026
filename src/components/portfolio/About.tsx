import { motion } from "framer-motion";
import cyberCity from "@/assets/cyber-city.png";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-black uppercase tracking-tighter inline-block relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">ABOUT ME</span>
            <span className="absolute -top-4 -right-8 text-xs font-mono text-muted-foreground opacity-50">プロフィール</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I am Anirudh Singh Tomar, a B.Tech Computer Science student specializing in Artificial Intelligence and Machine Learning. My focus is on practical, project-based learning that bridges the gap between theoretical algorithms and real-world applications.
            </p>
            <p>
              From building virtual heart rate monitors using computer vision to developing scalable web platforms, I thrive on engineering systems that are both robust and visually compelling. My stack revolves around Python, React, and various CV/AI frameworks.
            </p>
            <div className="border-l-4 border-primary pl-4 py-2 mt-8 bg-primary/5">
              <p className="text-foreground font-mono text-sm">
                "Specializes in Python, web development, computer vision, and blockchain."
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video max-w-lg mx-auto w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-accent/20 to-primary/20 blur-2xl" />
            <div className="border border-border bg-card p-2 relative z-10 h-full flex items-center justify-center overflow-hidden group">
              <img 
                src={cyberCity} 
                alt="Cyberpunk City" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}