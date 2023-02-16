import {
  Box,
  Grid,
  Divider,
  Paper,
  TextField,
  Typography,
  FormGroup,
  Button,
  FormHelperText,
  Link,
} from "@mui/material";
import React from "react";

function RegisterPage() {
  return (
    <Box>
      <Paper
        variant="outlined"
        sx={{
          backgroundColor: "#fcfcfc",
          margin: "8rem 35rem",
          padding: "40px",
        }}
      >
        <Typography variant="h4">Register</Typography>
        <Divider sx={{ my: 2 }} />
        <Grid container direction="column" rowSpacing={2}>
          <Grid item xs={12}>
            <FormGroup>
              <TextField
                autoFocus
                required
                type="text"
                size="small"
                variant="outlined"
                label="Username"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <TextField
                required
                type="email"
                size="small"
                variant="outlined"
                label="Email Address"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <TextField
                required
                type="number"
                size="small"
                variant="outlined"
                label="Phone Number"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <TextField
                required
                type="password"
                size="small"
                variant="outlined"
                label="Password"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <TextField
                type="password"
                required
                size="small"
                variant="outlined"
                label="Confirm Password"
              />
              <Grid container justifyContent="flex-end">
                <FormHelperText>
                  <Link color="inherit" underline="hover" component="button">
                    Already have an account?
                  </Link>
                </FormHelperText>
              </Grid>
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained">Register</Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default RegisterPage;
