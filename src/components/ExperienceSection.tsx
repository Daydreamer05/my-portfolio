import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Forge Quest Private Limited",
    location: "Bangalore",
    period: "November 2024 - Present",
    role: "DevOps Engineer",
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
    period: "June 2022 - November 2024",
    role: "DevOps Engineer",
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

const ExperienceSection = () => {
  return (
    <section className="py-28 px-4 relative" id="experience">
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
            <span className="text-primary">~$</span> history --work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient inline-block">Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, type: "spring" as const, stiffness: 80, damping: 20 }}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-[14px] top-6 w-[11px] h-[11px] rounded-full bg-primary glow-dot hidden md:block z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + 0.3, type: "spring" as const, stiffness: 300 }}
                />

                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                  className="card-glass rounded-xl p-6 relative overflow-hidden group"
                >
                  {/* Gradient accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] gradient-line opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{exp.company}</h3>
                      <p className="text-sm text-primary/80 font-sans mt-0.5">{exp.role}</p>
                    </div>
                    <div className="flex flex-col gap-1 mt-2 md:mt-0 md:text-right">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-sans">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-sans">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.highlights.map((item, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + j * 0.05 }}
                        className="text-sm text-muted-foreground font-sans flex gap-3 group/item"
                      >
                        <span className="text-primary mt-0.5 shrink-0 group-hover/item:translate-x-1 transition-transform">›</span>
                        <span className="group-hover/item:text-foreground/80 transition-colors">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
