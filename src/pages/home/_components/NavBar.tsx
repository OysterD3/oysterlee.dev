import { Transition } from "@headlessui/react";
import React from "react";
import Scrollspy from "react-scrollspy";

export type Menu = {
  title: string;
  hash: string;
  iconPath: React.FunctionComponent;
};

interface Props {
  showMenu: boolean;
  setShowMenu: React.Dispatch<boolean>;
  menus: Menu[];
}

const NavBar = ({ showMenu, setShowMenu, menus }: Props) => {
  return (
    <>
      {/* Off-canvas menu for mobile, show/hide based on off-canvas menu state. */}
      {showMenu && (
        <div
          className="fixed inset-0 flex z-40 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <Transition
            show={showMenu}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-gray-600 bg-opacity-75"
              aria-hidden="true"
            />
          </Transition>

          <Transition
            show={showMenu}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col h-full max-w-xs w-full pt-5 pb-4 bg-gray-800">
              <Transition
                show={showMenu}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    onClick={() => setShowMenu(false)}
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <svg
                      className="h-6 w-6 text-white"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </Transition>

              <div className="flex-shrink-0 flex items-center px-4">
                <div
                  className="h-8 w-8 bg-cover"
                  style={{ backgroundImage: "url('/logo.png')" }}
                />
                <div className="ml-2 text-white text-sm font-bold">
                  Oyster Lee
                </div>
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  <Scrollspy
                    componentTag="div"
                    items={menus.map((v) => v.hash)}
                    currentClassName="nav-link__active"
                  >
                    {menus.map((v) => (
                      <a key={v.title} href={`#${v.hash}`} className="nav-link">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          {v.iconPath}
                        </svg>
                        {v.title}
                      </a>
                    ))}
                  </Scrollspy>
                </nav>
              </div>
            </div>
          </Transition>

          <div className="flex-shrink-0 w-14" aria-hidden="true" />
        </div>
      )}

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0 h-screen sticky top-0">
        <div className="flex flex-col w-48">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col h-0 flex-1">
            <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
              <div
                className="h-8 w-8 bg-cover"
                style={{ backgroundImage: "url('/logo.png')" }}
              />
              <div className="ml-2 text-white text-sm font-bold">
                Oyster Lee
              </div>
            </div>
            <div className="flex-1 flex flex-col overflow-y-auto">
              <nav className="flex-1 px-2 py-4 bg-gray-800 space-y-1">
                <Scrollspy
                  items={menus.map((v) => v.hash)}
                  currentClassName="nav-link__active"
                  componentTag="div"
                >
                  {menus.map((v) => {
                    const Icon = v.iconPath;
                    return (
                      <a key={v.title} href={`#${v.hash}`} className="nav-link">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <Icon />
                        </svg>
                        {v.title}
                      </a>
                    );
                  })}
                </Scrollspy>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
