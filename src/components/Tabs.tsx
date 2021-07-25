import React from "react";
import type { RefObject, Dispatch } from "react";

export type TabItem = {
  title: string;
  component: React.FunctionComponent;
};

interface Props {
  tabItems: TabItem[];
  selectedIndex: number;
  setSelectedIndex: Dispatch<number>;
}

const Tabs = (props: Props) => {
  const DynamicComp = props.tabItems[props.selectedIndex].component;

  return (
    <>
      <div className="md:flex">
        <div className="flex">
          <nav id="nav" className="md:hidden overflow-x-auto relative">
            <span
              className="absolute h-10 w-48 bg-white rounded-lg shadow ease-out transition-transform transition-medium"
              style={{
                transform: `translateX(calc(100% * ${props.selectedIndex}))`,
              }}
            />
            <div className="relative flex">
              {props.tabItems.map((v, idx) => (
                <div className="flex-none w-48" key={v.title}>
                  <button
                    type="button"
                    onClick={() => props.setSelectedIndex(idx)}
                    className="py-2 whitespace-nowrap px-3 w-full flex justify-center items-center focus:outline-none focus-visible:underline"
                  >
                    <span
                      className={`${
                        props.selectedIndex === idx
                          ? "text-primary font-bold"
                          : "text-gray-700"
                      } ml-2 text-base truncate transition-all ease-in-out`}
                    >
                      {v.title}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </nav>
          <nav id="nav-md" className="hidden md:block w-56 relative">
            <span
              className="absolute h-10 w-full bg-white rounded-lg shadow ease-out transition-transform transition-medium"
              style={{
                transform: `translateY(calc(100% * ${props.selectedIndex}))`,
              }}
            />
            <ul className="relative">
              {props.tabItems.map((v, idx) => (
                <li key={v.title}>
                  <button
                    type="button"
                    onClick={() => props.setSelectedIndex(idx)}
                    className="py-2 px-3 w-full flex items-center focus:outline-none focus-visible:underline"
                  >
                    <span
                      className={`${
                        props.selectedIndex === idx
                          ? "text-primary font-bold"
                          : "text-gray-700"
                      } ml-2 text-base transition-all ease-in-out`}
                    >
                      {v.title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <DynamicComp />
      </div>
    </>
  );
};

export default Tabs;
