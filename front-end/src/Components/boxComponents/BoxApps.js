import * as React from "react";
import Box from "@mui/material/Box";
import { ToggleSelector } from "../auxiliarComponents/ToggleSelector";

export default function BoxApps(props) {
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
          <ToggleSelector />
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
