import React from "react";
import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link, useLocation } from "react-router-dom";
import { PATH_PAGE } from "router/paths";
import { useAppDispatch } from "redux/store";
import { handleNavState } from "redux/slices/common";
import { Text } from "common/text";
import { gradient } from "styles/palette";

const useStyles = makeStyles({
  navOverlay: {
    position: "fixed",
    background: grey[100],
    zIndex: "100",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    transitionDelay: "0s",
    transition: "all 2s cubic-bezier(0.16,1,0.3,1)",
    display:"flex",
    justifyContent:"center", 
    alignItems: "center"
  },
  linkContainer: {
    position: "relative",
    right: "0",
  },
  navLink: {
    fontFamily: "Dahlia, Medium",
    fontSize: 60,
    color: grey[900],
    textDecoration: "none",
    marginTop: "2rem",
    position: "relative",
    letterSpacing: "2px",
    fontWeight: 400,
    cursor: "pointer",

    "&.active": {
      background: gradient.pinkToPurple,
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      cursor: "pointer",
    },
    "&:hover": {
      fontWeight: 800,
      letterSpacing: "5px",
      transition: "all .5s",
    },
  },
});

const NavOverlay = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const closeNav = () => {
    dispatch(handleNavState());
  };

  const navLinks: Object = {
    home: {
      path: PATH_PAGE.root,
      navText: `${Text.navLinks.home}`,
    },
    about: {
      path: PATH_PAGE.mirage.root,
      navText: `${Text.navLinks.about}`,
    },
    howTo: {
      path: PATH_PAGE.mirage.instructions,
      navText: `${Text.navLinks.howTo}`,
    },
    map: {
      path: PATH_PAGE.map,
      navText: `${Text.navLinks.map}`,
    },
  };

  const renderNavLinks = () => {
    return Object.keys(navLinks).map((_name: string) => {
      const pathInfo = (navLinks as any)[_name];
      const { path, navText } = pathInfo;
      const className =
        pathname === path ? `${classes.navLink} active` : `${classes.navLink}`;

      return (
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          style={{ textAlign: "center" }}
          initiallyVisible={false}
          animateOnce
        >
          <Link to={path} onClick={closeNav} className={className}>
            {navText}
          </Link>
        </AnimationOnScroll>
      );
    });
  };

  return (
    <Box component="div" className={`${classes.navOverlay}`}>
      <Box component="div" className={`${classes.linkContainer}`}>
        {renderNavLinks()}
      </Box>
    </Box>
  );
};

export default NavOverlay;
