import React from "react";
import WorkExperienceItem from "./WorkExperienceItem";
import workData from "../../../MyWorkExperience.json";

const WorkExperience = () => {
  return (
    <div className="max-w-screen-xl md:mx-auto pb-8 ml-4 mr-4  flex flex-wrap items-center justify-between mx-auto p-4 ">
      <h1 className="text-5xl text-center font-extrabold text-white opacity-0 animate-fade-in-down pb-2" style={{ animationDelay: `0.1s` }}>
          My Past <strong className="text-purple-400"> Work</strong> Experience
        </h1>
      <ol className="relative border-l border-purple-400">
        {workData.map((data, index) => {
          return (<WorkExperienceItem
            key={index}
            index={index}
            timeline={data.timeline}
            titleAndCompany={data.titleAndCompany}
            description={data.description}
          />);
        })}
      </ol>
    </div>
  );
};

export default WorkExperience;
