import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const Contact = () => {
  return (
   <>
   <Header/>
    <section className="relative min-h-screen flex items-center justify-center bg-[#0f172a] overflow-hidden py-20">

      {/* Animated Background Blobs */}
      <div className="absolute w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse bottom-10 right-10"></div>

      <div className="relative max-w-6xl w-full mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="text-white">
          <h4 className="text-purple-400 tracking-widest mb-4">
            CONTACT
          </h4>

          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Let’s Work
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              {" "}Together
            </span>
          </h1>

          <p className="text-gray-400 mb-8 leading-relaxed">
            I'm actively seeking full-stack developer opportunities where I can
            build scalable web applications and contribute to impactful projects.
            Let’s discuss your idea.
          </p>

          <div className="space-y-4 text-gray-300 text-sm">
            <p>📍 India</p>
            <p>📧 narendrakumar74a@gmail.com</p>
            <p>💼 Available for Full-Time Roles</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/5 backdrop-blur-2xl border border-gray-800 rounded-2xl p-8 shadow-2xl">

          <form className="space-y-6">

            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border-b border-gray-600 focus:border-purple-500 outline-none py-3 text-white placeholder-gray-400 transition"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border-b border-gray-600 focus:border-purple-500 outline-none py-3 text-white placeholder-gray-400 transition"
              />
            </div>

            <div>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full bg-transparent border-b border-gray-600 focus:border-purple-500 outline-none py-3 text-white placeholder-gray-400 transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-semibold hover:scale-105 transition duration-300"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  <Footer/>
   
   </>
  );
};

export default Contact;
