import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaMapMarkerAlt,
  FaBriefcase,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

const timeline = [
  {
    title: "Started Programming",
    description:
      "Began my programming journey by learning C and C++, focusing on logic building and problem solving.",
  },
  {
    title: "Frontend Development",
    description:
      "Learned HTML, CSS, JavaScript, React and Tailwind CSS to build responsive and interactive websites.",
  },
  {
    title: "MERN Stack",
    description:
      "Expanded into backend development with Node.js, Express.js, MongoDB and REST APIs.",
  },
  {
    title: "AI Projects",
    description:
      "Built AI-powered applications while exploring machine learning and practical problem solving.",
  },
  {
    title: "Current Goal",
    description:
      "Looking for a Full Stack MERN internship and building production-ready projects every day.",
  },
];

const facts = [
  {
    icon: FaGraduationCap,
    title: "Current Year",
    value: "4th Year B.Tech",
  },
  {
    icon: FaStar,
    title: "CGPA",
    value: "7.8",
  },
  {
    icon: FaUniversity,
    title: "College",
    value: "Mewar University",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    value: "Rajasthan, India",
  },
  {
    icon: FaBriefcase,
    title: "Status",
    value: "Open to Internship",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#09090B] py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >
          <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm font-medium tracking-wide text-emerald-400">
            ABOUT ME
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-6xl">
            Crafting modern digital
            <br />
            experiences with MERN
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            I'm Deepak Sikhwal, a Full Stack MERN Developer passionate about
            building clean, scalable and user-friendly web applications. I love
            turning ideas into modern digital experiences while continuously
            improving my skills.
          </p>
        </motion.div>

        {/* Content */}

        <div className="mt-24 grid items-start gap-16 lg:grid-cols-[420px_1fr]">
          {/* Left Card */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-white/10 bg-linear-to-br from-white/8 to-white/5 p-8 backdrop-blur-xl"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-emerald-400">
              Who I Am
            </span>

            <h3 className="mt-4 text-3xl font-bold text-white">
              Full Stack MERN Developer
            </h3>

            <p className="mt-6 leading-8 text-zinc-400">
              I enjoy designing premium interfaces and building scalable
              full-stack applications using modern technologies. My focus is on
              writing clean, maintainable code while creating excellent user
              experiences.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm font-medium text-emerald-400">
              ● Open to Internship
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm text-zinc-500">
              Learn more
              <FaArrowRight className="text-emerald-400" />
            </div>
          </motion.div>

          {/* Timeline */}

          <div>
            <h3 className="mb-10 text-3xl font-bold text-white">
              My Journey
            </h3>

            <div className="relative border-l border-white/10 pl-10">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * .08,
                    duration: .45,
                  }}
                  whileHover={{ x: 8 }}
                  className="relative mb-8"
                >
                  <span className="absolute -left-11.75 flex h-6 w-6 items-center justify-center rounded-full border border-emerald-500/40 bg-[#18181B] shadow-[0_0_18px_rgba(16,185,129,.35)]">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
                  </span>

                  <div className="rounded-3xl border border-white/10 bg-linear-to-br from-white/8 to-white/5 p-6 transition-all duration-300 hover:border-emerald-400/30 hover:shadow-[0_10px_40px_rgba(16,185,129,.08)]">
                    <h4 className="text-xl font-semibold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-3 leading-7 text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Facts */}

        <div className="mt-28">
          <h3 className="mb-12 text-center text-3xl font-bold text-white">
            Quick Facts
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {facts.map((fact) => {
              const Icon = fact.icon;

              return (
                <motion.div
                  key={fact.title}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: .25,
                  }}
                  className="rounded-3xl border border-white/10 bg-linear-to-br from-white/8 to-white/5 p-7 text-center transition-all duration-300 hover:border-emerald-400/30 hover:shadow-[0_10px_35px_rgba(16,185,129,.08)]"
                >
                  <Icon
                    size={24}
                    className="mx-auto text-emerald-400"
                  />

                  <h4 className="mt-5 text-xl font-semibold text-white">
                    {fact.value}
                  </h4>

                  <p className="mt-2 text-sm text-zinc-400">
                    {fact.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;