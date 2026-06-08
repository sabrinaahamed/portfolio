import React, { useState } from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const socials = [
  { icon: <FaFacebookF />, href: "https://facebook.com/", label: "Facebook" },
  { icon: <FaWhatsapp />, href: "https://wa.me/", label: "WhatsApp" },
  { icon: <FaGithub />, href: "https://github.com/", label: "GitHub" },
  { icon: <FaLinkedinIn />, href: "https://linkedin.com/", label: "LinkedIn" },
];

const Contact = () => {
  const [focused, setFocused] = useState("");

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-20 left-0 w-72 h-72 bg-violet-400/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-60 h-60 bg-purple-300/10 blur-[100px] rounded-full pointer-events-none" />

      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-violet-600 text-sm font-medium mb-5">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
            Contact
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mt-4">
            Let's Work{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Together
            </span>
          </h2>

          <p className="mt-6 text-slate-500 text-lg leading-relaxed">
            Have a project in mind or just want to say hello? Feel free to reach out.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-stretch">

          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-xl rounded-[28px] p-8 shadow-sm border border-slate-100 flex flex-col"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              Contact Information
            </h3>
            <p className="text-slate-500 text-sm mb-8">
              Feel free to contact me through any of the platforms below.
            </p>

            <div className="space-y-3">
              
                <a href="mailto:youremail@example.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-violet-200 hover:bg-violet-50 transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-all duration-200">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Email</p>
                  <p className="font-semibold text-slate-700 text-sm">youremail@example.com</p>
                </div>
              </a>

              
               <a href="tel:+8801XXXXXXXXX"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-violet-200 hover:bg-violet-50 transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-all duration-200">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Phone</p>
                  <p className="font-semibold text-slate-700 text-sm">+8801XXXXXXXXX</p>
                </div>
              </a>
            </div>

            {/* Availability badge */}
            <div className="mt-6 flex items-center gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <p className="text-sm font-medium text-emerald-700">
                Available for freelance & full-time opportunities
              </p>
            </div>

            {/* Socials */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-slate-700 mb-4">Follow Me</p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  
                  <a  key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    title={social.label}
                    className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-100 flex items-center justify-center text-slate-500 hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-xl rounded-[28px] p-8 shadow-sm border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Send a Message</h3>
            <p className="text-slate-500 text-sm mb-8">I'll get back to you within 24 hours.</p>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused("")}
                    className={`w-full p-4 rounded-2xl border bg-slate-50 outline-none text-sm transition-all duration-200 ${
                      focused === "name"
                        ? "border-violet-400 bg-white shadow-sm shadow-violet-100"
                        : "border-slate-200"
                    }`}
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your Email"
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused("")}
                    className={`w-full p-4 rounded-2xl border bg-slate-50 outline-none text-sm transition-all duration-200 ${
                      focused === "email"
                        ? "border-violet-400 bg-white shadow-sm shadow-violet-100"
                        : "border-slate-200"
                    }`}
                  />
                </div>
              </div>

              <input
                type="text"
                placeholder="Subject"
                onFocus={() => setFocused("subject")}
                onBlur={() => setFocused("")}
                className={`w-full p-4 rounded-2xl border bg-slate-50 outline-none text-sm transition-all duration-200 ${
                  focused === "subject"
                    ? "border-violet-400 bg-white shadow-sm shadow-violet-100"
                    : "border-slate-200"
                }`}
              />

              <textarea
                rows={6}
                placeholder="Write your message..."
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused("")}
                className={`w-full p-4 rounded-2xl border bg-slate-50 outline-none resize-none text-sm transition-all duration-200 ${
                  focused === "message"
                    ? "border-violet-400 bg-white shadow-sm shadow-violet-100"
                    : "border-slate-200"
                }`}
              />

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-violet-600 text-white font-medium hover:bg-violet-700 active:scale-95 transition-all duration-200 shadow-lg shadow-violet-200"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default Contact;