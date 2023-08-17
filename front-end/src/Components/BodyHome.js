import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import bgLab from "./img/bodyLogo.jpeg";
import CardDeploy from "./CardDeploy";

export default function BodyHome() {
  function cardsEnviroment() {
    const core = {
      Oai5gSa: {
        Title: "OpenAir 5g SA",
        Description:
          "Lorem ipsum dolor sit amet, conseccardsEnviromenttetur adipiscing elit. Sed elementum risus nec libero faucibus faucibus.",
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
        <div style={{ paddingTop: 0, padding: 10, height: "100%" }}>
          <CardDeploy
            Title={core[key].Title}
            Description={core[key].Description}
            Img={core[key].Img}
            Url={core[key].Url}
          />
        </div>
      );
      return 0;
    });
    return printer;
  }
  return (
    <div style={{ height: "100%" }}>
      <Container fixed sx={{ height: "50%" }}>
        <div
          style={{
            height: "100%",
            padding: "3px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={bgLab}
            flex="1"
            height="100%"
            width="50%"
            display="block"
            margin-left="auto"
            margin-right="auto"
            alt="imagem de background do centro do body"
          />
        </div>
      </Container>
      <Box
        sx={{
          bgcolor: "#1976D2",
          height: "40%",
          alignItems: "center",
          flexDirection: "columns",
        }}
      >
        <div style={{ height: "25%" }}>
          <h2
            style={{
              justifyContent: "center",
              textAlign: "center",
              color: "black",
              display: "flex",
              padding: 5,
              fontSize: "10",
            }}
          >
            Deploys
          </h2>
        </div>

        <Container
          sx={{
            height: "50%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {cardsEnviroment()}
        </Container>
      </Box>

      <Container sx={{ maxHeight: "100%" }}>
        <div
          style={{
            maxHeight: "100%",
            backgroundColor: "#D9D9D9",
            margin: "10px",
          }}
        >
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
        </div>
      </Container>
    </div>
  );
}
