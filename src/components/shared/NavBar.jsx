import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
    <nav className="border-gray-200 bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <ul className="font-medium flex p-0 mt-4">
          <li className="block py-2 pl-3 pr-4 text-purple-400 hover:bg-gray-700">
            <Link to="/">Home</Link>
          </li>
          <li className="block py-2 pl-3 pr-4 text-purple-400 hover:bg-gray-700">
            <Link to="/work_experience">Work Experience</Link>
          </li>
          <li className="block py-2 pl-3 pr-4 text-purple-400 hover:bg-gray-700">
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
    </header>
  );
};

export default NavBar;
