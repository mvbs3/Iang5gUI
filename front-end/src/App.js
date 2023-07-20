import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./App.css";
import Header from "./Components/Header";
import bgLab from "./Components/img/bodyLogo.jpeg";
import CardDeploy from "./Components/CardDeploy";

function App() {
  function cardsEnviroment() {
    const core = {
      Oai5gSa: {
        Title: "OpenAir 5g SA",
        Description: "lore ipsum",
        Img: "openAir5gLogo.png",
        Url: "inserir diretorio pra acessar a pagcerta",
      },
      Open5gSa: {
        Title: "Open5gs 5g SA",
        Description: "lore ipsum",
        Img: "contemplative-reptile.jpg",
        Url: "inserir diretorio pra acessar a pagcerta",
      },
      Open5gNsa: {
        Title: "Open5gs 5g NSA",
        Description: "lore ipsum",
        Img: "contemplative-reptile.jpg",
        Url: "inserir diretorio pra acessar a pagcerta",
      },
    };
    let printer = [];
    Object.keys(core).map((key, i) => {
      printer.push(
        <div style={{ padding: 10 }}>
          <CardDeploy
            Title={core[key].Title}
            Description={core[key].Description}
            Img={core[key].Img}
            Url={core[key].Url}
            style={{ padding: 10 }}
          />
        </div>
      );
    });
    return printer;
  }
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
      <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" }}>
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          {cardsEnviroment()}
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default App;
