
import React from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    year: "2023 - Present",
    title: "Senior Frontend Engineer",
    company: "Future Design Tech",
    desc: "Led redesigns and interactive upgrades for multiple products, driving adoption of modern frontend stacks.",
  },
  {
    year: "2021 - 2023",
    title: "Full Stack Developer",
    company: "Innovation Lab",
    desc: "Designed and implemented a low-code platform for consumers, improving overall productivity.",
  },
  {
    year: "2019 - 2021",
    title: "Frontend Intern",
    company: "CreativeNet",
    desc: "Worked on UI component libraries, performance tuning, and optimizing team workflows.",
  },
];

const ExperienceTimeline = () => {
  return (
    <section className="mb-16 w-full flex flex-col items-center px-2 animate-fade-in">
      <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-slate-700 mb-7 text-center tracking-tight">Experience</h2>
      <div className="relative flex justify-center w-full max-w-2xl mx-auto">
        {/* Vertical Timeline */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-300/40 via-blue-200/20 to-blue-200/0 rounded-full pointer-events-none z-0"></div>
        <ul className="relative z-10 w-full">
          {experiences.map((exp, idx) => (
            <li key={exp.title + exp.company} className="flex w-full mb-12 last:mb-0 items-center group">
              {/* Year column */}
              <div className="w-1/4 text-right pr-4 select-none">
                <span className="inline-block text-blue-500 font-semibold text-sm">{exp.year}</span>
              </div>
              {/* Timeline dot and line */}
              <div className="relative flex flex-col items-center z-10">
                <span className="w-4 h-4 bg-white border-2 border-blue-400 rounded-full flex items-center justify-center shadow-lg transition group-hover:scale-110">
                  <Briefcase className="w-3 h-3 text-blue-500" />
                </span>
                {idx < experiences.length - 1 && (
                  <span className="w-1 h-24 bg-blue-200/60 block"></span>
                )}
              </div>
              {/* Content card */}
              <div className="w-3/4 pl-6">
                <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-md p-5 border border-blue-100 transition-all group-hover:shadow-xl group-hover:scale-105">
                  <div className="font-bold text-lg text-slate-800">{exp.title}</div>
                  <div className="text-blue-500 text-sm font-montserrat mb-0.5">{exp.company}</div>
                  <div className="text-slate-500 text-sm">{exp.desc}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ExperienceTimeline;
