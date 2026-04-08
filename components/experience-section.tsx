"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    period: "2022 — Present",
    title: "Senior Full Stack Developer",
    company: "TechCorp",
    companyUrl: "https://example.com",
    description:
      "Build and maintain critical components used to construct web applications, working closely with cross-functional teams including developers, designers, and product managers to implement and advocate for best practices in web development.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    period: "2020 — 2022",
    title: "Full Stack Developer",
    company: "Digital Agency Co.",
    companyUrl: "https://example.com",
    description:
      "Developed and shipped highly interactive web applications for diverse clients. Collaborated with designers and product managers to create performant and accessible user interfaces.",
    technologies: ["Vue.js", "Python", "Django", "MongoDB", "Docker"],
  },
  {
    period: "2018 — 2020",
    title: "Frontend Developer",
    company: "StartupXYZ",
    companyUrl: "https://example.com",
    description:
      "Built and improved core features of the company's flagship product. Implemented responsive designs and ensured cross-browser compatibility while maintaining code quality through testing.",
    technologies: ["React", "JavaScript", "SCSS", "Redux", "Jest"],
  },
  {
    period: "2017 — 2018",
    title: "Junior Developer",
    company: "WebDev Studio",
    companyUrl: "https://example.com",
    description:
      "Assisted in developing client websites and internal tools. Gained experience in full-stack development while contributing to agile team workflows.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">
            Experience
          </h2>
          <p className="text-3xl font-bold text-foreground">
            Where I&apos;ve Worked
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-card/30 border border-border rounded-2xl p-6 hover:bg-card/60 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="grid lg:grid-cols-[140px_1fr] gap-4">
                    {/* Period */}
                    <div className="text-sm text-muted-foreground font-medium">
                      {exp.period}
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                        {exp.title} · {exp.company}
                        <ExternalLink className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                      </h3>
                      <p className="text-muted-foreground mt-2 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors group"
          >
            View Full Résumé
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
