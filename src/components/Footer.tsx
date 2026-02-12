import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/30 py-12 px-4">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <p className="font-bold text-sm">
              <span className="text-primary text-glow">PC</span>
              <span className="text-foreground">@devops</span>
            </p>
            <p className="text-xs text-muted-foreground font-sans mt-1">
              © {new Date().getFullYear()} Prudhvi Charan Kalva
            </p>
          </div>

          <div className="flex items-center gap-3">
            {[
              { href: "mailto:kalvaprudhvicharan@gmail.com", icon: <Mail size={14} /> },
              { href: "tel:+918148698515", icon: <Phone size={14} /> },
              { href: "https://linkedin.com/in/prudhvi-charan-kalva", icon: <Linkedin size={14} />, external: true },
            ].map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-lg card-glass text-muted-foreground hover:text-primary transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[10px] text-muted-foreground/50 font-sans mt-8 flex items-center justify-center gap-1"
        >
          Built with <Heart size={10} className="text-primary" /> and passion for DevOps
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
