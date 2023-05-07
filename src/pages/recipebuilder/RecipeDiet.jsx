import * as React from "react";
import {
  alpha,
  Box,
  Grid,
  IconButton,
  Paper,
  Radio,
  Slider,
  Switch,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { usePantryBuilder } from "../../context/PantryBuilderProvider";
import { useEffect } from "react";

const RecipeDiet = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const dietChoices = [
    "No Restrictions",
    "Low Carb",
    "Vegan",
    "Vegetarian",
    "Keto",
    "Paleo",
  ];

  const { pantryMealDiet, setPantryMealDiet, resetFilters } =
    usePantryBuilder();

  function handleSelect(diet) {
    if (pantryMealDiet.includes(diet)) {
      setPantryMealDiet("");
      console.log(`Set pantry meal diet to BLANK`);
    } else {
      setPantryMealDiet(diet);
      console.log(`Changed diet to ${diet}`);
    }
  }

  return (
    <>
      <Box>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          {/*           <Grid item sx={{ mb: "1em" }}>
            <Paper
              sx={{
                padding: ".1rem 2rem",
                borderRadius: "20px",
                backgroundColor: colors.orangeAccent[500],
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Roboto Slab !important",
                  fontWeight: 900,
                  fontStyle: "italic",
                  color:
                    theme.palette.mode === "dark"
                      ? colors.secondary[100]
                      : colors.secondary[900],
                }}
              >
                {pantryMealDiet === "" ? "Select diet.." : pantryMealDiet}
              </Typography>
            </Paper>
          </Grid>
 */}
          <Box
            sx={{
              mt: "1.2rem",
              overflowY: "auto",
              height: "60vh",
              minHeight: "60vh",
              maxHeight: "60vh",
              width: "18.3em",
            }}
          >
            {/* This is the list that is displayed to users, pulled from firebase. */}
            <Box>
              {dietChoices.map((diet) => {
                return (
                  <Grid item key={diet}>
                    <Box
                      display="flex"
                      sx={{
                        backgroundColor: pantryMealDiet.includes(diet)
                          ? `${colors.primary[500]}`
                          : `${colors.primary[600]}`,
                        p: "0.2rem 0.2rem",
                        width: pantryMealDiet.includes(diet) ? "98%" : "95%",
                        mb: "0.4rem",
                      }}
                    >
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{ flexGrow: 1 }}
                        onClick={() => handleSelect(diet)}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Mulish !important",
                            ml: "10px",
                            color: colors.white[400],
                            fontWeight: pantryMealDiet.includes(diet)
                              ? 900
                              : 400,
                          }}
                        >
                          {`${diet}`}
                        </Typography>
                        <Radio
                          checked={pantryMealDiet.includes(diet)}
                          onClick={() => handleSelect(diet)}
                          value={diet}
                          name={diet}
                          inputProps={{ "aria-label": `${diet}` }}
                          sx={{
                            "&.Mui-checked": {
                              color: colors.white[400],
                            },
                          }}
                        />
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
            </Box>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default RecipeDiet;
