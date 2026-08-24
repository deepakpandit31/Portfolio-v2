import { motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { FiArrowRight, FiDownload } from "react-icons/fi";

import HeroImage from "../ui/HeroImage";
import heroData from "../../data/heroData";


function Hero() {
  const heroRef = useRef(null);
  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const tl = gsap.timeline({
  //       defaults: {
  //         ease: "power3.out",
  //       },
  //     });

  //     tl.from(".hero-badge", {
  //       y: -25,
  //       opacity: 0,
  //       duration: 0.5,
  //     })
  //       .from(
  //         ".hero-title",
  //         {
  //           y: 60,
  //           opacity: 0,
  //           duration: 0.8,
  //         },
  //         "-=0.2"
  //       )
  //       .from(
  //         ".hero-name",
  //         {
  //           y: 30,
  //           opacity: 0,
  //           duration: 0.5,
  //         },
  //         "-=0.4"
  //       )
  //       .from(
  //         ".hero-role",
  //         {
  //           y: 25,
  //           opacity: 0,
  //           duration: 0.5,
  //         },
  //         "-=0.4"
  //       )
  //       .from(
  //         ".hero-description",
  //         {
  //           y: 25,
  //           opacity: 0,
  //           duration: 0.5,
  //         },
  //         "-=0.3"
  //       )
  //       .from(
  //         ".hero-buttons",
  //         {
  //           y: 20,
  //           opacity: 0,
  //           duration: 0.5,
  //         },
  //         "-=0.3"
  //       )
  //       .from(
  //         ".hero-tech",
  //         {
  //           opacity: 0,
  //           y: 15,
  //           stagger: 0.08,
  //           duration: 0.3,
  //         },
  //         "-=0.2"
  //       )
  //       .from(
  //         ".hero-image",
  //         {
  //           x: 60,
  //           opacity: 0,
  //           scale: 0.9,
  //           duration: 1,
  //         },
  //         "-=0.8"
  //       )
  //       .from(
  //         ".tech-card",
  //         {
  //           opacity: 0,
  //           scale: 0,
  //           stagger: 0.08,
  //           duration: 0.35,
  //         },
  //         "-=0.6"
  //       );
  //   }, heroRef);

  //   return () => ctx.revert();
  // }, []);
  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen overflow-hidden flex items-center pt-20"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-emerald-500/10 blur-[140px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-orange-500/10 blur-[120px] rounded-full" />

      </div>

      {/* Grid Background */}

      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12">

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .2 }}
              className="hero-badge inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-2 mb-6"
            >

              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

              <span className="text-sm text-emerald-300">

                {heroData.availability}

              </span>

            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .3 }}
              className="hero-title text-4xl md:text-6xl xl:text-7xl font-black leading-[1.05]"
            >

              Building Digital

              <br />

              <span className="bg-linear-to-r from-emerald-400 to-orange-400 bg-clip-text text-transparent">

                Experiences

              </span>

              <br />

              That Matter

            </motion.h1>

            {/* Name */}

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .5 }}
              className="hero-name text-2xl md:text-3xl font-bold mt-6"
            >

              {heroData.name}

            </motion.h2>

            {/* Type */}

            <div className="hero-role text-lg md:text-xl mt-3 h-8 font-semibold text-emerald-400">

              <TypeAnimation
                sequence={[
                  ...heroData.roles.flatMap(role => [role, 1800])
                ]}
                repeat={Infinity}
                speed={45}
              />

            </div>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .8 }}
              className="hero-description text-zinc-400 text-base md:text-lg leading-7 mt-5 max-w-xl"
            >

              {heroData.description}

            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="hero-buttons flex flex-wrap gap-4 mt-7"
            >

              <Link
                to="projects"
                smooth
                duration={700}
                offset={-80}
              >

                <button className="cursor-pointer px-7 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 transition flex items-center gap-3 font-semibold">

                  View Projects

                  <FiArrowRight />

                </button>

              </Link>

              <a
                href={heroData.resume}
                target="_blank"
                rel="noopener noreferrer"
              >

                <button className="cursor-pointer px-7 py-3 rounded-xl border border-zinc-700 hover:border-emerald-400 hover:bg-zinc-900 transition flex items-center gap-3">

                  Resume

                  <FiDownload />

                </button>

              </a>

            </motion.div>

            {/* Tech */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-3 mt-7"
            >

              {heroData.technologies.map((tech) => (

                <span
                  key={tech}
                  className="hero-tech px-4 py-2 rounded-full bg-[#171717] border border-zinc-700 hover:border-emerald-500 transition"
                >

                  {tech}

                </span>

              ))}

            </motion.div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            className="hero-image flex justify-center lg:justify-end lg:-translate-y-10"
            initial={false}
            animate={false}
          >

            <HeroImage />

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;