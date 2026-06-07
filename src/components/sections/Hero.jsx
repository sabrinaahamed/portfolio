import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import profileImg from "../../assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28"
    >
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-400/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-300/15 blur-[130px] rounded-full pointer-events-none" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-center">

          {/* LEFT */}
          <div className="flex flex-col order-2 lg:order-1">

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
              className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 leading-tight"
            >
              Hello, I'm
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-1"
            >
              <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Sabrina Ahamed
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 text-slate-500 text-base md:text-lg leading-relaxed max-w-md"
            >
              I build modern, responsive and interactive web applications using
              React, Next.js, Tailwind CSS and JavaScript.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <button
                onClick={() => window.open("/resume.pdf")}
                className="bg-violet-600 hover:bg-violet-700 active:scale-95 transition-all duration-200 text-white px-7 py-3.5 rounded-xl shadow-lg shadow-violet-200 font-medium text-sm md:text-base"
              >
                Download Resume
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 border-violet-500 text-violet-600 hover:bg-violet-600 hover:text-white active:scale-95 transition-all duration-200 px-7 py-3.5 rounded-xl font-medium text-sm md:text-base"
              >
                Contact Me
              </button>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-violet-400/25 to-purple-400/15 blur-2xl rounded-[50px] pointer-events-none" />

              <div className="relative bg-white/70 backdrop-blur-md p-3 rounded-[32px] shadow-2xl border border-violet-100">
                <img
                  src={profileImg}
                  alt="Sabrina Ahamed"
                  className="w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px] xl:w-[460px] rounded-[24px] object-cover object-top block"
                />
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute -right-6 bottom-10 bg-white/90 backdrop-blur-sm border border-violet-100 rounded-2xl shadow-lg px-5 py-3"
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