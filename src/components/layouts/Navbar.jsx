import React from 'react'

const navLinks = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Contact",
];

const Navbar = () => {
  return (
    <nav
      className="
        fixed
        right-8
        top-1/2
        -translate-y-1/2
        z-50
        hidden
        lg:flex
      "
    >
      <div
        className="
          flex
          flex-col
          gap-4
          bg-white/70
          backdrop-blur-xl
          p-3
          rounded-full
          shadow-xl
          border
          border-white
        "
      >
        {navLinks.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="
              w-12
              h-12
              rounded-full
              flex
              items-center
              justify-center
              text-sm
              font-medium
              hover:bg-violet-600
              hover:text-white
              transition-all
              duration-300
            "
          >
            {item[0]}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;