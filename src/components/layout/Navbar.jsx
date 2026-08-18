import { useState } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import navLinks from "../../data/navLinks";
import useScroll from "../../hooks/useScroll";

function Navbar() {
  const scrolled = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "backdrop-blur-xl bg-black/50 border-b border-zinc-800"
          : "bg-transparent"
        }`}
    >
      {/* Container */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="hero"
            smooth
            duration={600}
            offset={-70}
            className="cursor-pointer select-none"
          >
            <h1 className="text-3xl font-bold tracking-tight">
              Deepak{" "}
              <span className="text-emerald-400">
                Sikhwal.
              </span>
            </h1>
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden md:flex items-center gap-10">

            {navLinks.map((item) =>

              item.external ? (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="font-medium text-zinc-300 hover:text-emerald-400 transition duration-300"
                >
                  {item.title}
                </a>

              ) : (

                <Link
                  key={item.id}
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  activeClass="text-emerald-400"
                  className="relative cursor-pointer font-medium text-zinc-300 hover:text-emerald-400 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-emerald-400 hover:after:w-full after:transition-all"
                >
                  {item.title}
                </Link>

              )
            )}

          </nav>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl"
          >
            {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="md:hidden bg-[#111111] border-t border-zinc-800"
          >
            <nav className="flex flex-col py-6">

              {navLinks.map((item) =>

                item.external ? (

                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="px-6 py-3 hover:text-emerald-400"
                  >
                    Resume
                  </a>

                ) : (

                  <Link
                    key={item.id}
                    to={item.link}
                    smooth
                    duration={600}
                    offset={-70}
                    onClick={() => setMenuOpen(false)}
                    className="px-6 py-3 hover:text-emerald-400 cursor-pointer"
                  >
                    {item.title}
                  </Link>

                )

              )}

            </nav>
          </motion.div>

        )}

      </AnimatePresence>

    </motion.header>
  );
}

export default Navbar;