import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";

const stats = [
  { label: "Experience", value: "1+", unit: "Years" },
  { label: "Projects", value: "15+", unit: "Completed" },
  { label: "Technologies", value: "10+", unit: "Mastered" },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-72 h-72 bg-violet-400/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-60 h-60 bg-purple-300/10 blur-[100px] rounded-full pointer-events-none" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-violet-600 text-sm font-medium mb-5">
              <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
              About Me
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-800">
              Passionate about{" "}
              <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                beautiful UI
              </span>
            </h2>

            <p className="mt-6 text-base md:text-lg text-slate-500 leading-relaxed max-w-lg">
              I'm Sabrina Ahamed, a frontend developer passionate about creating
              modern, responsive and user-friendly digital experiences with
              React, Next.js and Tailwind CSS.
            </p>

            <p className="mt-4 text-base text-slate-400 leading-relaxed max-w-lg">
              I love turning complex problems into simple, elegant solutions.
              Every pixel matters to me — from smooth animations to accessible,
              performant interfaces.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/80 border border-violet-100 rounded-2xl p-4 text-center shadow-sm"
                >
                  <p className="text-2xl font-extrabold text-violet-600">{stat.value}</p>
                  <p className="text-xs text-slate-400 mt-1">{stat.unit}</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white/70 backdrop-blur-xl rounded-[40px] p-8 shadow-xl border border-violet-100 space-y-6">

              {[
                {
                  label: "Tech Stack",
                  content: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
                  type: "tags",
                },
                {
                  label: "Focus Area",
                  content: "UI/UX & Frontend Development",
                  type: "text",
                },
                {
                  label: "Currently Learning",
                  content: "TypeScript • Framer Motion • Node.js",
                  type: "text",
                },
                {
                  label: "Available For",
                  content: "Freelance & Full-time Opportunities",
                  type: "highlight",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <p className="text-slate-400 text-xs font-medium uppercase tracking-widest mb-3">
                    {item.label}
                  </p>

                  {item.type === "tags" && (
                    <div className="flex flex-wrap gap-2">
                      {item.content.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-violet-50 border border-violet-200 text-violet-600 text-sm rounded-lg font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.type === "text" && (
                    <p className="text-slate-700 font-semibold text-base">{item.content}</p>
                  )}

                  {item.type === "highlight" && (
                    <p className="text-violet-600 font-semibold text-base">{item.content}</p>
                  )}

                  {i < 3 && <div className="h-px bg-slate-100 mt-6" />}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default About;