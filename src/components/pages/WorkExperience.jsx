import React from "react";
import WorkExperienceItem from "./WorkExperienceItem";
import workData from "../../../MyWorkExperience.json";

const WorkExperience = () => {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <ol className="relative border-l border-purple-400">
        {workData.map((data) => {
          return (<WorkExperienceItem
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
