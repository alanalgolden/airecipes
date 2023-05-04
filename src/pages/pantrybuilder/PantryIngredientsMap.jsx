import { Box, IconButton, Typography, useTheme } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import { tokens } from "../../theme";
import { useContext, useEffect, useId, useState } from "react";
import { funcGetUserPantryIngredients } from "../../components/crud/PantryCrud";
import { UserContext } from "../../context/UserProvider";

const PantryIngredientsMap = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [ingredients, setIngredient] = useState([]);
  const { user } = useContext(UserContext);
  const id = useId();

  useEffect(() => {
    const getIngredientsFromDB = async () => {
      const data = await funcGetUserPantryIngredients(user.uid).then(
        (ingredient) => {
          setIngredient(ingredient);
          console.log(ingredient);
        }
      );
    };

    getIngredientsFromDB();
  }, []);

  return (
    <Box>
      {ingredients.map((ingredient) => {
        return (
          <Box
            display="flex"
            alignContent="center"
            alignItems="center"
            sx={{
              backgroundColor: `${colors.primary[500]}`,
              p: "0.2rem 0.2rem",
              mb: "0.4rem",
            }}
          >
            <IconButton sx={{ color: colors.white[400] }}>
              <ClearIcon />
            </IconButton>
            <IconButton sx={{ color: colors.white[400] }}>
              <EditIcon />
            </IconButton>
            <Typography sx={{ ml: "10px", color: colors.white[400] }}>
              {`${ingredient}`}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default PantryIngredientsMap;
