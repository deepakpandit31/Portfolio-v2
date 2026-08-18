import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaLaptopCode,
  FaTools,
  FaGitAlt,
  FaGithub,
  FaTerminal,
  FaGlobe,
} from "react-icons/fa";

import SkillCard from "../ui/SkillCard";

const skillCategories = [
  {
    title: "Frontend",
    description: "Building modern, responsive interfaces.",
    icon: FaCode,
    className: "lg:col-span-7",
    skills: [
      { name: "HTML", icon: FaGlobe },
      { name: "CSS", icon: FaCode },
      { name: "JavaScript", icon: FaCode },
      { name: "React", icon: FaCode },
      { name: "Next.js", icon: FaCode },
      { name: "Tailwind CSS", icon: FaCode },
    ],
  },
  {
    title: "Backend",
    description: "Building APIs and server-side applications.",
    icon: FaServer,
    className: "lg:col-span-5",
    skills: [
      { name: "Node.js", icon: FaServer },
      { name: "Express.js", icon: FaServer },
      { name: "REST APIs", icon: FaServer },
    ],
  },
  {
    title: "Database",
    description: "Working with structured and document data.",
    icon: FaDatabase,
    className: "lg:col-span-4",
    skills: [
      { name: "MongoDB", icon: FaDatabase },
      { name: "SQL", icon: FaDatabase },
    ],
  },
  {
    title: "Programming",
    description: "Building strong programming fundamentals.",
    icon: FaLaptopCode,
    className: "lg:col-span-8",
    skills: [
      { name: "C", icon: FaCode },
      { name: "C++", icon: FaCode },
      { name: "Java", icon: FaCode },
      { name: "Python", icon: FaCode },
    ],
  },
  {
    title: "Development Tools",
    description: "Tools I use to build, test and deploy.",
    icon: FaTools,
    className: "lg:col-span-12",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: FaTerminal },
      { name: "Postman", icon: FaTerminal },
      { name: "Render", icon: FaGlobe },
      { name: "Vercel", icon: FaGlobe },
      { name: "Netlify", icon: FaGlobe },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#09090B] py-32"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute left-1/4 top-20 h-72 w-72 rounded-full bg-emerald-500/[0.07] blur-[120px]" />

      <div className="pointer-events-none absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-orange-500/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Skills
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Tools for turning
            <br />
            ideas into products.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Technologies I use to design, develop and deploy modern full-stack
            web applications.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="mt-20 grid gap-6 lg:grid-cols-12">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              title={category.title}
              description={category.description}
              icon={category.icon}
              skills={category.skills}
              className={category.className}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;