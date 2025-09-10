import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Sun, Moon, Download, Menu, X, ArrowUpRight, Code2, Database, Server, MonitorSmartphone, Search } from "lucide-react";

const PROFILE = {
    name: "Amit Kumar",
    title: "MERN Stack Developer",
    location: "India",
    email: "amitkumar122144mn@gmail.com",
    phone: "+91-7840893498",
    linkedin: "https://linkedin.com/in/amit-kumar-824b34211", 
    github: "https://github.com/KumaAmit13", 
    resumeUrl: "https://drive.google.com/file/d/1PXHKTIn9w4Fcl0kF90DcINRKUGjISeM3/view?usp=sharing", 
    about:
        "Enthusiastic MERN developer focused on building fast, accessible, and scalable web apps. I enjoy clean architectures, type-safe APIs, and pixel-perfect UI with Tailwind. Currently exploring advanced patterns in React, server-side rendering, and data modeling in MongoDB. Others: Java, MVC, Problem solving, Data structures and algorithms",
    highlights: [
        "React.js, Node.js, Express.js, MongoDB",
        "State management: Redux Toolkit, Context API",
        "UI: Tailwind CSS, component-driven design",
        "APIs: RESTful, authentication, Appwrite backend",
    ],
};

const SKILLS = [
    { group: "Frontend", items: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Redux Toolkit", "React Router"] },
    { group: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Appwrite", "Cloudinary"] },
    { group: "Database", items: ["MongoDB", "Mongoose", "MySQL", "Hibernate-ORM"] },
    { group: "Tools", items: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Netlify", "Eclipse"] },
    { group: "Programming Language", items: ["Java", "Node.js", "C", "JavaScript"] },
    { group: "NPM Package", items: ["react-hook-form", "tinymce-react", "html-react-parser", "react-icons", "and more..."] },
];

const PROJECTS = [
    {
        title: "Social Post/Blog Sharing Platform",
        tags: ["React", "Appwrite", "Tailwind", "Auth"],
        description:
            "A full-featured React app where users can upload images, view feeds, and like posts. Uses Appwrite for auth, storage, and database.",
        highlights: [
            "Lazy-loaded media grid with skeletons for smooth UX",
            "Secure auth & role-based access via Appwrite",
            "Optimized image delivery and client caching",
        ],
        links: [{ label: "Live", href: "https://megablogbyamit.netlify.app/" }, { label: "Code", href: "https://github.com/KumaAmit13/ReactJs/tree/main/12MegaBlog" }],
    },
    {
        title: "Backend With Express.js",
        tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Cloudinary"],
        description:
            "A Node.js + Express.js backend project demonstrating REST API development with authentication, CRUD, Cloudinary uploads, and advanced Mongoose aggregation pipelines.",
        highlights: [
            "Built with MVC architecture (models, controllers, routes, middleware,PostMan(for testing/viwe))",
            "JWT-based authentication and role-based access",
            "File uploads and CDN delivery using Cloudinary",
            "Mongoose Aggregation Pipelines for analytics and reporting",
            "Environment configuration with dotenv and scalable project structure"
        ],
        links: [
            { label: "Live", href: "https://github.com/KumaAmit13/BackendWithExpressJs" },
            { label: "Code", href: "https://github.com/KumaAmit13/BackendWithExpressJs" }
        ]
    },
     {
        title: "Real-Time Currency Converter",
        tags: ["JavaScript", "DOM Manipulation", "API Integration", "Netlify"],
        description:
            "A responsive web application that converts currencies in real-time using live exchange rates fetched from a free API.",
        highlights: [
            "Fetches real-time exchange rates and handles user input dynamically",
            "Clean and intuitive UI with responsive design (mobile-friendly)",
            "Instant conversion results with input validation for error handling",
            "Deployed live on Netlify for easy sharing and access"
        ],
        links: [
            { label: "Live", href: "https://currencyconverterbyamit.netlify.app/" },
            { label: "Code", href: "https://github.com/KumaAmit13/ReactJs/tree/main/06currencyConvetor" } 
        ]
    },
     {
        title: "Todo App with Context & LocalStorage",
        tags: ["React", "Tailwind CSS", "Context API", "LocalStorage"],
        description:
            "A responsive Todo application built with React and Tailwind CSS, leveraging Context API for state management and LocalStorage for persistence.",
        highlights: [
            "Add, update, delete, and toggle completion of tasks",
            "Global state managed via React Context API",
            "LocalStorage integration for saving todos across sessions",
            "Reusable components (TodoForm, TodoItem) with clean UI",
            "Tailwind CSS for modern, responsive styling"
        ],
        links: [
            { label: "Code", href: "https://github.com/KumaAmit13/ReactJs/tree/main/10todocontextLocal" },
            { label: "Live", href: "https://todosbyamit.netlify.app/" } 
        ]
    },
     {
        title: "Responsive Profile Card Layout",
        tags: ["HTML", "CSS", "Grid"],
        description:
            "A clean, reusable profile card component system supporting multiple variants and theming.",
        highlights: [
            "Card variants with utility classes",
            "Mobile-first design with clamp() typography",
            "Light/Dark theme friendly",
        ],
        links: [{ label: "Live", href: "https://portfolio-kumaramit.netlify.app/" }, { label: "Code", href: "https://portfolio-kumaramit.netlify.app/" }],
    },
    {
        title: "Travel Theme (Hepta Inspired)",
        tags: ["HTML", "CSS", "Tailwind", "UI/UX"],
        description:
            "A responsive travel website template with elegant hero sections, destination cards, and blog layout.",
        highlights: [
            "Fully responsive with CSS Grid & Flexbox",
            "Accessible components and keyboard-friendly nav",
            "SEO-ready semantic markup",
        ],
        links: [{ label: "Live", href: "#" }, { label: "Code", href: "#" }],
    },
   
    
   
   


    // {
    //     title: "Netflix Clone (Frontend)",
    //     tags: ["HTML", "CSS", "JavaScript"],
    //     description:
    //         "A static Netflix-inspired web UI with home, login, and signup pages. Includes movie search functionality and interactive UI effects.",
    //     highlights: [
    //         "Home page with search and movie listing",
    //         "Login & Signup flow with custom styling",
    //         "Responsive design using pure CSS and flexbox/grid"
    //     ],
    //     links: [
    //         { label: "Live", href: "https://your-live-link.com" },
    //         { label: "Code", href: "https://github.com/your-repo" }
    //     ]
    // }
];

const EDUCATION = [
    {
        school: "IGNOU",
        degree: "MCA (Pursuing)",
        period: "2024 – Present",
        details: ["Focus: Web Technologies, Networks, DBMS"],
    },
    {
        school: "Ducat Training Institute",
        degree: "Full Stack Development",
        period: "1-year"
    },
    {
        school: "Guru Nanak Dev Institute",
        degree: "Computer Engineering (Completed)",
    },
    {
        school: "CBSE",
        degree: "10th+2",
        period: "2018 – 2020 (Completed)",
    },
];

const NAV = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
];

export default function Portfolio() {
    const [dark, setDark] = useState(true);
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return PROJECTS;
        return PROJECTS.filter(p =>
            p.title.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            p.tags.some(t => t.toLowerCase().includes(q))
        );
    }, [query]);

    return (
        <div className={dark ? "min-h-screen bg-neutral-950 text-neutral-100" : "min-h-screen bg-white text-neutral-900"}>
            {/* Header */}
            <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-200/10">
                <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                    <a href="#home" className="flex items-center gap-2 font-semibold">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500">
                            <Code2 className="h-5 w-5" />
                        </span>
                        <span>{PROFILE.name}</span>
                    </a>
                    <nav className="hidden md:flex items-center gap-6">
                        {NAV.map(n => (
                            <a key={n.id} href={`#${n.id}`} className="text-sm hover:opacity-80">
                                {n.label}
                            </a>
                        ))}
                        <a
                            href={PROFILE.resumeUrl}
                            className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-xl border border-neutral-200/20 hover:translate-y-[-1px] transition"
                        >
                            <Download className="h-4 w-4" /> Resume
                        </a>
                        <button
                            onClick={() => setDark(d => !d)}
                            className="ml-2 inline-flex items-center justify-center h-9 w-9 rounded-xl border border-neutral-200/20"
                            aria-label="Toggle theme"
                        >
                            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                        </button>
                    </nav>
                    <button onClick={() => setOpen(o => !o)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200/20" aria-label="Menu">
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
                {/* Mobile nav */}
                {open && (
                    <div className="md:hidden border-t border-neutral-200/10">
                        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
                            {NAV.map(n => (
                                <a key={n.id} href={`#${n.id}`} className="py-2" onClick={() => setOpen(false)}>
                                    {n.label}
                                </a>
                            ))}
                            <div className="flex items-center gap-3">
                                <a href={PROFILE.resumeUrl} className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-xl border border-neutral-200/20">
                                    <Download className="h-4 w-4" /> Resume
                                </a>
                                <button onClick={() => setDark(d => !d)} className="inline-flex items-center justify-center h-9 w-9 rounded-xl border border-neutral-200/20">
                                    {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section id="home" className="max-w-6xl mx-auto px-4 pt-14 pb-10">
                <div className="grid md:grid-cols-3 gap-6 items-stretch">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-2 p-6 rounded-2xl border border-neutral-200/10 shadow-sm bg-gradient-to-br from-neutral-900 to-neutral-950">
                        <p className="text-sm opacity-80">Hello, I’m</p>
                        <h1 className="text-3xl md:text-5xl font-semibold mt-1">{PROFILE.name}</h1>
                        <p className="mt-3 text-lg md:text-xl opacity-90">{PROFILE.title}</p>
                        <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm opacity-90">
                            {PROFILE.highlights.map((h) => (
                                <li key={h} className="inline-flex items-center gap-2">
                                    <ArrowUpRight className="h-4 w-4" /> {h}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <a href={PROFILE.github} className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-200/20">
                                <Github className="h-4 w-4" /> GitHub
                            </a>
                            <a href={PROFILE.linkedin} className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-200/20">
                                <Linkedin className="h-4 w-4" /> LinkedIn
                            </a>
                            <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-200/20">
                                <Mail className="h-4 w-4" /> Email
                            </a>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl border border-neutral-200/10 shadow-sm">
                        <div className="flex items-center gap-3">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500">
                                <MonitorSmartphone className="h-5 w-5" />
                            </span>
                            <div>
                                <p className="text-sm opacity-70">Based in</p>
                                <p className="font-medium inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> {PROFILE.location}</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm opacity-70">Contact</p>
                            <div className="mt-1 text-sm space-y-1">
                                <p className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> {PROFILE.email}</p>
                                <p className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> {PROFILE.phone}</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm opacity-70">Open to</p>
                            <div className="mt-1 flex flex-wrap gap-2 text-xs">
                                <span className="px-2 py-1 rounded-full border border-neutral-200/20">MERN Roles</span>
                                <span className="px-2 py-1 rounded-full border border-neutral-200/20">Frontend Dev</span>
                                <span className="px-2 py-1 rounded-full border border-neutral-200/20">Internships</span>
                                <span className="px-2 py-1 rounded-full border border-neutral-200/20">Problem Sloving</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="max-w-6xl mx-auto px-4 pb-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl border border-neutral-200/10 shadow-sm">
                    <h2 className="text-xl font-semibold">About</h2>
                    <p className="mt-3 opacity-90 leading-relaxed">{PROFILE.about}</p>
                </motion.div>
            </section>

            {/* Skills */}
            <section id="skills" className="max-w-6xl mx-auto px-4 pb-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl border border-neutral-200/10 shadow-sm">
                        <h2 className="text-xl font-semibold inline-flex items-center gap-2"><MonitorSmartphone className="h-5 w-5" /> Frontend & More</h2>
                        <div className="mt-4 grid sm:grid-cols-2 gap-4">
                            {SKILLS.map(s => (
                                <div key={s.group} className="">
                                    <p className="text-sm opacity-70">{s.group}</p>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {s.items.map(i => (
                                            <span key={i} className="text-xs px-2 py-1 rounded-full border border-neutral-200/20">{i}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl border border-neutral-200/10 shadow-sm">
                        <h2 className="text-xl font-semibold inline-flex items-center gap-2"><Server className="h-5 w-5" /> What I Love Building</h2>
                        <ul className="mt-3 space-y-2 text-sm opacity-90 list-disc list-inside">
                            <li>Full-stack apps with clean API boundaries</li>
                            <li>Reusable component libraries with Tailwind</li>
                            <li>Auth, protected routes, and role-based UIs</li>
                            <li>Performant lists, virtualization, and caching</li>
                            <li>Scalable,Dynamic web Application</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="max-w-6xl mx-auto px-4 pb-6">
                <div className="p-6 rounded-2xl border border-neutral-200/10 shadow-sm">
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                        <h2 className="text-xl font-semibold inline-flex items-center gap-2"><Database className="h-5 w-5" /> Projects</h2>
                        <div className="relative">
                            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 opacity-60" />
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search by tag, tech, title…"
                                className="pl-9 pr-3 py-2 text-sm rounded-xl border border-neutral-200/20 bg-transparent outline-none"
                            />
                        </div>
                    </div>

                    <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filtered.map((p) => (
                            <motion.article key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-4 rounded-2xl border border-neutral-200/10 hover:border-neutral-200/30 transition group">
                                <h3 className="font-medium text-lg">{p.title}</h3>
                                <p className="mt-2 text-sm opacity-80 leading-relaxed">{p.description}</p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {p.tags.map(t => (
                                        <span key={t} className="text-xs px-2 py-1 rounded-full border border-neutral-200/20">{t}</span>
                                    ))}
                                </div>
                                <ul className="mt-3 space-y-1 text-sm opacity-90">
                                    {p.highlights.map(h => (
                                        <li key={h} className="inline-flex items-center gap-2"><ArrowUpRight className="h-4 w-4 opacity-70" /> {h}</li>
                                    ))}
                                </ul>
                                <div className="mt-4 flex items-center gap-3">
                                    {p.links.map(l => (
                                        <a key={l.label} href={l.href} className="inline-flex items-center gap-1 text-sm underline underline-offset-4 decoration-dotted">
                                            {l.label} <ExternalLink className="h-3 w-3" />
                                        </a>
                                    ))}
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section id="education" className="max-w-6xl mx-auto px-4 pb-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl border border-neutral-200/10 shadow-sm">
                    <h2 className="text-xl font-semibold">Education</h2>
                    <div className="mt-4 grid sm:grid-cols-2 gap-4">
                        {EDUCATION.map(ed => (
                            <div key={ed.school} className="p-4 rounded-xl border border-neutral-200/10">
                                <p className="font-medium">{ed.school}</p>
                                <p className="text-sm opacity-80 mt-0.5">{ed.degree}</p>
                                <p className="text-xs opacity-60 mt-0.5">{ed.period}</p>
                                {ed.details?.length ? (
                                    <ul className="mt-2 text-sm opacity-90 list-disc list-inside">
                                        {ed.details.map(d => <li key={d}>{d}</li>)}
                                    </ul>
                                ) : null}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Contact */}
            <section id="contact" className="max-w-6xl mx-auto px-4 pb-16">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl border border-neutral-200/10 shadow-sm">
                    <h2 className="text-xl font-semibold">Contact</h2>
                    <p className="mt-2 text-sm opacity-80">Have an opportunity or want to collaborate? Reach out via email or LinkedIn.</p>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                        <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-200/20"><Mail className="h-4 w-4" /> {PROFILE.email}</a>
                        <a href={PROFILE.linkedin} className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-200/20"><Linkedin className="h-4 w-4" /> LinkedIn</a>
                        <a href={PROFILE.github} className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-200/20"><Github className="h-4 w-4" /> GitHub</a>
                    </div>
                </motion.div>
                <footer className="text-center text-xs opacity-60 mt-6">© {new Date().getFullYear()} {PROFILE.name}. Built with React & Tailwind.</footer>
            </section>
        </div>
    );
}
