import { Box, Button } from "@mui/material";
import { useState } from "react";
import QuickMealOptions from "../../pages/quickstart/QuickMealOptions";

function QuickRecipe() {
  const [page, setPage] = useState(0);
  const [quickMealData, setQuickMealData] = useState({
    servings: 0,
    mealType: "",
    mealCategory: "",
  });

  function handleSubmit() {
    setPage(page + 1);
  }

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return (
          <QuickMealOptions
            quickMealData={quickMealData}
            setQuickMealData={setQuickMealData}
          />
        );
      case 1:
        return;
      case 2:
        return;
      default:
        return;
    }
  };

  return (
    <Box>
      {/* Steps */}
      {conditionalComponent()}
      <Button onClick={handleSubmit}>
        {page === 0 || page === 1 ? "Next" : "Submit"}
      </Button>
      {page > 0 && <Button onClick={() => setPage(page - 1)}>Back</Button>}
      <Button onClick={() => console.log(`${quickMealData.servings}`)}>
        Check Var
      </Button>
    </Box>
  );
}
export default QuickRecipe;
