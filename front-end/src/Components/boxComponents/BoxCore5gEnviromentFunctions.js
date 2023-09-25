import * as React from "react";
import { useState } from "react";
import DialogButton from "../auxiliarComponents/DialogButton";

export default function BoxCore5gEnviromentFunctions(props) {
  const coreType = {
    minimalist: {
      "Control Net. Func.": ["AMF", "SMF"],
      signaling: ["NRF"],
      "Data Base": ["MYSQL"],
      "Data Netwok Functions": ["UPF"],
    },
    basic: {
      "Control Net. Func.": ["AMF", "SMF"],
      Signaling: ["NRF", "AUSF"],
      "Data Base": ["UDM", "UDR", "MYSQL"],
      "Data Netwok Functions": ["UPF"],
    },
    slice: {
      "Control Net. Func.": ["AMF", "SMF", "NSSF"],
      signaling: ["NRF", "AUSF"],
      "Data Base": ["UDM", "UDR", "MYSQL"],
      "Data Netwok Functions": ["SPGWU", "UPF-VPP"],
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
          {Object.keys(coreType[props.deploy]).map((obj) => {
            if (obj != "Data Netwok Functions") {
              return (
                <div style={dottedLine}>
                  <h3>{obj}</h3>
                  <div style={netFunctionStyle}>
                    {coreType[props.deploy][obj].map((component) => {
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
              );
            }
          })}
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
              <h3>Data Netwok Functions</h3>

              <div style={netFunctionStyle}>
                {coreType[props.deploy]["Data Netwok Functions"].map(
                  (component) => {
                    return (
                      <DialogButton
                        CoreComponnents={component}
                        StyleButton={props.isFunctionOnline(
                          component,
                          statusCore5g
                        )}
                      ></DialogButton>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
