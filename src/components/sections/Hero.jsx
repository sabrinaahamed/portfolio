import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import profileImg from "../../assets/profile.png";

const name = "Sabrina Ahamed";

const Hero = () => {
  const [displayedLetters, setDisplayedLetters] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedLetters((prev) => {
          if (prev >= name.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 80);
      return () => clearInterval(interval);
    }, 700);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (displayedLetters >= name.length) {
      const t = setTimeout(() => setCursorVisible(false), 1200);
      return () => clearTimeout(t);
    }
    const interval = setInterval(() => setCursorVisible((v) => !v), 500);
    return () => clearInterval(interval);
  }, [displayedLetters]);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center py-16 overflow-hidden"
    >
      <div className="absolute top-10 left-0 w-96 h-96 bg-violet-400/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-300/20 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          <div className="flex flex-col">

            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-violet-600 text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
              Frontend Developer
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-5 text-5xl md:text-6xl xl:text-7xl font-bold text-slate-800 leading-tight"
            >
              Hello, I'm
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="mt-1"
            >
              <span className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-violet-600 leading-tight tracking-tight">
                {name.slice(0, displayedLetters)}
                <span
                  className={`inline-block w-[3px] h-[1em] bg-violet-500 align-middle ml-0.5 transition-opacity duration-100 ${
                    cursorVisible ? "opacity-100" : "opacity-0"
                  }`}
                />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-6 text-slate-500 text-base md:text-lg leading-relaxed max-w-md"
            >
              I build modern, responsive and interactive web applications using
              React, Next.js, Tailwind CSS and JavaScript.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 active:scale-95 transition-all duration-200 text-white px-7 py-3.5 rounded-xl shadow-lg shadow-violet-200 font-medium text-sm md:text-base"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-violet-500 text-violet-600 hover:bg-violet-600 hover:text-white active:scale-95 transition-all duration-200 px-7 py-3.5 rounded-xl font-medium text-sm md:text-base"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-violet-400/30 to-purple-400/20 blur-2xl rounded-[50px] pointer-events-none" />

              <div className="relative bg-white/70 backdrop-blur-md p-4 rounded-[36px] shadow-2xl border border-violet-100">
                <img
                  src={profileImg}
                  alt="Sabrina Ahamed"
                  className="w-[300px] sm:w-[340px] md:w-[380px] lg:w-[400px] rounded-[26px] object-cover block"
                />
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute -right-4 bottom-8 bg-white/90 backdrop-blur-sm border border-violet-100 rounded-2xl shadow-lg px-5 py-3"
              >
                <p className="font-semibold text-sm text-slate-700">React • Next.js</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;