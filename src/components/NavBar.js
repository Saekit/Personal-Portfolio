import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";

library.add(faBars, faTimes);

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#cbb3c9",
  },
  drawer: {
    width: 240,
  },
  drawerPaper: {
    width: 240,
    background: "#cbb3c9",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
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

  const [openNav, setOpenNav] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  const closeNav = () => {
    setOpenNav(false);
  };

  const nav = () => {
    if (window.location.pathname !== "/") {
      return (
        <ul className="navbar">
          <li className="nav-item">
            <LinkRouter to="/" onClick={closeNav}>
              Home
            </LinkRouter>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="navbar" id="nav">
          <li className="nav-item">
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => {
                scrollToTop();
                closeNav();
              }}
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
              onClick={closeNav}
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
              onClick={closeNav}
            >
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeNav}
            >
              Experience
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
              onClick={closeNav}
            >
              Blog
            </Link>
          </li>

          <li className="nav-item">
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => {
                scrollToBottom();
                closeNav();
              }}
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
        <div className="desktop-navbar">
          <Toolbar>{nav()}</Toolbar>
        </div>
        <div className="responsive-drawer">
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={() => setOpenNav(true)}
          >
            <FontAwesomeIcon icon={faBars} size="2x" />
          </IconButton>
          <Drawer
            className={classes.drawer}
            anchor="right"
            open={openNav}
            onClose={() => setOpenNav(false)}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton
                aria-label="close drawer"
                onClick={() => setOpenNav(false)}
              >
                <FontAwesomeIcon icon={faTimes} size="2x" />
              </IconButton>
            </div>
            <List>{nav()}</List>
          </Drawer>
        </div>
      </AppBar>
    </ElevationScroll>
  );
}
export default NavBar;
