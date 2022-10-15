import React from "react";
import classes from "./loadbutton.module.css";

const LoadButton = ({ clickHandler }) => {
  return (
    <button className={classes.loadButton} onClick={clickHandler}>
      Load more stories
    </button>
  );
};

export default LoadButton;
