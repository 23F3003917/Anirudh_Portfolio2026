import { motion } from "framer-motion";
import { Award } from "lucide-react";

const achievements = [
  "IITM Data Science Diploma Level",
  "Hackathons Finalists",
  "Virtual Heart Rate Monitoring & Face Anti-Spoofing System — Implemented at respective companies",
];

const CERT_BASE = `${import.meta.env.BASE_URL}certificates/`;

const certifications = [
  {
    title: "IITM Data Science & Programming — Foundational Level",
    issuer: "IIT Madras",
    href: `${CERT_BASE}IITM_DataScience_Foundation.pdf`,
  },
  {
    title: "IIT Madras App / Web Development Programme",
    issuer: "IIT Madras",
    href: `${CERT_BASE}IITM_AppWeb_Development.pdf`,
  },
  {
    title: "SynergyX Project Expo — Winner",
    issuer: "SynergyX",
    href: `${CERT_BASE}SynergyX_ProjectExpo_Winner.pdf`,
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-16 border-y border-border/50 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />

      <div className="container mx-auto px-6 relative z-10 space-y-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-shrink-0 text-xl font-black uppercase tracking-widest text-primary">
            ACHIEVEMENTS //
          </div>

          <div className="flex flex-wrap items-center justify-start md:justify-end gap-3 flex-1">
            {achievements.map((ach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-4 py-2 border border-secondary/30 bg-secondary/5 text-sm font-mono"
              >
                <span className="text-secondary mr-2">♦</span>
                {ach}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="border-t border-border/40 pt-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-xl font-black uppercase tracking-widest text-accent">
                CERTIFICATIONS //
              </span>
            </div>
            <span className="text-xs font-mono text-muted-foreground opacity-70">
              CLICK_TO_VIEW.PDF
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.a
                key={i}
                href={cert.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative block border border-border bg-card/40 backdrop-blur-sm p-5 hover:border-accent/60 transition-colors"
              >
                <div className="absolute top-0 right-0 p-2 opacity-30 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 border-t-2 border-r-2 border-accent/60" />
                </div>

                <div className="text-xs font-mono text-accent uppercase mb-2 tracking-wider">
                  CERT_{String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-base font-bold leading-snug mb-2 group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>
                <div className="text-xs font-mono text-muted-foreground">
                  {cert.issuer} · <span className="text-accent">VIEW →</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
