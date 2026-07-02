import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight, Cpu, Eye, Activity } from "lucide-react";
import { Section } from "@/components/Section";
import profileImg from "@/assets/profile_poster_new.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hemnath S — Computer Science Student" },
      {
        name: "description",
        content: "Computer Science student passionate about software engineering, NLP, and IoT.",
      },
      { property: "og:title", content: "Hemnath S — Computer Science Student" },
      {
        property: "og:description",
        content: "Portfolio of Hemnath S — B.Tech CSE student.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="relative overflow-hidden">
      <section className="relative mx-auto flex max-w-7xl flex-col-reverse lg:flex-row items-center gap-12 px-6 pt-40 pb-10">
        {/* ... existing hero code ... */}
        <motion.div
          // ... around line 30 ...
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Available for opportunities
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="text-gradient">Hemnath S</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl">
            Computer Science Student — Skilled in Python and web technologies with project experience in NLP and IoT systems.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-hero px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/hemnath-s-9b69b2358/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full glass text-muted-foreground hover:text-primary transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/hemnath-web"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full glass text-muted-foreground hover:text-primary transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:hemnathsridhar23@gmail.com"
              className="p-3 rounded-full glass text-muted-foreground hover:text-primary transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-hero rounded-full blur-3xl opacity-40 animate-pulse" />
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-gradient-hero p-1 shadow-glow overflow-hidden">
              <div className="h-full w-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                <img
                  src={profileImg}
                  alt="Hemnath S"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <Section
        eyebrow="What I Do"
        title="Technical Expertise"
        description="I specialize in software engineering, natural language processing, and IoT systems."
        className="!pt-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {[
            {
              title: "Software Engineering",
              description: "Driven to apply technical knowledge to real-world problems and grow as a developer.",
              icon: Cpu,
            },
            {
              title: "NLP Systems",
              description: "Building applications like AI Study Companions that summarize PDFs and auto-generate plans.",
              icon: Eye,
            },
            {
              title: "IoT & Monitoring",
              description: "Developing early warning systems for structural health using continuous sensor data.",
              icon: Activity,
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-3xl border border-border bg-secondary/30 p-8 hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-background border border-border group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-12 transition-all duration-500">
                <item.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </main>
  );
}
