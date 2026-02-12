import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Mail, Linkedin, Phone, ChevronDown, Download, Terminal } from "lucide-react";

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

const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1500;
    const steps = 30;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const FloatingParticle = ({ delay, x, y, size = 1 }: { delay: number; x: string; y: string; size?: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary/20"
    style={{ left: x, top: y, width: size * 4, height: size * 4 }}
    animate={{
      opacity: [0, 0.8, 0],
      scale: [0, 1.5, 0],
      y: [0, -60, -120],
    }}
    transition={{
      duration: 5,
      delay,
      repeat: Infinity,
      ease: "easeOut",
    }}
  />
);

const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 90, suffix: "%", label: "Deployment Automation" },
  { value: 20, suffix: "%", label: "Cost Reduction" },
];

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useTransform(mouseX, (v) => v - 200);
  const glowY = useTransform(mouseY, (v) => v - 200);

  const handleMouse = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouse}
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
    >
      {/* Animated grid background */}
      <div className="grid-bg absolute inset-0 opacity-30" />
      <div className="scanline absolute inset-0 pointer-events-none z-10" />

      {/* Mouse-following glow */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{
          x: glowX,
          y: glowY,
          background: "radial-gradient(circle, hsl(142 72% 50% / 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Floating particles */}
      <FloatingParticle delay={0} x="10%" y="60%" size={1} />
      <FloatingParticle delay={1.2} x="25%" y="80%" size={1.5} />
      <FloatingParticle delay={0.5} x="70%" y="50%" size={1} />
      <FloatingParticle delay={2} x="85%" y="70%" size={2} />
      <FloatingParticle delay={1.8} x="50%" y="90%" size={1} />
      <FloatingParticle delay={0.8} x="40%" y="40%" size={1.5} />
      <FloatingParticle delay={2.5} x="90%" y="30%" size={1} />
      <FloatingParticle delay={3} x="15%" y="30%" size={2} />
      <FloatingParticle delay={1.5} x="60%" y="20%" size={1} />
      <FloatingParticle delay={3.5} x="80%" y="85%" size={1.5} />

      {/* Ambient orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[150px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ left: "15%", top: "20%" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-[120px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ right: "10%", bottom: "20%" }}
      />

      <div className="max-w-5xl w-full relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Terminal prompt */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <Terminal size={14} className="text-primary" />
            <span className="text-muted-foreground text-sm">
              <span className="text-primary">~$</span> whoami
            </span>
          </motion.div>

          {/* Name with gradient */}
          <div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
              <span className="text-gradient">
                <TypingText text="Prudhvi Charan" delay={300} />
              </span>
            </h1>
          </div>

          {/* Title with glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <h2 className="text-xl md:text-3xl text-primary text-glow font-medium flex items-center gap-3">
              <motion.span
                className="inline-block w-3 h-3 rounded-full bg-primary glow-dot"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <TypingText text="DevOps Engineer" delay={1200} />
            </h2>
          </motion.div>

          {/* AWS badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full card-glass text-xs font-sans"
          >
            <span className="w-2 h-2 rounded-full bg-accent glow-dot" />
            <span className="text-accent">AWS Certified Solutions Architect Associate</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed font-sans"
          >
            3+ years of experience automating deployments, optimizing system performance,
            and building resilient cloud infrastructure with CI/CD pipelines at scale.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.8 }}
            className="flex flex-wrap gap-8 pt-2"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8 + i * 0.15 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] text-muted-foreground font-sans mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 1 }}
            className="flex flex-wrap gap-3 pt-4"
          >
            {[
              { href: "mailto:kalvaprudhvicharan@gmail.com", icon: <Mail size={14} />, label: "Email" },
              { href: "tel:+918148698515", icon: <Phone size={14} />, label: "Phone" },
              { href: "https://linkedin.com/in/prudhvi-charan-kalva", icon: <Linkedin size={14} />, label: "LinkedIn", external: true },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg card-glass text-xs text-muted-foreground hover:text-primary transition-all duration-300 font-sans group"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="group-hover:text-primary transition-colors">{link.icon}</span>
                <span>{link.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] text-muted-foreground font-sans uppercase tracking-widest">Scroll</span>
        <ChevronDown size={16} className="text-primary/40" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
