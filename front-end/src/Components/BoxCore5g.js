import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import DialogButton from "./DialogButton";
import Dropdown5gDeploys from "./Dropdown5gDeploy";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BoxCore5g(props) {
  const [deploy, setDeploy] = React.useState("");

  const netFunctionsControl = ["AMF", "SMF"];
  const signaling = ["NRF", "AUSF"];
  const dataBase = ["UDM", "UDR", "MYSQL"];
  const netFunctionsData = ["UPF"];

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
      backgroundColor: "#264A61",
      fontSize: "15px",
      padding: "10px 20px",
      margin: "5px",
      color: "black",
    };
    const offline = {
      backgroundColor: "#91a0a9",
      fontSize: "15px",
      padding: "10px 20px",
      margin: "5px",
      color: "black",
    };
    const bug = {
      backgroundColor: "yellow",
      fontSize: "15px",
      padding: "10px 20px",
      margin: "5px",
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
  const dottedLine = {
    maxWidth: "100%",
    height: "90%",
    /*background-color: #242729;*/
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    margin: "10px",

    border: "3px dotted #264A61",
  };
  const netFunctionStyle = {
    height: "100%",
    display: "flex",
    flexDirection: "row",
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
              flexDirection: "column",
              display: "flex",
              padding: 1,
              height: "100%",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                height: "100%",
              }}
            >
              <div style={{ height: "100%" }}>
                <h3> Control Plane: </h3>
              </div>

              <div style={dottedLine}>
                <h3>Netwok Functions</h3>
                <div style={netFunctionStyle}>
                  {netFunctionsControl.map((component) => {
                    return (
                      <DialogButton
                        CoreComponnents={component}
                        StyleButton={isFunctionOnline(component, statusCore5g)}
                      ></DialogButton>
                    );
                  })}
                </div>
              </div>
              <div style={dottedLine}>
                <h3>Signaling</h3>
                <div style={netFunctionStyle}>
                  {signaling.map((component) => {
                    return (
                      <DialogButton
                        CoreComponnents={component}
                        StyleButton={isFunctionOnline(component, statusCore5g)}
                      ></DialogButton>
                    );
                  })}
                </div>
              </div>
              <div style={dottedLine}>
                <h3>Data Base</h3>
                <div style={netFunctionStyle}>
                  {dataBase.map((component) => {
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
            <div
              style={{
                display: "flex",
                height: "100%",
              }}
            >
              <h3> Data Plane: </h3>
              <div style={{ width: "100%" }}>
                <div style={dottedLine}>
                  <h3>Netwok Functions</h3>

                  <div style={netFunctionStyle}>
                    {netFunctionsData.map((component) => {
                      return (
                        <DialogButton
                          CoreComponnents={component}
                          StyleButton={isFunctionOnline(
                            component,
                            statusCore5g
                          )}
                        ></DialogButton>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
