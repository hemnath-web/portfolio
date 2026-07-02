import { jsx, jsxs } from "react/jsx-runtime";
import { S as Section } from "./Section-BzLnHX6g.js";
import { Activity, Zap, Bot, CheckCircle2, Clock, ChevronDown, ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const bridgeImage = "/assets/bridge-BGEQnQ63.jpg";
const medImage = "/assets/med-bSyML4NU.jpg";
const studyImage = "/assets/study-DanE7vEN.png";
const projects = [{
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
    architecture: "Python-based NLP backend for processing text, integrated with a web interface for users to upload documents and view their plans."
  },
  links: {
    github: "https://github.com/hemnath-web/clever-cortex"
  },
  metrics: [{
    label: "Efficiency",
    value: "High",
    icon: Activity
  }, {
    label: "Tech",
    value: "NLP",
    icon: Zap
  }]
}, {
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
    architecture: "IoT sensor network feeding data into a Python-based analytics engine that identifies anomalies and triggers alerts."
  },
  links: {
    github: "https://github.com/hemnath-web/SENTIAL-AI"
  },
  metrics: [{
    label: "Safety",
    value: "Proactive",
    icon: Zap
  }, {
    label: "Monitoring",
    value: "24/7",
    icon: Activity
  }]
}, {
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
    architecture: "FastAPI backend integrated with an immutable blockchain ledger for integrity tracking, Python-based analytics engine for forensic health claims audits (fraud detection), and a Vite/TypeScript frontend."
  },
  links: {
    github: "#"
  },
  metrics: [{
    label: "Security",
    value: "AES/RSA",
    icon: Zap
  }, {
    label: "Integrity",
    value: "Immutable",
    icon: Activity
  }]
}];
function ProjectCard({
  p,
  isFeatured
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  return /* @__PURE__ */ jsxs("article", { className: `group glass rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 flex flex-col ${isFeatured ? "lg:col-span-2 lg:flex-row" : ""}`, children: [
    /* @__PURE__ */ jsxs("div", { className: `relative overflow-hidden shrink-0 ${isFeatured ? "h-64 sm:h-72 lg:h-auto lg:w-2/5" : "h-48 sm:h-56"}`, children: [
      /* @__PURE__ */ jsx("img", { src: p.image, alt: p.title, className: "absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" }),
      /* @__PURE__ */ jsxs("div", { className: "absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border/50 shadow-sm text-xs font-medium z-10", children: [
        p.status === "Completed" && /* @__PURE__ */ jsx(CheckCircle2, { size: 14, className: "text-emerald-400" }),
        p.status === "Ongoing" && /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-blue-400" }),
        p.status === "Research" && /* @__PURE__ */ jsx(Activity, { size: 14, className: "text-purple-400" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground/90", children: p.status })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `p-7 flex flex-col flex-1 ${isFeatured ? "lg:w-3/5" : ""}`, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4 mb-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-primary mb-2", children: p.subtitle }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold", children: p.title })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground shadow-glow group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(p.icon, { size: 22 }) })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: p.description }),
      /* @__PURE__ */ jsxs("p", { className: "mt-3 text-sm italic text-foreground/80 border-l-2 border-primary/50 pl-3", children: [
        '"',
        p.whyItMatters,
        '"'
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3 mt-5", children: p.metrics.map((m, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-secondary/40 border border-border/50 rounded-lg px-3 py-1.5", children: [
        /* @__PURE__ */ jsx(m.icon, { size: 16, className: "text-primary" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: m.label }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-foreground", children: m.value })
        ] })
      ] }, idx)) }),
      /* @__PURE__ */ jsxs("button", { onClick: () => setIsExpanded(!isExpanded), className: "flex items-center gap-2 text-sm font-medium text-primary mt-6 hover:text-primary/80 transition-colors w-fit", children: [
        isExpanded ? "Hide Details" : "View Details",
        /* @__PURE__ */ jsx(motion.div, { animate: {
          rotate: isExpanded ? 180 : 0
        }, transition: {
          duration: 0.3
        }, children: /* @__PURE__ */ jsx(ChevronDown, { size: 16 }) })
      ] }),
      /* @__PURE__ */ jsx(AnimatePresence, { children: isExpanded && /* @__PURE__ */ jsx(motion.div, { initial: {
        height: 0,
        opacity: 0
      }, animate: {
        height: "auto",
        opacity: 1
      }, exit: {
        height: 0,
        opacity: 0
      }, transition: {
        duration: 0.3,
        ease: "easeInOut"
      }, className: "overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "pt-4 mt-4 border-t border-border/50 space-y-4", children: [
        p.role && /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
          /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "Role: " }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: p.role })
        ] }),
        p.problem && /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
          /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "Problem: " }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: p.problem })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
          /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "How it works: " }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: p.details.howItWorks })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
          /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "Architecture: " }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: p.details.architecture })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "flex-1" }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-2 items-end", children: p.tech.map((t) => /* @__PURE__ */ jsx("span", { className: "rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-foreground hover:bg-primary/20 transition-colors", children: t }, t)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 pt-5 border-t border-border/50 flex items-center gap-3", children: [
        p.links.demo && /* @__PURE__ */ jsxs("a", { href: p.links.demo, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors shadow-glow", children: [
          /* @__PURE__ */ jsx(ExternalLink, { size: 16 }),
          "Live Demo"
        ] }),
        p.links.github && /* @__PURE__ */ jsxs("a", { href: p.links.github, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-foreground text-sm font-medium border border-border hover:bg-secondary/80 transition-colors", children: [
          /* @__PURE__ */ jsx(Github, { size: 16 }),
          "View Code"
        ] })
      ] })
    ] })
  ] });
}
function Projects() {
  return /* @__PURE__ */ jsx(Section, { eyebrow: "Projects", title: "Building real-world AI", description: "Selected work blending AI, vision, and hardware.", children: /* @__PURE__ */ jsx("div", { className: "grid gap-6 lg:grid-cols-2 items-start", children: projects.map((p, i) => /* @__PURE__ */ jsx(ProjectCard, { p, isFeatured: i === 0 }, p.title)) }) });
}
export {
  Projects as component
};
