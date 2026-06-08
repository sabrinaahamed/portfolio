import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import { FaGithub, FaExternalLinkAlt, FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiFramer,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Modern portfolio website with animations and responsive design.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    technologies: [
      { name: "React", icon: <FaReact />, color: "text-sky-500" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-500" },
      { name: "Framer Motion", icon: <SiFramer />, color: "text-pink-500" },
    ],
    github: "https://github.com/",
    live: "https://vercel.com/",
  },
  {
    id: 2,
    title: "E-Commerce App",
    description: "Complete shopping platform with cart and authentication.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    technologies: [
      { name: "React", icon: <FaReact />, color: "text-sky-500" },
      { name: "Redux", icon: <SiRedux />, color: "text-purple-600" },
      { name: "Firebase", icon: <SiFirebase />, color: "text-orange-500" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-500" },
    ],
    github: "https://github.com/",
    live: "https://vercel.com/",
  },
  {
    id: 3,
    title: "Task Manager",
    description: "Task management application with modern dashboard UI.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
    technologies: [
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-slate-800" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-500" },
    ],
    github: "https://github.com/",
    live: "https://vercel.com/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-72 h-72 bg-violet-400/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-60 h-60 bg-purple-300/10 blur-[100px] rounded-full pointer-events-none" />

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
            Featured Projects
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mt-4">
            My Recent{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Work
            </span>
          </h2>

          <p className="mt-6 text-slate-500 text-lg leading-relaxed">
            A collection of projects showcasing my frontend development skills
            and problem-solving approach.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-[28px] overflow-hidden border border-slate-100 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay always visible at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Buttons — appear on hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  
                    <a href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-medium hover:bg-white/30 transition"
                  >
                    <FaGithub />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl font-bold text-slate-800">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 shrink-0">
                    
                      <a href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-violet-100 hover:text-violet-600 flex items-center justify-center text-slate-500 transition"
                    >
                      <FaGithub size={14} />
                    </a>
                    
                     <a href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-violet-100 hover:text-violet-600 flex items-center justify-center text-slate-500 transition"
                    >
                      <FaExternalLinkAlt size={12} />
                    </a>
                  </div>
                </div>

                <p className="mt-2 text-slate-500 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech.name}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-medium text-slate-600 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700 transition"
                    >
                      <span className={tech.color}>{tech.icon}</span>
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;