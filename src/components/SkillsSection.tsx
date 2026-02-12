import { motion } from "framer-motion";

const skillCategories = [
  { title: "Scripting", skills: ["Python", "Bash"] },
  { title: "DevOps Tools", skills: ["Kubernetes", "Docker", "Git", "GitLab CI/CD", "BitBucket CI/CD", "Jenkins", "Ansible", "Terraform"] },
  { title: "Databases", skills: ["PostgreSQL", "RDS", "DynamoDB", "NoSQL"] },
  { title: "Monitoring", skills: ["Prometheus", "Grafana", "CloudWatch"] },
  { title: "Platforms", skills: ["Linux", "AWS"] },
  { title: "AWS Services", skills: ["VPC", "EKS", "ECS", "Lambda", "API Gateway", "CloudFront", "S3", "Route 53", "IAM", "SQS", "SNS", "ECR", "Step Functions"] },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 300, damping: 20 } },
};

const SkillsSection = () => {
  return (
    <section className="py-24 px-4" id="skills">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-muted-foreground text-sm mb-2">
            <span className="text-primary">~$</span> cat skills.json
          </p>
          <h2 className="text-3xl font-bold">Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, borderColor: "hsl(142 72% 50% / 0.4)" }}
              className="border border-border rounded-lg p-5 bg-card transition-all duration-300"
            >
              <h3 className="text-primary text-sm font-semibold mb-3">{`// ${category.title}`}</h3>
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
                    whileHover={{ scale: 1.1, backgroundColor: "hsl(142 72% 50% / 0.15)" }}
                    className="text-xs font-sans px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground border border-border cursor-default transition-colors"
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
