import { motion } from "framer-motion";

function SkillPill({ icon: Icon, name }) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.04 }}
      transition={{ duration: 0.2 }}
      className="group inline-flex cursor-default items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm font-medium text-zinc-300 transition-colors duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-white"
    >
      {Icon && (
        <Icon
          className="text-zinc-500 transition-colors duration-300 group-hover:text-emerald-400"
          size={16}
        />
      )}

      <span>{name}</span>
    </motion.div>
  );
}

export default SkillPill;