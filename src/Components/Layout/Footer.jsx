import React from 'react'
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return  (
    <footer className="bg-slate-950 border-t border-white/10 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Narendra Kumar
            </h2>
            <p className="text-sm leading-relaxed">
              Full Stack Developer specializing in MERN stack. 
              Passionate about building scalable web applications 
              and clean user interfaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/about" target="_blank" className="hover:text-indigo-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="/" target="_blank" className="hover:text-indigo-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" target="_blank" className="hover:text-indigo-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-5">
              <a
                href="https://github.com/Narendra74a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-indigo-600/20 hover:text-indigo-400 transition"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/narendra74/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-indigo-600/20 hover:text-indigo-400 transition"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://mail.google.com/mail/u/0/#inbox"  target="_blank"
                className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-indigo-600/20 hover:text-indigo-400 transition"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10"></div>

        {/* Bottom Section */}
        <div className="w-full md:flex-row  text-center items-center text-sm gap-4">
          <p>
            © {new Date().getFullYear()} Narendra Kumar. All rights reserved.
          </p>
      
        </div>

      </div>
    </footer>
  );
}

export default Footer