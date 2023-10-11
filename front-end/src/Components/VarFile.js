import axios from "axios";
export let hostIp = "150.161.121.252"; //Ip do seu servidor caso va rodar back e front no mesmo pc, poe localhost
export let port = ":5000";
export const baseUrl = `http://${hostIp}${port}`;
export function requestOnOff(component, deploy, type, Status, setStatus) {
    setStatus(!Status);
    console.log(
      baseUrl +
        "/" +
        component +
        "/" +
        deploy +
        "/" +
        type +
        "/" +
        (Status ? "on" : "off")
    );
    axios
      .get(
        baseUrl +
          "/" +
          component +
          "/" +
          deploy +
          "/" +
          type +
          "/" +
          (Status ? "on" : "off")
      )
      .then((res) => {
        const dados = res.data;
        console.log(dados);

      });
  }

  export function requestStatus(component, deploy, type, status, setStatus) {
    
    console.log(
      baseUrl +
        "/" +
        component +
        "/" +
        deploy +
        "/" +
        type +
        "/" +
        "status"
    );
    axios
      .get(
        baseUrl +
          "/" +
          component +
          "/" +
          deploy +
          "/" +
          type +
          "/" +
          "status"
      )
      .then((res) => {
        const dados = res.data;
        console.log("dados");
        console.log(dados);
        setStatus(dados)
        
      });
      
  }