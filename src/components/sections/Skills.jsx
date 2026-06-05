import React from "react";

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
    items: [
      {
        name: "HTML",
        icon: <FaHtml5 />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
      },
      {
        name: "React",
        icon: <FaReact />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
      },
      {
        name: "Redux",
        icon: <SiRedux />,
      },
      {
        name: "Framer Motion",
        icon: <SiFramer />,
      },
    ],
  },

  {
    title: "Tools",
    items: [
      {
        name: "Git",
        icon: <FaGitAlt />,
      },
      {
        name: "GitHub",
        icon: <FaGithub />,
      },
      {
        name: "Vercel",
        icon: <SiVercel />,
      },
      {
        name: "Cloudinary",
        icon: <SiCloudinary />,
      },
    ],
  },

  {
    title: "Design",
    items: [
      {
        name: "Figma",
        icon: <FaFigma />,
      },
      {
        name: "Photoshop",
        icon: <FaImage />,
      },
      {
        name: "Adobe XD",
        icon: <FaPenNib />,
      },
    ],
  },

  {
    title: "AI & Productivity",
    items: [
      {
        name: "ChatGPT",
        icon: <SiOpenai />,
      },
      {
        name: "Notion",
        icon: <SiNotion />,
      },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32">
      <Container>
        {/* Header */}

        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-violet-600 font-medium mb-4">
            Skills & Tools
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Technologies I Use
          </h2>

          <p className="mt-6 text-slate-500 text-lg leading-relaxed">
            Technologies I use to build modern, scalable and
            high-performance applications.
          </p>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="
                bg-white/80
                backdrop-blur-xl
                rounded-[32px]
                p-8
                shadow-lg
                border
                border-slate-100
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold">
                  {category.title}
                </h3>

                <span className="text-slate-400">
                  {category.items.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <button
                    key={item.name}
                    className="
                      flex
                      items-center
                      gap-2
                      px-4
                      py-3
                      rounded-xl
                      bg-slate-100
                      hover:bg-violet-100
                      hover:text-violet-700
                      transition-all
                      duration-300
                    "
                  >
                    <span className="text-lg">
                      {item.icon}
                    </span>

                    <span className="font-medium">
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;