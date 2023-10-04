const express = require("express");
const router = express.Router();

const { exec } = require("node:child_process");
const execSync = require("child_process").execSync;
var tools = require("../auxFunctions/isOnlineFunction")
const core = {"basic" :[
  "oai-amf",
  "oai-smf",
  "oai-spgwu",
  "oai-nrf",
  "oai-udm",
  "oai-udr",
  "oai-ausf",
  "mysql",
] };

function resultTerminal(err, output) {
  // once the command has completed, the callback function is called
  if (err) {
    // log and return if we encounter an error
    console.error("could not execute command: ", err);
    return;
  }
  // log the output received from the command
  console.log("Output:,\n", output.split("\n"));
  output = output.split("\n");
}

router.get("/", (req, res) => {
  res.status(200).json({ message: "testandoo rota aaa" });
});
router.get("/teste", (req, res) => {
  res.status(200).json({ message: "testandoo rota aaaa" });
});
router.get("/:deploy/:type/status", (req, res) => {
  console.log(
    `${req.params.deploy} ${req.params.type}`
  );
  const output = execSync("docker ps", { encoding: "utf-8" });
  //console.log(output)
  generalOutput = tools.check(output.split("\n"), core,req.params.type);
  console.log(generalOutput)
  res.json(generalOutput)
});


router.get("/:deploy/:type/:turnButton", (req, res) => {
  console.log(
    `${req.params.deploy} ${req.params.type} ${req.params.turnButton}`
  );
  if(req.params.turnButton === "on"){
    exec(
      "python3 ../../5GPriviteNetworkSim/chooseConfig.py core",
      resultTerminal
    );
    
    res.status(200).json({ message: "ok" });
  }else if(req.params.turnButton === "off"){
    exec(
      "python3 ../../5GPriviteNetworkSim/chooseConfig.py stop",
      resultTerminal
    );
    
    res.status(200).json({ message: "ok" });
  }
 
});
module.exports = router;
