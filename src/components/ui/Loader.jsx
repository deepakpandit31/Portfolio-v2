import { motion, AnimatePresence } from "framer-motion";

function Loader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#09090B]"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 180 }}
            transition={{ duration: 1.4 }}
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
            className="mt-8 text-5xl font-bold text-white"
          >
            Deepak
            <span className="text-emerald-400">
              {" "}
              Sikhwal.
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.8,
            }}
            className="mt-4 text-zinc-400"
          >
            Full Stack MERN Developer
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;