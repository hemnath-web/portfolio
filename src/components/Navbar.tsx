import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile_new.jpg";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/education", label: "Education" },
  { to: "/projects", label: "Projects" },
  { to: "/achievements", label: "Achievements" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-3" : "py-5"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold">
          <img
            src={profilePic}
            alt="Hemnath S"
            className="h-9 w-9 rounded-lg object-cover shadow-glow"
          />
          <span className="hidden sm:inline">Hemnath S</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="relative block px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground rounded-md"
                activeProps={{ className: "text-foreground font-medium" }}
                activeOptions={{ exact: true }}
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{l.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 bg-secondary rounded-md"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden glass mx-4 mt-2 rounded-xl p-4 animate-fade-in">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary"
                  activeProps={{ className: "block px-3 py-2 rounded-md text-foreground bg-secondary font-medium" }}
                  activeOptions={{ exact: true }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
