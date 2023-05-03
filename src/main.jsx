import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { DeviceProvider } from "./context/DeviceProvider.jsx";
import { UserProvider } from "./context/UserProvider.jsx";
import App from "./App.jsx";
import "./index.css";
import { QuickFilterProvider } from "./context/QuickFilterProvider.jsx";
import { PantryBuilderProvider } from "./context/PantryBuilderProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DeviceProvider>
      <BrowserRouter>
        <UserProvider>
          <PantryBuilderProvider>
            <QuickFilterProvider>
              <App />
            </QuickFilterProvider>
          </PantryBuilderProvider>
        </UserProvider>
      </BrowserRouter>
    </DeviceProvider>
  </React.StrictMode>
);
