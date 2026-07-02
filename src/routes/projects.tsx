import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Bot, Droplet, Instagram, ExternalLink, Github, ChevronDown, Activity, Clock, CheckCircle2, Zap } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import roverImage from "@/assets/rover.jpg";
import instalensImage from "@/assets/instalens_dashboard.png";
import bridgeImage from "@/assets/bridge.jpg";
import medImage from "@/assets/med.jpg";
import studyImage from "@/assets/study.png";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Hemnath S" },
      { name: "description", content: "AI Study Companion and SENTINEL-AI System." },
      { property: "og:title", content: "Projects — Hemnath S" },
      { property: "og:description", content: "Projects by Hemnath S." },
    ],
  }),
  component: Projects,
});

type Metric = { label: string; value: string; icon: any };
type Project = {
  icon: any;
  title: string;
  subtitle: string;
  description: string;
  role?: string;
  problem?: string;
  outcome: string;
  tech: string[];
  image: string;
  status: "Completed" | "Ongoing" | "Research";
  whyItMatters: string;
  details: {
    howItWorks: string;
    architecture: string;
  };
  links: {
    github?: string;
    demo?: string;
  };
  metrics: Metric[];
};

const projects: Project[] = [
  {
    icon: Bot,
    title: "AI Study Companion",
    subtitle: "NLP-powered Study Tool",
    description: "Built a study companion app that summarizes PDFs using NLP and auto-generates study plans from the syllabus.",
    role: "Developer",
    problem: "Students struggle with managing large amounts of study material and creating effective plans.",
    outcome: "Improved learning efficiency through smart scheduling and content summarization.",
    tech: ["Python", "NLP", "HTML/CSS"],
    image: studyImage,
    status: "Completed",
    whyItMatters: "Helps students save time and learn more effectively by streamlining their study process.",
    details: {
      howItWorks: "The application parses PDF documents using NLP techniques to extract key information and generate concise summaries. It then aligns this data with a provided syllabus to automatically create personalized study schedules.",
      architecture: "Python-based NLP backend for processing text, integrated with a web interface for users to upload documents and view their plans.",
    },
    links: {
      github: "https://github.com/hemnath-web/clever-cortex",
    },
    metrics: [
      { label: "Efficiency", value: "High", icon: Activity },
      { label: "Tech", value: "NLP", icon: Zap },
    ],
  },
  {
    icon: Activity,
    title: "SENTINEL-AI SYSTEM",
    subtitle: "Structural Health Monitoring",
    description: "An early warning system that monitors vibration changes, internal stress, and small cracks in bridges, flyovers, and buildings before failure.",
    outcome: "Detects risks early by continuously monitoring structural signs, preventing unsafe conditions.",
    tech: ["IoT", "Python", "Data Analysis"],
    image: bridgeImage,
    status: "Research",
    whyItMatters: "Continuous monitoring prevents disastrous failures since manual inspections only happen at long intervals.",
    details: {
      howItWorks: "IoT sensors placed on structures continuously collect data on vibrations and stress. This data is analyzed to detect early warning signs of structural degradation, alerting authorities before the structure becomes unsafe.",
      architecture: "IoT sensor network feeding data into a Python-based analytics engine that identifies anomalies and triggers alerts.",
    },
    links: {
      github: "https://github.com/hemnath-web/SENTIAL-AI",
    },
    metrics: [
      { label: "Safety", value: "Proactive", icon: Zap },
      { label: "Monitoring", value: "24/7", icon: Activity },
    ],
  },
  {
    icon: Activity,
    title: "MedLock AI",
    subtitle: "Sovereign Health Data Network",
    description: "Implemented a clean, real-product workflow for a healthcare sovereign network featuring granular consent filtering, AES encryption, and RSA digital prescription signing.",
    outcome: "Achieved 100% automated integration audit passes on a live FastAPI backend with zero simulations and an immutable ledger hash chain.",
    tech: ["FastAPI", "TypeScript", "SQLite", "RSA/AES", "Blockchain"],
    image: medImage,
    status: "Completed",
    whyItMatters: "Ensures strict data privacy and security through granular consent and an immutable ledger, giving patients complete sovereign control over their medical records.",
    details: {
      howItWorks: "Utilizes a live FastAPI backend with an SQLite database. It features Groq-powered document parsing, granular consent mechanisms for filtering access to specific medical records, and emergency bypass capabilities.",
      architecture: "FastAPI backend integrated with an immutable blockchain ledger for integrity tracking, Python-based analytics engine for forensic health claims audits (fraud detection), and a Vite/TypeScript frontend.",
    },
    links: {
      github: "#",
    },
    metrics: [
      { label: "Security", value: "AES/RSA", icon: Zap },
      { label: "Integrity", value: "Immutable", icon: Activity },
    ],
  },
];

