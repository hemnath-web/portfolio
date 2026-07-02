import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Trophy, Medal, Star, Award, ExternalLink, Zap, Brain, Target, CheckCircle2 } from "lucide-react";
import { CertificateModal } from "@/components/CertificateModal";
import { useState } from "react";
import pythonCert from "../assets/Python diplomo.jpg";
import nptelCert from "../assets/nptel.jpg";
import ccnaCert from "../assets/CCNA.jpg";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements & Certifications — Hemnath S" },
      { name: "description", content: "Awards, recognitions, and professional certifications." },
      { property: "og:title", content: "Achievements & Certifications — Hemnath S" },
      { property: "og:description", content: "Awards, recognitions, and professional certifications." },
    ],
  }),
  component: Achievements,
});

const items = [
  {
    icon: Trophy,
    title: "Top 10 National level hackathon",
    detail: "Coimbatore Institute of Technology",
    impact: "Competed against top engineering colleges in India.",
    scale: "National Level",
    whyItMatters: "Rapid Prototyping & Collaboration",
    rank: 1,
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Medal,
    title: "Top 5",
    detail: "Inceptrix 2.0 - Jain University Banglore",
    impact: "Showcased skills in competitive environment.",
    scale: "National Event",
    whyItMatters: "Problem Solving & Innovation",
    rank: 2,
    color: "from-blue-400 to-indigo-500",
  },
  {
    icon: Star,
    title: "Hackathon Participant",
    detail: "Sri Manakula Vinayagar Engineering College",
    impact: "Active participation and collaboration in competitive problem solving.",
    scale: "Institutional Event",
    whyItMatters: "Teamwork & Skill Application",
    rank: 3,
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Award,
    title: "Finalist - VORTEXA 2026",
    detail: "Chennai Trade Centre, Chennai",
    impact: "Built solutions to real-world problems in a 24-hour hackathon.",
    scale: "National Event",
    whyItMatters: "Innovation & Real-world Problem Solving",
    rank: 4,
    color: "from-purple-400 to-fuchsia-500",
  },
];

const certs = [
  {
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
  },
  {
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
  },
  {
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
  }
];

const categoryIcons = {
  AI: Brain,
  Dev: Zap,
  Data: Target,
  Other: Award,
};

function Achievements() {
  const [selectedCert, setSelectedCert] = useState<typeof certs[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewCertificate = (cert: typeof certs[0]) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  return (
    <>
      <Section
        eyebrow="Achievements"
        title="Highlights & recognitions"
        description="Recognitions from competitive technical events and real-world problem-solving."
      >
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((a) => (
            <div
              key={a.title}
              className={`group relative overflow-hidden rounded-2xl bg-card/50 p-7 glass transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${a.rank === 1
                  ? "border-primary/40 shadow-primary/10 shadow-xl"
                  : a.rank === 2
                    ? "border-accent/30 shadow-accent/5 shadow-lg"
                    : "border-border/50"
                }`}
            >
              {/* Background Accent Glow */}
              <div
                className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${a.color} opacity-10 blur-3xl transition-opacity duration-300 group-hover:opacity-30`}
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${a.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <a.icon size={26} />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                    {a.scale}
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-bold leading-tight tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {a.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary/80">
                    {a.detail}
                  </p>
                </div>

                <div className="mt-4 space-y-3">
                  <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {a.impact}
                  </p>

                  <div className="flex items-center gap-2 pt-2 border-t border-border/40">
                    <Zap size={14} className="text-accent" />
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-accent/90">
                      {a.whyItMatters}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Certifications"
        title="Continuous learning"
        description="Continuously building expertise in AI, data systems, and applied technologies."
        className="!pt-16"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c) => {
            const Icon = categoryIcons[c.category as keyof typeof categoryIcons] || Award;
            return (
              <div
                key={c.name}
                className={`group relative flex flex-col overflow-hidden rounded-2xl p-6 glass transition-all duration-300 hover:-translate-y-2 hover:shadow-glow ${c.highlight ? "border-primary/40 bg-primary/5 shadow-primary/5 shadow-xl scale-[1.02]" : "border-border/50"
                  }`}
              >
                {c.highlight && (
                  <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-[10px] font-bold uppercase tracking-tighter text-primary-foreground rounded-bl-xl shadow-lg z-20">
                    Featured
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 ${c.highlight
                          ? "bg-primary text-primary-foreground shadow-glow"
                          : "bg-secondary text-secondary-foreground"
                        }`}
                    >
                      <Icon size={22} className="group-hover:rotate-6 transition-transform" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                          {c.name}
                        </h3>
                        {c.verified && (
                          <div className="h-4 w-4 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30" title="Verified Credential">
                            <CheckCircle2 className="h-2.5 w-2.5 text-blue-400 fill-blue-400/10" />
                          </div>
                        )}
                      </div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-0.5">
                        {c.issuer}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Achievement/Outcome */}
                <div className="mt-4 p-3 rounded-xl bg-black/20 border border-white/5 space-y-1">
                  <p className="text-xs font-semibold text-foreground/90 leading-snug">
                    {c.outcome}
                  </p>
                  <p className="text-[10px] text-primary/80 font-medium">
                    🏆 {c.metric}
                  </p>
                </div>

                {/* Skills Section */}
                <div className="mt-5 space-y-4 flex-1 flex flex-col justify-end">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Proof of Skills</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${c.level === 'Advanced' ? 'border-primary/30 text-primary bg-primary/5' :
                          c.level === 'Intermediate' ? 'border-accent/30 text-accent bg-accent/5' :
                            'border-border text-muted-foreground bg-muted/20'
                        }`}>
                        {c.level}
                      </span>
                    </div>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {c.skills.map((skill) => (
                        <li key={skill} className="flex items-center gap-1.5 text-xs text-foreground/80">
                          <div className="h-1 w-1 rounded-full bg-primary/60" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/40">
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-primary/10 border border-primary/20">
                      <Target size={12} className="text-primary" />
                      <span className="text-[10px] font-bold text-primary/90">{c.usage}</span>
                    </div>
                    {(c.image || c.pdf) ? (
                      <button 
                        onClick={() => handleViewCertificate(c)}
                        className="flex items-center gap-1.5 text-[10px] font-bold text-primary hover:text-primary/80 bg-primary/5 hover:bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20 transition-all group/btn"
                      >
                        VIEW CERTIFICATE <ExternalLink size={10} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>
                    ) : (
                      <a href={c.link} className="flex items-center gap-1 text-[10px] font-bold text-muted-foreground/60 hover:text-primary transition-colors group/link">
                        CREDENTIAL <ExternalLink size={10} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <CertificateModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        certificate={selectedCert} 
      />
    </>
  );
}
