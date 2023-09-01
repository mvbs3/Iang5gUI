import * as React from "react";
import Box from "@mui/material/Box";

export default function BoxGnb(props) {
  return (
    <Box sx={props.componentsBox}>
      <div style={props.titleBodyDivider}>
        <div>
          <h1 style={{ textAlign: "center" }}>GNB SA(OpenAir) </h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        ></div>
        <div>
          <button>Devices Conectados</button>
          <button>Ligar</button>
          <button>Configuração</button>
        </div>
      </div>
    </Box>
  );
}
