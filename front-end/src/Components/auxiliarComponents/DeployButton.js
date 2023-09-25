import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

export default function DeployButton() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        Deploys
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            navigate("Deploy5gSaOai");
          }}
        >
          Oai 5g SA
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            navigate("Deploy5gSaOpen5g");
          }}
        >
          Open5gs SA
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            navigate("Deploy4g");
          }}
        >
          Open5gs 4g/5gNSA
        </MenuItem>
      </Menu>
    </div>
  );
}
