import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { DeviceProvider } from "./context/DeviceProvider.jsx";
import { UserProvider } from "./context/UserProvider.jsx";
import App from "./App.jsx";
import "./index.css";
import { QuickFilterProvider } from "./context/QuickFilterProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DeviceProvider>
      <BrowserRouter>
        <UserProvider>
          <QuickFilterProvider>
            <App />
          </QuickFilterProvider>
        </UserProvider>
      </BrowserRouter>
    </DeviceProvider>
  </React.StrictMode>
);
