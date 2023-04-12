import * as React from "react";
import axiosInstance from "../axios";
import {
  Box,
  Alert,
  Collapse,
  IconButton,
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
import CloseIcon from "@mui/icons-material/Close";
import { Link as RouterLink } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [formError, setFormError] = React.useState<string>("");
  const [open, setOpen] = React.useState<boolean>(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    e.target.name === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    console.log(email, password)
    axiosInstance.post('users/token/', {
      email: email,
      password: password
    })
    .then((res) => {
      localStorage.setItem("access_token", res.data.access);
      localStorage.setItem("refresh_token", res.data.refresh);
      axiosInstance.defaults.headers["Authorization"] =
        "Bearer " + localStorage.getItem("access_token");
      window.location.href = '/'
    }
    ).catch((error) => {
      if (error.response.status != 200) {
        setFormError("Invalid Username or Password.")
        setOpen(true)
      }
    });
  }

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
          <Collapse in={open}>
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setFormError("");
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              {formError}
            </Alert>
          </Collapse>
          <Grid item xs={12}>
            <FormGroup>
              <TextField
                required
                name="email"
                onChange={handleChange}
                type="email"
                autoFocus
                size="small"
                variant="filled"
                label="Email Address"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <TextField
                size="small"
                name="password"
                onChange={handleChange}
                type="password"
                required
                variant="filled"
                label="Password"
              />
              <Grid container justifyContent="space-between">
                <FormHelperText>
                  <Link color="inherit" underline="hover" component="button">
                    Forgot Password?
                  </Link>
                </FormHelperText>
                <FormHelperText>
                  <Link
                    href="/register"
                    color="inherit"
                    underline="hover"
                    component="button"
                  >
                    <RouterLink
                      to="/register"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Don't have an account?
                    </RouterLink>
                  </Link>
                </FormHelperText>
              </Grid>
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              onClick={handleSubmit}
              disabled={!email || !password || open}
              variant="contained"
            >
              Log In
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default LoginPage;
