import React, { useState } from "react";

function QuickMaster() {
  const [servings, setServings] = useState("");
  const [mealType, setMealType] = useState("");
  const [allergies, setAllergies] = useState("");
  const [ingredients, setIngredients] = useState("");

  return (
    <div>
      <h1>Master Page</h1>
      <p>Servings: {servings}</p>
      <p>Meal Type: {mealType}</p>
      <p>Allergies: {allergies}</p>
      <p>Ingredients: {ingredients}</p>
    </div>
  );
}

export default QuickMaster;
