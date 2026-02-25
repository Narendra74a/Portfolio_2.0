

import React from "react";
import bgImage from "../../assets/images/projectBG.png";
import { projectsData } from "./projectData";
import { Link } from "react-router-dom";



const Project = () => {
  return (
    <section 
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Subtitle */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="h-0.5 w-8 bg-purple-400 mr-3"></div>
            <span className="text-purple-400 tracking-widest text-sm">
              MY WORK
            </span>
            <div className="h-0.5 w-8 bg-purple-400 ml-3"></div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5">
            Featured Projects
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            A collection of production-ready applications built with modern technologies.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex flex-wrap justify-center gap-6 border-y border-gray-700 py-5 mb-12 text-gray-300 text-sm sm:text-base">
          <button className="hover:text-purple-400 transition">All</button>
          <button className="hover:text-purple-400 transition">Frontend</button>
          <button className="hover:text-purple-400 transition">Fullstack</button>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">

          {/* Card */}
          {projectsData.map((item) => (
            <div
              key={item}
              className="p-5 rounded-xl border border-gray-800 bg-white/5 backdrop-blur-xl hover:scale-[1.02] transition duration-300"
            >
              <span className="inline-block px-4 py-1 mb-4 bg-purple-600 text-xs rounded-full text-white">
                {item.category}
              </span>

              <h2 className="text-xl font-bold text-white mb-4">
               {item.title}
              </h2>

              <p className="text-gray-300 text-sm mb-6">
              {item.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {(item.tech).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-gray-700 rounded-full text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="px-5 py-2 text-sm bg-purple-600 rounded-lg text-white hover:bg-purple-700 transition">
                  Live Demo
                </button>
                <button className="px-5 py-2 text-sm bg-gray-700 rounded-lg text-white hover:bg-gray-600 transition">
                  <Link to={item.github} target="_blank">GitHub</Link>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Interested in Working Together?
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
            I'm actively seeking full-stack developer opportunities where I can contribute to scalable web applications and grow as a software engineer.
          </p>

          <button className="px-8 py-3 bg-gradient-to-r from-blue-700 to-gray-800 rounded-lg text-white hover:scale-105 transition">
         <Link to={"/contact"} target="_blank" >Contact Me</Link>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Project;
