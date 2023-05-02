import React from "react";
import {
  Box,
  Paper,
  Typography,
  IconButton,
  Grid,
  Button,
} from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";
import { useQuickFilters } from "../../context/QuickFilterProvider";
import QuickMealChoicesButtons from "./QuickMealChoicesButtons";

const QuickMealIngredients = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const { mealType, setMealType, mealStyle, setMealStyle, resetFilters } =
    useQuickFilters();

  return (
    <>
      <Box sx={{ mt: "4vh" }}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item sx={{ margin: "0 0 5vh 0" }}>
            <Box display="flex">
              <Paper
                sx={{
                  padding: "10px 4rem",

                  borderRadius: "20px",
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? colors.secondary[800]
                      : colors.secondary[400],
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Mulish !important",
                    fontWeight: 900,
                    color:
                      theme.palette.mode === "dark"
                        ? colors.secondary[100]
                        : colors.secondary[900],
                  }}
                >
                  {`${mealStyle}`}
                </Typography>
                <Typography
                  sx={{
                    nowrap: "true",
                    fontFamily: "Robot Slab !important",
                    fontWeight: 300,
                    fontStyle: "italic",
                    color:
                      theme.palette.mode === "dark"
                        ? colors.secondary[100]
                        : colors.secondary[900],
                  }}
                >
                  Select Ingredients
                </Typography>
              </Paper>
              <Box
                display="flex"
                justifyContent="left"
                sx={{
                  ml: "10px",
                  color:
                    theme.palette.mode === "dark"
                      ? colors.secondary[100]
                      : colors.secondary[900],
                }}
              >
                <IconButton
                  onClick={() => {
                    resetFilters();
                    navigate("/Quick-Start");
                  }}
                >
                  <CancelOutlinedIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          <Grid item sx={{ mb: "1em" }}>
            <Paper
              sx={{
                padding: ".1rem 2rem",
                borderRadius: "20px",
                backgroundColor: colors.secondary[600],
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Mulish !important",
                  fontWeight: 900,
                  color:
                    theme.palette.mode === "dark"
                      ? colors.secondary[100]
                      : colors.secondary[900],
                }}
              >
                Recommended
              </Typography>
            </Paper>
          </Grid>

          <Grid item sx={{ m: "1em" }}>
            <Grid gridRow={1}>
              <Grid gridRow={1}>
                <Box display="flex" justifyContent="center" maxWidth="1rem">
                  <Button
                    onClick={() => console.log("HOLDER")}
                    sx={{
                      color:
                        theme.palette.mode === "dark"
                          ? colors.secondary[100]
                          : colors.secondary[900],
                      padding: "0.4rem 3rem",
                      m: "0.6rem 0.4rem",
                      minWidth: "2rem",
                      maxWidth: "2rem",

                      whiteSpace: "nowrap",
                      borderRadius: "14px",
                      backgroundColor:
                        /*                       mealStyle === breakfastStyles[0]
                        ? colors.orangeAccent[500]
                        : !mealStyle
                        ? colors.orangeAccent[500]
                        : */ colors.orangeAccent[700],
                      boxShadow: "0px 3px 3px 3px rgba(0, 0, 0, 0.2)",
                      "&:hover": {
                        backgroundColor: colors.orangeAccent[600],
                        boxShadow: "0px 5px 5px 0px rgba(0, 0, 0, 0.4)",
                      },
                      "&:active": {
                        backgroundColor: colors.orangeAccent[600],
                        boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.42)",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Roboto Slab !important",
                        fontWeight: 900,
                        fontSize: "0.6rem",
                      }}
                    >
                      Pesto
                    </Typography>
                  </Button>
                  <Button
                    onClick={() => console.log("HOLDER")}
                    sx={{
                      color:
                        theme.palette.mode === "dark"
                          ? colors.secondary[100]
                          : colors.secondary[900],
                      padding: "0.4rem 3rem",
                      m: "0.6rem 0.4rem",
                      minWidth: "2rem",
                      maxWidth: "2rem",
                      whiteSpace: "nowrap",
                      borderRadius: "14px",
                      backgroundColor:
                        /*                       mealStyle === breakfastStyles[0]
                        ? colors.orangeAccent[500]
                        : !mealStyle
                        ? colors.orangeAccent[500]
                        : */ colors.orangeAccent[700],
                      boxShadow: "0px 3px 3px 3px rgba(0, 0, 0, 0.2)",
                      "&:hover": {
                        backgroundColor: colors.orangeAccent[600],
                        boxShadow: "0px 5px 5px 0px rgba(0, 0, 0, 0.4)",
                      },
                      "&:active": {
                        backgroundColor: colors.orangeAccent[600],
                        boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.42)",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Roboto Slab !important",
                        fontWeight: 900,
                        fontSize: "0.6rem",
                        maxWidth: "5rem",
                      }}
                    >
                      Alfredo Sauce
                    </Typography>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default QuickMealIngredients;
