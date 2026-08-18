import { motion } from "framer-motion";

function TechCard({
    icon,
    title,
    className = "",
    delay = 0,
    color = "",
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: 0.7,
                y: 20,
            }}
            animate={{
                opacity: 1,
                scale: 1,
                y: [0, -8, 0],
            }}
            transition={{
                delay,
                duration: 3.5+ delay,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            }}
            whileHover={{
                scale: 1.08,
                y: -12,
                rotateX: 8,
                rotateY: -8,
            }}
            style={{
                transformStyle: "preserve-3d",
            }}
            className={`
                tech-card
    group
    absolute
    z-40
    w-20
    h-20
    rounded-3xl
    border
    border-white/10
   bg-white/4
    backdrop-blur-2xl
    shadow-[0_15px_40px_rgba(0,0,0,.35)]
    flex
    flex-col
    items-center
    justify-center
    overflow-hidden
    transition-all
    duration-300
    ${className}
    `}
        >
            {/* Glass Shine */}

            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

            {/* Glow */}

            <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-all duration-500 bg-emerald-400/10 blur-xl" />

            {/* Icon */}

            <motion.div
                whileHover={{
                    rotate: 360,
                }}
                transition={{
                    duration: 0.8,
                }}
                className={`text-3xl ${color}`}
            >
                {icon}
            </motion.div>

            {/* Text */}

            <motion.p
                whileHover={{
                    scale: 1.05,
                }}
                className="mt-2 text-xs text-zinc-300 font-medium"
            >
                {title}
            </motion.p>
        </motion.div>
    );
}

export default TechCard;