import React, { useState } from "react";
import Box from "@mui/material/Box";
import { ToggleSelector } from "../auxiliarComponents/ToggleSelector";

export default function BoxApps(props) {
  const options = { select1: "MEC", select2: "Remote Server" };
  const [toggleValue, setToggleValue] = useState("select1");
  return (
    <Box sx={props.componentsBox}>
      <div style={props.titleBodyDivider}>
        <div
          style={{
            alignItem: "center",
            display: "flex",

            padding: "10px",
          }}
        >
          <ToggleSelector
            options={options}
            toggleValue={toggleValue}
            setToggleValue={setToggleValue}
          />
        </div>
        <div>
          <h2> Apps inseridos atualmente : </h2>
        </div>
        <div>
          <button>Adicionar</button>
          <button>Remover</button>
        </div>
      </div>
    </Box>
  );
}
