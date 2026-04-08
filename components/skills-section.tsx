"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Frontend",
    color: "bg-sky-500/10 text-sky-600 border-sky-500/20 hover:bg-sky-500/20",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vue.js",
      "HTML/CSS",
      "JavaScript",
      "Framer Motion",
    ],
  },
  {
    name: "Backend",
    color:
      "bg-teal-500/10 text-teal-600 border-teal-500/20 hover:bg-teal-500/20",
    skills: [
      "Node.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "GraphQL",
      "REST APIs",
      "Prisma",
      "Redis",
    ],
  },
  {
    name: "DevOps",
    color:
      "bg-violet-500/10 text-violet-600 border-violet-500/20 hover:bg-violet-500/20",
    skills: [
      "Docker",
      "AWS",
      "CI/CD",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Vercel",
      "Linux",
    ],
  },
  {
    name: "Security",
    color:
      "bg-rose-500/10 text-rose-600 border-rose-500/20 hover:bg-rose-500/20",
    skills: [
      "OAuth 2.0",
      "JWT",
      "OWASP",
      "SSL/TLS",
      "Encryption",
      "Penetration Testing",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function SkillsSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">
            Skills
          </h2>
          <p className="text-3xl font-bold text-foreground">
            Technologies I Work With
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      category.name === "Frontend"
                        ? "bg-sky-500"
                        : category.name === "Backend"
                          ? "bg-teal-500"
                          : category.name === "DevOps"
                            ? "bg-violet-500"
                            : "bg-rose-500"
                    }`}
                  />
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1.5 text-sm font-medium rounded-lg border transition-colors cursor-default ${category.color}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
