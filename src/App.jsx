import { Routes, Route, Router } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./components/global/Topbar";
import Login from "./pages/Login";
import QuickStart from "./pages/quickstart/QuickStart";
import QuickMealOptions from "./pages/quickstart/QuickMealOptions";
import Form from "./components/global/recipeForm";
import QuickRecipeStepper from "./components/global/QuickRecipeStepper";
import PantryBuilderStepper from "./components/global/PantryBuilderStepper";
import PantryIngredients from "./pages/pantrybuilder/PantryIngredients";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Topbar />
        <div className="app">
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Login" element={<Login />} />\
              <Route path="/Quick-Start" element={<QuickStart />} />
              <Route
                path="/Quick-Meal-Options"
                element={<QuickMealOptions />}
              />
              <Route path="/QuickMeal" element={<Form />} />
              <Route path="/Quick-Recipe" element={<QuickRecipeStepper />} />
              <Route
                path="/Pantry-Builder"
                element={<PantryBuilderStepper />}
              />
              <Route path="/Pantry" element={<PantryIngredients />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
