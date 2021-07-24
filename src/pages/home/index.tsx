import React, { useState } from "react";
import AboutSection from "./_components/About";
import Connect from "./_components/Connect";
import Experience from "./_components/Experience";
import HeroSection from "./_components/Hero";
import "./index.scss";
import NavBar, { Menu } from "./_components/NavBar";
import ProjectsSection from "./_components/Projects";
import SkillSection from "./_components/Skills";

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menus: Menu[] = [
    {
      title: "About",
      hash: "about",
      iconPath: function About() {
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        );
      },
    },
    {
      title: "Experiences",
      hash: "experiences",
      iconPath: function Experiences() {
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
          />
        );
      },
    },
    {
      title: "Projects",
      hash: "projects",
      iconPath: function Projects() {
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        );
      },
    },
    {
      title: "Skills",
      hash: "skills",
      iconPath: function Skills() {
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        );
      },
    },
    {
      title: "Connect",
      hash: "connect",
      iconPath: function Connect() {
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        );
      },
    },
  ];

  return (
    <>
      <HeroSection />
      <div className="flex bg-blue-50">
        <NavBar showMenu={showMenu} setShowMenu={setShowMenu} menus={menus} />
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

          <main className="flex-1 relative focus:outline-none">
            <AboutSection />
            <Experience />
            <ProjectsSection />
            <SkillSection />
            <Connect />
          </main>
        </div>
      </div>
    </>
  );
};

export default HomePage;
