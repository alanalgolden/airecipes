import React from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import SettingsIcon from "@mui/icons-material/Settings";
import KitchenIcon from "@mui/icons-material/Kitchen";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

const QuickStart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item sx={{ margin: "0 0 100px 0" }}>
          <Paper
            sx={{
              padding: "10px 4rem",
              borderRadius: "20px",
              backgroundColor: colors.secondary[900],
            }}
          >
            <Typography
              sx={{
                fontFamily: "Roboto Slab !important",
                fontWeight: 600,
              }}
            >
              Recipe Builder
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Button
            sx={{
              color: colors.white[500],
              padding: "10px 8rem",
              minWidth: "5rem",
              maxWidth: "5rem",
              whiteSpace: "nowrap",
              borderRadius: "14px",
              backgroundColor: colors.orangeAccent[500],
              boxShadow: "0px 3px 3px 0px rgba(0, 0, 0, 0.4)",
              "&:hover": {
                backgroundColor: colors.orangeAccent[600],
                boxShadow: "0px 5px 5px 0px rgba(0, 0, 0, 0.4)",
              },
              "&:active": {
                backgroundColor: colors.orangeAccent[400],
                boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.42)",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Mulish !important",
                fontWeight: 900,
              }}
            >
              Quick Recipe
            </Typography>
          </Button>
        </Grid>

        <Grid item>
          <Button
            sx={{
              color: colors.white[500],
              padding: "10px 8rem",
              minWidth: "5rem",
              maxWidth: "5rem",
              whiteSpace: "nowrap",
              borderRadius: "14px",
              backgroundColor: colors.secondary[400],
              boxShadow: "0px 3px 3px 0px rgba(0, 0, 0, 0.4)",
              "&:hover": {
                backgroundColor: colors.secondary[300],
                boxShadow: "0px 5px 5px 0px rgba(0, 0, 0, 0.4)",
              },
              "&:active": {
                backgroundColor: colors.secondary[200],
                boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.42)",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Mulish !important",
                fontWeight: 900,
              }}
            >
              Pantry Builder
            </Typography>
          </Button>
        </Grid>

        <Grid item>
          <Button
            disabled
            sx={{
              color: colors.white[500],
              padding: "10px 8rem",
              minWidth: "5rem",
              maxWidth: "5rem",
              whiteSpace: "nowrap",
              borderRadius: "14px",
              backgroundColor:
                theme.palette.mode === "dark"
                  ? colors.secondary[800]
                  : colors.secondary[200],
              "&:hover": {
                backgroundColor: colors.secondary[400],
              },
              "&:active": {
                backgroundColor: colors.secondary[200],
              },
              "&:disabled": {
                color: colors.white[700],
                boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Mulish !important",
                fontWeight: 900,
              }}
            >
              Recipe History
            </Typography>
          </Button>
        </Grid>

        <Grid item sx={{ margin: "20px 0 0 0" }}>
          <Box
            display="flex"
            alignContent="center"
            justifyContent="space-evenly"
          >
            <Box textAlign="center" sx={{ minWidth: "6rem" }}>
              <IconButton
                sx={{
                  color: colors.white[500],
                  backgroundColor: colors.orangeAccent[500],
                  mb: "8px",
                  maxWidth: "1.5em",
                  maxHeight: "1.5em",
                  minWidth: "1.5em",
                  minHeight: "1.5em",
                  "&:hover": {
                    backgroundColor: colors.orangeAccent[400],
                  },
                  "&:active": {
                    backgroundColor: colors.orangeAccent[600],
                  },
                  "&:disabled": {
                    color: colors.white[700],
                    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <LocalDiningIcon />
              </IconButton>
              <Box
                display="block"
                sx={{
                  fontFamily: "Mulish !important",
                  fontWeight: 400,
                  fontSize: ".8rem",
                  whiteSpace: "nowrap",
                  textTransform: "uppercase",
                }}
              >
                Preferences
              </Box>
            </Box>
            <Box textAlign="center" sx={{ minWidth: "6rem" }}>
              <IconButton
                sx={{
                  color: colors.white[500],
                  backgroundColor: colors.orangeAccent[500],
                  mb: "8px",
                  maxWidth: "1.5em",
                  maxHeight: "1.5em",
                  minWidth: "1.5em",
                  minHeight: "1.5em",
                  "&:hover": {
                    backgroundColor: colors.orangeAccent[400],
                  },
                  "&:active": {
                    backgroundColor: colors.orangeAccent[600],
                  },
                  "&:disabled": {
                    color: colors.white[700],
                    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <KitchenIcon />
              </IconButton>
              <Box
                display="block"
                sx={{
                  fontFamily: "Mulish !important",
                  fontWeight: 400,
                  fontSize: ".8rem",
                  textTransform: "uppercase",
                }}
              >
                Pantry
              </Box>
            </Box>
            <Box textAlign="center" sx={{ minWidth: "6rem" }}>
              <IconButton
                sx={{
                  color: colors.white[500],
                  backgroundColor: colors.orangeAccent[500],
                  mb: "8px",
                  maxWidth: "1.5em",
                  maxHeight: "1.5em",
                  minWidth: "1.5em",
                  minHeight: "1.5em",
                  "&:hover": {
                    backgroundColor: colors.orangeAccent[400],
                  },
                  "&:active": {
                    backgroundColor: colors.orangeAccent[600],
                  },
                  "&:disabled": {
                    color: colors.white[700],
                    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <SettingsIcon />
              </IconButton>
              <Box
                display="block"
                sx={{
                  fontFamily: "Mulish !important",
                  fontWeight: 400,
                  fontSize: ".8rem",
                  textTransform: "uppercase",
                }}
              >
                Settings
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default QuickStart;
