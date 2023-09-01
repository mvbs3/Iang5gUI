import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import DialogButton from "../auxiliarComponents/DialogButton";
import Dropdown5gDeploys from "../auxiliarComponents/Dropdown5gDeploy";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BoxCore5gEnviromentFunctions(props) {
  const netFunctionsControl = ["AMF", "SMF"];
  const signaling = ["NRF", "AUSF"];
  const dataBase = ["UDM", "UDR", "MYSQL"];
  const netFunctionsData = ["UPF"];
  const coreType = {
    minimalist: {
      netFunctionsControl: ["AMF", "SMF"],
      signaling: ["NRF"],
      dataBase: ["MYSQL"],
      netFunctionsData: ["UPF"],
    },
    basic: {
      netFunctionsControl: ["AMF", "SMF"],
      signaling: ["NRF", "AUSF"],
      dataBase: ["UDM", "UDR", "MYSQL"],
      netFunctionsData: ["UPF"],
    },
    slice: {
      netFunctionsControl: ["AMF", "SMF", "NSSF"],
      signaling: ["NRF", "AUSF"],
      dataBase: ["UDM", "UDR", "MYSQL"],
      netFunctionsData: ["SPGWU", "UPF-VPP"],
    },
  };
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
        <div
          style={{
            width: "100%",

            display: "flex",
            justifyContent: "center ",
          }}
        >
          {Object.keys(coreType)}
          <div style={dottedLine}>
            <h3>Netwok Functions</h3>
            <div style={netFunctionStyle}>
              {netFunctionsControl.map((component) => {
                return (
                  <DialogButton
                    CoreComponnents={component}
                    StyleButton={props.isFunctionOnline(
                      component,
                      statusCore5g
                    )}
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
                    StyleButton={props.isFunctionOnline(
                      component,
                      statusCore5g
                    )}
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
                    StyleButton={props.isFunctionOnline(
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
      <div
        style={{
          display: "flex",
          height: "100%",
        }}
      >
        <div style={{ height: "100%" }}>
          <h3> Data Plane: </h3>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center ",
          }}
        >
          <div style={{}}>
            <div style={dottedLine}>
              <h3>Netwok Functions</h3>

              <div style={netFunctionStyle}>
                {netFunctionsData.map((component) => {
                  return (
                    <DialogButton
                      CoreComponnents={component}
                      StyleButton={props.isFunctionOnline(
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
  );
}
