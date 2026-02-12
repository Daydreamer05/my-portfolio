import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Forge Quest Private Limited",
    location: "Bangalore",
    period: "November 2024 - Present",
    highlights: [
      "Led DevOps automation for a Web3 gaming platform, automating 90% of deployments using Terraform, Bitbucket Pipelines, and Jenkins.",
      "Developed modular Jenkins shared libraries in Groovy, standardizing pipeline logic.",
      "Refactored AWS infrastructure achieving a 20% cost reduction.",
      "Built internal dashboard (Python + ReactJS) to visualize CloudWatch logs.",
      "Deployed Jenkins on EKS with high-availability CI/CD infrastructure.",
      "Managed containerized services using ECS Fargate with seamless releases.",
      "Configured Caddy as reverse proxy with automatic TLS via ACME.",
    ],
  },
  {
    company: "Mitsogo Technologies",
    location: "Chennai",
    period: "June 2022 - Present",
    highlights: [
      "Built DevOps backbone for a scalable MDM/UEM platform across distributed systems.",
      "Containerized services using Docker and AWS EKS, improving scalability.",
      "Developed CI/CD pipelines automating build, test, and delivery processes.",
      "Automated infrastructure provisioning using Terraform and Ansible.",
      "Enabled observability with Prometheus + Grafana monitoring and Slack alerts.",
      "Integrated security checks and compliance gates within CI/CD workflows.",
    ],
  },
];

const highlightVariants = {
  hidden: { opacity: 0, x: -10 },
  show: (j: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: j * 0.06, duration: 0.4 },
  }),
};

const ExperienceSection = () => {
  return (
    <section className="py-24 px-4" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-muted-foreground text-sm mb-2">
            <span className="text-primary">~$</span> history --work
          </p>
          <h2 className="text-3xl font-bold">Experience</h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.01 }}
              className="border border-border rounded-lg p-6 bg-card relative overflow-hidden group hover:border-primary/30 transition-all duration-300"
            >
              <motion.div
                className="absolute top-0 left-0 w-1 h-full bg-primary/50"
                whileHover={{ width: 4 }}
                transition={{ duration: 0.2 }}
              />
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-2 rounded-md bg-secondary mt-1"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Briefcase size={18} className="text-primary" />
                </motion.div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="text-lg font-bold">{exp.company}</h3>
                    <span className="text-xs text-muted-foreground font-sans">{exp.period}</span>
                  </div>
                  <p className="text-xs text-primary mb-4 font-sans">{exp.location}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((item, j) => (
                      <motion.li
                        key={j}
                        custom={j}
                        variants={highlightVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-sm text-muted-foreground font-sans flex gap-2"
                      >
                        <motion.span
                          className="text-primary mt-1 shrink-0"
                          whileHover={{ x: 3 }}
                        >
                          ›
                        </motion.span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
