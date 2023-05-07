import * as React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  IconButton,
  Paper,
  Radio,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { usePantryBuilder } from "../../context/PantryBuilderProvider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const RecipeAllergies = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const allergyChoices = [
    "Gluten",
    "Dairy",
    "Soy",
    "Fish",
    "Shellfish",
    "Peanuts",
    "Tree Nuts",
    "Eggs",
  ];
  const [expandedAllergies, setExpandedAllergies] = React.useState({});

  const {
    pantryMealAllergies,
    setPantryMealAllergies,
    pantryMealAllergySeverity,
    setPantryMealAllergySeverity,
  } = usePantryBuilder();

  function handleSelect(allergy) {
    if (pantryMealAllergies.includes(allergy)) {
      removeAllergy(allergy);
      console.log(`Removed ${allergy} from pantryMealAllergies`);
      console.log(pantryMealAllergies);
      removeAllergySeverity(allergy);
    } else {
      addAllergy(allergy);
      console.log(`Added ${allergy} to pantryMealAllergies`);
      console.log(pantryMealAllergies);
      addOrUpdateAllergySeverity(allergy, "Allergic");
    }
  }

  function addAllergy(allergy) {
    setPantryMealAllergies((prevAllergies) => [...prevAllergies, allergy]);
  }

  function removeAllergy(allergy) {
    const newAllergies = pantryMealAllergies.filter((item) => item !== allergy);
    setPantryMealAllergies(newAllergies);
  }

  function removeAllergySeverity(allergy) {
    setPantryMealAllergySeverity((prevSeverity) =>
      prevSeverity.filter((item) => item.allergy !== allergy)
    );
  }

  function addOrUpdateAllergySeverity(allergy, severity) {
    const allergyIndex = pantryMealAllergySeverity.findIndex(
      (item) => item.allergy === allergy
    );

    if (allergyIndex === -1) {
      // Allergy not found, add it to pantryMealAllergySeverity
      setPantryMealAllergySeverity((prevSeverity) => [
        ...prevSeverity,
        { allergy: allergy, severity: severity },
      ]);
    } else {
      // Allergy found, update its severity
      setPantryMealAllergySeverity((prevSeverity) => {
        const updatedSeverity = [...prevSeverity];
        updatedSeverity[allergyIndex].severity = severity;
        return updatedSeverity;
      });
    }
  }

  function handleSeverity(allergy, severity) {
    const isSelected = pantryMealAllergySeverity.some(
      (item) => item.allergy === allergy && item.severity === severity
    );
    addOrUpdateAllergySeverity(allergy, isSelected ? "" : severity);
  }

  const toggleAllergyVisibility = (allergy) => {
    setExpandedAllergies((prevState) => ({
      ...prevState,
      [allergy]: !prevState[allergy],
    }));
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
              {allergyChoices.map((allergy) => {
                return (
                  <Grid item key={allergy}>
                    <Box
                      display="flex"
                      sx={{
                        backgroundColor: pantryMealAllergies.includes(allergy)
                          ? `${colors.primary[500]}`
                          : `${colors.primary[600]}`,
                        p: "0.2rem 0.2rem",
                        mb: pantryMealAllergies.includes(allergy)
                          ? 0
                          : "0.4rem",
                        width: pantryMealAllergies.includes(allergy)
                          ? "98%"
                          : "95%",
                      }}
                    >
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{ flexGrow: 1 }}
                        onClick={() => handleSelect(allergy)}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Mulish !important",
                            ml: "10px",
                            color: colors.white[400],
                            fontWeight: pantryMealAllergies.includes(allergy)
                              ? 900
                              : 400,
                          }}
                        >
                          {`${allergy}`}
                        </Typography>
                        <Radio
                          checked={pantryMealAllergies.includes(allergy)}
                          onClick={() => handleSelect(allergy)}
                          value={allergy}
                          name={allergy}
                          inputProps={{ "aria-label": `${allergy}` }}
                          sx={{
                            "&.Mui-checked": {
                              color: colors.white[400],
                            },
                          }}
                        />
                      </Box>
                    </Box>

                    {pantryMealAllergies.includes(allergy) && (
                      <Box
                        display="flex"
                        justifyContent="start"
                        sx={{
                          backgroundColor: colors.primary[600],
                          mb: "0.4rem",
                          maxWidth: "95%",

                          minHeight: expandedAllergies[allergy]
                            ? "auto"
                            : "1rem",
                          maxHeight: expandedAllergies[allergy]
                            ? "auto"
                            : "1rem",
                        }}
                      >
                        <IconButton
                          onClick={() => toggleAllergyVisibility(allergy)}
                          sx={{
                            height: "auto",
                            width: "auto",
                            transform: expandedAllergies[allergy]
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            transition: "transform 0.3s",
                          }}
                        >
                          <KeyboardArrowDownIcon />
                        </IconButton>

                        {expandedAllergies[allergy] && (
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography
                              sx={{
                                mr: "0.6rem",
                                fontSize: "0.7rem",
                                fontFamily: "Mulish !important",
                              }}
                            >
                              Severity:
                            </Typography>
                            <Box>
                              <ButtonGroup>
                                <Button
                                  onClick={() =>
                                    handleSeverity(allergy, "Allergic")
                                  }
                                  sx={{
                                    fontSize: "0.6rem",
                                    height: "1rem",
                                    textTransform: "none",
                                    fontFamily: "Mulish !important",
                                    color:
                                      theme.palette.mode === "dark"
                                        ? colors.secondary[100]
                                        : colors.secondary[900],
                                    whiteSpace: "nowrap",
                                    borderRadius: "14px",
                                    backgroundColor:
                                      pantryMealAllergySeverity.some(
                                        (item) =>
                                          item.allergy === allergy &&
                                          item.severity === "Allergic"
                                      )
                                        ? colors.orangeAccent[500]
                                        : colors.orangeAccent[700],
                                    boxShadow:
                                      "0px 1px 1px 1px rgba(0, 0, 0, 0.2)",
                                    "&:hover": {
                                      backgroundColor: colors.orangeAccent[600],
                                      boxShadow:
                                        "0px 3px 3px 0px rgba(0, 0, 0, 0.4)",
                                    },
                                    "&:active": {
                                      backgroundColor: colors.orangeAccent[600],
                                      boxShadow:
                                        "0px 4px 4px 0px rgba(0, 0, 0, 0.42)",
                                    },
                                  }}
                                >
                                  Allergic
                                </Button>
                                <Button
                                  onClick={() =>
                                    handleSeverity(allergy, "Sensitive")
                                  }
                                  sx={{
                                    fontSize: "0.6rem",
                                    height: "1rem",
                                    fontFamily: "Mulish !important",
                                    textTransform: "none",
                                    color:
                                      theme.palette.mode === "dark"
                                        ? colors.secondary[100]
                                        : colors.secondary[900],
                                    whiteSpace: "nowrap",
                                    borderRadius: "14px",
                                    backgroundColor:
                                      pantryMealAllergySeverity.some(
                                        (item) =>
                                          item.allergy === allergy &&
                                          item.severity === "Sensitive"
                                      )
                                        ? colors.orangeAccent[500]
                                        : colors.orangeAccent[700],
                                    boxShadow:
                                      "0px 1px 1px 1px rgba(0, 0, 0, 0.2)",
                                    "&:hover": {
                                      backgroundColor: colors.orangeAccent[600],
                                      boxShadow:
                                        "0px 3px 3px 0px rgba(0, 0, 0, 0.4)",
                                    },
                                    "&:active": {
                                      backgroundColor: colors.orangeAccent[600],
                                      boxShadow:
                                        "0px 4px 4px 0px rgba(0, 0, 0, 0.42)",
                                    },
                                  }}
                                >
                                  Sensitive
                                </Button>
                              </ButtonGroup>
                            </Box>
                          </Box>
                        )}
                      </Box>
                    )}
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

export default RecipeAllergies;
