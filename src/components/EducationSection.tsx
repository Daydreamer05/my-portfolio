import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="py-24 px-4" id="education">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-muted-foreground text-sm mb-2">
            <span className="text-primary">~$</span> cat education.log
          </p>
          <h2 className="text-3xl font-bold">Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-border rounded-lg p-6 bg-card hover:border-primary/30 transition-colors"
        >
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-md bg-secondary">
              <GraduationCap size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-bold">Vel Tech DR.Rangarajan DR.Sagunthala R&D Institute</h3>
              <p className="text-xs text-primary font-sans mt-1">Chennai • June 2018 - June 2022</p>
              <p className="text-sm text-muted-foreground font-sans mt-2">
                B.Tech - Electronics And Communications Engineering
              </p>
              <p className="text-xs text-muted-foreground font-sans mt-1">GPA: 8.7</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
