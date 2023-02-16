import {Box, Grid, Typography } from "@mui/material";
import React from "react";

function ErrorPage() {
  return (
    <Box>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Typography variant="h1">404</Typography>
          <Typography variant="h3">Page not Found :(</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ErrorPage;
