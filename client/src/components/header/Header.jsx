import React, { useContext } from "react";
import "./header.css";
import { Link } from "react-scroll";
import { FaSun, FaMoon } from "react-icons/fa";
import {ThemeContext} from "../../context/ThemeContext";
import { FaSnowflake } from 'react-icons/fa';

export default function Header() {

    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="header-con">
      <div className="header-left">
        <span>
            <FaSnowflake size={22} />
        </span>
        <h3 className="head-left-title">ANISH KUMAR SINHA</h3>
      </div>
      <div className="header-right">
        <Link to="home" smooth={true} duration={500}>
          <h4>Home</h4>
        </Link>
        <Link to="about" smooth={true} duration={500}>
          <h4>About</h4>
        </Link>
        <Link to="resume" smooth={true} duration={500}>
          <h4>Resume</h4>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <h4>Skills</h4>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <h4>Projects</h4>
        </Link>
        <Link to="contacts" smooth={true} duration={500}>
          <h4>Contact</h4>
        </Link>
        <div
          className="drak-light-icons"
          onClick={toggleTheme}
          style={{ cursor: "pointer" }}
        >
          {isDarkTheme ? (
            <FaSun size="24px" color="yellow" />
          ) : (
            <FaMoon size="22px" color="block" />
          )}
        </div>
      </div>
    </div>
  );
}
