import * as React from "react";
import arrow_down from "../assets/arrow-down.png";
import {
  AppBar,
  IconButton,
  Container,
  Box,
  Button,
  Typography,
  Toolbar,
  Link,
} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  const links: string[] = ["Franchise", "Explore", "Pricing"];
  const [authenticated, setAuthenticated] = React.useState<boolean>();

  React.useEffect(() => {
    setAuthenticated(
      "access_token" in localStorage && "refresh_token" in localStorage
    );
  }, []);

  function logout(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.href = "/login";
  }

  return (
    <Box>
      <AppBar color="inherit">
        <Container>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Link color="inherit" underline="hover" component="button">
                <RouterLink
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography variant="h6">Ecommerce</Typography>
                </RouterLink>
              </Link>
              {links.map((link, index) => (
                <Link
                  color="inherit"
                  underline="hover"
                  component="button"
                  sx={{ mx: 2 }}
                  key={index}
                >
                  <Typography variant="subtitle1">{link}</Typography>
                </Link>
              ))}
              <Link
                color="inherit"
                underline="hover"
                component="button"
                sx={{ mx: 2 }}
              >
                <Typography variant="subtitle1">
                  More <img height="7" width="7" src={arrow_down} />
                </Typography>
              </Link>
            </Box>
            {authenticated ? (
              <Box>
                <RouterLink
                  to="/cart"
                  style={{marginRight: "10px", textDecoration: "none", color: "inherit" }}
                >
                  <IconButton color="primary">
                    <ShoppingCartIcon/>
                  </IconButton>
                </RouterLink>
                <Button onClick={logout} size="small" variant="contained">
                  Logout
                </Button>
              </Box>
            ) : (
              <Box>
                <RouterLink
                  to="/login"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button size="small" variant="outlined">
                    Login
                  </Button>
                </RouterLink>
                &nbsp;
                <RouterLink
                  to="/register"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button size="small" variant="contained">
                    Register
                  </Button>
                </RouterLink>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Navbar;
