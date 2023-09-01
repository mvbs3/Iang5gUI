import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import BodyHome from "./Components/bodyComponents/BodyHome";
import BodyDeploy5gSA from "./Components/bodyComponents/BodyDeploy5gSA";
import BodyDeploy4g from "./Components/bodyComponents/BodyDeploy4g";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />

      <Routes>
        <Route path="/" element={<BodyHome />}></Route>
        <Route path="/Deploy5gSa" element={<BodyDeploy5gSA />}></Route>
        <Route path="/Deploy4g" element={<BodyDeploy4g />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
