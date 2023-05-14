import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { Gradient } from "@mui/icons-material";

// color design tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        primary: {
          100: "#e0dade",
          200: "#c1b6be",
          300: "#a2919d",
          400: "#836d7d",
          500: "#64485c",
          600: "#503a4a",
          700: "#3c2b37",
          800: "#281d25",
          900: "#140e12",
        },
        secondary: {
          100: "#efefef",
          200: "#dedede",
          300: "#cecece",
          400: "#bdbdbd",
          500: "#adadad",
          600: "#8a8a8a",
          700: "#686868",
          800: "#454545",
          900: "#232323",
        },
        deepRed: {
          100: "#d5cfd0",
          200: "#aba0a1",
          300: "#827072",
          400: "#584143",
          500: "#2e1114",
          600: "#250e10",
          700: "#1c0a0c",
          800: "#120708",
          900: "#090304",
        },
        green: {
          100: "#e6f7e0",
          200: "#cdefc2",
          300: "#b4e8a3",
          400: "#9be085",
          500: "#82d866",
          600: "#68ad52",
          700: "#4e823d",
          800: "#345629",
          900: "#1a2b14",
        },
        white: {
          100: "#ffffff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#ffffff",
          500: "#ffffff",
          600: "#cccccc",
          700: "#999999",
          800: "#666666",
          900: "#333333",
        },
        black: {
          100: "#cccccc",
          200: "#999999",
          300: "#666666",
          400: "#333333",
          500: "#000000",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        orangeAccent: {
          100: "#f9dfda",
          200: "#f4c0b5",
          400: "#b64e39",
          300: "#eea091",
          500: "#e36147",
          600: "#e9816c",
          700: "#883a2b",
          800: "#5b271c",
          900: "#2d130e",
        },
        blueAccent: {
          100: "#d5e0fd",
          200: "#abc0fb",
          300: "#80a1f9",
          400: "#5681f7",
          500: "#2c62f5",
          600: "#234ec4",
          700: "#1a3b93",
          800: "#122762",
          900: "#091431",
        },
        pinkAccent: {
          100: "#f5dce8",
          200: "#ebb9d1",
          300: "#e096ba",
          400: "#d673a3",
          500: "#cc508c",
          600: "#a34070",
          700: "#7a3054",
          800: "#522038",
          900: "#29101c",
        },
      }
    : {
        primary: {
          100: "#e6e1e5",
          200: "#cdc2ca",
          300: "#b5a4b0",
          400: "#9c8595",
          500: "#83677b",
          600: "#695262",
          700: "#4f3e4a",
          800: "#342931",
          900: "#1a1519",
        },
        secondary: {
          100: "#232323",
          200: "#454545",
          300: "#686868",
          400: "#8a8a8a",
          500: "#adadad",
          600: "#bdbdbd",
          700: "#cecece",
          800: "#dedede",
          900: "#efefef",
        },
        deepRed: {
          100: "#dcd1d2",
          200: "#b9a4a5",
          300: "#967677",
          400: "#73494a",
          500: "#501b1d",
          600: "#401617",
          700: "#301011",
          800: "#200b0c",
          900: "#100506",
        },
        green: {
          100: "#f3ffe6",
          200: "#e7ffcd",
          300: "#dbfeb4",
          400: "#cffe9b",
          500: "#c3fe82",
          600: "#9ccb68",
          700: "#75984e",
          800: "#4e6634",
          900: "#27331a",
        },
        white: {
          100: "#ffffff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#ffffff",
          500: "#ffffff",
          600: "#cccccc",
          700: "#999999",
          800: "#666666",
          900: "#333333",
        },
        black: {
          100: "#cccccc",
          200: "#999999",
          300: "#666666",
          400: "#333333",
          500: "#000000",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        orangeAccent: {
          100: "#f9dfda",
          200: "#f4c0b5",
          300: "#eea091",
          400: "#e9816c",
          500: "#e36147",
          600: "#b64e39",
          700: "#883a2b",
          800: "#5b271c",
          900: "#2d130e",
        },
        blueAccent: {
          100: "#d5e0fd",
          200: "#abc0fb",
          300: "#80a1f9",
          400: "#5681f7",
          500: "#2c62f5",
          600: "#234ec4",
          700: "#1a3b93",
          800: "#122762",
          900: "#091431",
        },
        pinkAccent: {
          100: "#f5dce8",
          200: "#ebb9d1",
          300: "#e096ba",
          400: "#d673a3",
          500: "#cc508c",
          600: "#a34070",
          700: "#7a3054",
          800: "#522038",
          900: "#29101c",
        },
      }),
});

//* Theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.secondary[500],
            },
            neutral: {
              dark: colors.secondary[700],
              main: colors.secondary[500],
              light: colors.secondary[100],
            },

            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.secondary[100],
            },
            neutral: {
              dark: colors.secondary[700],
              main: colors.secondary[500],
              light: colors.secondary[200],
            },
            background: {
              default: colors.white[600],
            },
          }),
    },
    typography: {
      fontFamily: ["Cambria", "serif"].join(","), //CHANGING FROM: ["Source Sans Pro", "sans-serif"].join(",")
      fontSize: 12,
      h1: {
        fontFamily: ["Cambria", "serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Cambria", "serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Cambria", "serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Cambria", "serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Cambria", "serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Cambria", "serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// * Context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark"); //Stores the state of dark or light mode

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
