import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, Linkedin, Phone } from "lucide-react";

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

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="scanline absolute inset-0 pointer-events-none z-10" />
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-muted-foreground text-sm">
            <span className="text-primary">~$</span> whoami
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <TypingText text="Prudhvi Charan" delay={300} />
          </h1>
          <h2 className="text-xl md:text-2xl text-primary text-glow font-medium">
            <TypingText text="DevOps Engineer" delay={1200} />
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed font-sans"
          >
            AWS Certified Solutions Architect with 3+ years of experience automating deployments,
            optimizing performance, and building resilient cloud infrastructure.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="mailto:kalvaprudhvicharan@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={16} />
              <span className="font-sans">kalvaprudhvicharan@gmail.com</span>
            </a>
            <a
              href="tel:+918148698515"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={16} />
              <span className="font-sans">+91-8148698515</span>
            </a>
            <a
              href="https://linkedin.com/in/prudhvi-charan-kalva"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={16} />
              <span className="font-sans">LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
