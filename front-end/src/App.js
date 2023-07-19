import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./App.css";
import Header from "./Components/Header";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container fixed>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
      </Container>
    </React.Fragment>
  );
}

export default App;
