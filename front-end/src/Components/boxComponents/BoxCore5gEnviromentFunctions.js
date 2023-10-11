import React, { useEffect, useState } from "react";
import DialogButton from "../auxiliarComponents/DialogButton";
import { requestStatus } from "../VarFile";

export default function BoxCore5gEnviromentFunctions(props) {
  
  const [actualCoreStatus, setActualCoreStatus] = React.useState({teste:"teste"});
  const coreType = {
    minimalist: {
      "Control Net. Func.": ["AMF", "SMF"],
      "signaling": ["NRF"],
      "Data Base": ["MYSQL"],
      "Data Netwok Functions": ["UPF"],
    },
    basic: {
      "Control Net. Func.": ["AMF", "SMF"],
      "signaling": ["NRF", "AUSF"],
      "Data Base": ["UDM", "UDR", "MYSQL"],
      "Data Netwok Functions": ["UPF"],
    },
    slice: {
      "Control Net. Func.": ["AMF", "SMF", "NSSF"],
      "signaling": ["NRF", "AUSF"],
      "Data Base": ["UDM", "UDR", "MYSQL"],
      "Data Netwok Functions": ["UPF", "UPF-VPP"],
    },
  };
  const [statusCore5g, setStatusCore5g] = useState({
    AMF: "Offline",
    SMF: "Offline",
    UPF: "Offline",
    NRF: "Offline",
    UDM: "Offline",
    UDR: "Offline",
    AUSF: "Offline",
    MYSQL: "Offline",
  });
function coreOnlinebyType(setStatusActual, coreType, actualStatus){
  let temp ={}
  const typeMap = {
    "basic" :[
      "oai-amf",
      "oai-smf",
      "oai-spgwu",
      "oai-nrf",
      "oai-udm",
      "oai-udr",
      "oai-ausf",
      "mysql",
  ], 
    "minimalist" : [
      "oai-amf",
      "oai-smf", 
      "oai-nrf",
      "mysql",
      "oai-spgwu"
  ], "slice":
["oai-amf",
"oai-smf",
"oai-spgwu",
"oai-nrf",
"oai-udm",
"oai-udr",
"oai-ausf",
"oai-nssf",
"mysql","oai-upf-vpp"]}
  const mapCore = {"oai-amf": "AMF", "oai-smf": "SMF",
  "oai-spgwu":"UPF",
  "oai-nrf" :"NRF",
  "oai-udm" :"UDM",
  "oai-udr":"UDR",
  "oai-ausf" :"AUSF",
  "mysql":"MYSQL",
  "oai-upf-vpp":"UPF-VPP",
  "oai-nssf":"NSSF" }
  console.log("actual Status")
  console.log(actualStatus)
  typeMap["slice"].map((netFunc)=>{temp[mapCore[netFunc]]="Offline"})
  typeMap[coreType].map((netFunc)=>{
    if (actualStatus[netFunc] === undefined) {
      // A variável é undefined
      temp[mapCore[netFunc]]="Offline"
    } else {
      // A variável tem um valor definido
      temp[mapCore[netFunc]]=actualStatus[netFunc]
    }})

  setStatusActual(temp)
}
//{coreOnlinebyType(setStatusCore5g,props.deploy, {"oai-amf":"Online","oai-smf":"Online","oai-nrf":"Online","mysql":"Online","oai-spgwu":"Online"})}
     
  const dottedLine = {
    maxWidth: "100%",
    height: "90%",
    /*background-color: #242729;*/

    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    margin: "10px",

    border: "3px dotted #264A61",
  };
  const netFunctionStyle = {
    height: "100%",
    display: "flex",
    flexDirection: "row",
  };


  useEffect(() => {
    var interval = setInterval(() => {
      requestStatus("core","oai", props.deploy,actualCoreStatus, setActualCoreStatus)
      coreOnlinebyType(setStatusCore5g,props.deploy, actualCoreStatus)
      console.log("status atual")
      console.log(actualCoreStatus)
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        padding: 1,
        height: "100%",
        width: "100%",
      }}
    >
      
       <div
        style={{
          display: "flex",
          height: "100%",
        }}
      >
        <div style={{ height: "100%" }}>
          <h3> Control Plane: </h3>
        </div>
        <div
          style={{
            width: "100%",

            display: "flex",
            justifyContent: "center ",
          }}
        >
          {Object.keys(coreType[props.deploy]).map((obj) => {
            if (obj != "Data Netwok Functions") {
              return (
                <div style={dottedLine}>
                  <h3>{obj}</h3>
                  <div style={netFunctionStyle}>
                    {coreType[props.deploy][obj].map((component) => {
                      return (
                        <DialogButton
                          CoreComponnents={component}
                          StyleButton={props.isFunctionOnline(
                            component,
                            statusCore5g
                          )}
                        ></DialogButton>
                      );
                    })}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          height: "100%",
        }}
      >
        <div style={{ height: "100%" }}>
          <h3> Data Plane: </h3>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center ",
          }}
        >
          <div style={{}}>
            <div style={dottedLine}>
              <h3>Data Netwok Functions</h3>

              <div style={netFunctionStyle}>
                {coreType[props.deploy]["Data Netwok Functions"].map(
                  (component) => {
                    return (
                      <DialogButton
                        CoreComponnents={component}
                        StyleButton={props.isFunctionOnline(
                          component,
                          statusCore5g
                        )}
                      ></DialogButton>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
