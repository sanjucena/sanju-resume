"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    name: "Email",
    value: "hello@alexchen.dev",
    href: "mailto:hello@alexchen.dev",
    icon: Mail,
    description: "Drop me a line",
  },
  {
    name: "GitHub",
    value: "@alexchen",
    href: "https://github.com",
    icon: Github,
    description: "Check out my code",
  },
  {
    name: "LinkedIn",
    value: "in/alexchen",
    href: "https://linkedin.com",
    icon: Linkedin,
    description: "Connect with me",
  },
  {
    name: "Twitter",
    value: "@alexchen_dev",
    href: "https://twitter.com",
    icon: Twitter,
    description: "Follow my journey",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">
            Contact
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </p>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            I&apos;m currently open to new opportunities. Whether you have a question
            or just want to say hi, my inbox is always open. I&apos;ll try my best
            to get back to you!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group block"
            >
              <div className="bg-card/50 border border-border rounded-xl p-6 text-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 flex items-center justify-center gap-1">
                  {link.name}
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-sm text-primary font-medium mb-1">
                  {link.value}
                </p>
                <p className="text-xs text-muted-foreground">
                  {link.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="mailto:hello@alexchen.dev"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
