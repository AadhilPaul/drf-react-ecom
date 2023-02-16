import arrow_down from "../assets/arrow-down.png";
import {
  AppBar,
  Container,
  Box,
  Button,
  Typography,
  Toolbar,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  const links: string[] = ["Franchise", "Explore", "Pricing"];

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
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Navbar;
