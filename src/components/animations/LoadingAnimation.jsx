import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const shapes = [
  {
    size: 140,
    top: "20%",
    left: "20%",
    color: "rgba(16,185,129,0.3)",
  },
  {
    size: 110,
    top: "25%",
    right: "20%",
    color: "rgba(249,115,22,0.3)",
  },
  {
    size: 160,
    bottom: "20%",
    left: "30%",
    color: "rgba(234,179,8,0.3)",
  },
  {
    size: 130,
    bottom: "25%",
    right: "25%",
    color: "rgba(16,185,129,0.25)",
  },
];

function LoadingAnimation() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#09090B]"
        >
          {shapes.map((shape, index) => (
            <motion.div
              key={index}
              className="absolute blur-2xl"
              style={{
                width: shape.size,
                height: shape.size,
                background: shape.color,
                top: shape.top,
                bottom: shape.bottom,
                left: shape.left,
                right: shape.right,
              }}
              animate={{
                scale: [1, 1.6, 1],
                rotate: [0, 180, 360],
                borderRadius: [
                  "20%",
                  "50%",
                  "35%",
                  "60%",
                  "20%",
                ],
                x: [-40, 40, -40],
                y: [-30, 30, -30],
                opacity: [0.2, 0.8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 220 }}
              transition={{ duration: 1 }}
              className="h-[2px] rounded-full bg-emerald-400"
            />

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="mt-8 text-center text-5xl font-bold text-white md:text-7xl"
            >
              Deepak
              <span className="text-emerald-400">
                {" "}
                Sikhwal.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.8,
                duration: 0.5,
              }}
              className="mt-4 text-zinc-400"
            >
              Full Stack MERN Developer
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingAnimation;