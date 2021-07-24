import React from "react";

interface Props {
  designation: string;
  companyName?: string;
  companyLink?: string;
  companyState?: string;
  from: string;
  to: string;
}

const ExperienceTemplate: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="px-4 mt-2 md:mt-0">
      <div className="font-bold">
        {props.designation}&nbsp;
        {props.companyName &&
          (props.companyLink ? (
            <a
              className="text-primary hover:text-accent transition-colors ease-in-out duration-150"
              href={props.companyLink}
              target="_blank"
              rel="noreferrer"
            >
              <br className="md:hidden" />@ {props.companyName} (
              {props.companyState})
            </a>
          ) : (
            <span>
              <br className="md:hidden" />@ {props.companyName} (
              {props.companyState})
            </span>
          ))}
      </div>
      <div className="text-sm">
        {props.from} - {props.to}
      </div>
      <div className="mt-4 max-w-2xl">{props.children}</div>
    </div>
  );
};

export default ExperienceTemplate;
