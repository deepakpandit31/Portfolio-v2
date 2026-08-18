import { motion } from "framer-motion";
import {
  FaArrowUp,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa6";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/10 bg-[#09090B] py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6">
        <motion.button
          whileHover={{
            y: -4,
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={scrollToTop}
          className="mb-10 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/20 bg-white/5 text-2xl text-emerald-400 transition-all hover:border-emerald-400 hover:bg-emerald-500/10"
        >
          <FaArrowUp />
        </motion.button>

        <div className="mb-8 flex items-center gap-8">
          <motion.a
            whileHover={{ y: -3 }}
            href="https://github.com/deepakpandit31"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-zinc-400 transition hover:text-emerald-400"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ y: -3 }}
            href="https://www.linkedin.com/in/deepak-sikhwal-67a976287"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-zinc-400 transition hover:text-emerald-400"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            whileHover={{ y: -3 }}
            href="mailto:deepaksikhwal07@gmail.com"
            className="text-2xl text-zinc-400 transition hover:text-emerald-400"
          >
            <FaEnvelope />
          </motion.a>
        </div>

        <h3 className="text-3xl font-bold text-white">
          Deepak <span className="text-emerald-400">Sikhwal.</span>
        </h3>

        <p className="mt-3 text-lg text-zinc-400">
          Full Stack MERN Developer
        </p>

        <div className="mt-8 h-px w-32 bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

        <p className="mt-8 text-sm text-zinc-500">
          © 2026 Deepak Sikhwal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;