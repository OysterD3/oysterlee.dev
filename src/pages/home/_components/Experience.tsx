import React, { useState } from "react";
import Tabs from "../../../components/Tabs/Tabs";

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <section id="experience">
      <h2 className="section-header">
        <span>Experiences</span>
      </h2>
      <Tabs
        tabItems={[{ title: "Tab1" }, { title: "Tab2" }]}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </section>
  );
};

export default Experience;
