import { Routes, Route } from "react-router-dom";
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
import { ProtectedRoute } from "../src/lib/custom/ProtectedRoute";
import Welcome from "./pages/Welcome";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Topbar />  */}
        {/* REMOVE THIS FOR WELCOME PROD */}
        <div className="app">
          <main className="content">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route
                path="/Home"
                element={<ProtectedRoute element={<Home />} />}
              />
              <Route
                path="/Login"
                element={<ProtectedRoute element={<Login />} />}
              />
              <Route
                path="/Quick-Start"
                element={<ProtectedRoute element={<QuickStart />} />}
              />
              <Route
                path="/Quick-Meal-Options"
                element={<ProtectedRoute element={<QuickMealOptions />} />}
              />
              <Route
                path="/QuickMeal"
                element={<ProtectedRoute element={<Form />} />}
              />
              <Route
                path="/Quick-Recipe"
                element={<ProtectedRoute element={<QuickRecipeStepper />} />}
              />
              <Route
                path="/Pantry-Builder"
                element={<ProtectedRoute element={<PantryBuilderStepper />} />}
              />
              <Route
                path="/Pantry"
                element={<ProtectedRoute element={<PantryIngredients />} />}
              />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
