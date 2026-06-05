import React from "react";

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
    description:
      "Modern portfolio website with animations and responsive design.",

    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",

    technologies: [
      {
        name: "React",
        icon: <FaReact />,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss />,
      },
      {
        name: "Framer Motion",
        icon: <SiFramer />,
      },
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
      {
        name: "React",
        icon: <FaReact />,
      },
      {
        name: "Redux",
        icon: <SiRedux />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase />,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss />,
      },
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
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss />,
      },
    ],

    github: "https://github.com/",
    live: "https://vercel.com/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32">
      <Container>
        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-violet-600 font-medium mb-4">Featured Projects</p>

          <h2 className="text-5xl md:text-6xl font-bold">My Recent Work</h2>

          <p className="mt-6 text-slate-500 text-lg">
            A collection of projects showcasing my frontend development skills
            and problem-solving approach.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="
                group
                bg-white
                rounded-[32px]
                overflow-hidden
                shadow-lg
                hover:-translate-y-3
                hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]
                transition-all
                duration-500
              "
            >
              {/* Image */}

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-[420px]
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/40
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    flex
                    items-end
                    justify-center
                    gap-4
                    pb-8
                  "
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      px-5
                      py-3
                      rounded-xl
                      bg-white/20
                      backdrop-blur-xl
                      border
                      border-white/20
                      text-white
                      hover:bg-white/30
                      transition
                    "
                  >
                    <FaGithub />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      px-5
                      py-3
                      rounded-xl
                      bg-violet-600
                      text-white
                      hover:bg-violet-700
                      transition
                    "
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>
                </div>
              </div>

              {/* Content */}

              <div className="p-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="mt-3 text-slate-500 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech.name}
                      className="
                        flex
                        items-center
                        gap-2
                        px-3
                        py-2
                        rounded-xl
                        bg-slate-100
                        text-sm
                        font-medium
                        hover:bg-violet-100
                        hover:text-violet-700
                        transition
                      "
                    >
                      {tech.icon}
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
