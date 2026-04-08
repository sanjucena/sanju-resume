"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import Image from "next/image";

const featuredProjects = [
  {
    title: "Cloud Analytics Dashboard",
    description:
      "A comprehensive analytics platform for monitoring cloud infrastructure. Features real-time data visualization, alerting systems, and cost optimization recommendations.",
    image: "/placeholder.svg",
    technologies: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with inventory management, payment processing, and customer analytics. Built with scalability and security in mind.",
    image: "/placeholder.svg",
    technologies: ["Next.js", "Stripe", "Prisma", "Tailwind CSS", "Vercel"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Developer Collaboration Tool",
    description:
      "Real-time collaboration platform for development teams featuring code sharing, live editing, and integrated version control with WebSocket communication.",
    image: "/placeholder.svg",
    technologies: ["Vue.js", "Socket.io", "Redis", "Docker", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

const otherProjects = [
  {
    title: "CLI Task Manager",
    description:
      "A command-line tool for managing tasks and projects with Git integration.",
    technologies: ["Go", "SQLite", "Cobra"],
    github: "https://github.com",
  },
  {
    title: "Weather API Wrapper",
    description:
      "A TypeScript library that provides a unified interface for multiple weather APIs.",
    technologies: ["TypeScript", "Jest", "npm"],
    github: "https://github.com",
  },
  {
    title: "Markdown Note App",
    description:
      "Minimal markdown editor with local-first sync and cloud backup capabilities.",
    technologies: ["React", "IndexedDB", "PWA"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Portfolio Template",
    description:
      "An open-source portfolio template for developers built with modern technologies.",
    technologies: ["Next.js", "Tailwind", "MDX"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-b from-background via-card/30 to-background scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">
            Projects
          </h2>
          <p className="text-3xl font-bold text-foreground">
            Things I&apos;ve Built
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card/30 border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto bg-muted overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background/10" />
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <p className="text-primary text-sm font-medium mb-2">
                      Featured Project
                    </p>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono font-medium rounded bg-muted text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h3 className="text-xl font-bold text-foreground text-center mb-8">
            Other Noteworthy Projects
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="group h-full bg-card/50 border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
