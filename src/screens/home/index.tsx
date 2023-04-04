import React from "react";
import { Box } from "@mui/system";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from "react-router";
import AnimatedComponent from "components/hero";
import TextItem from "components/text";
import { Text } from "common/text";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { PATH_PAGE } from "router/paths";
import DynamicButton from "components/button";

const Home = (): JSX.Element => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Box className="home-wrapper" style={{marginTop:" -7rem"}}>
      <AnimatedComponent/>
      <Box sx={styles.heroDescription} >
      <AnimationOnScroll
          animateIn="animate__fadeInUp"
          style={{ textAlign: "center", margin:"-20px" }} 
          initiallyVisible={false}
        >
          <TextItem
            text={Text.home.where}
            sx={styles.heroContentText}
            color={"inherit"}
            variant="h3"
            align={"center"}
            fontSize={isSmallScreen?"70px" :"100px"}
      
          />
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          style={{ textAlign: "center", margin:"-20px" }}
          initiallyVisible={false}
        >
          <TextItem
            text={Text.home.memories}
            sx={styles.heroContentText}
            color={"inherit"}
            variant="h2"
            align={"center"}
            fontWeight={600}
            fontSize={isSmallScreen?"70px" :"100px"}
          />
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          style={{ textAlign: "center", margin:"-20px"  }}
          initiallyVisible={false}
        >
          <TextItem
            text={Text.home.become}
            sx={styles.heroContentText}
            color={"inherit"}
            variant="h3"
            align={"center"}
            fontSize={isSmallScreen?"70px" :"100px"}
          />
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          style={{ textAlign: "center", margin:"-20px"  }}
          initiallyVisible={false}
        >
          <TextItem
            text={Text.home.reality}
            sx={styles.heroContentText}
            color={"inherit"}
            variant="h2"
            align={"center"}
            fontWeight={600}
            fontSize={isSmallScreen?"70px" :"100px"}

          />
        </AnimationOnScroll>
      </Box>
      <Box sx={styles.heroHeader}>

      <AnimationOnScroll
          animateIn="animate__fadeInUp"
          style={{ textAlign: "center" }}
          initiallyVisible={false}
        >
      <DynamicButton
        variant="contained"
        onPress={()=>{navigate(PATH_PAGE.mirage.root)}}
        text={Text.buttonCopy.learnMore}
        sx={styles.buttonStyle}
      />
      </AnimationOnScroll>
      </Box>
    </Box>
  );
};

export default Home;

const styles = {
  heroHeader: {
    height: "80vh",
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    position:'relative',
    top:"50%",
    background: "#f4a18e",
  },
  heroDescription:{
    height: "80vh",
    display:'flex',
    flexDirection:"column", 
    justifyContent:'center',
    alignItems:'center',
    position:'relative',
    top:"50%",
    marginTop: "-2.5rem",
    background: "#f4a18e",
  },
  heroContentText:{
    fontFamily: "Dahlia", 
    fontSize:"100px"
  },
  buttonStyle:{
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
    boxShadow: "inset 0 0 0 0 black",
    webkitTransition: "ease-out 0.5s",
    mozTransition: "ease-out 0.5s",
    transition: "ease-out 0.5s",
  
 "&:hover": {
  boxShadow: "inset 400px 0 0 0 black",
  color:"white"
  }
}
}
