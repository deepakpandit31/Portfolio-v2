// import { motion } from "framer-motion";
// import {
//   FaBriefcase,
//   FaBrain,
//   FaCode,
//   FaCalendarDays,
// } from "react-icons/fa6";

// const experiences = [
//   {
//     year: "2026",
//     title: "Frontend Developer Intern",
//     company: "InAmigos Foundation (Remote)",
//     duration: "Jul 2026 • 2 Weeks",
//     icon: FaBriefcase,
//     points: [
//       "Built a responsive NGO website prototype using HTML5, CSS3, and JavaScript.",
//       "Engineered reusable UI components with a focus on responsive design.",
//       "Presented the prototype to the team and incorporated feedback.",
//     ],
//   },
//   {
//     year: "2025",
//     title: "Artificial Intelligence and Machine Learning Training",
//     company: "CTTC Bhubaneswar",
//     duration: "May 2025 • Jun 2025",
//     icon: FaBrain,
//     points: [
//       "Completed hands-on AI and ML training.",
//       "Built a Face Recognition Attendance System.",
//       "Worked with OpenCV and machine learning techniques.",
//     ],
//   },
//   {
//     year: "2025",
//     title: "Front-End Web Developer Intern",
//     company: "Code Alpha (Remote)",
//     duration: "Jan 2025 • Feb 2025",
//     icon: FaCode,
//     points: [
//       "Built three responsive web applications.",
//       "Implemented layouts using Flexbox and CSS Grid.",
//       "Debugged UI issues and improved maintainability.",
//     ],
//   },
// ];

// function Experience() {
//   return (
//     <section
//       id="experience"
//       className="relative overflow-hidden bg-[#09090B] py-32"
//     >
//       <div className="absolute left-1/3 top-40 h-72 w-72 rounded-full bg-emerald-500/5 blur-[120px]" />

//       <div className="relative mx-auto max-w-7xl px-6">
//         {/* Heading */}

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="max-w-3xl"
//         >
//           <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
//             Experience
//           </p>

//           <h2 className="mt-5 text-4xl font-bold text-white md:text-6xl">
//             Building products,
//             <br />
//             learning continuously.
//           </h2>

//           <p className="mt-6 text-lg leading-8 text-zinc-400">
//             My journey through internships, training, and hands-on projects that
//             shaped my development experience.
//           </p>
//         </motion.div>

//         {/* Cards */}

//         <div className="mt-14 space-y-8">
//           {experiences.map((experience, index) => {
//             const Icon = experience.icon;

//             return (
//               <motion.div
//                 key={experience.title}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.6,
//                   delay: index * 0.15,
//                 }}
//                 whileHover={{ y: -6 }}
//                 className="group rounded-4xl border border-white/10 bg-[#18181B]/80 p-8 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/20 hover:shadow-[0_20px_50px_rgba(16,185,129,.1)]"
//               >
//                 <div className="flex flex-col justify-between gap-8 lg:flex-row">
//                   <div className="lg:w-2/3">
//                     <div className="flex items-center gap-4">
//                       <div className="rounded-2xl bg-emerald-500/10 p-4 text-emerald-400">
//                         <Icon size={22} />
//                       </div>

//                       <div>
//                         <h3 className="text-2xl font-semibold text-white">
//                           {experience.title}
//                         </h3>

//                         <p className="mt-1 text-sm text-zinc-500">
//                           {experience.company}
//                         </p>
//                       </div>
//                     </div>

//                     <ul className="mt-8 space-y-4">
//                       {experience.points.map((point) => (
//                         <li
//                           key={point}
//                           className="flex items-start gap-3 text-zinc-300"
//                         >
//                           <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />

//                           <span>{point}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div className="flex items-start">
//                     <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-300">
//                       <div className="flex items-center gap-2">
//                         <FaCalendarDays />

//                         {experience.duration}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Experience;


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBriefcase,
  FaBrain,
  FaCode,
} from "react-icons/fa6";

