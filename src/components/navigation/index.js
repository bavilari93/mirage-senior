import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import mirageIcon from "assets/header/mirage-icon.svg";
import { grey } from "@mui/material/colors";
import BurgerCloseAnimation from "components/icons/burger-animation";
import { useNavigate } from "react-router";
import { PATH_PAGE } from "router/paths";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: grey[50],
          zIndex: (theme) => theme.zIndex.drawer + 1,
          border: "none",

          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <img
              onClick={() => {
                navigate(PATH_PAGE.root);
              }}
              src={mirageIcon}
              alt="mirage-logo"
              style={{ width: "50px", cursor:'pointer' }}
            />
          </Box>
          <BurgerCloseAnimation />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
