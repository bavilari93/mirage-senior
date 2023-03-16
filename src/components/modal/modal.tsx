// @flow
import * as React from "react";
import { useAppDispatch, useAppSelector } from "redux/store";
import { hideModal } from "redux/slices/common";
import DynamicButton from "components/button";
import { Box } from "@mui/system";
import TextItem from "components/text";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";
import { white } from "styles/palette";
import { grey } from "@mui/material/colors";

export function Modal() {
  const dispatch = useAppDispatch();

  const {
    common: { modalData },
  } = useAppSelector((state) => state);
  const fileInputRef = React.useRef(null);

  const [width, setWidth] = React.useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const {
    messageTitle,
    message,
    qrCode,
    adobeExperience,
    displayButton,
    internalRedirect,
    redirectLink,
  } = modalData;

  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <TextItem
          text={messageTitle}
          sx={styles.heroContentText}
          color={"inherit"}
          variant="h2"
          align={"center"}
          fontWeight={600}
        />
        <p>{message}</p>
        <Box sx={styles.buttonWrapper}>
        <button
                style={styles.buttonStyle}
                onClick={() => {
                  "selecting";
                }}
              >{qrCode}</button>
          {qrCode && isMobile && (
            <div>
              <button
                style={styles.buttonStyle}
                onClick={() => {
                  "selecting";
                }}
              >
               {qrCode}
              </button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={() => {
                  console.log("fileee");
                }}
              />
            </div>
          )}

          {adobeExperience && (
            <DynamicButton
              text={adobeExperience}
              onPress={() => {}}
              sx={styles.buttonStyle}
            />
          )}
        </Box>
        <IconButton
            onClick={()=>{dispatch(hideModal())}}
            sx={{
              position: "absolute",
            top: 0,
            right: 0}}
          >
          <CloseIcon sx={{color: grey[800], fontSize:"30px"}}/>
        </IconButton>
      </div>
    </div>
  );
}

const styles = {
  heroContentText: {
    fontFamily: "Dahlia",
    fontSize: "55px",
  },
  buttonWrapper:{
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "4rem 0",
    flexWrap:'wrap',
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
    marginBottom:'10px',

    "&:hover": {
      boxShadow: "inset 400px 0 0 0 #FFC5F2",
    },
  },
};
