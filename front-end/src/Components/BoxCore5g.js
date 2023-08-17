import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import DialogButton from "./DialogButton";
import Dropdown5gDeploys from "./Dropdown5gDeploy";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BoxCore5g(props) {
  const [deploy, setDeploy] = React.useState("");
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
  const buttonCoreStyle = {
    color: "#54849C",
    margin: 5,
    color: "black",
  };
  return (
    <Box sx={props.componentsBox}>
      <div style={props.titleBodyDivider}>
        <div style={props.boxInside}>
          <div
            style={{
              height: "100%",
              width: "50%",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                height: "20%",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2 style={{ textAlign: "center" }}>Core 5G SA </h2>
            </div>

            <div style={{ height: "100%" }}>
              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  maxHeight: "100%",
                }}
              >
                <h2> Core Type </h2>
                <Dropdown5gDeploys deploy={deploy} setDeploy={setDeploy} />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  height: "40%",
                }}
              >
                <div style={{ height: "100%" }}>
                  <Button
                    style={buttonCoreStyle}
                    variant="contained"
                    size="small"
                  >
                    Estatistica
                  </Button>
                  <Button
                    style={buttonCoreStyle}
                    variant="contained"
                    size="small"
                  >
                    Ligar
                  </Button>
                </div>
                <div style={{ height: "100%" }}>
                  <Button
                    style={buttonCoreStyle}
                    variant="contained"
                    size="small"
                  >
                    Configuração
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              flexWrap: "wrap",
              flexDirection: "",
              display: "flex",
              padding: 1,
              height: "100%",
              width: "100%",
              backgroundColor: "black",
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
        </div>
      </div>
    </Box>
  );
}
