import React from "react";
import classes from "./arrowbutton.module.css";

const ArrowButton = ({ scrollToTop }) => {
  return (
    <button onClick={scrollToTop} className={classes.arrowUp}>
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};

export default ArrowButton;
