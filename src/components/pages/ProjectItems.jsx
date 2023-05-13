import React from "react";

const ProjectItems = (props) => {
  return (
    <a href={`${props.repoLink}`} target="_blank">
      <div className="transition ease-in-out delay-100 max-w-sm p-6 backdrop-blur-sm bg-black bg-opacity-5 border border-purple-400 rounded-lg shadow-md shadow-purple-400 mb-5 hover:-translate-y-1 hover:scale-105">
        <svg
          class="text-purple-400"
          aria-hidden="true"
          fill="currentColor"
          viewBox="-400 0 1500 512"
        >
          <path d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
        </svg>
        <h5 className="mb-2 text-2xl text-center font-semibold tracking-tight text-purple-400">
          {props.name}
        </h5>
        <p className="mb-3 font-normal text-center text-white">
          {props.description}
        </p>

        {props.languages.map((language) => {
          if (language === "html") {
            language = "html5";
          } else if (language === "css") {
            language = "css3";
          }
          return (
            <i
              className={`devicon-${language}-plain text-purple-400 text-3xl mr-1`}
            ></i>
          );
        })}
      </div>
    </a>
  );
};

export default ProjectItems;
