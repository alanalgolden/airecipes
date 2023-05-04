import React, { useContext, useEffect, useId, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  IconButton,
  Grid,
  Button,
  TextField,
  Divider,
  Radio,
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
  funcGetUserPantryIngredients,
  serverDeleteUserPantryIngredients,
} from "../../components/crud/PantryCrud";
import { UserContext } from "../../context/UserProvider";

const PantryIngredients = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const id = useId();
  const { user } = useContext(UserContext);
  const uid = user.uid;
  const [ingredientInput, setIngredientInput] = useState("");
  const [ingredients, setIngredient] = useState([]);
  const [dataStatus, setDataStatus] = useState();

  useEffect(() => {
    const getIngredientsFromDB = async () => {
      const data = await funcGetUserPantryIngredients(user.uid).then(
        (ingredient) => {
          setIngredient(ingredient);
          console.log(ingredient);
        }
      );
    };

    console.log("EFFECT RAN");
    getIngredientsFromDB();
  }, [, dataStatus]);

  const {
    pantryMealType,
    setPantryMealType,
    pantryMealStyle,
    setPantryMealStyle,
    pantryChecked,
    setPantryChecked,
    selectedIngredients,
    setSelectedIngredients,
    resetFilters,
  } = usePantryBuilder();

  //Manages ingredient input doc creation and update
  const handleIngredientInput = async (uid, e) => {
    const docLookup = await serverCheckForUserPantryIngredients(uid);

    if (docLookup === false && pantryChecked === false) {
      await serverCreateUserPantryIngredients(uid, e);
      setPantryChecked(false);
      console.log("FALSE USER");
    } else {
      const wtf = await serverAddUserPantryIngredients(uid, e);
      setDataStatus(`Added Doc ${ingredientInput}`);
      console.log(wtf);
    }
  };

  //Manages deleting inredients
  const handleDeleteIngredient = async (uid, ingredient) => {
    const deleteIngredient = await serverDeleteUserPantryIngredients(
      uid,
      ingredient
    );
    setDataStatus(`Removed ${ingredient}`);
  };

  const handleSelect = (event) => {
    const ingredient = event.target.value;
    if (selectedIngredients.includes(ingredient)) {
      removeIngredient(ingredient);
      console.log(`Removed ${ingredient} from selectedIngredients`);
    } else {
      addIngredient(ingredient);
      console.log(`Added ${ingredient} to selectedIngredients`);
    }
  };

  function addIngredient(ingredient) {
    setSelectedIngredients((prevIngredients) => [
      ...prevIngredients,
      ingredient,
    ]);
  }

  function removeIngredient(ingredient) {
    const newIngredients = selectedIngredients.filter(
      (item) => item !== ingredient
    );
    setSelectedIngredients(newIngredients);
  }

  return (
    <>
      <Button onClick={() => console.log(selectedIngredients.length)}>
        Test
      </Button>
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
                  {/* Enter Ingredients Box, + button and textbox */}
                  <Box display="flex" alignContent="center">
                    <IconButton
                      type="submit"
                      onClick={() => {
                        handleIngredientInput(user.uid, ingredientInput);
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
                          handleIngredientInput(user.uid, ingredientInput);
                          setIngredientInput("");
                          ev.preventDefault();
                        }
                      }}
                    />
                  </Box>
                </Box>
                <Box sx={{ mt: "1.2rem" }}>
                  {/* This is the list that is displayed to users, pulled from firebase.  */}
                  <Box>
                    {ingredients.map((ingredient) => {
                      return (
                        <Grid item>
                          <Box
                            display="flex"
                            sx={{
                              backgroundColor: `${colors.primary[500]}`,
                              p: "0.2rem 0.2rem",
                              mb: "0.4rem",
                            }}
                          >
                            <IconButton
                              onClick={() =>
                                handleDeleteIngredient(uid, ingredient)
                              }
                              sx={{ color: colors.white[400] }}
                            >
                              <ClearIcon />
                            </IconButton>
                            <Box
                              display="flex"
                              alignItems="center"
                              justifyContent="space-between"
                              sx={{ flexGrow: 1 }}
                            >
                              <Typography
                                sx={{ ml: "10px", color: colors.white[400] }}
                              >
                                {`${ingredient}`}
                              </Typography>

                              <Radio
                                checked={selectedIngredients.includes(
                                  ingredient
                                )}
                                onClick={handleSelect}
                                value={ingredient}
                                name={ingredient}
                                inputProps={{ "aria-label": `${ingredient}` }}
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
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PantryIngredients;
