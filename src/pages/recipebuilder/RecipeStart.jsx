import * as React from "react";
import {
  alpha,
  Box,
  Grid,
  IconButton,
  Paper,
  Slider,
  Switch,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { usePantryBuilder } from "../../context/PantryBuilderProvider";
import { useEffect } from "react";

const RecipeStart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const {
    pantryMealType,
    setPantryMealType,
    pantryMealStyle,
    setPantryMealStyle,
    pantryChecked,
    setPantryChecked,
    selectedIngredients,
    setSelectedIngredients,
    servingSize,
    setServingSize,
    pantryMealCost,
    setPantryMealCost,
    pantryMealComplexity,
    setPantryMealComplexity,
    pantryMealSpeed,
    setPantryMealSpeed,
    resetFilters,
  } = usePantryBuilder();

  const handleComplexityChange = () => {
    setPantryMealComplexity(
      pantryMealComplexity === "Simple" ? "Complex" : "Simple"
    );
  };

  const handleSpeedChange = () => {
    setPantryMealSpeed(pantryMealSpeed === "Cozy" ? "Quick" : "Cozy");
  };

  const handleCostChange = () => {
    setPantryMealCost(
      pantryMealCost === "Affordable" ? "Luxurious" : "Affordable"
    );
  };

  function valuetext(value) {
    return `${value}`;
  }

  const marks = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 5,
      label: "5",
    },
    {
      value: 7,
      label: "7",
    },
    {
      value: 9,
      label: "9",
    },
  ];

  const handleSliderChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
      setServingSize(newValue);
    }
  };

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
                  Meal Options
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
                    setValue(0);
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
                Servings
              </Typography>
            </Paper>
          </Grid>

          <Grid item sx={{ m: "1em 0" }}>
            <Box display="flex" alignItems="center" sx={{ height: "3rem" }}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                  height: "3rem !important",
                  width: "3rem !important",
                  backgroundColor: colors.orangeAccent[500],
                  borderRadius: "90px",
                  m: "0 rem",

                  boxShadow: "0px 1px 3px 2px rgba(0, 0, 0, 0.1)",
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
                  {servingSize === null ? 0 : `${servingSize}`}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "5rem",
                  m: "0 0.5rem",
                  p: "0.5rem 0.5rem 0.5rem 0.5rem",
                }}
              >
                <Slider
                  value={servingSize}
                  sx={{
                    color:
                      theme.palette.mode === "dark"
                        ? colors.secondary[700]
                        : colors.secondary[400],

                    "& 		.MuiSlider-track": {
                      color:
                        theme.palette.mode === "dark"
                          ? colors.secondary[800]
                          : colors.secondary[500],
                      boxShadow: "0px 1px 3px 2px rgba(0, 0, 0, 0.1)",
                    },

                    "& 	.MuiSlider-mark": {
                      visibility: "hidden",
                    },

                    "& .MuiSlider-markActive": {
                      color: `${colors.orangeAccent[500]} !important`,
                    },

                    "& .MuiSlider-markLabel": {
                      color: `${colors.orangeAccent[400]} !important`,
                      fontWeight: 700,
                      fontSize: "0.5rem !important",
                      fontFamily: "Mulish !important",
                      textShadow: "1px 1px 3px rgba(0, 0, 0, 0.4)",
                    },
                    "& .MuiSlider-markLabelActive": {
                      color: `${colors.orangeAccent[500]} !important`,
                    },
                  }}
                  aria-label="Serving Slider"
                  defaultValue={1}
                  onChange={handleSliderChange}
                  getAriaValueText={valuetext}
                  step={1}
                  marks={marks}
                  min={1}
                  max={9}
                />
              </Box>
            </Box>
          </Grid>

          <Grid item sx={{ m: "1em" }}>
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
                Meal Settings
              </Typography>
            </Paper>
          </Grid>

          <Grid item sx={{ m: "1em" }}>
            <Paper
              sx={{
                padding: ".1rem 2rem",
                borderRadius: "20px",
                backgroundColor: colors.secondary[600],
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  sx={{
                    fontFamily: "Mulish !important",
                    fontWeight: 900,
                    color:
                      theme.palette.mode === "dark"
                        ? pantryMealCost === "Affordable"
                          ? colors.blueAccent[500]
                          : colors.blueAccent[900]
                        : pantryMealCost === "Affordable"
                        ? colors.blueAccent[600]
                        : colors.blueAccent[900],
                  }}
                >
                  Affordable
                </Typography>
                <Switch
                  checked={pantryMealCost === "Luxurious"}
                  onChange={handleCostChange}
                  sx={{
                    mr: "0.5em",

                    "& .MuiSwitch-track": {
                      backgroundColor: `${colors.blueAccent[600]}`,
                    },

                    "& .MuiSwitch-thumb": {
                      color: `${colors.blueAccent[600]}`,
                      "&:hover": {
                        backgroundColor: alpha(colors.blueAccent[300], 0.18),
                      },
                    },

                    "& .Mui-checked": {
                      color: `${colors.pinkAccent[600]} !important`,
                      "& .MuiSwitch-thumb": {
                        backgroundColor: `${colors.pinkAccent[600]} !important`,
                        "&:hover": {
                          backgroundColor: alpha(colors.pinkAccent[300], 0.18),
                        },
                      },
                      "& + .MuiSwitch-track": {
                        backgroundColor: `${colors.pinkAccent[600]} !important`,
                      },
                    },
                  }}
                />

                <Typography
                  sx={{
                    fontFamily: "Roboto Slab !important",
                    fontWeight: 900,
                    color:
                      theme.palette.mode === "dark"
                        ? pantryMealCost === "Luxurious"
                          ? colors.pinkAccent[600]
                          : colors.pinkAccent[900]
                        : pantryMealCost === "Luxurious"
                        ? colors.pinkAccent[100]
                        : colors.pinkAccent[600],
                  }}
                >
                  Luxurious
                </Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item sx={{ m: "1em" }}>
            <Paper
              sx={{
                padding: ".1rem 2rem",
                borderRadius: "20px",
                backgroundColor: colors.secondary[600],
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  sx={{
                    fontFamily: "Mulish !important",
                    fontWeight: 900,
                    color:
                      theme.palette.mode === "dark"
                        ? pantryMealSpeed === "Cozy"
                          ? colors.blueAccent[600]
                          : colors.blueAccent[900]
                        : pantryMealSpeed === "Cozy"
                        ? colors.blueAccent[600]
                        : colors.blueAccent[900],
                  }}
                >
                  Cozy
                </Typography>
                <Switch
                  checked={pantryMealSpeed === "Quick"}
                  onChange={handleSpeedChange}
                  sx={{
                    mr: "0.5em",

                    "& .MuiSwitch-track": {
                      backgroundColor: `${colors.blueAccent[600]}`,
                    },

                    "& .MuiSwitch-thumb": {
                      color: `${colors.blueAccent[600]}`,
                      "&:hover": {
                        backgroundColor: alpha(colors.blueAccent[300], 0.18),
                      },
                    },

                    "& .Mui-checked": {
                      color: `${colors.pinkAccent[600]} !important`,
                      "& .MuiSwitch-thumb": {
                        backgroundColor: `${colors.pinkAccent[600]} !important`,
                        "&:hover": {
                          backgroundColor: alpha(colors.pinkAccent[300], 0.18),
                        },
                      },
                      "& + .MuiSwitch-track": {
                        backgroundColor: `${colors.pinkAccent[600]} !important`,
                      },
                    },
                  }}
                />

                <Typography
                  sx={{
                    fontFamily: "Mulish !important",
                    fontWeight: 900,
                    color:
                      theme.palette.mode === "dark"
                        ? pantryMealSpeed === "Quick"
                          ? colors.pinkAccent[600]
                          : colors.pinkAccent[900]
                        : pantryMealSpeed === "Quick"
                        ? colors.pinkAccent[100]
                        : colors.pinkAccent[600],
                  }}
                >
                  Quick
                </Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item sx={{ m: "1em" }}>
            <Paper
              sx={{
                padding: ".1rem 2rem",
                borderRadius: "20px",
                backgroundColor: colors.secondary[600],
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  sx={{
                    fontFamily: "Mulish !important",
                    fontWeight: 900,
                    color:
                      theme.palette.mode === "dark"
                        ? pantryMealComplexity === "Simple"
                          ? colors.blueAccent[600]
                          : colors.blueAccent[900]
                        : pantryMealComplexity === "Simple"
                        ? colors.blueAccent[600]
                        : colors.blueAccent[900],
                  }}
                >
                  Simple
                </Typography>
                <Switch
                  checked={pantryMealComplexity === "Complex"}
                  onChange={handleComplexityChange}
                  sx={{
                    mr: "0.5em",

                    "& .MuiSwitch-track": {
                      backgroundColor: `${colors.blueAccent[600]}`,
                    },

                    "& .MuiSwitch-thumb": {
                      color: `${colors.blueAccent[600]}`,
                      "&:hover": {
                        backgroundColor: alpha(colors.blueAccent[300], 0.18),
                      },
                    },

                    "& .Mui-checked": {
                      color: `${colors.pinkAccent[600]} !important`,
                      "& .MuiSwitch-thumb": {
                        backgroundColor: `${colors.pinkAccent[600]} !important`,
                        "&:hover": {
                          backgroundColor: alpha(colors.pinkAccent[300], 0.18),
                        },
                      },
                      "& + .MuiSwitch-track": {
                        backgroundColor: `${colors.pinkAccent[600]} !important`,
                      },
                    },
                  }}
                />

                <Typography
                  sx={{
                    fontFamily: "Mulish !important",
                    fontWeight: 900,
                    color:
                      theme.palette.mode === "dark"
                        ? pantryMealComplexity === "Complex"
                          ? colors.pinkAccent[600]
                          : colors.pinkAccent[900]
                        : pantryMealComplexity === "Complex"
                        ? colors.pinkAccent[100]
                        : colors.pinkAccent[600],
                  }}
                >
                  Complex
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default RecipeStart;
