import * as React from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import Root from "./routes/root";

function App() {
  return (
    <Box>
      <Root />
      <Navbar />
    </Box>
  );
}

export default App;
