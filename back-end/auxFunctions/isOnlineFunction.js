module.exports = {
    check : function checkStatus(output, subtitle, type) {
        actualStatus = {}
        
        subtitle[type].map((component) => {
            actualStatus[component] = "Offline"
          output.map((outputLine) => {
            if (
              outputLine.indexOf(component) != -1 &&
              outputLine.includes("healthy") == true
            ) {
              actualStatus[component] = "Online";
              }
          });
        });
        //console.log(actualStatus)
         return actualStatus;
      }
      
   
}