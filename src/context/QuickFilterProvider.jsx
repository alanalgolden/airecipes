import React, { createContext, useState, useContext } from "react";

const QuickFilterContext = createContext();

export const useQuickFilters = () => useContext(QuickFilterContext);

export const QuickFilterProvider = ({ children }) => {
  const [servingSize, setServingSize] = useState(null);
  const [mealType, setMealType] = useState(null);
  const [allergies, setAllergies] = useState([]);
  const [mealStyle, setMealStyle] = useState(null);
  const [mealIngredients, setMealIngredients] = useState(null);

  const resetFilters = () => {
    setServingSize(null);
    setMealType(null);
    setMealStyle(null);
    setAllergies([]);
  };

  const value = {
    servingSize,
    setServingSize,
    mealType,
    setMealType,
    allergies,
    setAllergies,
    mealStyle,
    setMealStyle,
    mealIngredients,
    setMealIngredients,
    resetFilters,
  };

  return (
    <QuickFilterContext.Provider value={value}>
      {children}
    </QuickFilterContext.Provider>
  );
};
