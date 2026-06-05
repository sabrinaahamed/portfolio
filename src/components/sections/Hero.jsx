import React from 'react'

import Container from "../ui/Container";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center"
    >
      <Container>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="bg-violet-100 text-violet-600 px-4 py-2 rounded-full">
              Frontend Developer
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold mt-6 leading-tight">
              Hello, I'm
              <span className="block text-violet-600">
                Sabrina
              </span>
            </h1>

            <p className="text-slate-500 mt-6 text-lg leading-relaxed max-w-xl">
              I build modern, responsive and interactive
              web applications using React, Tailwind CSS
              and JavaScript.
            </p>

            <div className="flex gap-4 mt-8">

              <button className="bg-violet-600 text-white px-6 py-3 rounded-xl">
                Download CV
              </button>

              <button className="border border-violet-600 text-violet-600 px-6 py-3 rounded-xl">
                Contact Me
              </button>

            </div>

          </div>

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 bg-violet-300 blur-3xl opacity-30 rounded-full"></div>

              <img
                src="https://i.pravatar.cc/500"
                alt=""
                className="relative w-[400px] rounded-3xl shadow-xl"
              />

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
};

export default Hero;