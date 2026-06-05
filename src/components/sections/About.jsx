import React from "react";

import { motion } from "framer-motion";
import Container from "../ui/Container";

const About = () => {
  return (
    <section id="about" className="py-32">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-violet-600 font-medium mb-4">About Me</p>

            <h2 className="text-5xl font-bold leading-tight">
              Frontend Developer
            </h2>

            <p className="mt-8 text-lg text-slate-500 leading-relaxed max-w-lg">
              I'm Sabrina Ahamed, a frontend developer passionate about creating
              modern, responsive and user-friendly digital experiences with
              React, Next.js and Tailwind CSS.
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="
                bg-white/70
                backdrop-blur-xl
                rounded-[40px]
                p-10
                shadow-xl
                border
                border-white
              "
            >
              <div className="space-y-8">
                <div>
                  <p className="text-slate-400 text-sm mb-2">Experience</p>

                  <h3 className="text-4xl font-bold">1+ Years</h3>
                </div>

                <div className="h-px bg-slate-200"></div>

                <div>
                  <p className="text-slate-400 text-sm mb-2">Tech Stack</p>

                  <h3 className="text-xl font-semibold">
                    React • Next.js • Tailwind
                  </h3>
                </div>

                <div className="h-px bg-slate-200"></div>

                <div>
                  <p className="text-slate-400 text-sm mb-2">Focus</p>

                  <h3 className="text-xl font-semibold">
                    UI/UX & Frontend Development
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
