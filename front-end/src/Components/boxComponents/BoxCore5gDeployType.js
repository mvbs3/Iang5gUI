import React, { useState } from "react";
import DropdownGeneric from "../auxiliarComponents/DropdownGeneric";
import Button from "@mui/material/Button";
import axios from "axios";

export default function BoxCore5gDeployType(props) {
  const deploy5g = ["minimalist", "basic", "slice"];
  const [Status, setStatus] = useState(true);
  const dropdownBoxStyle = {
    flexDirection: "row",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    maxHeight: "100%",
  };
  const baseUrl = "http://localhost:5000";

  function requestOnOff(coreDeployName, core, deploy, band) {
    setStatus(!Status);
    console.log(
      baseUrl +
        "/" +
        coreDeployName +
        "/" +
        core +
        "/" +
        deploy +
        "/" +
        band +
        "/" +
        (Status ? "on" : "off")
    );
    axios
      .get(
        baseUrl +
          "/" +
          coreDeployName +
          "/" +
          core +
          "/" +
          deploy +
          "/" +
          band +
          "/" +
          (Status ? "on" : "off")
      )
      .then((res) => {
        const dados = res.data;
        console.log(dados);

        console.log(dados);
      });
  }
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
        <div style={dropdownBoxStyle}>
          <h2> Core Type </h2>
          <DropdownGeneric
            Elements={deploy5g}
            Title="Deploy"
            Select={props.deploy}
            setSelect={props.setDeploy}
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
              onClick={() => requestOnOff("oai", "5g", props.deploy, "78")}
            >
              {Status ? "Ligar" : "Desligar"}
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
