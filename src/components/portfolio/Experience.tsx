import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-black uppercase tracking-tighter inline-block relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">EXPERIENCE</span>
            <span className="absolute -top-4 -right-8 text-xs font-mono text-muted-foreground opacity-50">経験</span>
          </h2>
        </div>

        <div className="relative border-l border-border ml-4 md:ml-8 pl-8 pb-8 space-y-14">
          {/* EONMED — first */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-10 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 shadow-[0_0_15px_rgba(0,240,255,0.6)]" />

            <div className="mb-2 text-sm font-mono text-primary flex items-center gap-4">
              <span>Jun 2025 – Sept 2025</span>
              <span className="h-[1px] bg-border w-12 hidden md:block"></span>
              <span className="text-muted-foreground uppercase tracking-widest">Noida, India</span>
            </div>

            <h3 className="text-2xl font-bold mb-1 text-foreground">AI Intern</h3>
            <h4 className="text-lg text-secondary mb-4 font-mono">EONMED</h4>

            <p className="text-muted-foreground max-w-2xl">
              Built computer vision projects, worked on Text-to-Speech (TTS) and Speech-to-Text (STT) systems, and gained practical, hands-on artificial intelligence experience within a fast-paced environment.
            </p>
          </motion.div>

          {/* Appinventiv — second */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-10 w-4 h-4 rounded-full bg-secondary ring-4 ring-secondary/20 shadow-[0_0_15px_rgba(192,132,252,0.6)]" />

            <div className="mb-2 text-sm font-mono text-secondary flex items-center gap-4">
              <span>Sept 2025 – Nov 2025</span>
              <span className="h-[1px] bg-border w-12 hidden md:block"></span>
              <span className="text-muted-foreground uppercase tracking-widest">Remote</span>
            </div>

            <h3 className="text-2xl font-bold mb-1 text-foreground">Software Developer Intern</h3>
            <h4 className="text-lg text-secondary mb-4 font-mono">Appinventiv Technologies Pvt. Ltd.</h4>

            <p className="text-muted-foreground max-w-2xl">
              Worked as a Full Stack Developer, contributing to the enhancement and development of web applications based on client requirements. Responsibilities included integrating chatbot solutions, implementing new features, and optimizing existing functionalities. Developed key projects such as an organic vegetable e-commerce platform and an ERP system for coaching institutes, ensuring scalability and user-friendly design.
            </p>
          </motion.div>

          {/* Freelance / Independent — third */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-10 w-4 h-4 rounded-full bg-accent ring-4 ring-accent/20 shadow-[0_0_15px_rgba(217,70,239,0.6)]" />

            <div className="mb-2 text-sm font-mono text-accent flex items-center gap-4">
              <span>2025 – Present</span>
              <span className="h-[1px] bg-border w-12 hidden md:block"></span>
              <span className="text-muted-foreground uppercase tracking-widest">Remote · Independent</span>
            </div>

            <h3 className="text-2xl font-bold mb-1 text-foreground">Freelance Software Developer</h3>
            <h4 className="text-lg text-secondary mb-4 font-mono">Self-Employed</h4>

            <p className="text-muted-foreground max-w-2xl">
              Partner with clients to design, develop, and ship custom software solutions end-to-end. Engagements include integrating AI chatbots into existing platforms, refining UI/UX across client websites, and architecting bespoke applications tailored to specific business workflows. Comfortable owning the full delivery cycle — discovery, prototyping, implementation, and post-launch iteration.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
