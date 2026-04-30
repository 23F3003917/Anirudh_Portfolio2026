import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollThread } from "@/components/portfolio/ScrollThread";
import { MarqueeBand } from "@/components/portfolio/MarqueeBand";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-black font-sans overflow-x-hidden">
      <ScrollThread />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <MarqueeBand />
        <About />
        <MarqueeBand reverse speed={50} />
        <Projects />
        <MarqueeBand speed={45} />
        <Experience />
        <MarqueeBand reverse />
        <Skills />
        <MarqueeBand speed={55} />
        <Education />
        <MarqueeBand reverse speed={42} />
        <Achievements />
        <MarqueeBand />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}