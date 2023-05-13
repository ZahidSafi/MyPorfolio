import React from "react";

const WorkExperienceItem = (props) => {
  return (
    <li className="mb-10 ml-4 relative opacity-0 animate-fade-in-down">
      <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.375 border  bg-white "></div>
      <time className="mb-1 text-base font-normal leading-none text-white ">
        {props.timeline}
      </time>
      <h3 className="text-2xl font-semibold text-purple-400">
        {props.titleAndCompany}
      </h3>
      <p className="mb-4 text-lg font-normal text-white">{props.description}</p>
    </li>
  );
};

export default WorkExperienceItem;
