import React, { useContext, useId, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  IconButton,
  Grid,
  Button,
  TextField,
  Divider,
} from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";
import { usePantryBuilder } from "../../context/PantryBuilderProvider";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import {
  serverAddUserPantryIngredients,
  serverCheckForUserPantryIngredients,
  serverCreateUserPantryIngredients,
} from "../../components/crud/PantryCrud";
import { UserContext } from "../../context/UserProvider";
import PantryIngredientsMap from "./PantryIngredientsMap";

const PantryIngredients = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const id = useId();
  const { user } = useContext(UserContext);
  const [ingredientInput, setIngredientInput] = useState("");
  const [ingredients, setIngredient] = useState([]);

  const {
    pantryMealType,
    setPantryMealType,
    pantryMealStyle,
    setPantryMealStyle,
    pantryChecked,
    setPantryChecked,
    resetFilters,
  } = usePantryBuilder();

  const handleIngredientInput = async (uid, e) => {
    const docLookup = await serverCheckForUserPantryIngredients(uid);

    if (docLookup === false && pantryChecked === false) {
      serverCreateUserPantryIngredients(uid, e);
      setPantryChecked(false);
      console.log("FALSE USER");
    } else {
      serverAddUserPantryIngredients(uid, e);
      console.log("TRUE USER");
    }
  };

  return (
    <>
      <Box sx={{ mt: "4vh" }}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item sx={{ margin: "0 0 3vh 0" }}>
            <Box display="flex">
              <Paper
                sx={{
                  padding: "10px 4rem",

                  borderRadius: "20px",
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? colors.secondary[800]
                      : colors.secondary[400],
                }}
              >
                <Typography
                  sx={{
                    nowrap: "true",
                    fontFamily: "Robot Slab !important",
                    fontWeight: 300,
                    fontStyle: "italic",
                    color:
                      theme.palette.mode === "dark"
                        ? colors.secondary[100]
                        : colors.secondary[900],
                  }}
                >
                  Select Ingredients
                </Typography>
              </Paper>
              <Box
                display="flex"
                justifyContent="left"
                sx={{
                  ml: "10px",
                  color:
                    theme.palette.mode === "dark"
                      ? colors.secondary[100]
                      : colors.secondary[900],
                }}
              >
                <IconButton
                  onClick={() => {
                    resetFilters();
                    navigate("/Quick-Start");
                  }}
                >
                  <CancelOutlinedIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          <Grid item sx={{ m: "1em" }}>
            <Grid gridRow={1}>
              <Grid gridRow={1}>
                <Box display="flex" justifyContent="center" maxWidth="16rem">
                  {/* Enter Ingredients Box, includes + button and textbox */}
                  <Box display="flex" alignContent="center">
                    <IconButton
                      type="submit"
                      onClick={() => {
                        handleIngredientInput(user.uid, ingredientInput);
                        /*                         updateIngredientArray(
                          idd,
                          ingredientInput,
                          ingredientType
                        ); */
                        /* setDataStatus(`Added Doc ${ingredientInput}`);  */
                        setIngredientInput("");
                      }}
                    >
                      <AddIcon />
                    </IconButton>
                    <TextField
                      id={`${id}`}
                      value={ingredientInput}
                      label="Enter Ingredients"
                      placeholder="Enter ingredient name.."
                      onChange={(event) =>
                        setIngredientInput(event.target.value)
                      }
                      onKeyDown={(ev) => {
                        if (ev.key === "Enter") {
                          /*                        updateIngredientArray(
                            idd,
                            ingredientInput,
                            ingredientType
                          );
                          setDataStatus(`Added Doc ${ingredientInput}`); */
                          setIngredientInput("");
                          ev.preventDefault();
                        }
                      }}
                    />
                  </Box>
                </Box>
                <Box sx={{ mt: "1.2rem" }}>
                  <PantryIngredientsMap />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PantryIngredients;
