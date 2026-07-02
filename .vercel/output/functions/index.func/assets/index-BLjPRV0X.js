import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin, Github, Mail, Cpu, Eye, Activity } from "lucide-react";
import { S as Section } from "./Section-BzLnHX6g.js";
const profileImg = "/assets/profile_new-YQ9gGYKR.jpg";
function Home() {
  return /* @__PURE__ */ jsxs("main", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative mx-auto flex max-w-7xl flex-col-reverse lg:flex-row items-center gap-12 px-6 pt-40 pb-10", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: {
            opacity: 0,
            y: 24
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: 0.6
          },
          className: "flex-1",
          children: [
            /* @__PURE__ */ jsxs("p", { className: "mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-muted-foreground", children: [
              /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-primary animate-pulse" }),
              "Available for opportunities"
            ] }),
            /* @__PURE__ */ jsxs("h1", { className: "text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]", children: [
              "Hi, I'm ",
              /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Hemnath S" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl", children: "Computer Science Student — Skilled in Python and web technologies with project experience in NLP and IoT systems." }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-3", children: [
              /* @__PURE__ */ jsxs(Link, { to: "/projects", className: "group inline-flex items-center gap-2 rounded-full bg-gradient-hero px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105", children: [
                "View Projects",
                /* @__PURE__ */ jsx(ArrowRight, { size: 16, className: "transition-transform group-hover:translate-x-1" })
              ] }),
              /* @__PURE__ */ jsxs("a", { href: "/resume.pdf", download: true, className: "inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary", children: [
                /* @__PURE__ */ jsx(Download, { size: 16 }),
                "Download Resume"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center gap-4", children: [
              /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/hemnath-s-9b69b2358/", target: "_blank", rel: "noreferrer", className: "p-3 rounded-full glass text-muted-foreground hover:text-primary transition-all hover:scale-110", "aria-label": "LinkedIn", children: /* @__PURE__ */ jsx(Linkedin, { size: 18 }) }),
              /* @__PURE__ */ jsx("a", { href: "https://github.com/hemnath-web", target: "_blank", rel: "noreferrer", className: "p-3 rounded-full glass text-muted-foreground hover:text-primary transition-all hover:scale-110", "aria-label": "GitHub", children: /* @__PURE__ */ jsx(Github, { size: 18 }) }),
              /* @__PURE__ */ jsx("a", { href: "mailto:hemnathsridhar23@gmail.com", className: "p-3 rounded-full glass text-muted-foreground hover:text-primary transition-all hover:scale-110", "aria-label": "Email", children: /* @__PURE__ */ jsx(Mail, { size: 18 }) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0,
        scale: 0.9
      }, animate: {
        opacity: 1,
        scale: 1
      }, transition: {
        duration: 0.7,
        delay: 0.1
      }, className: "flex-1 flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-hero rounded-full blur-3xl opacity-40 animate-pulse" }),
        /* @__PURE__ */ jsx("div", { className: "relative h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-gradient-hero p-1 shadow-glow overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full w-full rounded-full bg-card flex items-center justify-center overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: profileImg, alt: "Hemnath S", className: "h-full w-full object-cover" }) }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Section, { eyebrow: "What I Do", title: "Technical Expertise", description: "I specialize in software engineering, natural language processing, and IoT systems.", className: "!pt-12", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 pt-12", children: [{
      title: "Software Engineering",
      description: "Driven to apply technical knowledge to real-world problems and grow as a developer.",
      icon: Cpu
    }, {
      title: "NLP Systems",
      description: "Building applications like AI Study Companions that summarize PDFs and auto-generate plans.",
      icon: Eye
    }, {
      title: "IoT & Monitoring",
      description: "Developing early warning systems for structural health using continuous sensor data.",
      icon: Activity
    }].map((item, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      duration: 0.5,
      delay: i * 0.1
    }, className: "group rounded-3xl border border-border bg-secondary/30 p-8 hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-background border border-border group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-12 transition-all duration-500", children: /* @__PURE__ */ jsx(item.icon, { size: 28 }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-3", children: item.title }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: item.description })
    ] }, item.title)) }) })
  ] });
}
export {
  Home as component
};
