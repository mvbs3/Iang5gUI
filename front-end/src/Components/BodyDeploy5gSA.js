import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import DialogButton from "./DialogButton";
import gnb from "./img/gnb.png";
const gnbInfo = [
  "PLMN",
  "Banda",
  "Status",
  "Subcarrier spacing",
  "Other Frequencies",
  "RNTI",
  "QOS",
];
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
function isFunctionOnline(coreFunc, statusCoreFunc) {
  const online = {
    backgroundColor: "green",
    fontSize: "15px",
    padding: "15px 32px",
    color: "black",
  };
  const offline = {
    backgroundColor: "red",
    fontSize: "15px",
    padding: "15px 32px",
    color: "black",
  };
  const bug = {
    backgroundColor: "yellow",
    fontSize: "15px",
    padding: "15px 32px",
    color: "black",
  };
  if (statusCoreFunc[coreFunc] === "Online") {
    return online;
  } else if (statusCoreFunc[coreFunc] === "Offline") {
    return offline;
  } else {
    return bug;
  }
}

export default function BodyDeplo5g(props) {
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
    alignItems: "center",
    padding: 1,
    margin: 2,
    flexBasis: "100%",
  };

  const wrapBox = {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    width: "1800px",
    justifyContent: "center",
  };

  const boxInside = {
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
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
        <div style={wrapBox}>
          <Box sx={componentsBox}>
            <h1 style={{ textAlign: "center" }}>Core 5g SA (OpenAir) </h1>
            <div style={boxInside}>
              <div
                style={{
                  flexDirection: "row !important",
                  display: "flex",
                  padding: 1,
                  justifyContent: "space-evenly",
                }}
              >
                {coreComponents5g.map((component) => {
                  return (
                    <DialogButton
                      CoreComponnents={component}
                      StyleButton={isFunctionOnline(component, statusCore5g)}
                    ></DialogButton>
                  );
                })}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <button>Estatística</button>
                <button>Ligar</button>
                <button>Configuração</button>
              </div>
            </div>
          </Box>
        </div>
        <div style={wrapBox}>
          <Box sx={componentsBox}>
            <h1 style={{ textAlign: "center" }}>GNB SA(OpenAir) </h1>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <img
                src={gnb}
                style={{
                  height: "30vh",
                }}
              />
            </div>
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
