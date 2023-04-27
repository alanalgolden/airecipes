import { Avatar, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { Link } from "react-router-dom";
import React from "react";
import { useDevice } from "../../context/DeviceProvider";
import {
  Button,
  Typography,
  IconButton,
  Toolbar,
  AppBar,
  Box,
  Container,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { UserContext } from "../../context/UserProvider";
import PhoneMenu from "./PhoneMenu";
import { useNavigate } from "react-router";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Topbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const device = useDevice();
  const colors = tokens(theme.palette.mode);
  const { user } = useContext(UserContext);
  const colorMode = useContext(ColorModeContext);
  const photoURL = user.photoURL;

  return (
    ((device === "xs" || device === "sm") && (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Box sx={{ m: "0 0 0 10px" }}>
              <PhoneMenu />
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              flexGrow={1}
              maxHeight="50vh"
            >
              <Typography
                sx={{
                  fontFamily: "Roboto Slab !important",
                  fontWeight: 600,
                }}
              >
                Gluten Free Me!
              </Typography>
            </Box>

            {!user ? (
              <Button
                onClick={() => navigate("Login")}
                sx={{
                  color:
                    theme.palette.mode === "dark"
                      ? colors.white[400]
                      : colors.black[900],
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? colors.green[500]
                      : colors.green[400],
                  p: "2px 20px",
                  height: "35px",
                  fontWeight: 900,
                  fontFamily: "Mulish !important",
                  "&:hover": {
                    backgroundColor: colors.green[700],
                  },
                  "&:active": {
                    backgroundColor: colors.green[800],
                  },
                }}
              >
                Sign Up
              </Button>
            ) : (
              <Box sx={{ m: "0 0 0 10px" }}>
                <IconButton
                  color="inherit"
                  edge="end"
                  aria-label="accessibility options"
                >
                  <AccountCircleIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    )) ||
    ((device === "md" || device === "lg" || device === "xl") && (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton onClick={() => navigate("Quick-Start")}>
              <HomeOutlinedIcon />
            </IconButton>
            {!user ? (
              <Button
                onClick={() => navigate("Login")}
                sx={{
                  color:
                    theme.palette.mode === "dark"
                      ? colors.white[400]
                      : colors.black[900],
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? colors.green[500]
                      : colors.green[400],
                  p: "2px 20px",
                  height: "35px",
                  fontWeight: 900,
                  fontFamily: "Mulish !important",
                  "&:hover": {
                    backgroundColor: colors.green[700],
                  },
                  "&:active": {
                    backgroundColor: colors.green[800],
                  },
                }}
              >
                Sign Up
              </Button>
            ) : (
              <Box display="flex" alignItems="center" sx={{ ml: "2vw" }}>
                <IconButton>
                  <Avatar
                    src={photoURL}
                    imgProps={{ referrerPolicy: "no-referrer" }}
                  />
                </IconButton>
                <Box>{`${user.displayName}`}</Box>
                <Button onClick={() => console.log(user)}>test</Button>
                <IconButton onClick={colorMode.toggleColorMode}>
                  {theme.palette.mode === "dark" ? (
                    <DarkModeOutlinedIcon />
                  ) : (
                    <LightModeOutlinedIcon
                      sx={{
                        color: colors.primary[800],
                      }}
                    />
                  )}
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    ))
  );
};

export default Topbar;
