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

function LoginPage() {
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
        <Typography variant="h4">Login</Typography>
        <Divider sx={{ my: 2 }} />
        <Grid container direction="column" rowSpacing={2}>
          <Grid item xs={12}>
            <FormGroup>
              <TextField
                required
                type="email"
                autoFocus
                size="small"
                variant="outlined"
                label="Email Address"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <TextField
                size="small"
                type="password"
                required
                variant="outlined"
                label="Password"
              />
              <Grid container justifyContent="space-between">
                <FormHelperText>
                  <Link color="inherit" underline="hover" component="button">
                    Forgot Password?
                  </Link>
                </FormHelperText>
                <FormHelperText>
                  <Link color="inherit" underline="hover" component="button">
                    Don't have an account?
                  </Link>
                </FormHelperText>
              </Grid>
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained">Log In</Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default LoginPage;
