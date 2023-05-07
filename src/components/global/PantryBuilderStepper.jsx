import {
  Step,
  StepLabel,
  Stepper,
  Box,
  Button,
  Typography,
  IconButton,
  useTheme,
  Tooltip,
  MobileStepper,
  Grid,
  Paper,
} from "@mui/material";
import { tokens } from "../../theme";
import { useState } from "react";
import { usePantryBuilder } from "../../context/PantryBuilderProvider";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import PantryIngredients from "../../pages/pantrybuilder/PantryIngredients";
import RecipeStart from "../../pages/recipebuilder/RecipeStart";
import RecipeDiet from "../../pages/recipebuilder/RecipeDiet";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useNavigate } from "react-router-dom";
import RecipeAllergies from "../../pages/recipebuilder/RecipeAllergies";

const steps = [
  `Meal Options`,
  `Meal Type`,
  `Meal Ingredients`,
  `Meal Preferences`,
  `Meal Instructions`,
];

const PantryBuilderStepper = () => {
  const [page, setPage] = useState(0);
  const [title, setTitle] = useState("");
  const theme = useTheme();
  const navigate = useNavigate();
  const colors = tokens(theme.palette.mode);

  const {
    servingSize,
    setServingSize,
    mealType,
    setMealType,
    allergies,
    setAllergies,
    resetFilters,
    mealStyle,
    setMealStyle,
    mealIngredients,
    selectedIngredients,
    setSelectedIngredients,
  } = usePantryBuilder();

  const progressHold = () => {
    if (selectedIngredients.length === undefined) {
      return console.log("undefined");
    } else {
      return selectedIngredients.length;
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <RecipeStart />;
      case 1:
        return <PantryIngredients />;
      case 2:
        return <RecipeDiet />;
      case 3:
        return <RecipeAllergies />;
      default:
        return;
    }
  };

  const pageTitle = () => {
    switch (page) {
      case 0:
        return "Meal Options";
      case 1:
        return "Select Ingredients";
      case 2:
        return "Select Diet";
      case 3:
        return "Select Allergies";
      default:
        return;
    }
  };

  return (
    <Box sx={{ mt: "4vh" }}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Box display="flex">
            <Paper
              sx={{
                padding: "10px 3rem",
                whiteSpace: "nowrap",
                width: "13rem",
                borderRadius: "20px",
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? colors.secondary[800]
                    : colors.secondary[400],
              }}
            >
              <Typography
                sx={{
                  nowrap: "true",
                  fontFamily: "Mulish !important",
                  fontWeight: 900,
                  color:
                    theme.palette.mode === "dark"
                      ? colors.secondary[100]
                      : colors.secondary[900],
                }}
              >
                {pageTitle(page)}
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

        <Grid>
          <Box height="65vh" minHeight="65vh" maxHeight="65vh">
            {conditionalComponent(page)}
          </Box>
        </Grid>

        <Box display="flex" justifyContent="center" sx={{ mt: "0.8rem" }}>
          <MobileStepper
            variant="dots"
            steps={6}
            position="static"
            activeStep={page}
            sx={{ maxWidth: "15rem", flexGrow: 1 }}
            nextButton={
              <Button
                size="small"
                onClick={() => setPage(page + 1)}
                disabled={
                  page === 5 ||
                  //TODO: THIS MAY NEED TO BE REVISED - I'm not sure if it's properly disabling it
                  (page === 0 && progressHold === 0)
                }
                sx={{
                  fontFamily: "Roboto Slab !important",
                  visibility: page === 5 ? "hidden" : "visible",
                  color: colors.white[100],
                }}
              >
                Next
                {theme.direction === "rtl" ? (
                  <ArrowCircleLeftOutlinedIcon />
                ) : (
                  <ArrowCircleRightOutlinedIcon />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={() => setPage(page - 1)}
                disabled={page === 0}
                sx={{
                  fontFamily: "Roboto Slab !important",
                  visibility: page === 0 ? "hidden" : "visible",
                  color: colors.white[100],
                }}
              >
                {theme.direction === "rtl" ? (
                  <ArrowCircleRightOutlinedIcon />
                ) : (
                  <ArrowCircleLeftOutlinedIcon />
                )}
                Back
              </Button>
            }
          />
        </Box>
      </Grid>
    </Box>
  );
};
export default PantryBuilderStepper;
