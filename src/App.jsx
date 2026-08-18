import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import ParticleBackground from "./effects/ParticleBackground";
import LoadingAnimation from "./components/animations/LoadingAnimation";

function App() {
  return (
    <>
      <LoadingAnimation />

      <ParticleBackground />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Experience />

      <Contact />

      <Footer />
    </>
  );
}

export default App;