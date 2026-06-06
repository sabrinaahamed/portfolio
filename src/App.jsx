import React from "react";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/layouts/Footer";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Navbar from "./components/layouts/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
