import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Dropdown5gDeploys() {
  const [Deploy, setDeploy] = React.useState("");

  const deploy5g = ["Minimalist", "Basic", "Slice"];
  const handleChange = (event) => {
    setDeploy(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Deploy</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={Deploy}
        label="Deploy"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {deploy5g.map((elem) => {
          return <MenuItem value={elem}>{elem}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
}
