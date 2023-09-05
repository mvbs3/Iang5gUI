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
  const options = { select1: "UeEmulada", select2: "Android" };
  const [toggleValue, setToggleValue] = useState("select1");
  return (
    <Box sx={props.componentsBox}>
      <div style={props.titleBodyDivider}>
        <div style={{ height: "100%", paddingTop: "5px" }}>
          <ToggleSelector
            options={options}
            toggleValue={toggleValue}
            setToggleValue={setToggleValue}
          />
        </div>
        <div style={{ height: "100%" }}>
          <div style={dropdownBoxStyle}>
            <h2> Criar UE's</h2>
            <DropdownGeneric
              Elements={ueNumber}
              Title="UeNumber"
              Select={numUe}
              setSelect={setNumUe}
            />
          </div>
        </div>
      </div>
    </Box>
  );
}
