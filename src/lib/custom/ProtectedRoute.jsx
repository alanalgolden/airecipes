import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ element }) => {
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!location.state || !location.state.fromButtonClick) {
      navigate("/", { replace: true });
    }
  }, [location, navigate]);

  return element;
};
