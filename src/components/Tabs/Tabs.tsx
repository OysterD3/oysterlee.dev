import React, { useEffect, useState, useCallback } from "react";
import type { RefObject, Dispatch } from "react";
import "./Tabs.scss";

type TabItem = {
  title: string;
};

interface Props {
  tabItems: TabItem[];
  selectedIndex: number;
  setSelectedIndex: Dispatch<number>;
}

const Tabs = (props: Props) => {
  const tab: RefObject<HTMLDivElement> = React.createRef();
  const [childNodes, setChildNodes] = useState<NodeListOf<ChildNode>>();
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);

  const changeWidth = useCallback(() => {
    if (tab.current) {
      setChildNodes(() => tab.current!!.childNodes);
      console.log(tab.current!!.childNodes);
      if (childNodes) {
        const el = childNodes[props.selectedIndex] as HTMLDivElement;
        setLeft(el.offsetLeft);
        setWidth(el.offsetWidth);
      }
    }
  }, [childNodes, props.selectedIndex, tab]);

  const handleClick = (idx: number) => {
    props.setSelectedIndex(idx);
    changeWidth();
  };

  useEffect(() => {
    changeWidth();
  }, [changeWidth]);

  return (
    <div className="tab">
      <nav ref={tab}>
        {props.tabItems.map((v, idx) => (
          <span
            key={v.title}
            className={`tab-item ${
              props.selectedIndex === idx && "tab-item__selected"
            }`}
            onClick={() => handleClick(idx)}
          >
            {v.title}
          </span>
        ))}
      </nav>
      <div
        className="tab__indicator"
        style={{ left: `${left}px`, width: `${width}px` }}
      />
    </div>
  );
};

export default Tabs;
