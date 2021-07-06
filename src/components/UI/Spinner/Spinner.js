import React from "react";
import Centered from "../Centered/Centered";
import Styles from "./Spinner.module.css";

const Spinner = (props) => {
  return (
    <Centered WidthClass={props.WidthClass}>
      <div className={Styles.Outer} {...props}></div>
    </Centered>
  );
};

export default Spinner;
