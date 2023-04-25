import React from "react";
import { Grid, Paper } from "@mui/material";

const Stack = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item>
        <Paper style={{ padding: 20 }}>Item 1</Paper>
      </Grid>
      <Grid item>
        <Paper style={{ padding: 20 }}>Item 2</Paper>
      </Grid>
      <Grid item>
        <Paper style={{ padding: 20 }}>Item 3</Paper>
      </Grid>
    </Grid>
  );
};

export default Stack;
