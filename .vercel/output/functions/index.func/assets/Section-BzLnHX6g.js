import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
function Section({
  eyebrow,
  title,
  description,
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsxs("section", { className: `mx-auto max-w-7xl px-6 pt-32 pb-12 ${className}`, children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        className: "mb-12 max-w-3xl",
        children: [
          eyebrow && /* @__PURE__ */ jsx("p", { className: "mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary", children: eyebrow }),
          /* @__PURE__ */ jsx("h1", { className: "text-4xl sm:text-5xl font-bold", children: /* @__PURE__ */ jsx("span", { className: "text-gradient", children: title }) }),
          description && /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: description })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.1 },
        children
      }
    )
  ] });
}
export {
  Section as S
};
