import { Box } from '@mui/system';
import { useMediaQuery } from '@material-ui/core';
import { Text } from 'common/text';
import TextItem from 'components/text';
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { configVars } from 'common/config/enviroment-variables';
import { useNavigate } from 'react-router-dom';
import { PATH_PAGE } from 'router/paths';

const  About  = () => {
    const navigate = useNavigate()
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return (
        <Box sx={styles.heroHeader} marginTop={isSmallScreen? "13rem" : "-2.5px"}>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          style={{ textAlign: "center" }}
          initiallyVisible={false}
        >
          <TextItem
            text={Text.about.mirageIs}
            sx={styles.aboutContent}
            color={"inherit"}
            variant="body1"
            align={"center"}
            fontSize={isSmallScreen?"70px" :"100px"}
          />
           <TextItem
            text={Text.about.interactive}
            sx={{...styles.interactiveText, fontWeight:600}}
            color={"inherit"}
            variant="body1"
            align={"center"}
            fontSize={isSmallScreen?"70px" :"100px"}
            onClick={()=>navigate(PATH_PAGE.map)}
            
          />
             <TextItem
            text={Text.about.experience}
            sx={styles.aboutContent}
            color={"inherit"}
            variant="body2"
            fontSize={isSmallScreen?"70px" :"100px"}
            align={"center"}
          />
                  <TextItem
            text={Text.about.artist}
            sx={{...styles.interactiveText, fontWeight:600}}
            color={"inherit"}
            variant="body1"
            fontSize={isSmallScreen?"70px" :"100px"}
            align={"center"}
            onClick={()=> window.open(configVars.PORTFOLIO_URL, "_blank")}
          />
                      <TextItem
            text={Text.about.savannah}
            sx={styles.aboutContent}
            color={"inherit"}
            variant="body1"
            fontSize={isSmallScreen?"70px" :"100px"}
            align={"center"}
          />
        </AnimationOnScroll>
      </Box>
    );
}

export default About;



const styles = {
    heroHeader: {
      height: "100vh",
      display:'flex',
      flexDirection:"column",
      justifyContent:'center',
      alignItems:'center',
      position:'relative',
      padding:'0 4rem',
      textAlign: "initial",
      
    },
    interactiveText:{
        fontFamily: "Dahlia",
        fontSize:"70px",
        width: "fit-content",
        display: "inline",
        lineHeight:'1',
        cursor:'pointer', 
        position:"relative",
        zIndex:1,
        fontweight:'800',
        WebkitBackgroundClip:"text",
        WebkitTextFillColor: "#00000036",
        backgroundImage: "linear-gradient(to right,#FFC5F2,#f4a18e 50%,#fff 50%)",
        backgroundSize: "200% 100%",
        backgroundPosition: "-100%",
        transition: "all 0.3s ease-in-out",
       "&:before":{
         display: "inline",
          content:'""',
          width:0,
          height:"3px",
          bottom:"5px",
          left:0,
          zIndex:0,
          position:"absolute",
          background:"#8B8EF3",
          transition: "all 0.3s ease-in-out",
        },
       " &:hover":{
          backgroundPosition: "0%",
          "&:before":{
            // width:"100%"
          }
        }
    },
    aboutContent:{
        fontFamily: "Dahlia",
        fontSize:"70px",
        width: "fit-content",
        display: "inline",
        lineHeight:'1', 
       
    }
}