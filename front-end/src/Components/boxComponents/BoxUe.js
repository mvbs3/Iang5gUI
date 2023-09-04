import * as React from "react";
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
  return (
    <Box sx={props.componentsBox}>
      <div style={props.titleBodyDivider}>
        <div style={{ height: "100%", paddingTop: "5px" }}>
          <ToggleSelector />
        </div>
        <div style={{ height: "100%" }}>
          <div style={dropdownBoxStyle}>
            <h2> Core Type </h2>
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
