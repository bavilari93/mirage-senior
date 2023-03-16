import { Card } from "@mui/material";
import { Box } from "@mui/system";
import { Text } from "common/text";
import DynamicButton from "components/button";
import TextItem from "components/text";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useDispatch } from "react-redux";
import { handleInteractiveInstructions, handleStaticInstructions } from "redux/slices/common";

const Instructions = ({ setNext, type }: { setNext: any; type: string }) => {

  const dispatch = useDispatch()

  const setNextStep = () => {
    if( type === "interactive"){
      dispatch(handleInteractiveInstructions())
    }else{
      dispatch(handleStaticInstructions())
    }
   
    setNext('map')
  
  }

  const renderInstructions = () => {
    const copySteps =  Text.howTo[`${type}Steps`] || {}

   return Object.keys(copySteps).map((_step, index)=>{
        const stepCopy = copySteps[_step]

        return  <Box key={index}>
     
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          style={{ textAlign: "left" }}
          initiallyVisible={false}
        >
          <TextItem
            text={stepCopy}
            sx={{ fontFamily: "Dahlia", fontSize: "50px", padding: "0 5rem", paddingLeft:"8rem", lineHeight:"1.3"}}
            color={"inherit"}
            variant="h6"
            align={"left"}
            className="instructionItem"
          />
        </AnimationOnScroll>
        </Box>
    })

  };

  return (<>
  <AnimationOnScroll
    animateIn="animate__fadeInUp"
    style={{ textAlign: "left",
    marginTop: "5rem",
    position: "relative"
 }}
    initiallyVisible={false}
  >
    <TextItem
      text={Text.howTo.howToUse}
      sx={{ fontFamily: "Dahlia", fontSize: "50px", padding: "0 5rem"}}
      color={"inherit"}
      variant="h6"
      align={"left"}
    />
  </AnimationOnScroll>
  {renderInstructions()}
  <AnimationOnScroll
          animateIn="animate__fadeInUp"
          style={{ textAlign: "right" , marginTop:'3rem'}}
          initiallyVisible={true}
        >
      <DynamicButton
        variant="contained"
        onPress={setNextStep}
        text={Text.howTo.next}
        sx={styles.buttonStyle}
        className="instructionButton"
      />
      </AnimationOnScroll>
  </>)
};

export default Instructions;



const styles = {
    heroHeader: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "initial",
      position: "relative",
      top: "50%",
      marginTop: "-2rem",
      flexDirection: "column",
    },
    stepWrapper : {
        display: "flex",
        justifyContent: "center",
        alignItems: "initial",
        flexDirection: "column",
    },
    buttonStyle:{
     marginRight:"8rem",
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
      
     "&:hover": {
      boxShadow: "inset 400px 0 0 0 #FFC5F2"
      }
    }
}