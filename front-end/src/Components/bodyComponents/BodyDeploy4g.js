import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
const coreComponents4g = [
  "MME",
  "SGWC",
  "SGWU",
  "UPF",
  "SMF",
  "OSMOMSC",
  "MONGO",
  "NRF",
  "SCP",
  "OSMOHLR",
  "PCRF",
  "WEBUI",
];
const bodyItens = ["Core 4g (OpenAir)", "ENB (SRSRan)", "UE's", "------"];

export default function BodyDeploy4g(props) {
  const [statusCore4g, setStatusCore4g] = useState({
    MME: "Offline",
    SGWC: "Offline",
    SGWU: "Offline",
    UPF: "Offline",
    SMF: "Offline",
    OSMOMSC: "Offline",
    MONGO: "Offline",
    NRF: "Offline",
    SCP: "Offline",
    OSMOHLR: "Offline",
    PCRF: "Offline",
    WEBUI: "Offline",
  });

  const componentsBox = {
    bgcolor: "#999999",
    height: "60vh",
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
            <h1 style={{ textAlign: "center" }}>Core 4g SA (OpenAir) </h1>
            {coreComponents4g.map((component) => {
              return <h4 style={{ fontSize: "12px" }}>{component}</h4>;
            })}
            <button>Estatística</button>
            <button>Ligar</button>
            <button>Configuração</button>
          </Box>

          <Box sx={componentsBox}>
            <h1 style={{ textAlign: "center" }}>ENB (SRSRan) </h1>
            <button>Devices Conectados</button>
            <button>Ligar</button>
            <button>Configuração</button>
          </Box>
          <Box sx={componentsBox}>
            <h1 style={{ textAlign: "center" }}>UE's </h1>
          </Box>

          <Box sx={componentsBox}>
            <h1 style={{ textAlign: "center" }}>----- </h1>
            <h2> Apps inseridos atualmente : </h2>
            <button>Adicionar</button>
            <button>Remover</button>
          </Box>
        </div>
      </Box>
    </>
  );
}
