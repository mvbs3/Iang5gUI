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
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum risus nec libero faucibus faucibus.",
        Img: "openAir5gLogo.png",
        Url: "inserir diretorio pra acessar a pagcerta",
      },
      Oai4g: {
        Title: "OpenAir 4g SA",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum risus nec libero faucibus faucibus.",
        Img: "openAir5gLogo.png",
        Url: "inserir diretorio pra acessar a pagcerta",
      },
      Open5gSa: {
        Title: "Open5gs 5g SA",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum risus nec libero faucibus faucibus.",
        Img: "openAir5gLogo.png",
        Url: "inserir diretorio pra acessar a pagcerta",
      },
      Open5gNsa: {
        Title: "Open5gs 5g NSA",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum risus nec libero faucibus faucibus.",
        Img: "openAir5gLogo.png",
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
      <Box
        sx={{
          bgcolor: "#1976D2",
          height: "50vh",
          alignItems: "center",
          flexDirection: "columns",
        }}
      >
        <h1
          style={{
            justifyContent: "center",
            textAlign: "center",
            color: "black",
            display: "block",
            padding: 5,
          }}
        >
          Deploys
        </h1>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {cardsEnviroment()}
        </Container>
      </Box>
      <Box>
        <Container>
          <h1 style={{ textAlign: "center" }}>Sobre o laboratório</h1>
          <h2 style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            elementum risus nec libero faucibus faucibus. Suspendisse potenti.
            Nullam vulputate non sapien ac suscipit. Cras ac nisi mattis,
            tincidunt nibh vel, sagittis massa. Cras scelerisque augue in
            elementum bibendum. Morbi quam tortor, malesuada nec urna et,
            molestie scelerisque sapien. Suspendisse pulvinar efficitur arcu, ut
            rutrum est porta id. Morbi dolor lectus, commodo at fermentum at,
            laoreet vitae nibh. Maecenas at nulla elementum, lobortis eros in,
            luctus ligula. Cras pulvinar elit sed magna rhoncus, eu viverra nibh
            placerat. Proin at posuere quam. Phasellus tempus at metus vel
            finibus. Nunc lobortis bibendum ante lacinia congue. Duis ut gravida
            odio.
          </h2>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default App;
