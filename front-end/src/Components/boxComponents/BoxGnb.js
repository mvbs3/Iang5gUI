import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import DialogButton from "../auxiliarComponents/DialogButton";

export default function BoxGnb(props) {
  const [statusGnb, setStatusGnb] = useState({
    GNB: "Offline",
  });
  return (
    <Box sx={props.componentsBox}>
      <div style={props.titleBodyDivider}>
        <div>
          <h1 style={{ textAlign: "center" }}>GNB SA(OpenAir) </h1>
        </div>

        <Box
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        ></Box>
        <Box>
          <DialogButton
            CoreComponnents="GNB"
            StyleButton={props.isFunctionOnline("GNB", statusGnb)}
          ></DialogButton>
        </Box>

        <div>
          <button>Devices Conectados</button>
          <button>Ligar</button>
          <button>Configuração</button>
        </div>
      </div>
    </Box>
  );
}
