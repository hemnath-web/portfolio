import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { S as Section } from "./Section-BzLnHX6g.js";
import { X, CheckCircle2, ZoomOut, ZoomIn, Target, Download, ExternalLink, Trophy, Medal, Star, Award, Zap, Brain } from "lucide-react";
import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
function CertificateModal({ isOpen, onClose, certificate }) {
  const [zoomLevel, setZoomLevel] = React.useState(1);
  if (!certificate) return null;
  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
  const handleResetZoom = () => setZoomLevel(1);
  const isPDF = certificate.pdf?.endsWith(".pdf");
  return /* @__PURE__ */ jsx(Dialog, { open: isOpen, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogPortal, { children: [
    /* @__PURE__ */ jsx(DialogOverlay, { className: "bg-black/60 backdrop-blur-md z-[100]" }),
    /* @__PURE__ */ jsx(DialogContent, { className: "fixed left-[50%] top-[50%] z-[101] w-[95vw] max-w-4xl translate-x-[-50%] translate-y-[-50%] p-0 overflow-hidden border-none bg-transparent shadow-none focus:outline-none sm:rounded-2xl", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.9, y: 20 },
        transition: { duration: 0.3, ease: "easeOut" },
        className: "relative flex flex-col w-full max-h-[90vh] glass rounded-2xl border border-white/10 shadow-2xl overflow-hidden bg-card/90",
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between p-6 border-b border-white/5 bg-white/5", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(DialogTitle, { className: "text-xl font-bold text-foreground", children: certificate.name }),
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-blue-400 fill-blue-400/10" })
            ] }),
            /* @__PURE__ */ jsxs(DialogDescription, { className: "text-sm text-muted-foreground font-medium uppercase tracking-wider", children: [
              "Issued by ",
              certificate.issuer
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "relative flex-1 overflow-auto p-4 sm:p-8 bg-black/40 flex items-center justify-center min-h-[450px]", children: certificate.image ? /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col items-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "absolute top-4 z-30 flex items-center gap-2 p-2 rounded-full bg-slate-900/95 border border-white/20 shadow-2xl shadow-black/80 transition-all opacity-100 hover:scale-105", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleZoomOut,
                  className: "p-2.5 rounded-full hover:bg-white/15 text-slate-100 hover:text-white transition-all active:scale-95",
                  title: "Zoom Out",
                  children: /* @__PURE__ */ jsx(ZoomOut, { size: 20, strokeWidth: 2.25 })
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "w-[1px] h-5 bg-white/20 mx-0.5" }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleZoomIn,
                  className: "p-2.5 rounded-full hover:bg-white/15 text-slate-100 hover:text-white transition-all active:scale-95",
                  title: "Zoom In",
                  children: /* @__PURE__ */ jsx(ZoomIn, { size: 20, strokeWidth: 2.25 })
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "w-[1px] h-5 bg-white/20 mx-0.5" }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleResetZoom,
                  className: "p-2.5 rounded-full hover:bg-white/15 text-slate-100 hover:text-white transition-all active:scale-95",
                  title: "Reset Zoom",
                  children: /* @__PURE__ */ jsx(Target, { size: 20, strokeWidth: 2.25 })
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "w-[1px] h-5 bg-white/20 mx-0.5" }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: certificate.image,
                  download: `${certificate.name.replace(/\s+/g, "-").toLowerCase()}-cert`,
                  className: "p-2.5 rounded-full hover:bg-white/15 text-slate-100 hover:text-white transition-all active:scale-95",
                  title: "Download",
                  children: /* @__PURE__ */ jsx(Download, { size: 20, strokeWidth: 2.25 })
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "relative transition-transform duration-300 ease-out mt-12",
                style: { transform: `scale(${zoomLevel})` },
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: certificate.image,
                    alt: certificate.name,
                    className: "max-w-full h-auto rounded-lg shadow-2xl border border-white/10",
                    loading: "lazy"
                  }
                )
              }
            )
          ] }) : isPDF ? /* @__PURE__ */ jsx(
            "iframe",
            {
              src: certificate.pdf,
              className: "w-full h-[60vh] rounded-lg border border-white/10",
              title: "Certificate PDF"
            }
          ) : /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center p-12 text-center space-y-4", children: [
            /* @__PURE__ */ jsx("div", { className: "h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-10 w-10 text-primary animate-pulse" }) }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground italic", children: "Certificate preview loading or unavailable..." })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "p-6 border-t border-white/5 bg-white/5 space-y-4", children: [
            certificate.description && /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed italic", children: [
              "Note: ",
              certificate.description
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: certificate.image || certificate.pdf,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition-opacity",
                  children: [
                    /* @__PURE__ */ jsx(ExternalLink, { size: 14 }),
                    "View Original"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: certificate.image || certificate.pdf,
                  download: `${certificate.name.replace(/\s+/g, "-").toLowerCase()}-cert`,
                  className: "flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-foreground text-xs font-bold hover:bg-white/20 transition-all",
                  children: [
                    /* @__PURE__ */ jsx(Download, { size: 14 }),
                    "Download"
                  ]
                }
              )
            ] })
          ] })
        ]
      }
    ) })
  ] }) });
}
const pythonCert = "/assets/Python%20diplomo-CuxP_9Vt.jpg";
const nptelCert = "/assets/nptel-U4g9RGQU.jpg";
const ccnaCert = "/assets/CCNA-xNAb8trW.jpg";
const items = [{
  icon: Trophy,
  title: "Top 10 National level hackathon",
  detail: "Coimbatore Institute of Technology",
  impact: "Competed against top engineering colleges in India.",
  scale: "National Level",
  whyItMatters: "Rapid Prototyping & Collaboration",
  rank: 1,
  color: "from-yellow-400 to-orange-500"
}, {
  icon: Medal,
  title: "Top 5",
  detail: "Inceptrix 2.0 - Jain University Banglore",
  impact: "Showcased skills in competitive environment.",
  scale: "National Event",
  whyItMatters: "Problem Solving & Innovation",
  rank: 2,
  color: "from-blue-400 to-indigo-500"
}, {
  icon: Star,
  title: "Hackathon Participant",
  detail: "Sri Manakula Vinayagar Engineering College",
  impact: "Active participation and collaboration in competitive problem solving.",
  scale: "Institutional Event",
  whyItMatters: "Teamwork & Skill Application",
  rank: 3,
  color: "from-green-400 to-emerald-500"
}, {
  icon: Award,
  title: "Finalist - VORTEXA 2026",
  detail: "Chennai Trade Centre, Chennai",
  impact: "Built solutions to real-world problems in a 24-hour hackathon.",
  scale: "National Event",
  whyItMatters: "Innovation & Real-world Problem Solving",
  rank: 4,
  color: "from-purple-400 to-fuchsia-500"
}];
const certs = [{
  name: "Diploma in Python",
  issuer: "Infotech",
  outcome: "Learned core Python programming concepts and applications.",
  metric: "Completed",
  level: "Intermediate",
  skills: ["Python", "Programming"],
  usage: "Software Development",
  category: "Dev",
  highlight: true,
  year: "Recent",
  link: "#",
  verified: true,
  image: pythonCert,
  description: "Successfully completed a comprehensive diploma in Python."
}, {
  name: "CCNA - Cisco Certified Network Associate",
  issuer: "Cisco",
  outcome: "Mastered fundamental concepts of networking, routing, and switching.",
  metric: "Completed",
  level: "Intermediate",
  skills: ["Networking", "Cisco", "Routing"],
  usage: "Network Infrastructure",
  category: "Dev",
  highlight: true,
  year: "Recent",
  link: "#",
  verified: true,
  image: ccnaCert,
  description: "Cisco Certified Network Associate (CCNA) certification."
}, {
  name: "Joy of Computing using Python",
  issuer: "NPTEL",
  outcome: "Developed strong foundation in problem solving using Python.",
  metric: "Completed",
  level: "Beginner",
  skills: ["Python", "Algorithms", "Logic"],
  usage: "Core Academic Skill",
  category: "Dev",
  highlight: false,
  year: "Recent",
  link: "#",
  verified: true,
  image: nptelCert,
  description: "NPTEL certification focusing on computational thinking."
}];
const categoryIcons = {
  AI: Brain,
  Dev: Zap,
  Data: Target,
  Other: Award
};
function Achievements() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleViewCertificate = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Section, { eyebrow: "Achievements", title: "Highlights & recognitions", description: "Recognitions from competitive technical events and real-world problem-solving.", children: /* @__PURE__ */ jsx("div", { className: "grid gap-8 md:grid-cols-3", children: items.map((a) => /* @__PURE__ */ jsxs("div", { className: `group relative overflow-hidden rounded-2xl bg-card/50 p-7 glass transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${a.rank === 1 ? "border-primary/40 shadow-primary/10 shadow-xl" : a.rank === 2 ? "border-accent/30 shadow-accent/5 shadow-lg" : "border-border/50"}`, children: [
      /* @__PURE__ */ jsx("div", { className: `absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${a.color} opacity-10 blur-3xl transition-opacity duration-300 group-hover:opacity-30` }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: `flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${a.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`, children: /* @__PURE__ */ jsx(a.icon, { size: 26 }) }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60", children: a.scale })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold leading-tight tracking-tight text-foreground group-hover:text-primary transition-colors", children: a.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm font-medium text-primary/80", children: a.detail })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-3", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-muted-foreground line-clamp-2", children: a.impact }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 pt-2 border-t border-border/40", children: [
            /* @__PURE__ */ jsx(Zap, { size: 14, className: "text-accent" }),
            /* @__PURE__ */ jsx("span", { className: "text-[11px] font-semibold uppercase tracking-wider text-accent/90", children: a.whyItMatters })
          ] })
        ] })
      ] })
    ] }, a.title)) }) }),
    /* @__PURE__ */ jsx(Section, { eyebrow: "Certifications", title: "Continuous learning", description: "Continuously building expertise in AI, data systems, and applied technologies.", className: "!pt-16", children: /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: certs.map((c) => {
      const Icon = categoryIcons[c.category] || Award;
      return /* @__PURE__ */ jsxs("div", { className: `group relative flex flex-col overflow-hidden rounded-2xl p-6 glass transition-all duration-300 hover:-translate-y-2 hover:shadow-glow ${c.highlight ? "border-primary/40 bg-primary/5 shadow-primary/5 shadow-xl scale-[1.02]" : "border-border/50"}`, children: [
        c.highlight && /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 px-3 py-1 bg-primary text-[10px] font-bold uppercase tracking-tighter text-primary-foreground rounded-bl-xl shadow-lg z-20", children: "Featured" }),
        /* @__PURE__ */ jsx("div", { className: "flex items-start justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: `flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 ${c.highlight ? "bg-primary text-primary-foreground shadow-glow" : "bg-secondary text-secondary-foreground"}`, children: /* @__PURE__ */ jsx(Icon, { size: 22, className: "group-hover:rotate-6 transition-transform" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-bold text-foreground group-hover:text-primary transition-colors leading-tight", children: c.name }),
              c.verified && /* @__PURE__ */ jsx("div", { className: "h-4 w-4 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30", title: "Verified Credential", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-2.5 w-2.5 text-blue-400 fill-blue-400/10" }) })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-0.5", children: c.issuer })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 p-3 rounded-xl bg-black/20 border border-white/5 space-y-1", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-foreground/90 leading-snug", children: c.outcome }),
          /* @__PURE__ */ jsxs("p", { className: "text-[10px] text-primary/80 font-medium", children: [
            "🏆 ",
            c.metric
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-5 space-y-4 flex-1 flex flex-col justify-end", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60", children: "Proof of Skills" }),
              /* @__PURE__ */ jsx("span", { className: `text-[10px] font-bold px-2 py-0.5 rounded-full border ${c.level === "Advanced" ? "border-primary/30 text-primary bg-primary/5" : c.level === "Intermediate" ? "border-accent/30 text-accent bg-accent/5" : "border-border text-muted-foreground bg-muted/20"}`, children: c.level })
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-2 gap-x-4 gap-y-1", children: c.skills.map((skill) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-1.5 text-xs text-foreground/80", children: [
              /* @__PURE__ */ jsx("div", { className: "h-1 w-1 rounded-full bg-primary/60" }),
              skill
            ] }, skill)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between pt-4 border-t border-border/40", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 px-2 py-1 rounded-lg bg-primary/10 border border-primary/20", children: [
              /* @__PURE__ */ jsx(Target, { size: 12, className: "text-primary" }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-primary/90", children: c.usage })
            ] }),
            c.image || c.pdf ? /* @__PURE__ */ jsxs("button", { onClick: () => handleViewCertificate(c), className: "flex items-center gap-1.5 text-[10px] font-bold text-primary hover:text-primary/80 bg-primary/5 hover:bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20 transition-all group/btn", children: [
              "VIEW CERTIFICATE ",
              /* @__PURE__ */ jsx(ExternalLink, { size: 10, className: "group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" })
            ] }) : /* @__PURE__ */ jsxs("a", { href: c.link, className: "flex items-center gap-1 text-[10px] font-bold text-muted-foreground/60 hover:text-primary transition-colors group/link", children: [
              "CREDENTIAL ",
              /* @__PURE__ */ jsx(ExternalLink, { size: 10, className: "group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" })
            ] })
          ] })
        ] })
      ] }, c.name);
    }) }) }),
    /* @__PURE__ */ jsx(CertificateModal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false), certificate: selectedCert })
  ] });
}
export {
  Achievements as component
};
