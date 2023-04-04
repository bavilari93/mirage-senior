import React, { useEffect, useRef } from "react";
import { TweenMax, Power3 } from "gsap";
import ScrollMagic from "scrollmagic";
import { Text } from "common/text";
import useMediaQuery from '@mui/material/useMediaQuery';


const TimelineComponent = () => {
  const overlayRef: any = useRef(null);
  const textRef: any = useRef(null);
  const heroRef: any = useRef(null);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    // First scene - overlay animation
    new (ScrollMagic as any).Scene({
      triggerElement: overlayRef.current,
      triggerHook: 0.8,
      reverse: false,
      tweenChanges: true, // Enable smooth transitions between tweens
    })
      .setTween(
        TweenMax.fromTo(
          overlayRef.current,
          1.5,
          { background: "#f49A84", filter: "blur(20px)" }, // from
          {
            background: "linear-gradient(to bottom, transparent, #f49A84 )",
            backgroundSize: "60% 3%",
            backgroundPosition: "bottom",
            filter: "blur(0px)",
            ease: Power3.easeOut,
          } // to
        )
      )
      .addTo(controller);

    // Second scene - text animation
    new (ScrollMagic as any).Scene({
      triggerElement: textRef.current,
      triggerHook: 2,
      reverse: true,
      tweenChanges: true, // Enable smooth transitions between tweens
    })
      .setTween(
        TweenMax.fromTo(
          textRef.current,
          1.5,
          {
            fontSize: "30px", // end with smaller text
            letterSpacing: "-5px", // end with negative letter spacing
          }, // start with big text and positive letter spacing
          {
            fontSize: "70px",
            letterSpacing: "20px",
            zIndex: 100,
            ease: Power3.easeOut,
          }
        )
      )
      .addTo(controller);
  }, []);



  return (
    <div className="hero-wrapper" style={{ backgroundSize:'cover'}}>
      <h1
        className="centered-text"
        ref={textRef}
        style={{
          fontFamily: "Tan",
          fontSize: isSmallScreen ? "70px" : "100px",
          fontWeight: 100
        }}
      >
        {Text.home.hero}
      </h1>
      <div
        className="overlay"
        ref={overlayRef}
        style={{ backgroundColor: "#f49A84" }}
      />
    </div>
  );
};

export default TimelineComponent;
