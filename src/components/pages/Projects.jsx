import React, { useEffect } from "react";

const Projects = () => {
  const [repoData, setRepoData] = React.useState([]);

  useEffect(() => {
    const url = "https://api.github.com/users/ZahidSafi/repos";
    let data = [];
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
            return fetch(repo.languages_url)
              .then((response) => {
                if (response.status === 200) {
                  return response.json();
                } else {
                  throw new Error("Error getting repo language");
                }
              })
              .then((languages) => {
                return {
                  name: repo.name,
                  description: repo.description,
                  languages: Object.keys(languages),
                };
              });
          });

        Promise.all(filteredRepos)
          .then((allRepoData) => {
            setRepoData(allRepoData);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="max-w-sm p-6  border border-purple-400 rounded-lg shadow-md shadow-purple-400">
        <svg
          className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
            clipRule="evenodd"
          ></path>
          <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
        </svg>
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Need a help in Claim?
        </h5>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Go to this step by step guideline process on how to certify for your
          weekly benefits:
        </p>
      </div>
    </div>
  );
};

export default Projects;
