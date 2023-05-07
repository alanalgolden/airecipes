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
  function handleSelect(ingredient) {
    if (selectedIngredients.includes(ingredient)) {
      removeIngredient(ingredient);
      console.log(`Removed ${ingredient} from selectedIngredients`);
    } else {
      addIngredient(ingredient);
      console.log(`Added ${ingredient} to selectedIngredients`);
    }
  }

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
      <Box>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <Grid gridRow={1}>
              <Grid gridRow={1}>
                <Box
                  sx={{
                    mt: "1.2rem",
                    mb: "1.2rem",
                    overflowY: "auto",
                    height: "50vh",
                    minHeight: "50vh",
                    maxHeight: "50vh",
                    width: "18.3em",
                  }}
                >
                  {/* This is the list that is displayed to users, pulled from firebase.  */}
                  <Box>
                    {ingredients.map((ingredient) => {
                      return (
                        <Grid item key={ingredient}>
                          <Box
                            display="flex"
                            sx={{
                              backgroundColor: selectedIngredients.includes(
                                ingredient
                              )
                                ? `${colors.primary[500]}`
                                : `${colors.primary[600]}`,
                              p: "0.2rem 0.2rem",
                              width: selectedIngredients.includes(ingredient)
                                ? "98%"
                                : "95%",
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
                              onClick={() => handleSelect(ingredient)}
                            >
                              <Typography
                                sx={{
                                  ml: "10px",
                                  color: colors.white[400],
                                  fontWeight: selectedIngredients.includes(
                                    ingredient
                                  )
                                    ? 900
                                    : 400,
                                }}
                              >
                                {`${ingredient}`}
                              </Typography>
                              <Radio
                                checked={selectedIngredients.includes(
                                  ingredient
                                )}
                                onClick={() => handleSelect(ingredient)}
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
                <Box display="flex" justifyContent="left" width="14.5rem">
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
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PantryIngredients;
