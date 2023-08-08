import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import DialogButton from "./DialogButton";
import gnb from "./img/gnb.png";
import BoxCore5g from "./BoxCore5g";
import BoxGnb from "./BoxGnb";
import BoxUe from "./BoxUe";
import BoxApps from "./BoxApps";
const gnbInfo = [
  "PLMN",
  "Banda",
  "Status",
  "Subcarrier spacing",
  "Other Frequencies",
  "RNTI",
  "QOS",
];

const bodyItens = [
  "Core 5g SA (OpenAir)",
  "GNB SA(OpenAir)",
  "UE's",
  "App's MEC",
];

export default function BodyDeplo5g(props) {
  const bodyStyle = {
    bgcolor: "pink",
    height: "100vh",
    alignItems: "center",
    flexDirection: "Column",
    padding: 10,
    margin: 1,
    display: "flex",
  };
  const wrapBox = {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    height: "100%",
    width: "100%",
    padding: "10px",
    flex: "1",
    justifyContent: "center",
  };

  const titleBodyDivider = {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "yellow",
  };
  const componentsBox = {
    bgcolor: "green",
    height: "100%",
    alignItems: "center",
    margin: "2px",
    flexBasis: "100%",
  };

  const boxInside = {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "black",
  };

  return (
    <Box sx={bodyStyle}>
      <div style={wrapBox}>
        <BoxCore5g
          componentsBox={componentsBox}
          boxInside={boxInside}
          titleBodyDivider={titleBodyDivider}
        />
      </div>
      <div style={wrapBox}>
        <BoxGnb
          componentsBox={componentsBox}
          titleBodyDivider={titleBodyDivider}
        />
        <BoxUe
          componentsBox={componentsBox}
          titleBodyDivider={titleBodyDivider}
        />
        <BoxApps
          componentsBox={componentsBox}
          titleBodyDivider={titleBodyDivider}
        />
      </div>
    </Box>
  );
}