const experiences = [
  {
    id: 0,
    year: "2025",
    label: "Code Alpha",
    title: "Front-End Web Developer Intern",
    company: "Code Alpha (Remote)",
    icon: FaCode,
    points: [
      "Built three responsive web applications using HTML5, CSS3, and JavaScript.",
      "Implemented responsive layouts with Flexbox and CSS Grid.",
      "Debugged and resolved UI issues, improving maintainability and readability.",
    ],
  },
  {
    id: 1,
    year: "2025",
    label: "CTTC",
    title: "Artificial Intelligence and Machine Learning Training",
    company: "CTTC Bhubaneswar",
    icon: FaBrain,
    points: [
      "Completed hands-on training in Artificial Intelligence and Machine Learning.",
      "Built a Face Recognition Attendance System.",
      "Worked with OpenCV and machine learning techniques.",
    ],
  },
  {
    id: 2,
    year: "2026",
    label: "InAmigos",
    title: "Frontend Developer Intern",
    company: "InAmigos Foundation (Remote)",
    icon: FaBriefcase,
    points: [
      "Built a responsive NGO website prototype using HTML5, CSS3, and JavaScript.",
      "Engineered reusable UI components with a focus on responsive design.",
      "Presented the prototype to the team for review and incorporated feedback.",
    ],
  },
];

function Experience() {
  const [activeExperience, setActiveExperience] = useState(2);

  const current = experiences[activeExperience];
  const Icon = current.icon;

  return (
   <section
  id="experience"
  className="min-h-screen px-6 py-28 md:px-12 lg:px-24"
>
  <div className="mx-auto max-w-7xl">
    <p className="mb-6 text-sm font-semibold uppercase tracking-[0.4em] text-emerald-400">
      Experience
    </p>

    <h2 className="max-w-3xl text-5xl font-bold leading-tight text-white md:text-7xl">
      Building products,
      <br />
      learning continuously.
    </h2>

    <p className="mt-8 max-w-3xl text-xl leading-10 text-zinc-400">
      My journey through internships, training, and hands-on projects that
      shaped my development experience.
    </p>

    <div className="mt-20 space-y-10">
      {/* InAmigos */}

      <div className="rounded-[40px] border border-emerald-900/40 bg-zinc-900/80 p-10 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/50">
        <div className="flex flex-col justify-between gap-8 lg:flex-row">
          <div className="flex gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-950">
              💼
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">
                Frontend Developer Intern
              </h3>

              <p className="mt-2 text-xl text-zinc-500">
                InAmigos Foundation (Remote)
              </p>
            </div>
          </div>

          <div className="h-fit rounded-full border border-zinc-700 px-6 py-4 text-lg text-zinc-300">
            Jul 2026 • 2 Weeks
          </div>
        </div>

        <ul className="mt-10 space-y-6 text-xl text-zinc-300">
          <li>
            • Built a responsive NGO website prototype using HTML5, CSS3, and
            JavaScript.
          </li>

          <li>
            • Engineered reusable UI components with a focus on responsive
            design.
          </li>

          <li>
            • Presented the prototype to the team and incorporated feedback.
          </li>
        </ul>
      </div>

      {/* CTTC */}

      <div className="rounded-[40px] border border-zinc-800 bg-zinc-900/80 p-10 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/50">
        <div className="flex flex-col justify-between gap-8 lg:flex-row">
          <div className="flex gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-950">
              🧠
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">
                Artificial Intelligence and Machine Learning Training
              </h3>

              <p className="mt-2 text-xl text-zinc-500">
                CTTC Bhubaneswar
              </p>
            </div>
          </div>

          <div className="h-fit rounded-full border border-zinc-700 px-6 py-4 text-lg text-zinc-300">
            May 2025 • Jun 2025
          </div>
        </div>

        <ul className="mt-10 space-y-6 text-xl text-zinc-300">
          <li>• Completed hands-on AI and ML training.</li>

          <li>• Built a Face Recognition Attendance System.</li>

          <li>• Worked with OpenCV and machine learning techniques.</li>
        </ul>
      </div>

      {/* Code Alpha */}

      <div className="rounded-[40px] border border-zinc-800 bg-zinc-900/80 p-10 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/50">
        <div className="flex flex-col justify-between gap-8 lg:flex-row">
          <div className="flex gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-950">
              💻
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">
                Front-End Web Developer Intern
              </h3>

              <p className="mt-2 text-xl text-zinc-500">
                Code Alpha (Remote)
              </p>
            </div>
          </div>

          <div className="h-fit rounded-full border border-zinc-700 px-6 py-4 text-lg text-zinc-300">
            Jan 2025 • Feb 2025
          </div>
        </div>

        <ul className="mt-10 space-y-6 text-xl text-zinc-300">
          <li>• Built three responsive web applications.</li>

          <li>• Implemented layouts using Flexbox and CSS Grid.</li>

          <li>• Debugged UI issues and improved maintainability.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  );
}

export default Experience;