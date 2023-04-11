import * as React from "react";
import { useNavigate  } from 'react-router-dom';
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
  Alert,
  Collapse,
  IconButton,
  responsiveFontSizes,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
  const [username, setUsername] = React.useState<string>("");
  const [usernameError, setUsernameError] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [emailError, setEmailError] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [passwordError, setPasswordError] = React.useState<string>("");
  const [rePassword, setRePassword] = React.useState<string>("");
  const [rePasswordError, setRePasswordError] = React.useState<string>("");
  const [formError, setFormError] = React.useState<string[]>([]);
  const [open, setOpen] = React.useState<boolean>(false);

  let navigate = useNavigate();

  function usernameValidation(value: string): [boolean, string] {
    const usernameRegex = /^[a-zA-Z0-9$@.+_]+$/;
    return [
      usernameRegex.test(value),
      "150 characters or fewer. Letters, digits and @/./+/_ only.",
    ];
  }

  function emailValidation(value: string): [boolean, string] {
    const emailRegex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return [emailRegex.test(value), "Enter a valid email address."];
  }

  function passwordValidation(value: string): [boolean, string] {
    const onlyNum = /^[0-9]+$/;
    if (onlyNum.test(value))
      return [false, "Password can't be entirely numeric"];
    return [value.length > 8, "Password must be at least 8 characters"];
  }

  function rePasswordValidation(value: string): [boolean, string] {
    return [value === password, "Passwords are not matching."];
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    switch (e.target.name) {
      case "username":
        let [u_bool, u_msg] = usernameValidation(e.target.value);
        if (u_bool) setUsernameError("");
        else setUsernameError(u_msg);
        setUsername(e.target.value);
        break;
      case "email":
        let [e_bool, e_msg] = emailValidation(e.target.value);
        if (e_bool) setEmailError("");
        else setEmailError(e_msg);
        setEmail(e.target.value);
        break;
      case "password":
        let [p_bool, p_msg] = passwordValidation(e.target.value);
        if (p_bool) setPasswordError("");
        else setPasswordError(p_msg);
        setPassword(e.target.value);
        break;
      case "re_password":
        let [rp_bool, rp_msg] = rePasswordValidation(e.target.value);
        if (rp_bool) setRePasswordError("");
        else setRePasswordError(rp_msg);
        setRePassword(e.target.value);
        break;
    }
  }

  async function handleSubmit(
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> {
    e.preventDefault();
    if (!usernameError && !emailError && !passwordError && !rePasswordError) {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/users/users/",
          {
            username: username,
            email: email,
            password: password,
            re_password: rePassword,
          }
        );
        console.log("DATA: ", response.data);
        if (response.status === 201) navigate('/login')
      } catch (error: any) {
        let data = error.response.data;
        for (const key in data) {
          if (data[key][0] === "This field may not be blank.") break;
          if (key === "username") {
            formError.push("An user with this username already exists!");
            break;
          }
          if (key === "email") {
            formError.push("An user with this email already exists!");
            break;
          }
          formError.push(data[key]);
        }
        if (formError) {
          setOpen(true);
        }
      }
    }
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
        <Typography variant="h4">Register</Typography>
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
                    setFormError([]);
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
                autoFocus
                required
                name="username"
                error={usernameError !== ""}
                helperText={usernameError ? usernameError : ""}
                type="text"
                size="small"
                variant="filled"
                label="Username"
                onChange={handleChange}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <TextField
                name="email"
                required
                type="email"
                error={emailError !== ""}
                helperText={emailError ? emailError : ""}
                size="small"
                variant="filled"
                label="Email Address"
                onChange={handleChange}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <TextField
                required
                name="password"
                type="password"
                error={passwordError !== ""}
                helperText={passwordError ? passwordError : ""}
                size="small"
                variant="filled"
                label="Password"
                onChange={handleChange}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <TextField
                name="re_password"
                type="password"
                error={rePasswordError !== ""}
                helperText={rePasswordError ? rePasswordError : ""}
                required
                size="small"
                variant="filled"
                label="Confirm Password"
                onChange={handleChange}
              />
              <Grid container justifyContent="flex-end">
                <FormHelperText>
                  <Link
                    href="/register"
                    color="inherit"
                    underline="hover"
                    component="button"
                  >
                    <RouterLink
                      to="/login"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Already have an account?
                    </RouterLink>
                  </Link>
                </FormHelperText>
              </Grid>
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <Button
              disabled={!username || !email || !password || !rePassword || open}
              type="submit"
              onClick={handleSubmit}
              variant="contained"
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default RegisterPage;
