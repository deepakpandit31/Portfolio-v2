import { motion } from "framer-motion";

import ProjectCard from "../ui/ProjectCard";

import trinetraImage from "../../assets/projects/trinetra.png";
import pryzoImage from "../../assets/projects/pryzo.png";
import smartStudyImage from "../../assets/projects/smart-study.png";

const featuredProjects = [
  {
    number: "01",
    title: "Trinetra",
    subtitle: "Remote Technical Interview Platform",
    description:
      "A full-stack platform for conducting remote technical interviews with live video calling, interview scheduling, coding assessments, and an in-browser coding environment.",
    image: trinetraImage,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Clerk",
      "Convex",
      "Stream Video SDK",
      "Monaco Editor",
    ],
    github:
      "https://github.com/deepakpandit31/remote-interview-platform-",
    live: "https://trinetra-interview.vercel.app/",
  },

  {
    number: "02",
    title: "Pryzo",
    subtitle: "Smart Product Price Tracking Platform",
    description:
      "A web application that allows users to track product prices through product URLs, monitor price changes over time, and receive email alerts when tracked products become cheaper.",
    image: pryzoImage,
    technologies: [
      "Next.js",
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Email Notifications",
    ],
    github: "https://github.com/deepakpandit31/Pryzo",
    live: "https://pryzo.vercel.app/",
  },

  {
    number: "03",
    title: "Smart Study AI",
    subtitle: "AI-Powered Study Assistant",
    description:
      "A full-stack AI-powered study platform that transforms PDF notes and study material into summaries, keywords, flashcards, quizzes, and interactive mind maps using Google Gemini AI.",
    image: smartStudyImage,
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Google Gemini AI",
      "D3.js",
      "PDF.js",
      "REST APIs",
      "Render",
    ],
    github:
      "https://github.com/deepakpandit31/Smart-Study-AI-Assistant",
    live: "https://smart-study-ai-assistant-dgrv.onrender.com",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#09090B] py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-40 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/[0.045] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Selected Work
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Projects built to
            <br />
            solve real problems.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            A selection of full-stack and AI-powered applications I've built
            while exploring modern web development.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mt-20 space-y-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;