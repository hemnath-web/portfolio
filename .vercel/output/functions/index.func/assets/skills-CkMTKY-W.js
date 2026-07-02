import { jsxs, jsx } from "react/jsx-runtime";
import { S as Section } from "./Section-BzLnHX6g.js";
import { Code2, Cpu, Wrench, Users } from "lucide-react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
const groups = [{
  icon: Code2,
  title: "Web & Core Technologies",
  description: "Building the foundation for robust web applications and backend systems using modern technologies.",
  items: ["Python", "HTML", "CSS", "JavaScript", "MySQL", "Power BI"],
  colSpan: "md:col-span-2",
  highlight: true
}, {
  icon: Cpu,
  title: "AI & NLP",
  description: "Developing intelligent systems such as AI study companions that process and summarize data.",
  items: ["NLP", "Data Analytics"],
  colSpan: "md:col-span-1",
  highlight: false
}, {
  icon: Wrench,
  title: "IoT Systems",
  description: "Bringing code to life through embedded electronics and structural monitoring.",
  items: ["IoT", "Sensors Data Processing"],
  colSpan: "md:col-span-1",
  highlight: false
}, {
  icon: Users,
  title: "Soft Skills",
  description: "Collaborating effectively and leading teams to successful project delivery.",
  items: ["Team Management", "Leadership", "Communication"],
  colSpan: "md:col-span-2",
  highlight: false
}];
const currentlyLearning = ["Deep Learning", "Data Analytics", "MERN Stack", "App Development"];
function SkillCard({
  g,
  index
}) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const [opacity, setOpacity] = useState(0);
  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };
  return /* @__PURE__ */ jsxs(motion.div, { initial: {
    opacity: 0,
    y: 30
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true,
    margin: "-40px"
  }, transition: {
    duration: 0.5,
    delay: index * 0.1,
    ease: "easeOut"
  }, ref: divRef, onMouseMove: handleMouseMove, onMouseEnter: () => setOpacity(1), onMouseLeave: () => setOpacity(0), className: `group relative glass rounded-3xl p-8 shadow-card overflow-hidden ${g.colSpan} ${g.highlight ? "border border-primary/30 shadow-[0_0_30px_rgba(var(--color-primary),0.1)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]" : "border border-border/40 hover:border-border/80 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]"}`, children: [
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-3xl", style: {
      opacity,
      background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, color-mix(in oklab, var(--primary) 15%, transparent), transparent 40%)`
    } }),
    g.highlight && /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
        /* @__PURE__ */ jsx("span", { className: `flex h-12 w-12 items-center justify-center rounded-2xl text-primary-foreground shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${g.highlight ? "bg-gradient-hero shadow-glow animate-pulse" : "bg-primary/80"}`, children: /* @__PURE__ */ jsx(g.icon, { size: 22 }) }),
        /* @__PURE__ */ jsx("h3", { className: "font-display font-semibold text-2xl tracking-tight text-foreground", children: g.title })
      ] }),
      /* @__PURE__ */ jsx("p", { className: `text-muted-foreground leading-relaxed mb-8 flex-grow ${g.highlight ? "text-lg max-w-lg" : "text-base"}`, children: g.description }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: g.items.map((item) => /* @__PURE__ */ jsx("span", { className: "rounded-full border border-border/50 bg-secondary/30 px-4 py-2 text-sm text-foreground/80 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-primary/40 hover:bg-secondary/60 hover:text-foreground", children: item }, item)) })
    ] })
  ] });
}
function Skills() {
  return /* @__PURE__ */ jsxs(Section, { eyebrow: "Skills", title: "Tools I build with", description: "Bridging the gap between intelligent algorithms and hardware execution.", children: [
    /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-3 mt-4 relative", children: groups.map((g, idx) => /* @__PURE__ */ jsx(SkillCard, { g, index: idx }, g.title)) }),
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
      duration: 0.5,
      delay: 0.4,
      ease: "easeOut"
    }, className: "mt-12 group relative overflow-hidden rounded-3xl border border-dashed border-border/80 bg-secondary/10 p-8 flex flex-col md:flex-row md:items-center gap-6 justify-between transition-all duration-500 hover:border-primary/40 hover:bg-secondary/30", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h4", { className: "font-display font-semibold text-xl text-foreground flex items-center gap-3", children: [
          "Currently Learning",
          /* @__PURE__ */ jsxs("span", { className: "relative flex h-3 w-3", children: [
            /* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" }),
            /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-3 w-3 bg-primary" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-2", children: "Always expanding my toolkit to solve harder problems." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: currentlyLearning.map((item) => /* @__PURE__ */ jsx("span", { className: "text-sm font-medium px-5 py-2.5 rounded-xl bg-background/60 border border-border/50 text-foreground/90 shadow-sm transition-transform duration-300 hover:scale-105 hover:border-primary/30", children: item }, item)) })
    ] })
  ] });
}
export {
  Skills as component
};
