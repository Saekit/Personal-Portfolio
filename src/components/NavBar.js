import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import ResponsiveMenu from "react-responsive-navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faTimes);

class NavBar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  scrollToBottom = () => {
    scroll.scrollToBottom();
  };
  nav = () => {
    if (window.location.href !== "https://raquel-randall.netlify.com/") {
      return (
        <ul className="navbar">
          <li className="nav-item">
            <a href="https://raquel-randall.netlify.com">Home</a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="navbar">
          <li className="nav-item">
            <Link
              activeClass="active"
              onClick={this.scrollToTop}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>

          <li className="nav-item">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link
              activeClass="active"
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Resume
            </Link>
          </li>

          <li className="nav-item">
            <Link
              activeClass="active"
              to="blog"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Blog
            </Link>
          </li>

          <li className="nav-item">
            <Link
              activeClass="active"
              onClick={this.scrollToBottom}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      );
    }
  };
  render() {
    return (
      <div className="navbar-container" id="nav">
        <ResponsiveMenu
          menuOpenButton={<FontAwesomeIcon icon={faBars} size="3x" />}
          menuCloseButton={<FontAwesomeIcon icon={faTimes} size="3x" />}
          changeMenuOn="500px"
          largeMenuClassName="large-menu-classname"
          smallMenuClassName="small-menu-classname"
          menu={this.nav()}
        />
      </div>
    );
  }
}
export default NavBar;
