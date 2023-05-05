import React from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
    return (
        <div className='navBar'> 
            <nav>
                <ul>
                    <li>
                        <Link to="/">01. Home</Link>
                    </li>
                    <li>
                        <Link to="/work_experience">02. Work Experience</Link>
                    </li>
                    <li>
                        <Link to="/projects">03. Projects</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default NavBar;
