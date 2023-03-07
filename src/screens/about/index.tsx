import { Box } from '@mui/system';
import { Text } from 'common/text';
import TextItem from 'components/text';
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const  About  = () => {
    return (
        <Box sx={styles.heroHeader}>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          style={{ textAlign: "left" }}
          initiallyVisible={false}
        >
             <TextItem
            text={Text.about.about}
            sx={{ fontFamily: "Dahlia", fontSize:"100px", fontWeight:600}}
            color={"inherit"}
            variant="h4"
            align={"center"}
          />
        </AnimationOnScroll>
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
          />
           <TextItem
            text={Text.about.interactive}
            sx={{...styles.aboutContent, fontWeight:600}}
            color={"inherit"}
            variant="body1"
            align={"center"}
          />
             <TextItem
            text={Text.about.experience}
            sx={styles.aboutContent}
            color={"inherit"}
            variant="body2"
            align={"center"}
          />
                  <TextItem
            text={Text.about.artist}
            sx={{...styles.aboutContent, fontWeight:600}}
            color={"inherit"}
            variant="body2"
            align={"center"}
          />
                      <TextItem
            text={Text.about.savannah}
            sx={styles.aboutContent}
            color={"inherit"}
            variant="body1"
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
      top:"50%",
      marginTop: "-2.5rem"
    },
    aboutContent:{
        fontFamily: "Dahlia",
        fontSize:"70px",
        width: "fit-content",
        display: "inline",
        lineHeight:'1'
    }
}