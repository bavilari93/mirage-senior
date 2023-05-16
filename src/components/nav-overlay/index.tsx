import React from "react";
import { Box } from "@mui/system";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link, useLocation } from "react-router-dom";
import { PATH_PAGE } from "router/paths";
import { useAppDispatch } from "redux/store";
import { handleNavState } from "redux/slices/common";
import { Text } from "common/text";



const NavOverlay = () => {
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
    map: {
      path: PATH_PAGE.map,
      navText: `${Text.navLinks.map}`,
    },
  };

  const renderNavLinks = () => {
    return Object.keys(navLinks).map((_name: string) => {
      const pathInfo = (navLinks as any)[_name];
      const { path, navText } = pathInfo;
      const className = pathname === path ? `navLink active` : `navLink`;

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
      <Box component="div" className = "navOverlay">
        {renderNavLinks()}
      </Box>
  );
};

export default NavOverlay;
