import React, { createContext, useContext, useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));
  const isLg = useMediaQuery(theme.breakpoints.only("lg"));
  const isXl = useMediaQuery(theme.breakpoints.only("xl"));

  const [device, setDevice] = useState("xs");

  useEffect(() => {
    if (isXs) setDevice("xs");
    else if (isSm) setDevice("sm");
    else if (isMd) setDevice("md");
    else if (isLg) setDevice("lg");
    else if (isXl) setDevice("xl");
  }, [isXs, isSm, isMd, isLg, isXl]);

  return (
    <DeviceContext.Provider value={device}>{children}</DeviceContext.Provider>
  );
};

export const useDevice = () => {
  return useContext(DeviceContext);
};
