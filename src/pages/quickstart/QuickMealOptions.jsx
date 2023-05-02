import * as React from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Slider,
  Tooltip,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { useQuickFilters } from "../../context/QuickFilterProvider";

const QuickMealOptions = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const {
    servingSize,
    setServingSize,
    mealType,
    setMealType,
    mealStyle,
    setMealStyle,
    resetFilters,
  } = useQuickFilters();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
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
                Meal Type
              </Typography>
            </Paper>
          </Grid>
          <Grid item sx={{ m: "1em" }}>
            <Grid gridRow={1}>
              <Button
                onClick={() => {
                  setMealType("Breakfast");
                  if (mealStyle !== null && mealType !== "Breakfast") {
                    setMealStyle(null);
                  }
                }}
                sx={{
                  color:
                    theme.palette.mode === "dark"
                      ? colors.secondary[100]
                      : colors.secondary[900],
                  padding: "0.2rem 3rem",
                  m: "0.4rem 0.4rem",
                  minWidth: "2rem",
                  maxWidth: "2rem",
                  whiteSpace: "nowrap",
                  borderRadius: "14px",
                  backgroundColor:
                    mealType === "Breakfast"
                      ? colors.orangeAccent[500]
                      : !mealType
                      ? colors.orangeAccent[500]
                      : colors.orangeAccent[700],
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
                    fontFamily: "Mulish !important",
                    fontWeight: 900,
                    fontSize: "0.8rem",
                  }}
                >
                  Breakfast
                </Typography>
              </Button>
              <Button
                onClick={() => {
                  setMealType("Lunch");
                  if (mealStyle !== null && mealType !== "Lunch") {
                    setMealStyle(null);
                  }
                }}
                sx={{
                  color:
                    theme.palette.mode === "dark"
                      ? colors.secondary[100]
                      : colors.secondary[900],
                  padding: "0.2rem 3rem",
                  m: "0.4rem 0.4rem",
                  minWidth: "2rem",
                  maxWidth: "2rem",
                  whiteSpace: "nowrap",
                  borderRadius: "14px",
                  backgroundColor:
                    mealType === "Lunch"
                      ? colors.orangeAccent[500]
                      : !mealType
                      ? colors.orangeAccent[500]
                      : colors.orangeAccent[700],
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
                    fontFamily: "Mulish !important",
                    fontWeight: 900,
                    fontSize: "0.8rem",
                  }}
                >
                  Lunch
                </Typography>
              </Button>
            </Grid>
            <Grid gridRow={2}>
              <Button
                onClick={() => {
                  setMealType("Dinner");
                  if (mealStyle !== null && mealType !== "Dinner") {
                    setMealStyle(null);
                  }
                }}
                sx={{
                  color:
                    theme.palette.mode === "dark"
                      ? colors.secondary[100]
                      : colors.secondary[900],
                  padding: "0.2rem 3rem",
                  m: "0.4rem 0.4rem",
                  minWidth: "2rem",
                  maxWidth: "2rem",
                  whiteSpace: "nowrap",
                  borderRadius: "14px",
                  backgroundColor:
                    mealType === "Dinner"
                      ? colors.orangeAccent[500]
                      : !mealType
                      ? colors.orangeAccent[500]
                      : colors.orangeAccent[700],
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
                    fontFamily: "Mulish !important",
                    fontWeight: 900,
                    fontSize: "0.8rem",
                  }}
                >
                  Dinner
                </Typography>
              </Button>
              <Button
                onClick={() => {
                  setMealType("Snack");
                  if (mealStyle !== null && mealType !== "Snack") {
                    setMealStyle(null);
                  }
                }}
                sx={{
                  color:
                    theme.palette.mode === "dark"
                      ? colors.secondary[100]
                      : colors.secondary[900],
                  padding: "0.2rem 3rem",
                  m: "0.4rem 0.4rem",
                  minWidth: "2rem",
                  maxWidth: "2rem",
                  whiteSpace: "nowrap",
                  borderRadius: "14px",
                  backgroundColor:
                    mealType === "Snack"
                      ? colors.orangeAccent[500]
                      : !mealType
                      ? colors.orangeAccent[500]
                      : colors.orangeAccent[700],
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
                    fontFamily: "Mulish !important",
                    fontWeight: 900,
                    fontSize: "0.8rem",
                  }}
                >
                  Snack
                </Typography>
              </Button>
            </Grid>
          </Grid>

          {/* <Grid item sx={{ mb: "1em" }}>
            <Box display="flex">
              <Box
                sx={{
                  mr: "0.8rem",
                }}
              >
                <IconButton disabled sx={{ color: colors.orangeAccent[500] }}>
                  <ArrowCircleLeftOutlinedIcon />
                </IconButton>
                <Tooltip
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  title="Next: Meal Options"
                >
                  <IconButton sx={{ color: colors.orangeAccent[500] }}>
                    <ArrowCircleRightOutlinedIcon />
                  </IconButton>
                </Tooltip>
              </Box>
              <Button
                disabled={mealType && value !== 0 ? false : true}
                sx={{
                  color: colors.white[500],
                  padding: "0.4rem 5rem",
                  minWidth: "5rem",
                  maxWidth: "5rem",
                  whiteSpace: "nowrap",
                  borderRadius: "14px",
                  backgroundColor: colors.secondary[600],
                  boxShadow: "0px 3px 3px 3px rgba(0, 0, 0, 0.2)",
                  "&:hover": {
                    backgroundColor: colors.secondary[400],
                    boxShadow: "0px 5px 5px 0px rgba(0, 0, 0, 0.4)",
                  },
                  "&:active": {
                    backgroundColor: colors.secondary[500],
                    boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.42)",
                  },
                  "&:disabled": {
                    color: colors.white[700],
                    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Mulish !important",
                    fontWeight: 900,
                  }}
                >
                  Continue
                </Typography>
              </Button>
            </Box>
          </Grid> */}
        </Grid>
      </Box>
    </>
  );
};

export default QuickMealOptions;
