export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-background py-8 text-center md:text-left">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-mono text-sm text-muted-foreground">
          <span className="text-primary">©</span> {new Date().getFullYear()} ANIRUDH SINGH TOMAR
        </div>
        
        <div className="flex gap-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <a href="#hero" className="hover:text-primary transition-colors">TOP</a>
          <a href="#projects" className="hover:text-primary transition-colors">PROJECTS</a>
          <a href="#contact" className="hover:text-primary transition-colors">CONTACT</a>
        </div>
      </div>
    </footer>
  );
}