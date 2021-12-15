import React, { useState } from "react";
import classes from "./Slider1.module.scss";
import InventoryActive from "../svg/inventory-active.svg";
import Inventory from "../svg/inventory.svg";
import Group from "../svg/Group-active.svg";
import GroupActive from "../svg/Group.svg";

const Slider1 = ({ slider }) => {
  const [tabState, setTabState] = useState(1);

  const handleTab = (i) => {
    if (i !== tabState) setTabState(i);
  };

  return (
    <div className={classes.slider1}>
      <div className={classes["options-wrapper"]}>
        <div className={classes.options}>
          <div
            className={`${classes["option-wrapper"]} ${
              slider === 2 ? classes["option-wrapper__2"] : ""
            }`}
            onClick={() => {
              handleTab(1);
            }}
          >
            {slider === 1 && (
              <div className={classes.option}>
                <div className={classes["icon-wrapper"]}>
                  <img
                    src={tabState === 1 ? InventoryActive : Inventory}
                    alt="img"
                    className={classes.icon1}
                  />
                </div>
                <span
                  className={`${classes["option-description"]} ${
                    tabState === 1 ? classes["description-active"] : ""
                  }`}
                >
                  All Products
                </span>
                <div
                  className={`${classes.indicator} ${
                    tabState === 1 ? classes.thick : ""
                  }`}
                ></div>
              </div>
            )}
            {slider === 2 && (
              <span
                className={`${classes["slider-option"]} ${
                  tabState === 1 ? classes["slider-option__active"] : ""
                }`}
              >
                Products
              </span>
            )}
          </div>
          <div
            className={`${classes["option-wrapper"]} ${
              slider === 2 ? classes["option-wrapper__2"] : ""
            }`}
            onClick={() => {
              handleTab(2);
            }}
          >
            {slider === 1 && (
              <div className={classes.option}>
                <div className={classes["icon-wrapper"]}>
                  <img
                    src={tabState === 2 ? GroupActive : Group}
                    alt="img"
                    className={classes.icon2}
                  />
                </div>
                <span
                  className={`${classes["option-description"]} ${
                    tabState === 2 ? classes["description-active"] : ""
                  }`}
                >
                  Orders
                </span>
                <div
                  className={`${classes.indicator} ${
                    tabState === 2 ? classes.thick : ""
                  }`}
                ></div>
              </div>
            )}

            {slider === 2 && (
              <span
                className={`${classes["slider-option"]} ${
                  tabState === 2 ? classes["slider-option__active"] : ""
                }`}
              >
                Models
              </span>
            )}
          </div>
        </div>
      </div>

      {slider === 2 && (
        <div className={classes.indicators}>
          <div
            className={`${classes["indicator-colorful"]} ${
              tabState === 1 ? classes["thick-colorful"] : ""
            }`}
          ></div>
          <div
            className={`${classes["indicator-colorful"]} ${
              tabState === 2 ? classes["thick-colorful"] : ""
            }`}
          ></div>
        </div>
      )}
      {tabState === 1 && (
        <div className={classes["slider1-text"]}>
          <span className={classes["text-header"]}> Text 1</span>
          Lorem ipsum necessitatibus, adipisci fuga molestiae, unde fugiat eum
          dolor sit amet consectetur adipisicing elit.
        </div>
      )}
      {tabState === 2 && (
        <div className={classes["slider1-text"]}>
          <span className={classes["text-header"]}>Text 2</span>
          Ipsum lorem dolor sit amet consectetur adipisicing elit. Veritatis sed
          mollitia saepe, ipsum aut exercitationem
        </div>
      )}
    </div>
  );
};

export default Slider1;
