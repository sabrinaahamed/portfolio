import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";

import profileImg from "../../assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 overflow-visible"
    >
      

      <div className="absolute top-20 left-0 w-80 h-80 bg-violet-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 blur-[150px] rounded-full"></div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-5 py-2 rounded-full bg-violet-100 text-violet-600 font-medium">
              Frontend Developer
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">
              Hello, I'm
              <span className="block text-4xl text-violet-600">Sabrina Ahamed</span>
            </h1>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-xl">
              I build modern, responsive and interactive web applications using
              React, Next.js, Tailwind CSS and JavaScript.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-violet-600 hover:bg-violet-700 transition text-white px-8 py-4 rounded-xl shadow-lg">
                Download CV
              </button>

              <button className="border-2 border-violet-600 text-violet-600 px-8 py-4 rounded-xl hover:bg-violet-600 hover:text-white transition">
                Contact Me
              </button>
            </div>

            {/* Stats */}

          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow */}

              <div className="absolute -inset-5 bg-gradient-to-r from-violet-500 to-purple-500 blur-3xl opacity-30 rounded-[50px]"></div>

              {/* Image Card */}

              <div className="relative bg-white/60 backdrop-blur-xl p-5 rounded-[40px] shadow-2xl">
                <img
                  src={profileImg}
                  alt="Sabrina"
                  className="w-[380px] md:w-[450px] rounded-[30px]"
                />
              </div>
              {/* Tech Card */}

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="absolute -right-10 bottom-10 bg-white rounded-2xl shadow-xl px-6 py-4"
              >
                <p className="font-semibold">React • Next.js</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
