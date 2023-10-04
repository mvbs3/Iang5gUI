import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {requestOnOff} from "../VarFile";
import DialogButton from "../auxiliarComponents/DialogButton";
import { ToggleSelector } from "../auxiliarComponents/ToggleSelector";

export default function BoxGnb(props) {
  const [statusGnb, setStatusGnb] = useState({
    GNB: "Offline",
  });
  const [Status, setStatus] = useState(true);
  const options = { select1: "Monolitic", select2: "Split" };
  const [toggleValue, setToggleValue] = useState("select1");

 
  return (
    <Box sx={props.componentsBox}>
      <div style={props.titleBodyDivider}>
        <div style={{
            alignItem: "center",
            display: "flex",

            padding: "10px",
          }}>
        <ToggleSelector
            options={options}
            toggleValue={toggleValue}
            setToggleValue={setToggleValue}
          />
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
          <Button
              style={props.buttonCoreStyle}
              variant="contained"
              size="small"
              onClick={() => requestOnOff("gnb","oai", options, Status, setStatus)}
            >
              {Status ? "Ligar" : "Desligar"}
            </Button>
          <button>Configuração</button>
        </div>
      </div>
    </Box>
  );
}
