import React, { Component } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import ResponsiveMenu from "react-responsive-navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";

library.add(faBars, faTimes);

// need to remove react router
// home will be on the far left
// all others will be right aligned
// figure out how I want mobile to look

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#cbb3c9",
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function NavBar(props) {
  const classes = useStyles();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  const nav = () => {
    if (window.location.pathname !== "/") {
      return (
        <ul className="navbar">
          <li className="nav-item">
            <LinkRouter to="/">Home</LinkRouter>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="navbar" id="nav">
          <li className="nav-item">
            <Link
              activeClass="active"
              onClick={scrollToTop}
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
              onClick={scrollToBottom}
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

  return (
    <ElevationScroll {...props}>
      <AppBar className={classes.root}>
        <Toolbar>{nav()}</Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
export default NavBar;

{
  /* <ResponsiveMenu
menuOpenButton={<FontAwesomeIcon icon={faBars} size="3x" />}
menuCloseButton={<FontAwesomeIcon icon={faTimes} size="3x" />}
changeMenuOn="500px"
largeMenuClassName="large-menu-classname"
smallMenuClassName="small-menu-classname"
menu={nav()}
/> */
}
