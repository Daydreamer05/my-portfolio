import { motion } from "framer-motion";

const skillCategories = [
  { title: "Scripting", skills: ["Python", "Bash"], icon: "λ" },
  { title: "DevOps Tools", skills: ["Kubernetes", "Docker", "Git", "GitLab CI/CD", "BitBucket CI/CD", "Jenkins", "Ansible", "Terraform"], icon: "⚙" },
  { title: "Databases", skills: ["PostgreSQL", "RDS", "DynamoDB", "NoSQL"], icon: "◉" },
  { title: "Monitoring", skills: ["Prometheus", "Grafana", "CloudWatch"], icon: "◎" },
  { title: "Platforms", skills: ["Linux", "AWS"], icon: "▣" },
  { title: "AWS Services", skills: ["VPC", "EKS", "ECS", "Lambda", "API Gateway", "CloudFront", "S3", "Route 53", "IAM", "SQS", "SNS", "ECR", "Step Functions"], icon: "☁" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const item = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 400, damping: 25 } },
};

const SkillsSection = () => {
  return (
    <section className="py-28 px-4 relative" id="skills">
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
            <span className="text-primary">~$</span> cat skills.json
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient inline-block">Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="card-glass rounded-xl p-5 transition-all duration-500 group"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary text-lg">{category.icon}</span>
                <h3 className="text-primary text-sm font-semibold">{category.title}</h3>
              </div>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={item}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="text-xs font-sans px-3 py-1.5 rounded-lg bg-secondary/80 text-secondary-foreground border border-border/50 cursor-default transition-all duration-200 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
