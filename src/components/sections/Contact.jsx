import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
} from "react-icons/fa6";

const socialLinks = [
  {
    icon: FaGithub,
    title: "GitHub",
    value: "deepakpandit31",
    link: "https://github.com/deepakpandit31",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "Deepak Sikhwal",
    link: "https://www.linkedin.com/in/deepak-sikhwal-67a976287",
  },
  {
    icon: FaLocationDot,
    title: "Location",
    value: "Rajasthan, India",
    link: "#",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#09090B] py-10"
    >
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-white/10 bg-[#18181B]/80 p-10 backdrop-blur-xl md:p-16"
        >
          <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Contact
          </p>

          <h2 className="mt-6 text-center text-4xl font-bold text-white md:text-6xl">
            Open to Opportunities
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-zinc-400">
            I'm a B.Tech Computer Science student focused on full stack
            development and AI-powered applications.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-8 text-zinc-400">
            I'm currently seeking internships and opportunities where I can
            build impactful products, contribute to real-world projects, and
            continue growing as a developer.
          </p>

          <motion.a
            href="mailto:deepaksikhwal07@gmail.com"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="mx-auto mt-10 flex w-fit items-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-8 py-4 text-white transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-500/20"
          >
            <FaEnvelope />

            <span>Email Me</span>
          </motion.a>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.title}
                  href={item.link}
                  target={item.link !== "#" ? "_blank" : undefined}
                  rel={
                    item.link !== "#"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/30 hover:bg-white/[0.07]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={20} />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 break-words text-zinc-400">
                    {item.value}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;