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
    bgcolor: "white",
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
    backgroundColor: "pink",
    height: "100%",
    width: "100%",
    padding: "10px",
    flex: "1",
    justifyContent: "center",
  };

  const titleBodyDivider = {
    backgroundColor: "#D9D9D9",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const componentsBox = {
    height: "100%",
    alignItems: "center",
    padding: "10px",
    flexBasis: "100%",
  };

  const boxInside = {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
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
        <BoxUe
          componentsBox={componentsBox}
          titleBodyDivider={titleBodyDivider}
        />
        <BoxGnb
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
