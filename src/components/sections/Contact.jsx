import React from "react";

import Container from "../ui/Container";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <Container>
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-10">
          <div className="text-center mb-10">
            <span className="text-violet-600 font-semibold">CONTACT</span>

            <h2 className="text-5xl font-bold mt-3">Let's Work Together</h2>
          </div>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-slate-200 p-4 rounded-xl outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-slate-200 p-4 rounded-xl outline-none"
            />

            <textarea
              rows="5"
              placeholder="Message"
              className="w-full border border-slate-200 p-4 rounded-xl outline-none"
            ></textarea>

            <button className="bg-violet-600 text-white px-8 py-4 rounded-xl">
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
