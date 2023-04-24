import { Button, Typography, Box, useTheme } from "@mui/material";
import { useContext } from "react";
import { useDevice } from "../context/DeviceProvider";
import { UserContext } from "../context/UserProvider";
import Grid from "@mui/material/Unstable_Grid2";
import Item from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import { tokens } from "../theme";

const Home = () => {
  const device = useDevice();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { user, token, handleLogin } = useContext(UserContext);

  return (
    <div className="home">
      <Grid container>
        <Grid xs="12">
          <Box display="block" sx={{ p: "20px" }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Roboto Slab !important",
                m: "10px 0",
                color:
                  theme.palette.mode === "dark"
                    ? colors.white[500]
                    : colors.black[600],
              }}
            >
              Meals will never be the same again.
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Mulish !important",
                m: "10px 0",
                color:
                  theme.palette.mode === "dark"
                    ? colors.white[400]
                    : colors.black[400],
              }}
            >
              Meal planning with AI makes it possible to accomodate any and all
              food preferences.
            </Typography>
            <Box display="flex" justifyContent="center">
              <Button
                onClick={() => handleLogin()}
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
                Try for free!
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
