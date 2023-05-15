import React, { useId } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/Gluten Free Me! White.svg";
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormHelperText,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useDevice } from "../context/DeviceProvider";
import { tokens } from "../theme";
import {
  serverCheckForSignUp,
  serverCreateUserSignUpEntry,
} from "../components/crud/SignUpCrud";

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
  const [signUpName, setSignUpName] = React.useState("");
  const [signUpEmail, setSignUpEmail] = React.useState("");
  const [signUpFeedback, setSignUpFeedback] = React.useState("");
  const id = useId();

  const handleClick = () => {
    navigate("/Pantry-Builder", { state: { fromButtonClick: true } });
  };

  const handleSignUp = async (signUpName, signUpEmail) => {
    const signedUp = await serverCheckForSignUp(signUpEmail.toLowerCase());

    if (signedUp === undefined) {
      await serverCreateUserSignUpEntry(signUpName, signUpEmail);
      setSignUpFeedback("success");
      console.log("Entry Created!");
    } else {
      setSignUpFeedback("exists");
      console.log("This user has already signed up!");
    }
    console.log(signedUp);
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
                color: colors.green[600],
              }}
            >
              "I don't know what to make for dinner!"
            </Typography>
            <Typography textAlign="right" sx={{ fontFamily: "Mulish" }}>
              ...Ever, again.
            </Typography>
          </Box>
          <Box textAlign="center" sx={{ mt: "1rem", width: "60%" }}>
            <Typography sx={{ fontFamily: "Mulish", fontSize: "0.8rem" }}>
              No more scouring lists of recipes.
            </Typography>
            <Typography sx={{ fontFamily: "Mulish", fontSize: "0.8rem" }}>
              No more missing that one essential ingredient.
            </Typography>
            <Typography sx={{ fontFamily: "Mulish", fontSize: "0.8rem" }}>
              No more food waste.
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                mt: "1rem",
                fontWeight: 800,
                fontFamily: "Mulish",
                color: colors.green[600],
              }}
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

          {signUpFeedback === "" && (
            <div>
              <Box display="flex" width="95%" sx={{ ml: "1rem", mt: "1rem" }}>
                <TextField
                  id={`${id}`}
                  value={signUpEmail}
                  label="Email"
                  placeholder="YourEmail@email.com"
                  variant="standard"
                  onChange={(event) => {
                    setSignUpEmail(event.target.value);
                    setSignUpFeedback("");
                  }}
                  inputProps={{ style: { fontFamily: "Mulish" } }}
                  InputLabelProps={{
                    style: { fontFamily: "Roboto Slab", color: "white" },
                  }}
                  sx={{
                    width: "100%",
                  }}
                />
              </Box>
              <Box display="flex" width="95%" sx={{ ml: "1rem", mt: "1rem" }}>
                {/*               <FormControl> */}
                <TextField
                  id={`${id}`}
                  value={signUpName}
                  label="Name"
                  placeholder="Your Name"
                  variant="standard"
                  onChange={(event) => {
                    setSignUpName(event.target.value);
                    setSignUpFeedback("");
                  }}
                  inputProps={{ style: { fontFamily: "Mulish" } }}
                  InputLabelProps={{
                    style: { fontFamily: "Roboto Slab", color: "white" },
                  }}
                  sx={{
                    width: "60%",
                    mr: "1rem",
                  }}
                />
                {/*                 <FormHelperText
                  id="outlined-weight-helper-text"
                  sx={{
                    visibility:
                      signUpFeedback === "exists" ? "visible" : "hidden",
                    color: "red",
                    fontFamily: "Mulish",
                  }}
                >
                  This email has already signed up for the beta!
                </FormHelperText>
              </FormControl> */}
                <Button
                  onClick={() => {
                    handleSignUp(signUpName, signUpEmail);
                    setSignUpEmail("");
                    setSignUpName("");
                  }}
                  disabled={
                    signUpEmail === "" ||
                    signUpName === "" ||
                    signUpFeedback === "exists"
                  }
                  sx={{
                    color: "white",
                    fontWeight: 800,
                    width: "40%",
                    borderRadius: "10px",
                    backgroundColor: "#439455",
                    fontFamily: "Mulish !important",
                    textTransform: "none",
                    "&:disabled": {
                      backgroundColor: colors.white[900],
                    },
                  }}
                >
                  Secure My Spot!
                </Button>
              </Box>
            </div>
          )}
          {signUpFeedback === "success" && (
            <Box maxWidth="40vw" sx={{ mt: "1rem" }}>
              <Typography
                sx={{
                  color: colors.green[600],
                  fontFamily: "Mulish",
                  fontSize: "1rem",
                }}
              >
                Thank you for your interest in Gluten Free Me! You have been
                added to the list of beta testers. Keep a look out for an email
                with more details!
              </Typography>
            </Box>
          )}
          {signUpFeedback === "exists" && (
            <Box maxWidth="40vw" sx={{ mt: "1rem" }}>
              <Typography
                sx={{
                  color: colors.green[600],
                  fontFamily: "Mulish",
                  fontSize: "1rem",
                }}
              >
                Thank you for your interest in Gluten Free Me! This email has
                already signed up to take part in the beta. Keep a look out for
                an email with more details!
              </Typography>
            </Box>
          )}
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
