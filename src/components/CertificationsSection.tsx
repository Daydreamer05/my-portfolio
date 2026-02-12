import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "AWS Solutions Architect Associate - CO3",
    issuer: "Amazon Web Services",
  },
  {
    title: "INFYTQ Certification",
    issuer: "Infosys • June 2022",
  },
];

const CertificationsSection = () => {
  return (
    <section className="py-24 px-4" id="certifications">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-muted-foreground text-sm mb-2">
            <span className="text-primary">~$</span> cat certifications.txt
          </p>
          <h2 className="text-3xl font-bold">Certifications</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="border border-border rounded-lg p-5 bg-card flex items-start gap-4 hover:border-primary/30 transition-colors"
            >
              <div className="p-2 rounded-md bg-primary/10 border border-primary/20">
                <Award size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-sm">{cert.title}</h3>
                <p className="text-xs text-muted-foreground font-sans mt-1">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
