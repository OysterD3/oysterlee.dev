import React from "react";

interface Props {
  name: string;
}
const SkillTemplate: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {props.children}
      <div className="text-base md:text-sm text-center">{props.name}</div>
    </div>
  );
};

export default SkillTemplate;
