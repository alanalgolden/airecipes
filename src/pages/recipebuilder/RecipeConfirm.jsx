import * as React from "react";
import {
  alpha,
  Box,
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
                padding: ".1rem 2rem",
                borderRadius: "20px",
                backgroundColor: colors.secondary[800],
                width: "70vw",
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
                    Dietary Restrictions:
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
            </Paper>

            <Paper
              sx={{
                mt: "1.2rem",
                padding: ".1rem 2rem",
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
        </Grid>
      </Box>
    </>
  );
};

export default RecipeConfirm;
