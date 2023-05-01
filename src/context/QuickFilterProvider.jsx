import React, { createContext, useState, useContext } from "react";

const QuickFilterContext = createContext();

export const useQuickFilters = () => useContext(QuickFilterContext);

export const QuickFilterProvider = ({ children }) => {
  const [servingSize, setServingSize] = useState(null);
  const [mealType, setMealType] = useState(null);
  const [allergies, setAllergies] = useState([]);

  const resetFilters = () => {
    setServingSize(null);
    setMealType(null);
    setAllergies([]);
  };

  const value = {
    servingSize,
    setServingSize,
    mealType,
    setMealType,
    allergies,
    setAllergies,
    resetFilters,
  };

  return (
    <QuickFilterContext.Provider value={value}>
      {children}
    </QuickFilterContext.Provider>
  );
};
