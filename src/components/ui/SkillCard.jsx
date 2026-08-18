import { motion } from "framer-motion";
import SkillPill from "./SkillPill";

function SkillCard({
  title,
  description,
  icon: Icon,
  skills,
  className = "",
  delay = 0,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay,
      }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.055] to-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/25 hover:shadow-[0_20px_60px_rgba(16,185,129,0.07)] ${className}`}
    >
      {/* Large background icon */}
      <Icon
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-8 text-white/[0.025] transition-all duration-500 group-hover:scale-110 group-hover:text-emerald-400/[0.05]"
        size={180}
      />

      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-400/0 blur-3xl transition-all duration-500 group-hover:bg-emerald-400/10" />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-emerald-400">
              {title}
            </p>

            <h3 className="mt-4 max-w-md text-2xl font-semibold tracking-tight text-white md:text-3xl">
              {description}
            </h3>
          </div>

          <div className="hidden shrink-0 rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-emerald-400 sm:block">
            <Icon size={22} />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <SkillPill
              key={skill.name}
              icon={skill.icon}
              name={skill.name}
            />
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default SkillCard;