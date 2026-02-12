import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, Linkedin, Phone, ChevronDown } from "lucide-react";

const TypingText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const timer = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), 40);
      return () => clearTimeout(timer);
    }
  }, [displayed, text, started]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && <span className="animate-blink">▌</span>}
    </span>
  );
};

const FloatingParticle = ({ delay, x, y }: { delay: number; x: string; y: string }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-primary/30"
    style={{ left: x, top: y }}
    animate={{
      opacity: [0, 0.6, 0],
      scale: [0, 1.5, 0],
      y: [0, -40, -80],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeOut",
    }}
  />
);

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="scanline absolute inset-0 pointer-events-none z-10" />
      
      {/* Floating particles */}
      <FloatingParticle delay={0} x="10%" y="60%" />
      <FloatingParticle delay={1.2} x="25%" y="80%" />
      <FloatingParticle delay={0.5} x="70%" y="50%" />
      <FloatingParticle delay={2} x="85%" y="70%" />
      <FloatingParticle delay={1.8} x="50%" y="90%" />
      <FloatingParticle delay={0.8} x="40%" y="40%" />
      <FloatingParticle delay={2.5} x="90%" y="30%" />
      <FloatingParticle delay={3} x="15%" y="30%" />

      {/* Ambient glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ left: "20%", top: "30%" }}
      />

      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-muted-foreground text-sm"
          >
            <span className="text-primary">~$</span> whoami
          </motion.p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <TypingText text="Prudhvi Charan" delay={300} />
          </h1>
          <h2 className="text-xl md:text-2xl text-primary text-glow font-medium">
            <TypingText text="DevOps Engineer" delay={1200} />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed font-sans"
          >
            AWS Certified Solutions Architect with 3+ years of experience automating deployments,
            optimizing performance, and building resilient cloud infrastructure.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            {[
              { href: "mailto:kalvaprudhvicharan@gmail.com", icon: <Mail size={16} />, label: "kalvaprudhvicharan@gmail.com" },
              { href: "tel:+918148698515", icon: <Phone size={16} />, label: "+91-8148698515" },
              { href: "https://linkedin.com/in/prudhvi-charan-kalva", icon: <Linkedin size={16} />, label: "LinkedIn", external: true },
            ].map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="group-hover:scale-110 transition-transform">{link.icon}</span>
                <span className="font-sans">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={20} className="text-primary/50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
