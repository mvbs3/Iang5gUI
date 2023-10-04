module.exports = {
   
  resultTerminal : function resultTerminal(err, output) {
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
  };
  
  export const { exec } = require("node:child_process");
  