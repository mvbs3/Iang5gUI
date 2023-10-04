const express = require("express");
const router = express.Router();

const { exec } = require("node:child_process");
const execSync = require("child_process").execSync;

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
  res.status(200).json({ message: "testandoo rota gnb" });
});
router.get("/teste", (req, res) => {
  res.status(200).json({ message: "testandoo rota aaaa" });
});

router.get("/:deploy/:type/:turnButton", (req, res) => {
  console.log(
    `${req.params.deploy} ${req.params.type} ${req.params.turnButton}  `
  );
  if(req.params.turnButton === "on"){
    exec(
      "python3 ../../5GPriviteNetworkSim/chooseConfig.py gnb",
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
