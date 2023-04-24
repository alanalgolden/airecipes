import React, { useState, useContext, useId } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ColorModeContext, tokens } from "../../theme";
import { useNavigate } from "react-router";

const PhoneMenu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();
  const id = useId();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: "Home" },
    { text: "About" },
    { text: "Services" },
    { text: "Contact" },
  ];

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ m: "10px 10px 0 10px" }}
        >
          <IconButton color="inherit" aria-label="accessibility options">
            <AccountCircleIcon />
          </IconButton>
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
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          <ListItem onClick={handleDrawerToggle} sx={{ width: "40vw" }}>
            Home
            {/* <ListItemText primary={item.text} /> */}
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default PhoneMenu;
