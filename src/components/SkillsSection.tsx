import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Scripting",
    skills: ["Python", "Bash"],
  },
  {
    title: "DevOps Tools",
    skills: ["Kubernetes", "Docker", "Git", "GitLab CI/CD", "BitBucket CI/CD", "Jenkins", "Ansible", "Terraform"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "RDS", "DynamoDB", "NoSQL"],
  },
  {
    title: "Monitoring",
    skills: ["Prometheus", "Grafana", "CloudWatch"],
  },
  {
    title: "Platforms",
    skills: ["Linux", "AWS"],
  },
  {
    title: "AWS Services",
    skills: ["VPC", "EKS", "ECS", "Lambda", "API Gateway", "CloudFront", "S3", "Route 53", "IAM", "SQS", "SNS", "ECR", "Step Functions"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 px-4" id="skills">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-border rounded-lg p-5 bg-card hover:border-primary/30 transition-colors"
            >
              <h3 className="text-primary text-sm font-semibold mb-3">{`// ${category.title}`}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-sans px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground border border-border"
                  >
                    {skill}
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

export default SkillsSection;
