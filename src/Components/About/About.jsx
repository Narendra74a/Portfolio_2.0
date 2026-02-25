import React from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Resume from "../../assets/Narendra_Kumar_MCA.pdf";

const About = () => {
  return (
    <>
      <Header />
      <section className="relative  z-0 min-h-screen bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Section */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h4 className="text-purple-400 tracking-widest mb-4">ABOUT ME</h4>

              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
                Building Scalable &
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  {" "}
                  Modern Web Applications
                </span>
              </h1>

              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm a full-stack developer specializing in MERN stack
                development. I focus on building performant, scalable, and
                production-ready web applications with clean architecture and
                optimized user experience.
              </p>

              <div className="flex gap-4 flex-wrap">
                <button className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition">
                  <a href={Resume} download="Narendra_Kumar_Resume.pdf">
                    Download Resume
                  </a>
                </button>
                <button className="px-6 py-3 border border-gray-600 rounded-lg hover:bg-white/10 transition">
                  <a href="/contact" target="_blank">Let's Connect</a>
                </button>
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-gray-800 p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-semibold mb-6">Quick Info</h3>

              <div className="space-y-4 text-gray-300 text-sm">
                <div className="flex justify-between">
                  <span>Name</span>
                  <span>Narendra Kumar</span>
                </div>
                <div className="flex justify-between">
                  <span>Role</span>
                  <span>Full Stack Developer</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience</span>
                  <span>Fresher</span>
                </div>
                <div className="flex justify-between">
                  <span>Tech Stack</span>
                  <span>MERN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-28 text-center">
            <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Tailwind",
                "JavaScript",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2 bg-white/5 border border-gray-700 rounded-full text-sm hover:bg-purple-600 transition cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mt-28">
            <h2 className="text-3xl font-bold text-center mb-16">Journey</h2>

            <div className="relative border-l border-gray-700 ml-6 space-y-12">
              <div className="ml-6">
                <div className="absolute -left-3 w-6 h-6 bg-purple-600 rounded-full"></div>
                <h3 className="text-lg font-semibold">MCA Graduate</h3>
                <p className="text-gray-400 text-sm">
                  Completed MCA with strong foundation in data structures, OOP,
                  and full-stack development.
                </p>
              </div>

              <div className="ml-6">
                <div className="absolute -left-3 w-6 h-6 bg-purple-600 rounded-full"></div>
                <h3 className="text-lg font-semibold">MERN Stack Projects</h3>
                <p className="text-gray-400 text-sm">
                  Built scalable portfolio and production-ready applications
                  using MERN stack.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-28 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Let’s Build Something Amazing Together
            </h2>

            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:scale-105 transition">
              <Link to={"/contact"}>Hire Me</Link>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
