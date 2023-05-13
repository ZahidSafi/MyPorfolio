import React, { useEffect } from "react";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  const [repoData, setRepoData] = React.useState([]);

  useEffect(() => {
    const url = "https://api.github.com/users/ZahidSafi/repos";
    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Error getting repo data");
        }
      })
      .then((repos) => {
        const filteredRepos = repos
          .filter((repo) => !repo.fork)
          .map((repo) => {
                return {
                  name: repo.name,
                  description: repo.description,
                  languages: repo.topics,
                };
          });
          setRepoData(filteredRepos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      {/* <h1 className="text-5xl text-center font-extrabold text-white opacity-0 animate-fade-in-down">
          My Past <strong className="text-purple-400"> Projects</strong>
        </h1> */}
      {repoData.map((repo, index) => {
        return (<ProjectItems
          key={index}
          index={index}
          name={repo.name}
          description={repo.description}
          languages={repo.languages}
        />);
      })}
    </div>
  );
};

export default Projects;
