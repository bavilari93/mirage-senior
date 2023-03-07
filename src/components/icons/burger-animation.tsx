import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { grey } from "@mui/material/colors";
import { useAppDispatch, useAppSelector } from "redux/store";
import { handleNavState } from "redux/slices/common";

const burgerLineSharedProperties = {
  margin: "0 auto",
  position: "absolute" as any,
  display: "block",
  width: "24px",
  height: "2px",
  borderRadius: "10px",
  background: grey[800],
  left: 0,
  right: 0,
  transform: "rotate(0deg)",
  transition: "all 0.5s",
};
const useStyles = makeStyles({
  menuToggle: {
    cursor: "pointer",
  },
  hamBox: {
    position: "relative",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    transition: "0.5s ease-in-out",
    padding: "2.4em",
    right: "-20px",
  },
  "&.hamBox:hover": {},
  lineTop: {
    top: "2.2em",
    ...burgerLineSharedProperties,
  },
  lineTopSpin: {
    top: "2.35em",
    transform: "rotate(135deg)",
  },
  lineBottom: {
    bottom: "2.2em",
    ...burgerLineSharedProperties,
  },
  lineBottomSpin: {
    top: "2.35em",
    transform: "rotate(225deg)",
  },
  burger: {
    position: "fixed",
    top: "20px",
    left: "20px",
    zIndex: "999",
    "& span": {
      display: "block",
      width: "30px",
      height: "3px",
      margin: "5px auto",
      transition: "transform 0.5s ease-in-out",
      backgroundColor: "#fff",
    },
    "&.open span:nth-child(1)": {
      transform: "rotate(45deg) translate(5px, 5px)",
    },
    "&.open span:nth-child(2)": {
      opacity: "0",
    },
    "&.open span:nth-child(3)": {
      transform: "rotate(-45deg) translate(6px, -7px)",
    },
  },
});

const BurgerCloseAnimation = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const {
    // show menu
    common: { showNav },
  } = useAppSelector((state) => state);

  const BurgerCloseAnimation = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch(handleNavState());
  };

  return (
    <Box className={`${classes.menuToggle}`} onClick={BurgerCloseAnimation}>
      <Box className={`${classes.hamBox}`}>
        <Box
          component="span"
          className={
            showNav
              ? `${classes.lineTop} ${classes.lineTopSpin}`
              : `${classes.lineTop}`
          }
        ></Box>
        <Box
          component="span"
          className={
            showNav
              ? `${classes.lineBottom} ${classes.lineBottomSpin}`
              : `${classes.lineBottom}`
          }
        ></Box>
      </Box>
    </Box>
  );
};

export default BurgerCloseAnimation;
