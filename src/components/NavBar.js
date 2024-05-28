import React from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <nav className="navbar">
        <ul className="nav-list">
            <li className="nav-item">
                <Link to="home" smooth={true} duration={500} spy={true} exact='true' offset={-70}>home</Link>
            </li>
            <li className="nav-item">
                <Link to="resume" smooth={true} duration={500} spy={true} exact='true' offset={-70}>resume</Link>
            </li>
            <li className="nav-item">
                <Link to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-70}>projects</Link>
            </li>
            <li className="nav-item">
                <Link to="photos" smooth={true} duration={500} spy={true} exact='true' offset={-70}>photos</Link>
            </li>
            <li className="nav-item">
                <Link to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-70}>contact</Link>
            </li>
        </ul>
    </nav>
  );
};

export default NavBar;
