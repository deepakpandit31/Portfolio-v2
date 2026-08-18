import { motion } from "framer-motion";
import { useRef, useState } from "react";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

import ProfileCard from "./ProfileCard";
import TechCard from "./TechCard";


function HeroImage() {
  const containerRef = useRef(null);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
      className="relative mx-auto flex h-[620px] w-full max-w-[560px] items-center justify-center"
    >
      {/* Background Glow */}

      <motion.div
        animate={{
          x: position.x - 210,
          y: position.y - 210,
          scale: [1, 1.08, 1],
        }}
        transition={{
          x: {
            type: "spring",
            stiffness: 60,
            damping: 18,
          },
          y: {
            type: "spring",
            stiffness: 60,
            damping: 18,
          },
          scale: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute h-[420px] w-[420px] rounded-full bg-emerald-500/15 blur-[120px] pointer-events-none z-0"
      />

      {/* Profile */}

      <div className="relative z-20">
        <ProfileCard />
      </div>

      {/* React */}
      <TechCard
        icon={<FaReact />}
        title="React"
        color="text-sky-400"
        className="top-2 right-16"
        delay={0}
      />

      <TechCard
        icon={<SiNextdotjs />}
        title="Next.js"
        color="text-white"
        className="top-28 -right-8"
        delay={0.6}
      />

      <TechCard
        icon={<FaNodeJs />}
        title="Node"
        color="text-green-500"
        className="bottom-6 right-8"
        delay={1.2}
      />

      <TechCard
        icon={<SiMongodb />}
        title="MongoDB"
        color="text-green-400"
        className="bottom-12 left-2"
        delay={1.8}
      />

      <TechCard
        icon={<SiTailwindcss />}
        title="Tailwind"
        color="text-cyan-400"
        className="top-28 -left-8"
        delay={2.4}
      />

      <TechCard
        icon={<FaGithub />}
        title="GitHub"
        color="text-white"
        className="top-52 right-2"
        delay={3}
      />


      {/* Education */}

       {/* <FloatingCard
        title="Education"
        value="B.Tech CSE • 4th Year"
        className="-left-6 bottom-24"
      />  */}

      {/* CGPA */}

      {/* <FloatingCard
        title="CGPA"
        value="7.8"
        className="-right-6 top-20"
      /> */}

      {/* Internship */}
      {/* 
      <FloatingCard
        title="Experience"
        value="InAmigos Foundation"
        className="right-0 bottom-16"
      /> */}
    </motion.div>
  );
}

export default HeroImage;