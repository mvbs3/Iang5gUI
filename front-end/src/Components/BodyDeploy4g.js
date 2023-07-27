import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
const coreComponents5g = [
  "AMF",
  "SMF",
  "UPF",
  "NRF",
  "UDM",
  "UDR",
  "AUSF",
  "MYSQL",
];
const bodyItens = [
  "Core 5g SA (OpenAir)",
  "GNB SA(OpenAir)",
  "UE's",
  "App's MEC",
];

export default function bodyDeploy4g(props) {
  const [statusCore5g, setStatusCore5g] = useState({
    AMF: "Offline",
    SMF: "Offline",
    UPF: "Offline",
    NRF: "Offline",
    UDM: "Offline",
    UDR: "Offline",
    AUSF: "Offline",
    MYSQL: "Offline",
  });

  const componentsBox = {
    bgcolor: "#999999",
    height: "50vh",
    maxWidth: "40%",
    alignItems: "center",
    flexDirection: "columns",
    padding: 1,
    margin: 2,
    flexBasis: "100%",
  };
  const wrapBox = {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    maxWidth: "200vh",
    justifyContent: "center",
    flexWrap: "wrap",
  };
  return (
    <>
      <Box
        sx={{
          bgcolor: "#1976D2",
          height: "100%",
          alignItems: "center",
          flexDirection: "Column",
          padding: 10,
          margin: 1,
          display: "flex",
        }}
      >
        {" "}
        <div style={wrapBox}>
          <Box sx={componentsBox}>
            <h1 style={{ textAlign: "center" }}>Core 5g SA (OpenAir) </h1>
            {coreComponents5g.map((component) => {
              return <h4 style={{ fontSize: "12px" }}>{component}</h4>;
            })}
            <button>Estatística</button>
            <button>Ligar</button>
            <button>Configuração</button>
          </Box>

          <Box sx={componentsBox}>
            <h1 style={{ textAlign: "center" }}>GNB SA(OpenAir) </h1>s
            <button>Devices Conectados</button>
            <button>Ligar</button>
            <button>Configuração</button>
          </Box>
          <Box sx={componentsBox}>
            <h1 style={{ textAlign: "center" }}>UE's </h1>
          </Box>

          <Box sx={componentsBox}>
            <h1 style={{ textAlign: "center" }}>App's MEC </h1>
            <h2> Apps inseridos atualmente : </h2>
            <button>Adicionar</button>
            <button>Remover</button>
          </Box>
        </div>
      </Box>
    </>
  );
}
