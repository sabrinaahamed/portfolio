import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaImage,
  FaPenNib,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiFramer,
  SiVercel,
  SiCloudinary,
  SiOpenai,
  SiNotion,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    emoji: "💻",
    items: [
      { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
      { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-500" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-500" },
      { name: "React", icon: <FaReact />, color: "text-sky-500" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-slate-800" },
      { name: "Redux", icon: <SiRedux />, color: "text-purple-600" },
      { name: "Framer Motion", icon: <SiFramer />, color: "text-pink-500" },
    ],
  },
  {
    title: "Tools",
    emoji: "🛠️",
    items: [
      { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
      { name: "GitHub", icon: <FaGithub />, color: "text-slate-800" },
      { name: "Vercel", icon: <SiVercel />, color: "text-slate-800" },
      { name: "Cloudinary", icon: <SiCloudinary />, color: "text-blue-600" },
    ],
  },
  {
    title: "Design",
    emoji: "🎨",
    items: [
      { name: "Figma", icon: <FaFigma />, color: "text-pink-600" },
      { name: "Photoshop", icon: <FaImage />, color: "text-blue-700" },
      { name: "Adobe XD", icon: <FaPenNib />, color: "text-purple-600" },
    ],
  },
  {
    title: "AI & Productivity",
    emoji: "🤖",
    items: [
      { name: "ChatGPT", icon: <SiOpenai />, color: "text-emerald-600" },
      { name: "Notion", icon: <SiNotion />, color: "text-slate-800" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute top-20 left-0 w-72 h-72 bg-violet-400/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-60 h-60 bg-purple-300/10 blur-[100px] rounded-full pointer-events-none" />

      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-violet-600 text-sm font-medium mb-5">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
            Skills & Tools
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mt-4">
            Technologies{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              I Use
            </span>
          </h2>

          <p className="mt-6 text-slate-500 text-lg leading-relaxed">
            Technologies I use to build modern, scalable and
            high-performance applications.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/80 backdrop-blur-xl rounded-[28px] p-8 shadow-sm border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-7">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.emoji}</span>
                  <h3 className="text-xl font-bold text-slate-800">
                    {category.title}
                  </h3>
                </div>
                <span className="px-3 py-1 bg-violet-50 border border-violet-100 text-violet-500 text-xs font-semibold rounded-full">
                  {category.items.length} skills
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-violet-200 hover:bg-violet-50 transition-all duration-200 cursor-default"
                  >
                    <span className={`text-lg ${item.color}`}>
                      {item.icon}
                    </span>
                    <span className="text-sm font-medium text-slate-700">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;