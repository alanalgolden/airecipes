import * as React from "react";
import {
  alpha,
  Box,
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  Paper,
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
import buildRecipeSTRING from "../../data/private/buildRecipe";
import { getGpt35TurboChatCompletion } from "../../components/global/GPTFunctions";
import recipeInstructions from "../../data/private/recipeInstructions";

const RecipeConfirm = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const {
    servingSize,
    pantryMealCost,
    pantryMealComplexity,
    pantryMealSpeed,
    pantryMealDiet,
    pantryMealAllergies,
    selectedIngredients,
    pantryMealAllergySeverity,
    resetFilters,
  } = usePantryBuilder();

  const handleGen = async () => {
    try {
      console.log("Attempted to generate recipe.");
      const string = buildRecipeSTRING({
        servingSize,
        pantryMealCost,
        pantryMealSpeed,
        pantryMealDiet,
        pantryMealAllergies,
        selectedIngredients,
      });
      const instructions = recipeInstructions;
      /*       console.log(`TEST INSTRUCTIONS ${instructions}`); */
      console.log(`TEST STRING ${string}`);
      const recipe = await getGpt35TurboChatCompletion(
        `${string}`,
        `${instructions}`
      );
      console.log(recipe);
    } catch (e) {
      console.error(`LOG FROM handleGen + ${e}`);
    }
  };

  return (
    <>
      <Box>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item sx={{ mt: "1.2rem" }}>
            <Paper
              sx={{
                borderRadius: "20px",
                backgroundColor: colors.secondary[800],
                width: "70vw",
              }}
            >
              <Box display="flex" alignItems="center">
                <List>
                  <ListItem>
                    <Typography
                      variant="h6"
                      sx={{
                        color: colors.orangeAccent[500],
                        fontFamily: "Mulish !important",
                        fontWeight: 900,
                      }}
                    >
                      Serving Size:
                    </Typography>
                    <Typography
                      sx={{
                        ml: "0.4rem",
                        fontSize: "0.6rem",
                        fontFamily: "Roboto Slab !important",
                      }}
                    >
                      {servingSize}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography
                      variant="h6"
                      sx={{
                        color: colors.orangeAccent[500],
                        fontFamily: "Mulish !important",
                        fontWeight: 900,
                      }}
                    >
                      Cost:
                    </Typography>
                    <Typography
                      sx={{
                        ml: "0.4rem",
                        fontSize: "0.6rem",
                        fontFamily: "Roboto Slab !important",
                      }}
                    >
                      {pantryMealCost}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography
                      variant="h6"
                      sx={{
                        color: colors.orangeAccent[500],
                        fontFamily: "Mulish !important",
                        fontWeight: 900,
                      }}
                    >
                      Speed:
                    </Typography>
                    <Typography
                      sx={{
                        ml: "0.4rem",
                        fontSize: "0.6rem",
                        fontFamily: "Roboto Slab !important",
                      }}
                    >
                      {pantryMealSpeed}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography
                      variant="h6"
                      sx={{
                        color: colors.orangeAccent[500],
                        fontFamily: "Mulish !important",
                        fontWeight: 900,
                      }}
                    >
                      Complexity:
                    </Typography>
                    <Typography
                      sx={{
                        ml: "0.4rem",
                        fontSize: "0.6rem",
                        fontFamily: "Roboto Slab !important",
                      }}
                    >
                      {pantryMealComplexity}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography
                      variant="h6"
                      sx={{
                        color: colors.orangeAccent[500],
                        fontFamily: "Mulish !important",
                        fontWeight: 900,
                      }}
                    >
                      Diet:
                    </Typography>
                    <Typography
                      sx={{
                        ml: "0.4rem",
                        fontSize: "0.6rem",
                        fontFamily: "Roboto Slab !important",
                      }}
                    >
                      {pantryMealDiet}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography
                      variant="h6"
                      sx={{
                        color: colors.orangeAccent[500],
                        fontFamily: "Mulish !important",
                        fontWeight: 900,
                      }}
                    >
                      Allergies:
                    </Typography>
                    <Typography
                      sx={{
                        ml: "0.4rem",
                        fontSize: "0.6rem",
                        fontFamily: "Roboto Slab !important",
                      }}
                    >
                      {pantryMealAllergies.join(`, `)}
                    </Typography>
                  </ListItem>
                </List>
              </Box>
            </Paper>

            <Paper
              sx={{
                mt: "1.2rem",
                width: "70vw",
                borderRadius: "20px",
                backgroundColor: colors.secondary[800],
              }}
            >
              <List>
                <ListItem>
                  <Typography
                    variant="h6"
                    sx={{
                      color: colors.orangeAccent[500],
                      fontFamily: "Mulish !important",
                      fontWeight: 900,
                    }}
                  >
                    Ingredients
                  </Typography>
                  <Typography
                    sx={{
                      ml: "0.4rem",
                      fontSize: "0.6rem",
                      fontFamily: "Roboto Slab !important",
                    }}
                  >
                    {selectedIngredients.join(`, `)}
                  </Typography>
                </ListItem>
              </List>
            </Paper>

            {/* TODO: Add Suggestions based on these choices, use AI for it*/}
          </Grid>
          <Grid item sx={{ mt: "1.2rem" }}>
            <Button
              onClick={() => handleGen()}
              sx={{
                color:
                  theme.palette.mode === "dark"
                    ? colors.secondary[100]
                    : colors.secondary[900],
                padding: "0.2rem 5rem",
                m: "0.4rem 0.4rem",
                minWidth: "2rem",
                maxWidth: "2rem",
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
                sx={{ fontFamily: "Mulish !important", fontWeight: 800 }}
              >
                Generate Recipe
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default RecipeConfirm;
