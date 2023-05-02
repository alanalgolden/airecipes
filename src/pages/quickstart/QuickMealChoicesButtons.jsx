import {
  Box,
  Paper,
  Typography,
  IconButton,
  Grid,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { useEffect } from "react";
import { useQuickFilters } from "../../context/QuickFilterProvider";
import { tokens } from "../../theme";

const QuickMealChoicesButtons = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { mealType, setMealType, mealStyle, setMealStyle } = useQuickFilters();

  useEffect(() => {
    // This code will only run when mealType changes
    console.log(`mealType has changed to ${mealType}`);
  }, [mealType]);

  const breakfastStyles = [
    "Cereal & Oats",
    "Egg dishes",
    "Smoothies",
    "Panckes & waffles",
    "Baked goods",
  ];

  const lunchStyles = [
    "Wraps and sandwiches",
    "Salads",
    "Soups and stews",
    "Grain bowls",
    "Pasta dishes",
  ];

  const dinnerStyles = [
    "Baked dishes",
    "One pot meals",
    "Stir-fry dishes",
    "Soups and stews",
    "Pasta dishes",
  ];

  const snackStyles = [
    "Fruit",
    "Dips and spreads",
    "Bagged snacks",
    "Microwave",
    "Baked Goods",
  ];

  switch (mealType) {
    case "Breakfast":
      return (
        <Grid gridRow={1}>
          <Button
            onClick={() => setMealStyle(breakfastStyles[0])}
            sx={{
              color:
                theme.palette.mode === "dark"
                  ? colors.secondary[100]
                  : colors.secondary[900],
              padding: "0.4rem 7rem",
              m: "0.6rem 0.4rem",
              minWidth: "2rem",
              maxWidth: "2rem",
              whiteSpace: "nowrap",
              borderRadius: "14px",
              backgroundColor:
                mealStyle === breakfastStyles[0]
                  ? colors.orangeAccent[500]
                  : !mealStyle
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
              {breakfastStyles[0]}
            </Typography>
          </Button>
          <Button
            onClick={() => setMealStyle(breakfastStyles[1])}
            sx={{
              color:
                theme.palette.mode === "dark"
                  ? colors.secondary[100]
                  : colors.secondary[900],
              padding: "0.4rem 7rem",
              m: "0.6rem 0.4rem",
              minWidth: "2rem",
              maxWidth: "2rem",
              whiteSpace: "nowrap",
              borderRadius: "14px",
              backgroundColor:
                mealStyle === breakfastStyles[1]
                  ? colors.orangeAccent[500]
                  : !mealStyle
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
              {breakfastStyles[1]}
            </Typography>
          </Button>
          <Button
            onClick={() => setMealStyle(breakfastStyles[2])}
            sx={{
              color:
                theme.palette.mode === "dark"
                  ? colors.secondary[100]
                  : colors.secondary[900],
              padding: "0.4rem 7rem",
              m: "0.6rem 0.4rem",
              minWidth: "2rem",
              maxWidth: "2rem",
              whiteSpace: "nowrap",
              borderRadius: "14px",
              backgroundColor:
                mealStyle === breakfastStyles[2]
                  ? colors.orangeAccent[500]
                  : !mealStyle
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
              {breakfastStyles[2]}
            </Typography>
          </Button>
          <Button
            onClick={() => setMealStyle(breakfastStyles[3])}
            sx={{
              color:
                theme.palette.mode === "dark"
                  ? colors.secondary[100]
                  : colors.secondary[900],
              padding: "0.4rem 7rem",
              m: "0.6rem 0.4rem",
              minWidth: "2rem",
              maxWidth: "2rem",
              whiteSpace: "nowrap",
              borderRadius: "14px",
              backgroundColor:
                mealStyle === breakfastStyles[3]
                  ? colors.orangeAccent[500]
                  : !mealStyle
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
              {breakfastStyles[3]}
            </Typography>
          </Button>
          <Button
            onClick={() => setMealStyle(breakfastStyles[4])}
            sx={{
              color:
                theme.palette.mode === "dark"
                  ? colors.secondary[100]
                  : colors.secondary[900],
              padding: "0.4rem 7rem",
              m: "0.6rem 0.4rem",
              minWidth: "2rem",
              maxWidth: "2rem",
              whiteSpace: "nowrap",
              borderRadius: "14px",
              backgroundColor:
                mealStyle === breakfastStyles[4]
                  ? colors.orangeAccent[500]
                  : !mealStyle
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
              {breakfastStyles[4]}
            </Typography>
          </Button>
        </Grid>
      );

    case "Lunch":
      return (
        <Grid gridRow={1}>
          <Button
            onClick={() => setMealStyle(lunchStyles[0])}
            sx={{
              color:
                theme.palette.mode === "dark"
                  ? colors.secondary[100]
                  : colors.secondary[900],
              padding: "0.4rem 7rem",
              m: "0.6rem 0.4rem",
              minWidth: "2rem",
              maxWidth: "2rem",
              whiteSpace: "nowrap",
              borderRadius: "14px",
              backgroundColor:
                mealStyle === lunchStyles[0]
                  ? colors.orangeAccent[500]
                  : !mealStyle
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
              {lunchStyles[0]}
            </Typography>
          </Button>
          <Button
            onClick={() => setMealStyle(lunchStyles[1])}
            sx={{
              color:
                theme.palette.mode === "dark"
                  ? colors.secondary[100]
                  : colors.secondary[900],
              padding: "0.4rem 7rem",
              m: "0.6rem 0.4rem",
              minWidth: "2rem",
              maxWidth: "2rem",
              whiteSpace: "nowrap",
              borderRadius: "14px",
              backgroundColor:
                mealStyle === lunchStyles[1]
                  ? colors.orangeAccent[500]
                  : !mealStyle
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
              {lunchStyles[1]}
            </Typography>
          </Button>
          <Button
            onClick={() => setMealStyle(lunchStyles[2])}
            sx={{
              color:
                theme.palette.mode === "dark"
                  ? colors.secondary[100]
                  : colors.secondary[900],
              padding: "0.4rem 7rem",
              m: "0.6rem 0.4rem",
              minWidth: "2rem",
              maxWidth: "2rem",
              whiteSpace: "nowrap",
              borderRadius: "14px",
              backgroundColor:
                mealStyle === lunchStyles[2]
                  ? colors.orangeAccent[500]
                  : !mealStyle
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
              {lunchStyles[2]}
            </Typography>
          </Button>
          <Button
            onClick={() => setMealStyle(lunchStyles[3])}
            sx={{
              color:
                theme.palette.mode === "dark"
                  ? colors.secondary[100]
                  : colors.secondary[900],
              padding: "0.4rem 7rem",
              m: "0.6rem 0.4rem",
              minWidth: "2rem",
              maxWidth: "2rem",
              whiteSpace: "nowrap",
              borderRadius: "14px",
              backgroundColor:
                mealStyle === lunchStyles[3]
                  ? colors.orangeAccent[500]
                  : !mealStyle
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
              {lunchStyles[3]}
            </Typography>
          </Button>
          <Button
            onClick={() => setMealStyle(lunchStyles[4])}
            sx={{
              color:
                theme.palette.mode === "dark"
                  ? colors.secondary[100]
                  : colors.secondary[900],
              padding: "0.4rem 7rem",
              m: "0.6rem 0.4rem",
              minWidth: "2rem",
              maxWidth: "2rem",
              whiteSpace: "nowrap",
              borderRadius: "14px",
              backgroundColor:
                mealStyle === lunchStyles[4]
                  ? colors.orangeAccent[500]
                  : !mealStyle
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
              {lunchStyles[4]}
            </Typography>
          </Button>
        </Grid>
      );

    case "Dinner":
      return (
        <Grid gridRow={1}>
          <Button
            onClick={() => setMealStyle(breakfastStyles[0])}
            sx={{
              color:
                theme.palette.mode === "dark"
                  ? colors.secondary[100]
                  : colors.secondary[900],
              padding: "0.4rem 7rem",
              m: "0.6rem 0.4rem",
              minWidth: "2rem",
              maxWidth: "2rem",
              whiteSpace: "nowrap",
              borderRadius: "14px",
              backgroundColor:
                mealStyle === dinnerStyles[0]
                  ? colors.orangeAccent[500]
                  : !mealStyle
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
              {dinnerStyles[0]}
            </Typography>
          </Button>
          <Button
            onClick={() => setMealStyle(dinnerStyles[1])}
            sx={{
              color:
                theme.palette.mode === "dark"
                  ? colors.secondary[100]
                  : colors.secondary[900],
              padding: "0.4rem 7rem",
              m: "0.6rem 0.4rem",
              minWidth: "2rem",
              maxWidth: "2rem",
              whiteSpace: "nowrap",
              borderRadius: "14px",
              backgroundColor:
                mealStyle === dinnerStyles[1]
                  ? colors.orangeAccent[500]
                  : !mealStyle
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
              {dinnerStyles[1]}
            </Typography>
          </Button>
          <Button
            onClick={() => setMealStyle(dinnerStyles[2])}
            sx={{
              color:
                theme.palette.mode === "dark"
                  ? colors.secondary[100]
                  : colors.secondary[900],
              padding: "0.4rem 7rem",
              m: "0.6rem 0.4rem",
              minWidth: "2rem",
              maxWidth: "2rem",
              whiteSpace: "nowrap",
              borderRadius: "14px",
              backgroundColor:
                mealStyle === dinnerStyles[2]
                  ? colors.orangeAccent[500]
                  : !mealStyle
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
              {dinnerStyles[2]}
            </Typography>
          </Button>
          <Button
            onClick={() => setMealStyle(dinnerStyles[3])}
            sx={{
              color:
                theme.palette.mode === "dark"
                  ? colors.secondary[100]
                  : colors.secondary[900],
              padding: "0.4rem 7rem",
              m: "0.6rem 0.4rem",
              minWidth: "2rem",
              maxWidth: "2rem",
              whiteSpace: "nowrap",
              borderRadius: "14px",
              backgroundColor:
                mealStyle === dinnerStyles[3]
                  ? colors.orangeAccent[500]
                  : !mealStyle
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
              {dinnerStyles[3]}
            </Typography>
          </Button>
          <Button
            onClick={() => setMealStyle(dinnerStyles[4])}
            sx={{
              color:
                theme.palette.mode === "dark"
                  ? colors.secondary[100]
                  : colors.secondary[900],
              padding: "0.4rem 7rem",
              m: "0.6rem 0.4rem",
              minWidth: "2rem",
              maxWidth: "2rem",
              whiteSpace: "nowrap",
              borderRadius: "14px",
              backgroundColor:
                mealStyle === dinnerStyles[4]
                  ? colors.orangeAccent[500]
                  : !mealStyle
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
              {dinnerStyles[4]}
            </Typography>
          </Button>
        </Grid>
      );

    case "Snack":
      return (
        <Grid gridRow={1}>
          <Button
            onClick={() => setMealStyle(snackStyles[0])}
            sx={{
              color:
                theme.palette.mode === "dark"
                  ? colors.secondary[100]
                  : colors.secondary[900],
              padding: "0.4rem 7rem",
              m: "0.6rem 0.4rem",
              minWidth: "2rem",
              maxWidth: "2rem",
              whiteSpace: "nowrap",
              borderRadius: "14px",
              backgroundColor:
                mealStyle === snackStyles[0]
                  ? colors.orangeAccent[500]
                  : !mealStyle
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
              {snackStyles[0]}
            </Typography>
          </Button>
          <Button
            onClick={() => setMealStyle(snackStyles[1])}
            sx={{
              color:
                theme.palette.mode === "dark"
                  ? colors.secondary[100]
                  : colors.secondary[900],
              padding: "0.4rem 7rem",
              m: "0.6rem 0.4rem",
              minWidth: "2rem",
              maxWidth: "2rem",
              whiteSpace: "nowrap",
              borderRadius: "14px",
              backgroundColor:
                mealStyle === snackStyles[1]
                  ? colors.orangeAccent[500]
                  : !mealStyle
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
              {snackStyles[1]}
            </Typography>
          </Button>
          <Button
            onClick={() => setMealStyle(snackStyles[2])}
            sx={{
              color:
                theme.palette.mode === "dark"
                  ? colors.secondary[100]
                  : colors.secondary[900],
              padding: "0.4rem 7rem",
              m: "0.6rem 0.4rem",
              minWidth: "2rem",
              maxWidth: "2rem",
              whiteSpace: "nowrap",
              borderRadius: "14px",
              backgroundColor:
                mealStyle === snackStyles[2]
                  ? colors.orangeAccent[500]
                  : !mealStyle
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
              {snackStyles[2]}
            </Typography>
          </Button>
          <Button
            onClick={() => setMealStyle(snackStyles[3])}
            sx={{
              color:
                theme.palette.mode === "dark"
                  ? colors.secondary[100]
                  : colors.secondary[900],
              padding: "0.4rem 7rem",
              m: "0.6rem 0.4rem",
              minWidth: "2rem",
              maxWidth: "2rem",
              whiteSpace: "nowrap",
              borderRadius: "14px",
              backgroundColor:
                mealStyle === snackStyles[3]
                  ? colors.orangeAccent[500]
                  : !mealStyle
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
              {snackStyles[3]}
            </Typography>
          </Button>
          <Button
            onClick={() => setMealStyle(snackStyles[4])}
            sx={{
              color:
                theme.palette.mode === "dark"
                  ? colors.secondary[100]
                  : colors.secondary[900],
              padding: "0.4rem 7rem",
              m: "0.6rem 0.4rem",
              minWidth: "2rem",
              maxWidth: "2rem",
              whiteSpace: "nowrap",
              borderRadius: "14px",
              backgroundColor:
                mealStyle === snackStyles[4]
                  ? colors.orangeAccent[500]
                  : !mealStyle
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
              {snackStyles[4]}
            </Typography>
          </Button>
        </Grid>
      );
    default:
      return;
  }
};

export default QuickMealChoicesButtons;
