import { Box, IconButton, Typography, useTheme } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import { tokens } from "../../theme";

const PantryIngredientsMap = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
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
          {"Ingredient Name"}
        </Typography>
      </Box>
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
          {"Ingredient Name"}
        </Typography>
      </Box>
    </>
  );
};

export default PantryIngredientsMap;
