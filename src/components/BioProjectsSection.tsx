
import React from "react";
import { Code, List, Book } from "lucide-react";

const projects = [
  {
    name: "Chat-Project-frontend",
    desc: "This project is an encrypted chat system based on React 18. The encryption methods involve AES and RSA. It realizes functions such as user registration, login, friend management, and message encryption transmission.",
    stack: ["React", "JavaScript", "AES", "RSA", "MUI"]
  },
  {
    name: "Chat-Project-backend",
    desc: "This project is a Flask-based encrypted chat system supporting user registration, login, friend management, and secure message transmission using RSA and AES encryption algorithms.",
    stack: ["Python", "Flask", "RSA", "AES"]
  },
  {
    name: "novaro-web",
    desc: "This project is a social platform based on the blockchain ERC protocol token generation",
    stack: ["React", "ERC20", "JavaScript", "Solidity", "Tailwind CSS"]
  }
];

const techStack = [
  "React", "Vue", "JavaScript", "CSS", "Vite", 
  "NextJS", "Python", "GO", "Solidity", "Docker"
];

const BioProjectsSection = () => {
  return (
    <section className="mt-14 w-full max-w-6xl mx-auto px-4 md:px-0">
      {/* 项目介绍 */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-2">
          <Book className="w-5 h-5 text-pink-400" />
          <h2 className="font-head text-xl md:text-2xl font-bold text-black">Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div key={idx} className="rounded-xl border border-gray-100 bg-white shadow-sm py-6 px-5 flex flex-col gap-4 hover:shadow-md animate-fade-in transition">
              <h3 className="font-head text-lg text-pink-500 font-extrabold mb-1">{proj.name}</h3>
              <div className="font-timesroman text-gray-700 mb-2 text-base">{proj.desc}</div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {proj.stack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="bg-pink-50 text-pink-500 font-head text-xs px-3 py-1 rounded-full border border-pink-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 技术栈 */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-2">
          <Code className="w-5 h-5 text-pink-400" />
          <h2 className="font-head text-xl md:text-2xl font-bold text-black">Technologies</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {techStack.map((item, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-700 font-head text-sm px-4 py-1 rounded-full border border-gray-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BioProjectsSection;
