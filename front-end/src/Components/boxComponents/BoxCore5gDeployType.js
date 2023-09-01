import * as React from "react";
import Dropdown5gDeploys from "../auxiliarComponents/Dropdown5gDeploy";
import Button from "@mui/material/Button";

export default function BoxCore5gDeployType(props) {
  return (
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
          <Dropdown5gDeploys
            deploy={props.deploy}
            setDeploy={props.setDeploy}
          />
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
              style={props.buttonCoreStyle}
              variant="contained"
              size="small"
            >
              Estatistica
            </Button>
            <Button
              style={props.buttonCoreStyle}
              variant="contained"
              size="small"
            >
              Ligar
            </Button>
          </div>
          <div style={{ height: "100%" }}>
            <Button
              style={props.buttonCoreStyle}
              variant="contained"
              size="small"
            >
              Configuração
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
