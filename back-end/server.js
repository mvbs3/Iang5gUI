const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const port = 5000;
app.get("/", (req, res) => {
  console.log("teste");
  //res.send("teste");
  //res.download("server.js")
  //res.render
  res.status(200).json({ message: "Error" });
});
const userRouter = require("./routes/users");
const coreRouter = require("./routes/core");
const gnbRouter = require("./routes/gnb");
const ueRouter = require("./routes/ue");
app.use("/users", userRouter);
app.use("/core", coreRouter);
app.use("/gnb", gnbRouter);
app.use("/ue", ueRouter);
app.listen(port);
