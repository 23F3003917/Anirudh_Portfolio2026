import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Linkedin, Github, Code2 } from "lucide-react";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Transmitted",
        description: "Your message has been successfully logged in the system.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-black uppercase tracking-tighter inline-block relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">CONTACT</span>
            <span className="absolute -top-4 -right-8 text-xs font-mono text-muted-foreground opacity-50">連絡先</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg text-muted-foreground font-mono">
              INITIATE_CONNECTION_PROTOCOL...
              <br />
              Ready for new missions and collaborative projects.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-border bg-card text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-mono text-muted-foreground">EMAIL_ADDR</div>
                  <a href="mailto:anirudhsinghtomar10@gmail.com" className="hover:text-primary transition-colors">
                    anirudhsinghtomar10@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-border bg-card text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-mono text-muted-foreground">COMMS_LINK</div>
                  <a href="tel:9897655778" className="hover:text-primary transition-colors">
                    9897655778
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-border bg-card text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-mono text-muted-foreground">GEO_LOC</div>
                  <span>Ghaziabad, Uttar Pradesh, India</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex gap-4">
              <a 
                href="https://github.com/23F3003917?tab=repositories" 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors bg-card"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/anirudh-singh-tomar-b38584279/" 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center border border-border hover:border-secondary hover:text-secondary transition-colors bg-card"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://leetcode.com/u/EVO24/"
                target="_blank"
                rel="noreferrer"
                title="LeetCode"
                className="w-12 h-12 flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors bg-card"
              >
                <Code2 className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-4 border border-border bg-card/30 p-8 backdrop-blur-sm"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-mono text-primary uppercase">Identifier</label>
              <input 
                type="text" 
                id="name" 
                required 
                className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-mono"
                placeholder="Enter Name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-mono text-primary uppercase">Return Address</label>
              <input 
                type="email" 
                id="email" 
                required 
                className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-mono"
                placeholder="Enter Email"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-mono text-primary uppercase">Payload</label>
              <textarea 
                id="message" 
                required 
                rows={4}
                className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-mono resize-none"
                placeholder="Enter Message"
              />
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-4 mt-4 bg-primary text-primary-foreground font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300 disabled:opacity-50"
            >
              {isSubmitting ? "TRANSMITTING..." : "TRANSMIT MESSAGE"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}