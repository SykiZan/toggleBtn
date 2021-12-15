import React, { useState } from "react";
import classes from "./WeirdButton.module.scss";
import Cross from "../svg/Vector.svg";

const WeirdButton = () => {
  const [btnState, setBtnState] = useState(false);
  const handleClick = () => {
    setBtnState((prev) => !prev);
  };
  return (
    <div className={classes.wrapper}>
      <label htmlFor="btn" className={classes.label}>
        {btnState && <span>Active</span>}
        {!btnState && <span>Disabled</span>}
      </label>
      <button
        className={`${classes.button} ${btnState ? classes.active : ""}`}
        onClick={handleClick}
      >
        Blue
        <img src={Cross} alt="close" />
      </button>
    </div>
  );
};

export default WeirdButton;
