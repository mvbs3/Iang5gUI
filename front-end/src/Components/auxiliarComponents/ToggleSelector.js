import React, { useState } from "react";
import "./ToggleSelector.css";

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

export function ToggleSelector(props) {
  const options = ["select1", "select2"];

  const toggleOption = () => {
    console.log(getKeyByValue(props.options, props.toggleValue));
    const currentIndex = options.indexOf(props.toggleValue);
    const nextIndex = (currentIndex + 1) % options.length;
    props.setToggleValue(options[nextIndex]);
  };

  return (
    <div className="toggle-container" onClick={toggleOption}>
      <div className={`slider ${props.toggleValue}`}>
        <span className={`slider-text ${props.toggleValue}`}>
          {props.options[props.toggleValue]}
        </span>
      </div>
      {options.map((elem) => {
        return <div className={`title ${elem}`}>{props.options[elem]}</div>;
      })}
    </div>
  );
}
