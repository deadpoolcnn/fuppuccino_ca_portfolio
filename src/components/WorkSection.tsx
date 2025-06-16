
import React from "react";

const projects = [
 {
    "year": "2023-2025",
    "title": "Front-end Development Engineer",
    "company": "MEITUAN CO LTD",
    "status": "Completed",
    "description": "Developed and maintained user-facing modules for the Meituan Apollo App and website, including features such as dining reservations, hotel bookings, group buying, coupons, and entertainment. Collaborated with cross-functional teams—including product managers, UI/UX designers, and back-end developers—to deliver scalable solutions from requirements gathering through to deployment. Contributed to the development of internal management systems, such as merchant dashboards and data analytics platforms, ensuring high performance and usability.",
    "tags": ["Front-end", "App", "Web", "Management System"]
  },
  {
    "year": "2022-2023",
    "title": "Front-end Development Engineer",
    "company": "Ford China Design Centre",
    "status": "Completed",
    "description": "Engineered the CSRE front-end system using a micro-frontend architecture to enhance modularity and scalability. Improved code quality and reliability by increasing unit test coverage and implementing security best practices with tools such as Checkmarx and SonarQube. Developed discovery modules for FordPass and LincolnWay apps, enabling real-time data synchronization and user tracking, and contributed to reducing cross-departmental code coupling.",
    "tags": ["Front-end", "Micro-frontend", "CMS", "Automotive"]
  },
  {
    "year": "2022",
    "title": "Front-end Development Engineer",
    "company": "GienTech Co., LTD",
    "status": "Completed",
    "description": "Supported the architectural upgrade of China Ping An’s Credit Business System by optimizing UI components and business logic. Developed internal modules for contract approval using Vue and elementUI, and collaborated with team members to manage code with Git. Ensured timely delivery of system enhancements and resolved existing defects to improve overall system stability.",
    "tags": ["Front-end", "Vue", "elementUI", "Finance"]
  },
  {
    "year": "2019-2022",
    "title": "Front-end Development Engineer",
    "company": "BONC Co., LTD",
    "status": "Completed",
    "description": "Designed and implemented the front-end for China Telecom Group’s Anti-Fraud Data Centre System, focusing on data visualization and logic processing. Developed the Xiong An Basic Platform Management System using Vue.js and elementUI, delivering features such as dashboards, resource management, and permission controls. Facilitated knowledge sharing within the team and ensured project milestones were achieved on schedule.",
    "tags": ["Front-end", "Vue.js", "elementUI", "Telecom", "Data Visualization"]
  }
];

const WorkSection = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 md:px-16 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-[3.5rem] md:text-[4rem] font-head font-bold text-black mb-4 leading-none">
          Work TimeLine
        </h1>
        <p className="text-lg text-gray-600 font-timesroman max-w-2xl">
          A showcase of my professional journey, highlighting key projects and roles in team, system architecture, and cross-industry collaboration.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <div key={index} className="group cursor-pointer">
            {/* Year */}
            <div className="text-sm font-head font-semibold text-gray-400 mb-2 tracking-wide">
              {project.year}
            </div>
            
            {/* Project Title */}
            <h3 className="text-xl md:text-2xl font-head font-bold text-black mb-2 group-hover:text-gray-600 transition-colors">
              {project.title}
            </h3>
            
            {/* Company & Status */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-base font-timesroman text-gray-600">
                {project.company}
              </span>
              <span className={`text-xs px-2 py-1 rounded-full font-head font-semibold ${
                project.status === "In Progress" 
                  ? "bg-blue-100 text-blue-700" 
                  : "bg-green-100 text-green-700"
              }`}>
                {project.status}
              </span>
            </div>
            
            {/* Description */}
            <p className="text-gray-700 font-timesroman text-base leading-relaxed mb-4">
              {project.description}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full font-head"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Divider line */}
            <div className="w-full h-px bg-gray-200 mt-8 group-hover:bg-gray-300 transition-colors"></div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-16 text-center">
        <p className="text-gray-500 font-timesroman text-sm">
          More projects available upon request. Feel free to reach out for case studies and detailed breakdowns.
        </p>
      </div>
    </div>
  );
};

export default WorkSection;
