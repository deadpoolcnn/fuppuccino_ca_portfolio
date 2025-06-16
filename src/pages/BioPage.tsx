import Hero from "@/components/Hero";
import BioProjectsSection from "@/components/BioProjectsSection";
import { Link } from "react-router-dom";

const BioPage = () => (
  <main className="min-h-screen w-full bg-[#fbfaf7] text-black font-timesroman transition-colors duration-500">
    <nav className="w-full flex items-center justify-between px-7 pt-7 pb-5 select-none">
      <div className="flex items-center gap-7 text-md font-head">
        <Link
          to="/bio"
          className="relative px-2 font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-black after:rounded-full after:scale-x-100 after:transition-transform"
        >BIO</Link>
        <Link
          to="/work"
          className="relative px-2 hover:underline transition"
        >WORK</Link>
        <Link
          to="/contact"
          className="relative px-2 hover:underline transition"
        >CONTACT</Link>
      </div>
    </nav>
    <section className="flex flex-col items-center min-h-[calc(100vh-105px)] w-full">
      <Hero />
      <BioProjectsSection />
    </section>
    <footer className="w-full flex items-end justify-between px-10 pb-6 text-xs font-timesroman">
      <span className="flex items-center gap-2">
        <span className="text-2xl font-head">&copy;</span> {new Date().getFullYear()}
        <span>{Intl.DateTimeFormat().resolvedOptions().timeZone}</span>
      </span>
    </footer>
  </main>
);

export default BioPage;
