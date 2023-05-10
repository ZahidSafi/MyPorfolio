import React from "react";

const WorkExperienceItem = (props) => {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-base font-normal leading-none text-white">
        {props.timeline}
      </time>
      <h3 className="text-2xl font-semibold text-purple-400">
        {props.titleAndCompany}
      </h3>
      <p className="mb-4 text-lg font-normal text-white">
        {props.description}
      </p>
    </li>
  );
};

export default WorkExperienceItem;
