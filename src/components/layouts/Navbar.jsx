import React from 'react'

import Container from "../ui/Container";

const Navbar = () => {
  return (
    <header className="fixed w-full top-0 z-50">
      <Container>
        <div className="mt-5 bg-white/80 backdrop-blur-md rounded-2xl shadow-md px-8 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold">
              S
            </div>

            <h2 className="font-bold text-xl">
              Sabrina
            </h2>
          </div>

          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <button className="bg-violet-600 text-white px-5 py-2 rounded-lg hover:bg-violet-700 transition">
            Hire Me
          </button>

        </div>
      </Container>
    </header>
  );
};

export default Navbar;