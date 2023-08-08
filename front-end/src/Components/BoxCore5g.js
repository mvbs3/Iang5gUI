import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import DialogButton from "./DialogButton";
import Dropdown5gDeploys from "./Dropdown5gDeploy";

export default function BoxCore5g(props) {
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

  return (
    <Box sx={props.componentsBox}>
      <div style={props.titleBodyDivider}>
        <div>
          <h1 style={{ textAlign: "center" }}>Core 5g SA (OpenAir) </h1>
        </div>
        <div style={props.boxInside}>
          <div
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "white",
            }}
          >
            <div style={{ flexDirection: "row", display: "flex" }}>
              <h2> Core Type:</h2>
              <Dropdown5gDeploys />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <button>Estatística</button>
              <button>Ligar</button>
              <button>Configuração</button>
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

              backgroundColor: "blue",
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
