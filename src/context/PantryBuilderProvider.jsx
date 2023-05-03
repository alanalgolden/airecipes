import React, { createContext, useState, useContext } from "react";

const PantryBuilderContext = createContext();

export const usePantryBuilder = () => useContext(PantryBuilderContext);

export const PantryBuilderProvider = ({ children }) => {
  const [pantryServingSize, setPantryServingSize] = useState(null);
  const [pantryMealType, setPantryMealType] = useState(null);
  const [pantryAllergies, setPantryAllergies] = useState([]);
  const [pantryMealStyle, setPantryMealStyle] = useState(null);
  const [pantryMealIngredients, setPantryMealIngredients] = useState(null);
  const [pantryChecked, setPantryChecked] = useState(false);

  const resetFilters = () => {
    setPantryServingSize(null);
    setPantryMealType(null);
    setPantryMealStyle(null);
    setPantryChecked(false);
    setPantryAllergies([]);
  };

  const value = {
    pantryServingSize,
    setPantryServingSize,
    pantryMealType,
    setPantryMealType,
    pantryAllergies,
    setPantryAllergies,
    pantryMealStyle,
    setPantryMealStyle,
    pantryMealIngredients,
    setPantryMealIngredients,
    pantryChecked,
    setPantryChecked,
    resetFilters,
  };

  return (
    <PantryBuilderContext.Provider value={value}>
      {children}
    </PantryBuilderContext.Provider>
  );
};