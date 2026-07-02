import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { GraduationCap, BookOpen, BrainCircuit, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Hemnath S" },
      { name: "description", content: "B.Tech CSE student at Sri Manakula Vinayagar Engineering College." },
      { property: "og:title", content: "Education — Hemnath S" },
      { property: "og:description", content: "Academic background of Hemnath S." },
    ],
  }),
  component: Education,
});

const coursework = [
  "Data Structures",
  "Software Engineering",
  "Web Technologies",
  "Database Management"
];

function Education() {
  return (
    <Section eyebrow="Education" title="Academic Journey" description="Focusing on Artificial Intelligence, Computer Vision, and Embedded Systems.">
      <div className="mt-8 grid gap-6 lg:grid-cols-12 items-start">

        {/* Left Column: Timeline Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-4 glass rounded-3xl p-8 shadow-card flex flex-col gap-6 h-full"
        >
          <h4 className="flex items-center gap-2 text-foreground font-semibold pb-4 border-b border-border/40">
            <Calendar size={18} className="text-primary" />
            Timeline
          </h4>
          <div className="flex flex-col gap-8 relative pl-2 pt-2">
            <div className="absolute left-[20px] top-4 bottom-4 w-0.5 bg-border/50"></div>

            <div className="relative flex items-center gap-5 group">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary border border-border z-10 transition-colors group-hover:border-primary/50 group-hover:bg-primary/10">
                <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground transition-colors group-hover:bg-primary"></span>
              </div>
              <div>
                <p className="font-semibold text-foreground">Graduation</p>
                <p className="text-sm text-muted-foreground">2027 (Expected)</p>
              </div>
            </div>

            <div className="relative flex items-center gap-5 group">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 border border-primary/50 z-10 shadow-glow">
                <span className="w-3 h-3 rounded-full bg-primary animate-pulse"></span>
              </div>
              <div>
                <p className="font-semibold text-primary">4th Year</p>
                <p className="text-sm text-muted-foreground">Current Status</p>
              </div>
            </div>

            <div className="relative flex items-center gap-5 group">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary border border-border z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground"></span>
              </div>
              <div>
                <p className="font-semibold text-foreground">Enrolled</p>
                <p className="text-sm text-muted-foreground">2023</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Main Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-8 flex flex-col gap-6"
        >
          <div className="glass rounded-3xl p-8 shadow-card border border-border/40 hover:border-border/80 transition-colors">

            {/* Header: University Details */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-8">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-hero text-primary-foreground shadow-glow transition-transform duration-300 hover:scale-105 hover:-rotate-3">
                <GraduationCap size={32} />
              </span>
              <div>
                <h3 className="text-2xl font-display font-bold tracking-tight text-foreground">Sri Manakula Vinayagar Engineering College</h3>
                <p className="text-lg text-primary/90 mt-1 font-medium">B.Tech CSE</p>
              </div>
            </div>



            {/* Nested Content: Focus & Coursework */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-background/50 border border-border/50 p-6 transition-colors hover:border-primary/30">
                <h4 className="flex items-center gap-2 text-foreground font-semibold mb-4">
                  <BrainCircuit size={18} className="text-primary" />
                  Academic Focus
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Deeply focused on the intersection of software engineering, data analytics, and intelligent systems.
                  My academic path equips me to build robust web solutions, leverage Python for NLP applications,
                  and integrate IoT systems to solve real-world problems.
                </p>
              </div>

              <div className="rounded-2xl bg-background/50 border border-border/50 p-6 transition-colors hover:border-primary/30">
                <h4 className="flex items-center gap-2 text-foreground font-semibold mb-4">
                  <BookOpen size={18} className="text-primary" />
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course, i) => (
                    <motion.span
                      key={course}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="px-3 py-1.5 text-xs font-medium rounded-full border border-border/60 bg-secondary/60 text-foreground/80 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 shadow-sm"
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </Section>
  );
}
