const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //res.send("teste");
  //res.download("server.js")
  //res.render
  res.status(200).json({ message: "testandoo rota user" });
});
router.get("/teste", (req, res) => {
  //res.send("teste");
  //res.download("server.js")
  //res.render
  res.status(200).json({ message: "testandoo rota user/teste  " });
});
//192.168.27.242:5000/oai/5g/basic/78/off
http: module.exports = router;
