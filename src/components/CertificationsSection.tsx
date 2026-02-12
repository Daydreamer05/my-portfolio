import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";

const certifications = [
  {
    title: "AWS Solutions Architect Associate - CO3",
    issuer: "Amazon Web Services",
    icon: <ShieldCheck size={22} className="text-primary" />,
    highlight: true,
  },
  {
    title: "INFYTQ Certification",
    issuer: "Infosys • June 2022",
    icon: <Award size={22} className="text-primary" />,
    highlight: false,
  },
];

const CertificationsSection = () => {
  return (
    <section className="py-28 px-4 relative" id="certifications">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-muted-foreground text-sm mb-2">
            <span className="text-primary">~$</span> cat certifications.txt
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient inline-block">Certifications</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: "spring" as const, stiffness: 100 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`card-glass rounded-xl p-6 flex items-start gap-4 relative overflow-hidden group ${
                cert.highlight ? "border-primary/20" : ""
              }`}
            >
              {cert.highlight && (
                <div className="absolute top-0 left-0 right-0 h-[2px] gradient-line" />
              )}
              <motion.div
                className={`p-3 rounded-xl ${
                  cert.highlight
                    ? "bg-primary/15 border border-primary/25"
                    : "bg-secondary/80 border border-border/50"
                }`}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring" as const, stiffness: 300 }}
              >
                {cert.icon}
              </motion.div>
              <div>
                <h3 className="font-bold text-sm group-hover:text-primary transition-colors">{cert.title}</h3>
                <p className="text-xs text-muted-foreground font-sans mt-1.5">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
