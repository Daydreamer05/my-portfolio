import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Web Server using Docker",
    description: "Hosted a static website using Apache and Nginx docker images with static files as Volumes.",
    tags: ["Docker", "Apache", "Nginx"],
    color: "142 72% 50%",
  },
  {
    title: "AWS Infrastructure with Terraform & GitLab CI/CD",
    description: "Created a GitLab CI/CD pipeline to automate infrastructure provisioning on AWS using Terraform.",
    tags: ["Terraform", "GitLab CI/CD", "AWS"],
    color: "165 80% 45%",
  },
  {
    title: "Kubernetes Deployment",
    description: "Built a complete repository with all required Kubernetes manifest files including services and ingress.",
    tags: ["Kubernetes", "YAML", "Ingress"],
    color: "200 80% 50%",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-28 px-4 relative" id="projects">
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
            <span className="text-primary">~$</span> ls ~/projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient inline-block">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: "spring" as const, stiffness: 80, damping: 20 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="card-glass rounded-xl p-6 relative overflow-hidden group cursor-default"
            >
              {/* Top gradient accent */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, hsl(${project.color}), transparent)` }}
                initial={{ scaleX: 0, transformOrigin: "left" }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.3, duration: 0.6 }}
              />

              {/* Background glow on hover */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[60px]"
                style={{ background: `hsl(${project.color} / 0.1)` }}
              />

              <div className="relative">
                <motion.div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/80 mb-4"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring" as const, stiffness: 300 }}
                >
                  <FolderGit2 size={20} className="text-primary" />
                </motion.div>

                <h3 className="font-bold text-sm mb-3 group-hover:text-primary transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground font-sans mb-5 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, j) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.05, type: "spring" as const, stiffness: 300 }}
                      className="text-[10px] px-2.5 py-1 rounded-full bg-secondary/60 text-primary/80 border border-border/50 font-sans"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
