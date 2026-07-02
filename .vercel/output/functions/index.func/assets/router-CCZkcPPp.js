import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link, createRootRoute, useLocation, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter, useRouter } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { X, Menu, Linkedin, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";
const profilePic = "/assets/profile_new-YQ9gGYKR.jpg";
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/education", label: "Education" },
  { to: "/projects", label: "Projects" },
  { to: "/achievements", label: "Achievements" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-3" : "py-5"}`,
      children: [
        /* @__PURE__ */ jsxs("nav", { className: "mx-auto flex max-w-7xl items-center justify-between px-6", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2 font-display text-xl font-bold", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: profilePic,
                alt: "Hemnath S",
                className: "h-9 w-9 rounded-lg object-cover shadow-glow"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Hemnath S" })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "hidden lg:flex items-center gap-1", children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: l.to,
              className: "relative block px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground rounded-md",
              activeProps: { className: "text-foreground font-medium" },
              activeOptions: { exact: true },
              children: ({ isActive }) => /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("span", { className: "relative z-10", children: l.label }),
                isActive && /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    layoutId: "nav-active",
                    className: "absolute inset-0 bg-secondary rounded-md",
                    transition: { type: "spring", stiffness: 380, damping: 30 }
                  }
                )
              ] })
            }
          ) }, l.to)) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "lg:hidden p-2 text-foreground",
              onClick: () => setOpen((v) => !v),
              "aria-label": "Toggle menu",
              children: open ? /* @__PURE__ */ jsx(X, { size: 22 }) : /* @__PURE__ */ jsx(Menu, { size: 22 })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsx("div", { className: "lg:hidden glass mx-4 mt-2 rounded-xl p-4 animate-fade-in", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-1", children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            to: l.to,
            onClick: () => setOpen(false),
            className: "block px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary",
            activeProps: { className: "block px-3 py-2 rounded-md text-foreground bg-secondary font-medium" },
            activeOptions: { exact: true },
            children: l.label
          }
        ) }, l.to)) }) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border/60 mt-24 py-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4", children: [
    /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Hemnath S. Built with passion."
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.linkedin.com/in/hemnath-s-9b69b2358/",
          target: "_blank",
          rel: "noreferrer",
          className: "p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary transition-colors",
          "aria-label": "LinkedIn",
          children: /* @__PURE__ */ jsx(Linkedin, { size: 18 })
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://github.com/hemnath-web",
          target: "_blank",
          rel: "noreferrer",
          className: "p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary transition-colors",
          "aria-label": "GitHub",
          children: /* @__PURE__ */ jsx(Github, { size: 18 })
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "mailto:hemnathsridhar23@gmail.com",
          className: "p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary transition-colors",
          "aria-label": "Email",
          children: /* @__PURE__ */ jsx(Mail, { size: 18 })
        }
      )
    ] })
  ] }) });
}
const appCss = "/assets/styles-BAZU4D4A.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-gradient", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-gradient-hero px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105",
        children: "Go home"
      }
    ) })
  ] }) });
}
const Route$7 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Hemnath S — Computer Science Student" },
      {
        name: "description",
        content: "Portfolio of Hemnath S — B.Tech CSE student passionate about software engineering, NLP, and IoT."
      },
      { name: "author", content: "Hemnath S" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    isContactPage && /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const $$splitComponentImporter$6 = () => import("./skills-CkMTKY-W.js");
const Route$6 = createFileRoute("/skills")({
  head: () => ({
    meta: [{
      title: "Skills — Hemnath S"
    }, {
      name: "description",
      content: "Technical and soft skills: Python, HTML, Power BI, CSS, JavaScript, MySQL, leadership and more."
    }, {
      property: "og:title",
      content: "Skills — Hemnath S"
    }, {
      property: "og:description",
      content: "Tech stack and strengths."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./projects-DJxIu8BA.js");
const Route$5 = createFileRoute("/projects")({
  head: () => ({
    meta: [{
      title: "Projects — Hemnath S"
    }, {
      name: "description",
      content: "AI Study Companion and SENTINEL-AI System."
    }, {
      property: "og:title",
      content: "Projects — Hemnath S"
    }, {
      property: "og:description",
      content: "Projects by Hemnath S."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./education-LYfumahM.js");
const Route$4 = createFileRoute("/education")({
  head: () => ({
    meta: [{
      title: "Education — Hemnath S"
    }, {
      name: "description",
      content: "B.Tech CSE student at Sri Manakula Vinayagar Engineering College."
    }, {
      property: "og:title",
      content: "Education — Hemnath S"
    }, {
      property: "og:description",
      content: "Academic background of Hemnath S."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./contact-ZiKMczON.js");
const Route$3 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Hemnath S"
    }, {
      name: "description",
      content: "Get in touch with Hemnath S via email, phone, LinkedIn, or GitHub."
    }, {
      property: "og:title",
      content: "Contact — Hemnath S"
    }, {
      property: "og:description",
      content: "Let's collaborate."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./achievements-BZiM4ltv.js");
const Route$2 = createFileRoute("/achievements")({
  head: () => ({
    meta: [{
      title: "Achievements & Certifications — Hemnath S"
    }, {
      name: "description",
      content: "Awards, recognitions, and professional certifications."
    }, {
      property: "og:title",
      content: "Achievements & Certifications — Hemnath S"
    }, {
      property: "og:description",
      content: "Awards, recognitions, and professional certifications."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-C3k0Cs2t.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Hemnath S"
    }, {
      name: "description",
      content: "Passionate B.Tech CSE student building real-world intelligent systems."
    }, {
      property: "og:title",
      content: "About — Hemnath S"
    }, {
      property: "og:description",
      content: "Learn more about Hemnath S's journey."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-BLjPRV0X.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Hemnath S — Computer Science Student"
    }, {
      name: "description",
      content: "Computer Science student passionate about software engineering, NLP, and IoT."
    }, {
      property: "og:title",
      content: "Hemnath S — Computer Science Student"
    }, {
      property: "og:description",
      content: "Portfolio of Hemnath S — B.Tech CSE student."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SkillsRoute = Route$6.update({
  id: "/skills",
  path: "/skills",
  getParentRoute: () => Route$7
});
const ProjectsRoute = Route$5.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$7
});
const EducationRoute = Route$4.update({
  id: "/education",
  path: "/education",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const AchievementsRoute = Route$2.update({
  id: "/achievements",
  path: "/achievements",
  getParentRoute: () => Route$7
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$7
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AchievementsRoute,
  ContactRoute,
  EducationRoute,
  ProjectsRoute,
  SkillsRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router;
};
export {
  getRouter
};
