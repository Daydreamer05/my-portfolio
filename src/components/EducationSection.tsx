import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const courses = ["Cloud Computing", "Data Structures", "Networking", "Databases", "Python", "Data Science"];

const EducationSection = () => {
  return (
    <section className="py-28 px-4 relative" id="education">
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
            <span className="text-primary">~$</span> cat education.log
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient inline-block">Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.5 }}
          className="card-glass rounded-xl p-6 relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] gradient-line opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="flex items-start gap-4">
            <motion.div
              className="p-3 rounded-xl bg-primary/10 border border-primary/20"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring" as const, stiffness: 300 }}
            >
              <GraduationCap size={24} className="text-primary" />
            </motion.div>
            <div className="flex-1">
              <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                Vel Tech DR.Rangarajan DR.Sagunthala R&D Institute
              </h3>
              <p className="text-sm text-primary/80 font-sans mt-1">Chennai • June 2018 - June 2022</p>
              <p className="text-sm text-muted-foreground font-sans mt-2">
                B.Tech - Electronics And Communications Engineering
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-2xl font-bold text-gradient">8.7</span>
                <span className="text-xs text-muted-foreground font-sans">GPA</span>
              </div>

              <div className="mt-5 pt-4 border-t border-border/30">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={14} className="text-primary" />
                  <span className="text-xs text-muted-foreground font-sans uppercase tracking-wider">Relevant Courses</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course, i) => (
                    <motion.span
                      key={course}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="text-xs font-sans px-3 py-1.5 rounded-lg bg-secondary/60 text-secondary-foreground border border-border/50"
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
