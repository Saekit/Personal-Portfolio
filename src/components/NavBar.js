import React, { Component } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <ul className="navbar">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/projects"}>
          <li>Projects</li>
        </Link>
        <Link to={"/resume"}>
          <li>Resume</li>
        </Link>
        <Link to={"/about"}>
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
};
export default NavBar;
