import React, { useState } from "react";
import classes from "./Tabs.module.scss";
const Tabs = () => {
  const [tabState, setTabState] = useState(1);

  const handleTab = (i) => {
    setTabState(i);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.buttons}>
        <button
          className={`${classes.button} ${
            tabState === 1 ? classes.active : ""
          }`}
          onClick={() => {
            handleTab(1);
          }}
        >
          All
        </button>
        <button
          className={`${classes.button} ${
            tabState === 2 ? classes.active : ""
          }`}
          onClick={() => {
            handleTab(2);
          }}
        >
          Products
        </button>
        <button
          className={`${classes.button} ${
            tabState === 3 ? classes.active : ""
          }`}
          onClick={() => {
            handleTab(3);
          }}
        >
          Video
        </button>
      </div>
      <div className={classes.text}>
        <span className={classes["info-header"]}>Text {tabState}</span>
        {tabState === 1 && (
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
            accusantium quaerat nihil ipsa animi nostrum nobis dicta !
          </div>
        )}
        {tabState === 2 && (
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            similique fuga in illo aut asperiores officiis ad et provident quis?
          </div>
        )}
        {tabState === 3 && (
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            tenetur eveniet molestiae ipsam architecto corrupti! accusantium
            quaerat
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
