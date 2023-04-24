import { Box, Typography, Button, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { tokens } from "../theme";

const Login = () => {
  const { handleLogin } = useContext(UserContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const onLoginButtonClick = () => {
    handleLogin();
  };

  return (
    <Box
      sx={{
        m: "25vh 0",
      }}
    >
      <Box
        flexGrow={1}
        display="flex"
        alignContent="center"
        justifyContent="center"
        sx={{
          m: "25px 0",
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontFamily: "Roboto Slab !important", fontWeight: 600 }}
        >
          Let's get started
        </Typography>
      </Box>
      <Box
        flexGrow={1}
        display="flex"
        alignContent="center"
        justifyContent="center"
      >
        <Button
          onClick={onLoginButtonClick}
          sx={{
            color:
              theme.palette.mode === "dark"
                ? colors.white[400]
                : colors.black[900],
            backgroundColor:
              theme.palette.mode === "dark"
                ? colors.green[500]
                : colors.green[400],
            m: "10px",
            p: "2px 20px",
            height: "70px",
            fontWeight: 900,
            fontSize: "1.2rem",
            fontFamily: "Mulish !important",
            borderRadius: "10px",
            "&:hover": {
              backgroundColor: colors.green[700],
            },
            "&:active": {
              backgroundColor: colors.green[800],
            },
          }}
        >
          Sign-up with Google
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
