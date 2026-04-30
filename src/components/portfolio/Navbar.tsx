const RESUME_URL = `${import.meta.env.BASE_URL}Anirudh_Singh_Tomar_Resume.pdf`;

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="text-xl font-black tracking-tighter hover:text-primary transition-colors">
          AST<span className="text-primary">.SYS</span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <a
          href={RESUME_URL}
          download="Anirudh_Singh_Tomar_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 border border-primary text-primary font-mono text-sm hover:bg-primary hover:text-black transition-colors"
        >
          [DL_RESUME]
        </a>
      </div>
    </nav>
  );
}