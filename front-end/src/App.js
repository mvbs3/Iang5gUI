import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./App.css";
import Header from "./Components/Header";
import bgLab from "./Components/img/bodyLogo.jpeg";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container fixed>
        <div
          style={{
            padding: "3px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={bgLab}
            flex="1"
            width="70%"
            height="auto"
            display="block"
            margin-left="auto"
            margin-right="auto"
          />
        </div>
        {/* <div
          style={{
            backgroundImage: `url(${bgLab})`,
            flex: "1",
            width: "100%",
            height: "auto",
            justifyContent: "center",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundAttachment: "fixed",
          }}
        >
          <div
            style={{
              color: "black",
              fontSize: 42,
              lineHeight: 10,
              fontWeight: "bold",
              textAlign: "center",
              backgroundColor: "#000000c0",
            }}
          >
            teste
          </div>
        </div>*/}
      </Container>
      <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" }}></Box>
    </React.Fragment>
  );
}

export default App;
