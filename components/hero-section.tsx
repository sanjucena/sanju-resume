"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:hello@alexchen.dev",
    icon: Mail,
  },
];

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-16 items-start">
          {/* Left Column - Profile & Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            {/* Profile Image */}
            <div className="relative mb-8">
              <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-2xl overflow-hidden ring-4 ring-primary/20 shadow-xl">
                <Image
                  src="/placeholder-user.jpg"
                  alt="Alex Chen"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-accent rounded-full ring-4 ring-background" />
            </div>

            {/* Name & Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2 tracking-tight">
              Alex Chen
            </h1>
            <p className="text-lg text-primary font-medium mb-4">
              Full Stack Developer
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              I build accessible, pixel-perfect digital experiences for the web.
            </p>

            {/* Navigation */}
            <nav className="hidden lg:block mb-8">
              <ul className="space-y-3">
                {["About", "Experience", "Projects", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="group flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="w-8 h-px bg-muted-foreground/40 mr-4 transition-all group-hover:w-16 group-hover:bg-foreground" />
                      <span className="uppercase tracking-widest font-medium">
                        {item}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div id="about" className="scroll-mt-24">
              <p className="text-foreground text-lg leading-relaxed">
                I&apos;m a developer passionate about crafting accessible, pixel-perfect
                user interfaces that blend thoughtful design with robust
                engineering. My favorite work lies at the intersection of design
                and development, creating experiences that not only look great
                but are meticulously built for performance and usability.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Currently, I&apos;m a Senior Developer at{" "}
              <a
                href="#"
                className="font-medium text-foreground hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4"
              >
                TechCorp
              </a>
              , specializing in full-stack development. I contribute to the
              creation and maintenance of products that power our platform,
              ensuring our systems meet high standards of accessibility and
              performance.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              In the past, I&apos;ve had the opportunity to develop software across a
              variety of settings — from{" "}
              <span className="font-medium text-foreground">startups</span> and{" "}
              <span className="font-medium text-foreground">
                large corporations
              </span>{" "}
              to{" "}
              <span className="font-medium text-foreground">
                digital agencies
              </span>{" "}
              and{" "}
              <span className="font-medium text-foreground">
                consulting firms
              </span>
              . Additionally, I maintain several open-source projects and
              contribute to developer communities.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              In my spare time, I&apos;m usually exploring new technologies, building
              side projects, reading tech blogs, or contributing to open-source
              projects that make developers&apos; lives easier.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
