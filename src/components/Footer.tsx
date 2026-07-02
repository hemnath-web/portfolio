import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-24 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Hemnath S. Built with passion.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/hemnath-s-9b69b2358/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/hemnath-web"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:hemnathsridhar23@gmail.com"
            className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
