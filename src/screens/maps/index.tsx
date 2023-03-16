import React from "react";
import { Box } from "@mui/system";
import { Text } from "common/text";
import TextItem from "components/text";
import { AnimationOnScroll } from "react-animation-on-scroll";
import DynamicButton from "components/button";
import { PATH_PAGE } from "router/paths";
import { useNavigate } from "react-router-dom";

const Map = () => {
  const navigate = useNavigate();
  return (
      <Box sx={styles.heroHeader}>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          style={{ textAlign: "right" }}
          initiallyVisible={false}
        >
          <TextItem
            text={Text.howTo.prompt}
            sx={{ fontFamily: "Dahlia", fontSize: "50px", padding: "0 5rem",     lineHeight: "50px" }}
            color={"inherit"}
            variant="h6"
            align={"center"}
          />
        </AnimationOnScroll>
        <Box sx={styles.buttons}>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            style={{ textAlign: "center" }}
            initiallyVisible={false}
          >
            <DynamicButton
              variant="contained"
              onPress={() => {
                navigate(PATH_PAGE.mirage.map.static);
              }}
              text={Text.howTo.web}
              sx={styles.buttonStyle}
            />
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            style={{ textAlign: "center" }}
            initiallyVisible={false}
          >
            <DynamicButton
              variant="contained"
              onPress={() => {
                navigate(PATH_PAGE.mirage.map.interactive);
              }}
              text={Text.howTo.interactive}
              sx={styles.buttonStyle}
            />
          </AnimationOnScroll>
        </Box>
    </Box>
  );
};

export default Map;

const styles = {
  heroHeader: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",

    top: "50%",
    marginTop: "-2.5rem",
    flexDirection: "column",
  },
  buttons: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop:"20px",
    flexWrap:"wrap !important",
    overflow:"hidden"
  },
  buttonStyle: {
    fontFamily: "Dahlia",
    background: "none",
    color: "black",
    border: "1px solid black",
    fontSize: "24px",
    cursor: "pointer",
    height: "4rem",
    width: "14rem",
    borderRadius: " 118px",
    padding: 0,
    boxShadow: "inset 0 0 0 0 #FFC5F2",
    webkitTransition: "ease-out 0.5s",
    mozTransition: "ease-out 0.5s",
    transition: "ease-out 0.5s",
    marginBottom:"20px",

    "&:hover": {
      boxShadow: "inset 400px 0 0 0 #FFC5F2",
    },
  },
};
