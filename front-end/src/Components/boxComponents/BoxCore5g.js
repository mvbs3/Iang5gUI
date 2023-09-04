import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import DialogButton from "../auxiliarComponents/DialogButton";
import Dropdown5gDeploys from "../auxiliarComponents/DropdownGeneric";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import BoxCore5gDeployType from "./BoxCore5gDeployType";
import BoxCore5gEnviromentFunctions from "./BoxCore5gEnviromentFunctions";

export default function BoxCore5g(props) {
  const [deploy, setDeploy] = React.useState("basic");

  const netFunctionsControl = ["AMF", "SMF"];
  const signaling = ["NRF", "AUSF"];
  const dataBase = ["UDM", "UDR", "MYSQL"];
  const netFunctionsData = ["UPF"];

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

  return (
    <Box sx={props.componentsBox}>
      <div style={props.titleBodyDivider}>
        <div style={props.boxInside}>
          <BoxCore5gDeployType
            deploy={deploy}
            setDeploy={setDeploy}
            buttonCoreStyle={buttonCoreStyle}
          />
          <BoxCore5gEnviromentFunctions
            isFunctionOnline={isFunctionOnline}
            deploy={deploy}
          />
        </div>
      </div>
    </Box>
  );
}
