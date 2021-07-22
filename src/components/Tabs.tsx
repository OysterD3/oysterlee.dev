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
  const tab: RefObject<HTMLDivElement> = React.createRef();
  const DynamicComp = props.tabItems[props.selectedIndex].component;

  return (
    <>
      <div className="flex">
        <div className="flex">
          <nav id="nav" className="w-56 relative">
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
                    aria-selected={props.selectedIndex === idx}
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
