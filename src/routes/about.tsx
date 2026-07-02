import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import {
  Rocket,
  Brain,
  Trophy,
  Users,
  GraduationCap,
  Box,
  Target,
  Zap,
  Shield
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hemnath S" },
      { name: "description", content: "Passionate B.Tech CSE student building real-world intelligent systems." },
      { property: "og:title", content: "About — Hemnath S" },
      { property: "og:description", content: "Learn more about Hemnath S's journey." },
    ],
  }),
  component: About,
});

function About() {
  const highlights = [
    { icon: Rocket, text: "Built AI Study Companion & SENTINEL-AI System" },
    { icon: Brain, text: "Strong in Python, Web Technologies & NLP" },
    { icon: Trophy, text: "Top 10 National Level Hackathon - CIT" },
    { icon: Users, text: "Strong leadership and team management skills" },
  ];

  const stats = [
    { label: "Projects", value: "3+", icon: Box },
    { label: "Hackathons", value: "4+", icon: Trophy },
  ];

  const cards = [
    {
      title: "Career Vision",
      content: "Applying technical knowledge in Python and web technologies to solve real-world problems and grow as a software engineer.",
      icon: Target,
    },
    {
      title: "What Sets Me Apart",
      content: "Combining practical execution with project experience in cutting-edge NLP and IoT systems to build intelligent tools.",
      icon: Zap,
    },
    {
      title: "Core Strengths",
      content: "Team management, leadership, strong communication skills, and executing efficiently in hackathons and collaborative projects.",
      icon: Shield,
    },
  ];

  return (
    <main className="relative pt-20 pb-20">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

      <Section eyebrow="About Me" title="Curious Mind. Builder of Intelligent Systems.">
        <div className="grid gap-16 lg:grid-cols-2 mt-12">
          {/* Left Side: Intro & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Computer Science student passionate about solving real-world problems using <span className="text-gradient font-semibold">Python</span> and web technologies.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Focused on building practical solutions in <span className="text-gradient font-semibold">NLP</span>, IoT systems, and software engineering.
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 text-lg text-foreground/80"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/50 text-primary">
                    <item.icon size={18} />
                  </span>
                  {item.text}
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, i) => (
                <div key={i} className="glass rounded-2xl p-4 text-center border-border/50">
                  <div className="flex justify-center mb-1 text-primary">
                    <stat.icon size={20} />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Cards */}
          <div className="space-y-6 lg:-mt-32">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative"
              >
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                <div className="relative glass rounded-3xl p-8 border-border/50 group-hover:border-primary/30 transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-hero text-primary-foreground shadow-glow group-hover:scale-110 transition-transform duration-500">
                      <card.icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{card.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {card.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Minimal Horizontal Timeline */}
        <div className="mt-32 relative px-4">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border/30 -translate-y-1/2" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-accent to-primary -translate-y-1/2 origin-left shadow-[0_0_15px_rgba(34,211,238,0.5)]"
          />

          <div className="relative flex justify-between items-center max-w-5xl mx-auto">
            {[
              { label: "Started as Computer Science Engineer", delay: 0.5 },
              { label: "Built major projects", delay: 1.0 },
              { label: "Finalist in hackathon", delay: 1.5 },
            ].map((milestone, i) => (
              <div key={i} className="relative flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: milestone.delay, type: "spring", stiffness: 200 }}
                  className="h-4 w-4 rounded-full bg-primary shadow-[0_0_10px_rgba(34,211,238,0.8)] border-2 border-background z-10"
                />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: milestone.delay + 0.2 }}
                  className="absolute top-8 w-40 text-center text-sm font-medium text-muted-foreground leading-snug"
                >
                  {milestone.label}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
