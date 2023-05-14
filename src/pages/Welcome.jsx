import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/Gluten Free Me! White.svg";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useDevice } from "../context/DeviceProvider";
import { tokens } from "../theme";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const photoVariants = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: { delay: 1.5, duration: 0.9, type: "spring", stiffness: 50 },
  },
};

const Welcome = () => {
  const navigate = useNavigate();
  const device = useDevice();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleClick = () => {
    navigate("/Pantry-Builder", { state: { fromButtonClick: true } });
  };

  return (
    <motion.Box
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Grid container spacing={0} columns={{ xs: 12, md: 12 }}>
        <Grid
          container
          xs={12}
          md={6}
          display="flex"
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            height: "100vh",
            width: "100%",
            backgroundColor: colors.primary[500],
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
            zIndex: 1,
          }}
        >
          <Box display="flex">
            <motion.img
              src={logo}
              height="100%"
              width="95%"
              alt="Gluten Free Me Logo"
              variants={photoVariants}
              initial="hidden"
              animate="visible"
            />
          </Box>
          <Box sx={{ mt: "1rem", width: "60%" }}>
            <Typography textAlign="left" sx={{ fontFamily: "Mulish" }}>
              Never...
            </Typography>
            <Typography
              textAlign="center"
              sx={{
                fontFamily: "Roboto Slab",
                fontWeight: 900,
                fontStyle: "italic",
                ml: "0.3rem",
                color: "#439455",
              }}
            >
              "I don't know what to make for dinner!"
            </Typography>
            <Typography textAlign="right" sx={{ fontFamily: "Mulish" }}>
              ...Ever, again.
            </Typography>
          </Box>
          <Box textAlign="left" sx={{ mt: "1rem", width: "60%" }}>
            <Typography sx={{ fontFamily: "Mulish", fontSize: "0.8rem" }}>
              No more scouring lists of recipes.
            </Typography>
            <Typography sx={{ fontFamily: "Mulish", fontSize: "0.8rem" }}>
              No more missing that one essential ingredient.
            </Typography>
            <Typography sx={{ fontFamily: "Mulish", fontSize: "0.8rem" }}>
              No more food waste.
            </Typography>
            <Typography
              sx={{ mt: "1rem", fontWeight: 800, fontFamily: "Mulish" }}
            >
              Want to be part of the Beta?
            </Typography>
            <Typography
              sx={{
                fontWeight: 800,
                fontFamily: "Mulish",
                fontStyle: "italic",
              }}
            >
              First 25 to sign-up will be invited!
            </Typography>
          </Box>
          <Box display="flex" width="80%" sx={{ ml: "1rem", mt: "1rem" }}>
            <TextField
              id="filled-basic"
              label="Email"
              variant="standard"
              inputProps={{ style: { fontFamily: "Mulish" } }}
              InputLabelProps={{
                style: { fontFamily: "Roboto Slab", color: "white" },
              }}
              sx={{
                width: "100%",
              }}
            />
          </Box>
          <Box display="flex" width="80%" sx={{ ml: "1rem", mt: "1rem" }}>
            <TextField
              id="filled-basic"
              label="Name"
              variant="standard"
              inputProps={{ style: { fontFamily: "Mulish" } }}
              InputLabelProps={{
                style: { fontFamily: "Roboto Slab", color: "white" },
              }}
              sx={{
                width: "60%",
                mr: "1rem",
              }}
            />
            <Button
              sx={{
                color: "white",
                fontWeight: 800,
                width: "40%",
                borderRadius: "10px",
                backgroundColor: "#439455",
                fontFamily: "Mulish !important",
                textTransform: "none",
              }}
            >
              Secure My Spot!
            </Button>
          </Box>
        </Grid>
        <Grid
          container
          xs={12}
          md={6}
          display="flex"
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            height: "100vh",
            width: "100%",
            backgroundColor: colors.primary[600],
          }}
        >
          <Typography
            sx={{ color: colors.primary[500] }}
          >{`{ placeholder }`}</Typography>
        </Grid>
        {/* Your component content */}
        {/*       <button onClick={handleClick}>Go to Pantry Builder</button>
      REMOVE THIS FOR PROD */}
      </Grid>
    </motion.Box>
  );
};

export default Welcome;
