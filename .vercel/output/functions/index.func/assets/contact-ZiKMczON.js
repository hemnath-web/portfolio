import { jsxs, jsx } from "react/jsx-runtime";
import { S as Section } from "./Section-BzLnHX6g.js";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import "framer-motion";
const methods = [{
  icon: Mail,
  label: "Email",
  value: "hemnathsridhar23@gmail.com",
  href: "mailto:hemnathsridhar23@gmail.com"
}, {
  icon: Phone,
  label: "Phone",
  value: "+91 73056 30749",
  href: "tel:+917305630749"
}, {
  icon: Linkedin,
  label: "LinkedIn",
  value: "hemnath-s-9b69b2358",
  href: "https://www.linkedin.com/in/hemnath-s-9b69b2358/"
}, {
  icon: Github,
  label: "GitHub",
  value: "hemnath-web",
  href: "https://github.com/hemnath-web"
}];
function Contact() {
  return /* @__PURE__ */ jsxs(Section, { eyebrow: "Contact", title: "Let's build something", description: "Open to collaborations and challenging problems.", children: [
    /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: methods.map((m) => /* @__PURE__ */ jsxs("a", { href: m.href, target: m.href.startsWith("http") ? "_blank" : void 0, rel: "noreferrer", className: "group glass rounded-2xl p-6 shadow-card flex items-center gap-4 hover:shadow-glow hover:-translate-y-0.5 transition-all", children: [
      /* @__PURE__ */ jsx("span", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground shadow-glow", children: /* @__PURE__ */ jsx(m.icon, { size: 20 }) }),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: m.label }),
        /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground truncate group-hover:text-primary transition-colors", children: m.value })
      ] })
    ] }, m.label)) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 glass rounded-2xl p-8 shadow-card text-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gradient", children: "Have an idea? Let's talk." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-2", children: "Drop a mail and I'll get back within 24 hours." }),
      /* @__PURE__ */ jsxs("a", { href: "mailto:hemnathsridhar23@gmail.com", className: "mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-hero px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform", children: [
        /* @__PURE__ */ jsx(Mail, { size: 16 }),
        " Send an email"
      ] })
    ] })
  ] });
}
export {
  Contact as component
};
