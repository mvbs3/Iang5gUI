import React, { useState } from "react";
import "./ToggleSelector.css";

export function ToggleSelector(props) {
  const options = ["MEC", "Remote Server"];
  const [toggleValue, setToggleValue] = useState(options[0]);

  const toggleOption = () => {
    const currentIndex = options.indexOf(toggleValue);
    const nextIndex = (currentIndex + 1) % options.length;
    setToggleValue(options[nextIndex]);
  };

  return (
    <div className="toggle-container" onClick={toggleOption}>
      <div className={`slider ${toggleValue}`}>
        <span className={`slider-text ${toggleValue}`}>{toggleValue}</span>
      </div>
      <div className="title MEC">MEC</div>
      <div className="title Server">Remote Server</div>
    </div>
  );
}
