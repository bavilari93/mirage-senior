import React, { useState } from "react";
import { Box } from "@mui/system";
import { grey } from "@mui/material/colors";
import { useAppDispatch, useAppSelector } from "redux/store";
import { handleNavState } from "redux/slices/common";



const BurgerCloseAnimation = () => {
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
    <Box className={`menuToggle`} onClick={BurgerCloseAnimation}>
      <Box className={`hamBox`}>
        <Box
          component="span"
          className={
            showNav
              ? `lineTop lineTopSpin`
              : `lineTop`
          }
        ></Box>
        <Box
          component="span"
          className={
            showNav
              ? `lineBottom lineBottomSpin`
              : `lineBottom`
          }
        ></Box>
      </Box>
    </Box>
  );
};

export default BurgerCloseAnimation;
