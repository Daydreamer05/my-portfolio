import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "Web Server using Docker",
    description: "Hosted a static website using Apache and Nginx docker images with static files as Volumes.",
    tags: ["Docker", "Apache", "Nginx"],
  },
  {
    title: "Infrastructure on AWS with Terraform & GitLab CI/CD",
    description: "Created a GitLab CI/CD pipeline to automate infrastructure provisioning on AWS using Terraform.",
    tags: ["Terraform", "GitLab CI/CD", "AWS"],
  },
  {
    title: "Kubernetes Deployment",
    description: "Built a complete repository with all required Kubernetes manifest files including services and ingress.",
    tags: ["Kubernetes", "YAML", "Ingress"],
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 px-4" id="projects">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-muted-foreground text-sm mb-2">
            <span className="text-primary">~$</span> ls ~/projects
          </p>
          <h2 className="text-3xl font-bold">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="border border-border rounded-lg p-5 bg-card hover:border-primary/30 transition-all group"
            >
              <FolderGit2 size={20} className="text-primary mb-3" />
              <h3 className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-xs text-muted-foreground font-sans mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-1 rounded bg-secondary text-primary border border-border font-sans"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
