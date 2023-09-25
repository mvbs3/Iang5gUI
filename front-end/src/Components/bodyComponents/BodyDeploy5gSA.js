import * as React from "react";
import Box from "@mui/material/Box";

import BoxCore5g from "../boxComponents/BoxCore5g";
import BoxGnb from "../boxComponents/BoxGnb";
import BoxUe from "../boxComponents/BoxUe";
import BoxApps from "../boxComponents/BoxApps";
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
  //ESSE AQUI DEFINE O TAMANHO DA TELA
  const bodyStyle = {
    bgcolor: "white",
    height: "120vh",
    width: "100vw",
    alignItems: "center",
    flexDirection: "Column",
    padding: 3,
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
    width: "100%",
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
  function isFunctionOnline(coreFunc, statusCoreFunc) {
    const online = {
      backgroundColor: "#264A61",
      fontSize: "15px",
      padding: "10px 20px",
      margin: "5px",
      color: "black",
    };
    const offline = {
      backgroundColor: "#91a0a9",
      fontSize: "15px",
      padding: "10px 20px",
      margin: "5px",
      color: "black",
    };
    const bug = {
      backgroundColor: "yellow",
      fontSize: "15px",
      padding: "10px 20px",
      margin: "5px",
      color: "black",
    };
    if (statusCoreFunc[coreFunc] === "Online") {
      return online;
    } else if (statusCoreFunc[coreFunc] === "Offline") {
      return offline;
    } else {
      return bug;
    }
  }
  return (
    <Box sx={bodyStyle}>
      <div style={wrapBox}>
        <BoxCore5g
          componentsBox={componentsBox}
          boxInside={boxInside}
          titleBodyDivider={titleBodyDivider}
          isFunctionOnline={isFunctionOnline}
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
          isFunctionOnline={isFunctionOnline}
        />

        <BoxApps
          componentsBox={componentsBox}
          titleBodyDivider={titleBodyDivider}
        />
      </div>
    </Box>
  );
}
