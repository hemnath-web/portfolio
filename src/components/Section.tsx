import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-7xl px-6 pt-32 pb-12 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 max-w-3xl"
      >
        {eyebrow && (
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl sm:text-5xl font-bold">
          <span className="text-gradient">{title}</span>
        </h1>
        {description && (
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