function ProjectCard({ p, isFeatured }: { p: Project; isFeatured: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      className={`group glass rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 flex flex-col ${
        isFeatured ? "lg:col-span-2 lg:flex-row" : ""
      }`}
    >
      {/* Visual Proof / Image Section */}
      <div className={`relative overflow-hidden shrink-0 ${isFeatured ? "h-64 sm:h-72 lg:h-auto lg:w-2/5" : "h-48 sm:h-56"}`}>
        <img
          src={p.image}
          alt={p.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border/50 shadow-sm text-xs font-medium z-10">
          {p.status === "Completed" && <CheckCircle2 size={14} className="text-emerald-400" />}
          {p.status === "Ongoing" && <Clock size={14} className="text-blue-400" />}
          {p.status === "Research" && <Activity size={14} className="text-purple-400" />}
          <span className="text-foreground/90">{p.status}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className={`p-7 flex flex-col flex-1 ${isFeatured ? "lg:w-3/5" : ""}`}>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2">{p.subtitle}</p>
            <h3 className="text-2xl font-bold">{p.title}</h3>
          </div>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground shadow-glow group-hover:scale-110 transition-transform">
            <p.icon size={22} />
          </span>
        </div>

        <p className="text-muted-foreground leading-relaxed">{p.description}</p>
        
        {/* Why it matters */}
        <p className="mt-3 text-sm italic text-foreground/80 border-l-2 border-primary/50 pl-3">
          "{p.whyItMatters}"
        </p>

        {/* Impact Metrics */}
        <div className="flex flex-wrap gap-3 mt-5">
          {p.metrics.map((m, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-secondary/40 border border-border/50 rounded-lg px-3 py-1.5">
              <m.icon size={16} className="text-primary" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{m.label}</p>
                <p className="text-sm font-semibold text-foreground">{m.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Expandable Details Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-sm font-medium text-primary mt-6 hover:text-primary/80 transition-colors w-fit"
        >
          {isExpanded ? "Hide Details" : "View Details"}
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown size={16} />
          </motion.div>
        </button>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t border-border/50 space-y-4">
                {p.role && (
                  <div className="text-sm">
                    <span className="text-foreground font-medium">Role: </span>
                    <span className="text-muted-foreground">{p.role}</span>
                  </div>
                )}
                {p.problem && (
                  <div className="text-sm">
                    <span className="text-foreground font-medium">Problem: </span>
                    <span className="text-muted-foreground">{p.problem}</span>
                  </div>
                )}
                <div className="text-sm">
                  <span className="text-foreground font-medium">How it works: </span>
                  <span className="text-muted-foreground">{p.details.howItWorks}</span>
                </div>
                <div className="text-sm">
                  <span className="text-foreground font-medium">Architecture: </span>
                  <span className="text-muted-foreground">{p.details.architecture}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex-1" />

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-2 items-end">
          {p.tech.map((t) => (
            <span key={t} className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-foreground hover:bg-primary/20 transition-colors">
              {t}
            </span>
          ))}
        </div>

        {/* Call to Actions */}
        <div className="mt-6 pt-5 border-t border-border/50 flex items-center gap-3">
          {p.links.demo && (
            <a
              href={p.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors shadow-glow"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          {p.links.github && (
            <a
              href={p.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-foreground text-sm font-medium border border-border hover:bg-secondary/80 transition-colors"
            >
              <Github size={16} />
              View Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <Section eyebrow="Projects" title="Building real-world AI" description="Selected work blending AI, vision, and hardware.">
      <div className="grid gap-6 lg:grid-cols-2 items-start">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} isFeatured={i === 0} />
        ))}
      </div>
    </Section>
  );
}
