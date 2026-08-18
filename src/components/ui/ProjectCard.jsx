import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

function ProjectCard({
  number,
  title,
  subtitle,
  description,
  image,
  technologies,
  github,
  live,
  reverse = false,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7 }}
      className="group"
    >
      <div
        className={`grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#18181B] lg:grid-cols-2 ${
          reverse ? "lg:grid-flow-dense" : ""
        }`}
      >
        {/* Project Image */}
        <motion.div
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.5 }}
          className={`relative min-h-[320px] overflow-hidden bg-[#101012] lg:min-h-[500px] ${
            reverse ? "lg:col-start-2" : ""
          }`}
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          <img
            src={image}
            alt={`${title} project preview`}
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />

          {/* Preview label */}
          <div className="absolute left-6 top-6 z-20 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-300 backdrop-blur-xl">
            Project Preview
            </div>
        </motion.div>

        {/* Project Content */}
        <div
          className={`relative flex flex-col justify-center p-8 md:p-10 lg:p-12 ${
            reverse ? "lg:col-start-1 lg:row-start-1" : ""
          }`}
        >
          {/* Subtle glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/[0.05] blur-3xl transition-all duration-500 group-hover:bg-emerald-500/[0.09]" />

          <div className="relative">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium tracking-[0.2em] text-emerald-400">
                {number}
              </span>

              <span className="h-px w-10 bg-white/10" />

              <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                Featured Project
              </span>
            </div>

            <h3 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
              {title}
            </h3>

            <p className="mt-3 text-lg font-medium text-zinc-300">
              {subtitle}
            </p>

            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400">
              {description}
            </p>

            {/* Technologies */}
            <div className="mt-8 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-zinc-300 transition-colors duration-300 group-hover:border-emerald-400/20"
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/10"
              >
                <FaGithub size={16} />
                GitHub
              </a>

              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-[#09090B] transition-all duration-300 hover:bg-emerald-300 hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]"
                >
                  Live Demo
                  <FaArrowUpRightFromSquare size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;