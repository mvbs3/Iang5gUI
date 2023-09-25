const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //res.send("teste");
  //res.download("server.js")
  //res.render
  res.status(200).json({ message: "testandoo rota aaa" });
});
router.get("/teste", (req, res) => {
  //res.send("teste");
  //res.download("server.js")
  //res.render
  res.status(200).json({ message: "testandoo rota aaaa" });
});

router.get("/:core/:deploy/:band/:turnButton", (req, res) => {
  console.log(
    `${req.params.core} ${req.params.deploy} ${req.params.band} ${req.params.turnButton}`
  );
  //res.send("teste");
  //res.download("server.js")
  //res.render`
  res.status(200).json({ message: "testandoo rota user/teste  " });
});
//coreDeployName, core, deploy, band
//http://192.168.27.242:5000/oai/5g/basic/78/off
module.exports = router;
