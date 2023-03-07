import React from "react";
import { useAppDispatch } from "redux/store";
import { Box } from "@mui/system";
import { Text } from "common/text";
import TextItem from "components/text";
import { AnimationOnScroll } from "react-animation-on-scroll";
import DynamicButton from "components/button";
import { useNavigate } from "react-router";
import { PATH_PAGE } from "router/paths";

const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Box>
      <Box sx={styles.heroHeader}>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          style={{ textAlign: "right" }}
          initiallyVisible={false}
        >
          <TextItem
            text={Text.home.hero}
            sx={{ fontFamily: "Tan", fontSize:"100px" }}
            color={"inherit"}
            variant="h2"
            align={"center"}
          />
        </AnimationOnScroll>
      </Box>
      <Box sx={styles.heroDescription}>
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
    height: "100vh",
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    position:'relative',
    top:"50%",
    marginTop: "-2.5rem"
  },
  heroDescription:{
    height: "100vh",
    display:'flex',
    flexDirection:"column", 
    justifyContent:'center',
    alignItems:'center',
    position:'relative',
    top:"50%",
    marginTop: "-2.5rem"
  },
  heroContentText:{
    fontFamily: "Dahlia", 
    fontSize:"100px"
  },
  buttonStyle:{
    fontFamily:"Dahlia",
    background: "none",
    color: "black",
    border: "1px solid black",
    fontSize: "24px",
    cursor:"pointer",
    borderRadius:"100%",
    padding:"2rem"
  }
};
