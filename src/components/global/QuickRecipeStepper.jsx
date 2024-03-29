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
} from "@mui/material";
import { tokens } from "../../theme";
import { useState } from "react";
import { useQuickFilters } from "../../context/QuickFilterProvider";
import QuickMealOptions from "../../pages/quickstart/QuickMealOptions";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import QuickMealChoices from "../../pages/quickstart/QuickMealChoices";
import QuickMealIngredients from "../../pages/quickstart/QuickMealIngredients";

const steps = [
  `Meal Options`,
  `Meal Type`,
  `Meal Ingredients`,
  `Meal Preferences`,
  `Meal Instructions`,
];

const QuickRecipeStepper = () => {
  const [page, setPage] = useState(0);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

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
  } = useQuickFilters();

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <QuickMealOptions />;
      case 1:
        return <QuickMealChoices />;
      case 2:
        return <QuickMealIngredients />;
      default:
        return;
    }
  };

  return (
    <Box>
      {conditionalComponent(page)}
      <Box display="flex" justifyContent="center" sx={{ mt: "0.8rem" }}>
        {/* 
        <Stepper activeStep={page} alternativeLabel sx={{}}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper> */}

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
                (page === 0 && mealType === null) ||
                (page === 0 && servingSize === null) ||
                (page === 1 && mealStyle === null) ||
                (page === 2 && mealIngredients === null)
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
    </Box>
  );
};
export default QuickRecipeStepper;
