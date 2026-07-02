import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hemnath S" },
      { name: "description", content: "Get in touch with Hemnath S via email, phone, LinkedIn, or GitHub." },
      { property: "og:title", content: "Contact — Hemnath S" },
      { property: "og:description", content: "Let's collaborate." },
    ],
  }),
  component: Contact,
});

const methods = [
  { icon: Mail, label: "Email", value: "hemnathsridhar23@gmail.com", href: "mailto:hemnathsridhar23@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 73056 30749", href: "tel:+917305630749" },
  { icon: Linkedin, label: "LinkedIn", value: "hemnath-s-9b69b2358", href: "https://www.linkedin.com/in/hemnath-s-9b69b2358/" },
  { icon: Github, label: "GitHub", value: "hemnath-web", href: "https://github.com/hemnath-web" },
];

function Contact() {
  return (
    <Section eyebrow="Contact" title="Let's build something" description="Open to collaborations and challenging problems.">
      <div className="grid gap-4 sm:grid-cols-2">
        {methods.map((m) => (
          <a
            key={m.label}
            href={m.href}
            target={m.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group glass rounded-2xl p-6 shadow-card flex items-center gap-4 hover:shadow-glow hover:-translate-y-0.5 transition-all"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground shadow-glow">
              <m.icon size={20} />
            </span>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">{m.label}</p>
              <p className="font-medium text-foreground truncate group-hover:text-primary transition-colors">
                {m.value}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 glass rounded-2xl p-8 shadow-card text-center">
        <h3 className="text-2xl font-bold text-gradient">Have an idea? Let's talk.</h3>
        <p className="text-muted-foreground mt-2">Drop a mail and I'll get back within 24 hours.</p>
        <a
          href="mailto:hemnathsridhar23@gmail.com"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-hero px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
        >
          <Mail size={16} /> Send an email
        </a>
      </div>
    </Section>
  );
}
