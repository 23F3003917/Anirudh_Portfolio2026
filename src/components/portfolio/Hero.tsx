import { motion } from "framer-motion";
import heroAvatar from "@/assets/hero-avatar.png";

const RESUME_URL = `${import.meta.env.BASE_URL}Anirudh_Singh_Tomar_Resume.pdf`;

export function Hero() {
  return (
    <section id="hero" className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background z-10" />
      </div>
      
      <div className="container mx-auto px-6 z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-sm font-mono tracking-wider w-fit">
            <span className="w-2 h-2 bg-primary animate-pulse" />
            SYSTEM.BOOT_SEQUENCE_INIT
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              ANIRUDH
            </span>
            <span className="block">SINGH TOMAR</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-mono">
            B.Tech CSE (AIML) Student
            <br />
            <span className="text-sm text-primary">{"//"} BUILDER OF AI & CV SYSTEMS</span>
          </p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-primary text-primary-foreground font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300 shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-border text-foreground font-bold tracking-widest uppercase hover:border-primary hover:text-primary transition-colors duration-300"
            >
              Contact Me
            </a>
            <a
              href={RESUME_URL}
              download="Anirudh_Singh_Tomar_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 border border-secondary/60 text-secondary font-bold tracking-widest uppercase hover:bg-secondary hover:text-black transition-colors duration-300"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-square max-w-md mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl rounded-full" />
          <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-secondary opacity-50 blur-sm z-0" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }} />
          <img 
            src={heroAvatar} 
            alt="Anirudh Avatar" 
            className="relative z-10 w-full h-full object-cover shadow-2xl grayscale-[20%] contrast-125"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}
          />
        </motion.div>
      </div>
    </section>
  );
}