import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import AboutSection from "./_components/About";
import Experience from "./_components/Experience";
import HeroSection from "./_components/Hero";
import "./index.scss";
import NavBar from "./_components/NavBar";
import ProjectsSection from "./_components/Projects";
import SkillSection from "./_components/Skills";

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <HeroSection />
      <div className="h-screen flex overflow-hidden bg-gray-100">
        <NavBar showMenu={showMenu} setShowMenu={setShowMenu} />
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <div className="relative z-10 flex-shrink-0 flex md:hidden h-16 bg-white shadow">
            <button
              onClick={() => setShowMenu((showMenu) => !showMenu)}
              className=" px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button>
          </div>

          <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <AboutSection />
            <Experience />
            <ProjectsSection />
            <SkillSection />
          </main>
        </div>
      </div>
    </>
  );
};

export default HomePage;
