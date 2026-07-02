import { jsx, jsxs } from "react/jsx-runtime";
import { S as Section } from "./Section-BzLnHX6g.js";
import { Calendar, GraduationCap, BrainCircuit, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
const coursework = ["Data Structures", "Software Engineering", "Web Technologies", "Database Management"];
function Education() {
  return /* @__PURE__ */ jsx(Section, { eyebrow: "Education", title: "Academic Journey", description: "Focusing on Artificial Intelligence, Computer Vision, and Embedded Systems.", children: /* @__PURE__ */ jsxs("div", { className: "mt-8 grid gap-6 lg:grid-cols-12 items-start", children: [
    /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 30
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-40px"
    }, transition: {
      duration: 0.5
    }, className: "lg:col-span-4 glass rounded-3xl p-8 shadow-card flex flex-col gap-6 h-full", children: [
      /* @__PURE__ */ jsxs("h4", { className: "flex items-center gap-2 text-foreground font-semibold pb-4 border-b border-border/40", children: [
        /* @__PURE__ */ jsx(Calendar, { size: 18, className: "text-primary" }),
        "Timeline"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8 relative pl-2 pt-2", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-[20px] top-4 bottom-4 w-0.5 bg-border/50" }),
        /* @__PURE__ */ jsxs("div", { className: "relative flex items-center gap-5 group", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-8 h-8 rounded-full bg-secondary border border-border z-10 transition-colors group-hover:border-primary/50 group-hover:bg-primary/10", children: /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-muted-foreground transition-colors group-hover:bg-primary" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground", children: "Graduation" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "2027 (Expected)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative flex items-center gap-5 group", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 border border-primary/50 z-10 shadow-glow", children: /* @__PURE__ */ jsx("span", { className: "w-3 h-3 rounded-full bg-primary animate-pulse" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-primary", children: "4th Year" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Current Status" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative flex items-center gap-5 group", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-8 h-8 rounded-full bg-secondary border border-border z-10", children: /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-muted-foreground" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground", children: "Enrolled" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "2023" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(motion.div, { initial: {
      opacity: 0,
      y: 30
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-40px"
    }, transition: {
      duration: 0.6,
      delay: 0.1
    }, className: "lg:col-span-8 flex flex-col gap-6", children: /* @__PURE__ */ jsxs("div", { className: "glass rounded-3xl p-8 shadow-card border border-border/40 hover:border-border/80 transition-colors", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-start gap-6 mb-8", children: [
        /* @__PURE__ */ jsx("span", { className: "flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-hero text-primary-foreground shadow-glow transition-transform duration-300 hover:scale-105 hover:-rotate-3", children: /* @__PURE__ */ jsx(GraduationCap, { size: 32 }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-display font-bold tracking-tight text-foreground", children: "Sri Manakula Vinayagar Engineering College" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-primary/90 mt-1 font-medium", children: "B.Tech CSE" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-background/50 border border-border/50 p-6 transition-colors hover:border-primary/30", children: [
          /* @__PURE__ */ jsxs("h4", { className: "flex items-center gap-2 text-foreground font-semibold mb-4", children: [
            /* @__PURE__ */ jsx(BrainCircuit, { size: 18, className: "text-primary" }),
            "Academic Focus"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed text-sm", children: "Deeply focused on the intersection of software engineering, data analytics, and intelligent systems. My academic path equips me to build robust web solutions, leverage Python for NLP applications, and integrate IoT systems to solve real-world problems." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-background/50 border border-border/50 p-6 transition-colors hover:border-primary/30", children: [
          /* @__PURE__ */ jsxs("h4", { className: "flex items-center gap-2 text-foreground font-semibold mb-4", children: [
            /* @__PURE__ */ jsx(BookOpen, { size: 18, className: "text-primary" }),
            "Relevant Coursework"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: coursework.map((course, i) => /* @__PURE__ */ jsx(motion.span, { initial: {
            opacity: 0,
            scale: 0.9
          }, whileInView: {
            opacity: 1,
            scale: 1
          }, viewport: {
            once: true
          }, transition: {
            delay: 0.4 + i * 0.1
          }, className: "px-3 py-1.5 text-xs font-medium rounded-full border border-border/60 bg-secondary/60 text-foreground/80 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 shadow-sm", children: course }, course)) })
        ] })
      ] })
    ] }) })
  ] }) });
}
export {
  Education as component
};
