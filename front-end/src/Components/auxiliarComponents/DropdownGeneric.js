import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DropdownGeneric(props) {
  const handleChange = (event) => {
    props.setSelect(event.target.value);
  };

  return (
    <FormControl
      sx={{ m: 1, height: "100%", minWidth: "30%", bgcolor: "white" }}
      size="small"
    >
      <InputLabel id="demo-select-small-label">Deploy</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={props.Select}
        label={props.Title}
        onChange={handleChange}
      >
        {props.Elements.map((elem) => {
          return <MenuItem value={elem}>{elem}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
}
