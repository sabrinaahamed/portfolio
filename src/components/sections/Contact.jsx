import React from "react";

import Container from "../ui/Container";

import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <Container>
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-violet-600 font-medium mb-4">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Let's Work Together
          </h2>

          <p className="mt-6 text-slate-500 text-lg">
            Have a project in mind or just want to say hello?
            Feel free to reach out.
          </p>
        </div>

        {/* Main Content */}

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-stretch">

          {/* Left Card */}

          <div
            className="
              bg-white
              rounded-[32px]
              p-8
              shadow-lg
              border
              border-slate-100
              flex
              flex-col
            "
          >
            <h3 className="text-3xl font-bold mb-3">
              Contact Information
            </h3>

            <p className="text-slate-500 mb-10">
              Feel free to contact me through any of the
              platforms below.
            </p>

            <div className="space-y-4">

              {/* Email */}

              <a
                href="mailto:youremail@example.com"
                className="
                  flex
                  items-center
                  gap-4
                  p-4
                  rounded-2xl
                  bg-slate-50
                  hover:bg-violet-50
                  transition
                "
              >
                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-violet-100
                    flex
                    items-center
                    justify-center
                    text-violet-600
                  "
                >
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Email
                  </p>

                  <p className="font-medium">
                    youremail@example.com
                  </p>
                </div>
              </a>

              {/* Phone */}

              <a
                href="tel:+8801XXXXXXXXX"
                className="
                  flex
                  items-center
                  gap-4
                  p-4
                  rounded-2xl
                  bg-slate-50
                  hover:bg-violet-50
                  transition
                "
              >
                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-violet-100
                    flex
                    items-center
                    justify-center
                    text-violet-600
                  "
                >
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Phone
                  </p>

                  <p className="font-medium">
                    +8801XXXXXXXXX
                  </p>
                </div>
              </a>

            </div>

            {/* Socials */}

            <div className="mt-10">

              <h4 className="font-semibold mb-4">
                Follow Me
              </h4>

              <div className="flex flex-wrap gap-4">

                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-slate-100
                    flex
                    items-center
                    justify-center
                    hover:bg-violet-600
                    hover:text-white
                    transition
                  "
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-slate-100
                    flex
                    items-center
                    justify-center
                    hover:bg-violet-600
                    hover:text-white
                    transition
                  "
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-slate-100
                    flex
                    items-center
                    justify-center
                    hover:bg-violet-600
                    hover:text-white
                    transition
                  "
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-slate-100
                    flex
                    items-center
                    justify-center
                    hover:bg-violet-600
                    hover:text-white
                    transition
                  "
                >
                  <FaLinkedinIn />
                </a>

              </div>
            </div>
          </div>

          {/* Right Form */}

          <div
            className="
              bg-white
              rounded-[32px]
              p-8
              shadow-lg
              border
              border-slate-100
            "
          >
            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="
                    w-full
                    p-4
                    rounded-2xl
                    border
                    border-slate-200
                    outline-none
                    focus:border-violet-500
                  "
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="
                    w-full
                    p-4
                    rounded-2xl
                    border
                    border-slate-200
                    outline-none
                    focus:border-violet-500
                  "
                />

              </div>

              <input
                type="text"
                placeholder="Subject"
                className="
                  w-full
                  p-4
                  rounded-2xl
                  border
                  border-slate-200
                  outline-none
                  focus:border-violet-500
                "
              />

              <textarea
                rows="7"
                placeholder="Write your message..."
                className="
                  w-full
                  p-4
                  rounded-2xl
                  border
                  border-slate-200
                  outline-none
                  resize-none
                  focus:border-violet-500
                "
              />

              <button
                type="submit"
                className="
                  px-8
                  py-4
                  rounded-2xl
                  bg-violet-600
                  text-white
                  font-medium
                  hover:bg-violet-700
                  transition
                "
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Contact;