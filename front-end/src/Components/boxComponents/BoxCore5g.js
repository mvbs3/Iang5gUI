import * as React from "react";
import Box from "@mui/material/Box";
import BoxCore5gDeployType from "./BoxCore5gDeployType";
import BoxCore5gEnviromentFunctions from "./BoxCore5gEnviromentFunctions";

export default function BoxCore5g(props) {
  const [deploy, setDeploy] = React.useState("basic");


  const buttonCoreStyle = {
    //color: "#54849C",
    margin: 5,
    color: "black",
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    borderColor: "#0063cc",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  };

  return (
    <Box sx={props.componentsBox}>
    
      <div style={props.titleBodyDivider}>
        <div style={props.boxInside}>
          <BoxCore5gDeployType
            deploy={deploy}
            setDeploy={setDeploy}
            buttonCoreStyle={buttonCoreStyle}
          />
          <BoxCore5gEnviromentFunctions
            isFunctionOnline={props.isFunctionOnline}
            deploy={deploy}
          />
        </div>
      </div>
    </Box>
  );
}
