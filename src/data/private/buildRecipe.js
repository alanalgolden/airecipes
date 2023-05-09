const buildRecipeSTRING = ({
  servingSize,
  pantryMealCost,
  pantryMealSpeed,
  pantryMealDiet,
  pantryMealAllergies,
  selectedIngredients,
}) => {
  console.log(
    `${pantryMealAllergies}, ${servingSize}, ${pantryMealDiet}, ${pantryMealSpeed}, ${pantryMealCost}, ${selectedIngredients}}`
  );

  return `
  Create a dinner recipe using some of the following ingredients if possible. Add on ingredients not mentioned as needed to make a full and nutritional meal. You can adjust the amount of steps so that it makes sense. No Salads. 

  Ingredients: ${selectedIngredients}
  Allergies: ${pantryMealAllergies}
  Serving Size: ${servingSize} ${servingSize > 1 ? "people" : "person"}
  Diet: ${pantryMealDiet}
  Cook time: ${pantryMealSpeed}
  Cooking difficulty: Difficult
  Recipe Cost: ${pantryMealCost}

{
  "Recipe": {
    "recipeName": "BLANK",
    "servingSize": "BLANK",
    "recipeAllergens": "BLANK",
    "cookingTime": "BLANK",
    "prepTime": "BLANK",
    "approximateCost": "BLANK",
    "recipeIngredients": [
      {
        "name": "BLANK",
        "quantity": "BLANK"
      },

    ],
    "recipeSteps": ["BLANK", ]
  }
}
  `;
};

export default buildRecipeSTRING;
