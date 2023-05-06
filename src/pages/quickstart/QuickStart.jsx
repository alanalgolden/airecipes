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
import { tokens } from "../../theme";
import SettingsIcon from "@mui/icons-material/Settings";
import KitchenIcon from "@mui/icons-material/Kitchen";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { useNavigate } from "react-router-dom";

const QuickStart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  return (
    <Box sx={{ mt: "6vh" }}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item sx={{ margin: "0 0 10vh 0" }}>
          <Paper
            sx={{
              padding: "0.4rem 4rem",
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

        <Grid item sx={{ mb: "1em" }}>
          <Button
            onClick={() => navigate("/Quick-Recipe")}
            sx={{
              color: colors.white[500],
              padding: "0.4rem 8rem",
              minWidth: "5rem",
              maxWidth: "5rem",
              whiteSpace: "nowrap",
              borderRadius: "14px",
              backgroundColor: colors.orangeAccent[500],
              boxShadow: "0px 3px 3px 3px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                backgroundColor: colors.orangeAccent[600],
                boxShadow: "0px 5px 5px 0px rgba(0, 0, 0, 0.4)",
              },
              "&:active": {
                backgroundColor: colors.orangeAccent[600],
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

        <Grid item sx={{ mb: "1em" }}>
          <Button
            onClick={() => navigate("/Pantry-Builder")}
            sx={{
              color: colors.white[500],
              padding: "0.4rem 8rem",
              minWidth: "5rem",
              maxWidth: "5rem",
              whiteSpace: "nowrap",
              borderRadius: "14px",
              backgroundColor: colors.secondary[600],
              boxShadow: "0px 3px 3px 3px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                backgroundColor: colors.secondary[400],
                boxShadow: "0px 5px 5px 0px rgba(0, 0, 0, 0.4)",
              },
              "&:active": {
                backgroundColor: colors.secondary[500],
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

        <Grid item sx={{ mb: "1em" }}>
          <Button
            disabled
            sx={{
              color: colors.white[500],
              padding: "0.4rem 8rem",
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
          <Box display="flex" justifyItems="center">
            <Box>
              <IconButton
                sx={{
                  color: colors.white[500],
                  backgroundColor: colors.orangeAccent[500],
                  mb: "8px",
                  width: "1.7em",
                  height: "1.7em",
                  boxShadow: "0px 3px 3px 3px rgba(0, 0, 0, 0.2)",
                  "&:hover": {
                    backgroundColor: colors.orangeAccent[600],
                    boxShadow: "0px 5px 5px 0px rgba(0, 0, 0, 0.4)",
                  },
                  "&:active": {
                    backgroundColor: colors.orangeAccent[600],
                    boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.42)",
                  },
                }}
              >
                <LocalDiningIcon />
              </IconButton>
              <Box
                sx={{
                  fontFamily: "Mulish !important",
                  fontWeight: 400,
                  fontSize: ".8rem",
                  whiteSpace: "nowrap",
                  textTransform: "uppercase",
                }}
              >
                Options
              </Box>
            </Box>
            <Box textAlign="center" sx={{ m: "0 2em" }}>
              <IconButton
                onClick={() => navigate("/Pantry")}
                sx={{
                  color: colors.white[500],
                  backgroundColor: colors.orangeAccent[500],
                  mb: "8px",
                  width: "1.7em",
                  height: "1.7em",
                  boxShadow: "0px 3px 3px 3px rgba(0, 0, 0, 0.2)",
                  "&:hover": {
                    backgroundColor: colors.orangeAccent[600],
                    boxShadow: "0px 5px 5px 0px rgba(0, 0, 0, 0.4)",
                  },
                  "&:active": {
                    backgroundColor: colors.orangeAccent[600],
                    boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.42)",
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
            <Box textAlign="center">
              <IconButton
                sx={{
                  color: colors.white[500],
                  backgroundColor: colors.orangeAccent[500],
                  mb: "8px",
                  width: "1.7em",
                  height: "1.7em",
                  boxShadow: "0px 3px 3px 3px rgba(0, 0, 0, 0.2)",
                  "&:hover": {
                    backgroundColor: colors.orangeAccent[600],
                    boxShadow: "0px 5px 5px 0px rgba(0, 0, 0, 0.4)",
                  },
                  "&:active": {
                    backgroundColor: colors.orangeAccent[600],
                    boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.42)",
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
    </Box>
  );
};

export default QuickStart;
