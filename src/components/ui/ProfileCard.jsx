import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import profileImage from "../../assets/images/profile.jpg";

function ProfileCard() {
    const cardRef = useRef(null);

const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

const rotateX = useTransform(mouseY, [-100, 100], [8, -8]);
const rotateY = useTransform(mouseX, [-100, 100], [-8, 8]);

const handleMouseMove = (e) => {
  const rect = cardRef.current.getBoundingClientRect();

  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  mouseX.set(x);
  mouseY.set(y);
};

const handleMouseLeave = () => {
  mouseX.set(0);
  mouseY.set(0);
};
    return (
   <motion.div
  ref={cardRef}
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}

  style={{
    rotateX,
    rotateY,
    transformStyle: "preserve-3d",
  }}

  initial={{
    opacity: 0,
    scale: 0.9,
    y: 30,
  }}

  animate={{
    opacity: 1,
    scale: 1,
    y: 0,
  }}

  transition={{
    duration: 0.8,
  }}

  whileHover={{
    scale: 1.03,
    y: -8,
  }}

  className="relative z-20"
>
            {/* Glow */}

            <motion.div
  animate={{
    scale: [1, 1.08, 1],
    opacity: [0.18, 0.28, 0.18],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute -inset-8 rounded-[50px] bg-emerald-400/20 blur-[120px]"
/> 

            {/* Card */}

            <div
                className="
          relative
         w-87.5
         h-125
          lg:w-85
          lg:h-107.5
          rounded-[36px]
          overflow-hidden
          border
          border-white/8
          bg-white/5
          backdrop-blur-xl
          shadow-[0_40px_120px_rgba(16,185,129,.18)]
        "
            >
                {/* Image */}

                <img
                    src={profileImage}
                    alt="Deepak Sikhwal"
                    draggable="false"
                    className="
                    w-full
                    h-full
                    object-cover
                    object-top
                    scale-110
                    transition-all
                    duration-700
                     hover:scale-115"
                />

                {/* Gradient Overlay */}

                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

                {/* Bottom Text */}

                <div className="absolute bottom-0 left-0 w-full p-6">

                    <h3 className="text-2xl font-bold text-white">
                        Deepak Sikhwal
                    </h3>

                    <p className="mt-2 text-zinc-300">
                        Full Stack Developer
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-4 py-2">

                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                        <span className="text-xs text-emerald-300 font-medium">
                            Open to Internship
                        </span>

                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default ProfileCard;
