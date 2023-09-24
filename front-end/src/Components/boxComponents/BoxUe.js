import React, { useState } from "react";
import Box from "@mui/material/Box";
import { ToggleSelector } from "../auxiliarComponents/ToggleSelector";
import DropdownGeneric from "../auxiliarComponents/DropdownGeneric";
export default function BoxUe(props) {
  const ueNumber = [0, 1, 2, 3, 4];
  const [numUe, setNumUe] = React.useState(0);
  const dropdownBoxStyle = {
    flexDirection: "row",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    maxHeight: "100%",
  };
  const devicesStyle = {
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: "100%",
  };
  const options = { select1: "UeEmulada", select2: "Android" };
  const [toggleValue, setToggleValue] = useState("select1");
  function displayDevices(ueNumber) {
    let a = [];
    for (var i = 0; i < ueNumber; i++) {
      a.push(
        <div style={devicesStyle}>
          teste
          <br />
        </div>
      );
    }
    return a;
  }
  return (
    <Box sx={props.componentsBox}>
      <div style={props.titleBodyDivider}>
        <Box sx={{ maxHeight: "50%", padding: "5px" }}>
          <ToggleSelector
            options={options}
            toggleValue={toggleValue}
            setToggleValue={setToggleValue}
          />
        </Box>
        <Box sx={{ maxHeight: "50%" }}>
          <Box style={dropdownBoxStyle}>
            <h2> Criar UE's</h2>
            <DropdownGeneric
              Elements={ueNumber}
              Title="UeNumber"
              Select={numUe}
              setSelect={setNumUe}
            />
            <button> Criar UE</button>
          </Box>
        </Box>
        <Box sx={{ maxHeight: "100%", width: "100%" }}>
          <Box sx={{}}>
            <h2> Devices Criados: </h2>
          </Box>
          <Box sx={{}}>{displayDevices(numUe)}</Box>
        </Box>
      </div>
    </Box>
  );
}
