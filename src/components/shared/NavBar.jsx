import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="backdrop-blur-sm bg-black bg-opacity-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <span className="self-center text-3xl font-semibold whitespace-nowrap text-purple-400">
            ZS
          </span>
        </Link>

        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-purple-400 rounded-lg md:hidden  focus:outline-none focus:shadow-outline-purple"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
        >
          <ul className="text-2xl flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <Link to="/">
              <li className="block py-2 pl-3 pr-4 text-purple-400 hover:animate-pulse">
                Home
              </li>
            </Link>
            <Link to="/work_experience">
              <li className="block py-2 pl-3 pr-4 text-purple-400 hover:animate-pulse">
                Work Experience
              </li>
            </Link>
            <Link to="/projects">
              <li className="block py-2 pl-3 pr-4 text-purple-400 hover:animate-pulse">
                Projects
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
