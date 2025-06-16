
import { Code, Database, Atom, Server, Laptop } from "lucide-react";

const skills = [
  { name: "Frontend Development", icon: Code, desc: "React, Vue, TypeScript, Tailwind", detail: "UI implementation, component libraries, interaction & animation" },
  { name: "Backend Development", icon: Server, desc: "Node.js, Express, RESTful API", detail: "API design, deployment, authentication" },
  { name: "Databases", icon: Database, desc: "MySQL, MongoDB, PostgreSQL", detail: "Data modeling & optimization" },
  { name: "Algorithms & Data Structures", icon: Atom, desc: "Leetcode, basic algorithms", detail: "Interview prep, engineering practice" },
  { name: "Cross-platform", icon: Laptop, desc: "Electron, Taro, UniApp", detail: "Desktop, Mini-program & Mobile integration" },
];

const Skills = () => {
  return (
    <section className="mb-16 w-full px-2">
      <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-slate-700 mb-7 text-center tracking-tight animate-fade-in">Skills</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-3xl mx-auto">
        {skills.map((s) => (
          <div
            key={s.name}
            className="rounded-2xl bg-white/60 backdrop-blur-lg transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105 border border-slate-200/80 flex flex-col items-center py-8 px-6 hover:-translate-y-1 active:scale-98 hover:bg-blue-50/40 animate-fade-in"
          >
            <s.icon className="w-11 h-11 text-blue-400 mb-3 drop-shadow" />
            <div className="font-bold text-lg text-slate-800 mb-1 font-montserrat">{s.name}</div>
            <div className="text-sm text-slate-500 text-center leading-relaxed mb-1">{s.desc}</div>
            <div className="text-xs text-slate-400 italic text-center">{s.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
