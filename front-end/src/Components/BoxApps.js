import * as React from "react";
import Box from "@mui/material/Box";

export default function BoxApps(props) {
  return (
    <Box sx={props.componentsBox}>
      <div style={props.titleBodyDivider}>
        <div>
          <h1 style={{ textAlign: "center" }}>App's MEC </h1>
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
