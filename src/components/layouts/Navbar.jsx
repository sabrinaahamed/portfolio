import React from 'react'

import {
  FiHome,
  FiUser,
  FiCode,
  FiFolder,
  FiMail,
} from "react-icons/fi";

const navLinks = [
  {
    icon: <FiHome />,
    href: "#home",
    label: "Home",
  },
  {
    icon: <FiUser />,
    href: "#about",
    label: "About",
  },
  {
    icon: <FiCode />,
    href: "#skills",
    label: "Skills",
  },
  {
    icon: <FiFolder />,
    href: "#projects",
    label: "Projects",
  },
  {
    icon: <FiMail />,
    href: "#contact",
    label: "Contact",
  },
];

const Navbar = () => {
  return (
    <nav
      className="
        fixed
        top-1/2
        -translate-y-1/2
        z-50
        hidden
        xl:block
      "
      style={{
        right: "max(20px, calc((100vw - 1280px) / 2 - 80px))",
      }}
    >
      <div
        className="
          bg-white/80
          backdrop-blur-2xl
          rounded-full
          p-3
          border
          border-white
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        "
      >
        <div className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              title={link.label}
              className="
                group
                relative
                w-12
                h-12
                rounded-full
                flex
                items-center
                justify-center
                text-lg
                text-slate-600
                hover:bg-violet-600
                hover:text-white
                transition-all
                duration-300
              "
            >
              {link.icon}

              {/* Tooltip */}

              <span
                className="
                  absolute
                  right-16
                  px-3
                  py-1.5
                  rounded-lg
                  bg-slate-900
                  text-white
                  text-sm
                  whitespace-nowrap
                  opacity-0
                  translate-x-2
                  group-hover:opacity-100
                  group-hover:translate-x-0
                  transition-all
                  duration-300
                  pointer-events-none
                "
              >
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;