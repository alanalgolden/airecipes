import { useTheme } from "@mui/material";
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

const Topbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const device = useDevice();
  const colors = tokens(theme.palette.mode);
  const { user } = useContext(UserContext);

  return (
    (device === "xs" || device === "sm") && (
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
    )
  );
};

export default Topbar;
