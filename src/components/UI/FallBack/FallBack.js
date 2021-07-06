import React from "react";
import Styles from "./FallBack.module.css";

const FallBack = (props) => {
  return (
    <div className={`${Styles.FallBack} ${Styles[props.className]}`}>
       {props.children}
    </div>
  );
};

export default FallBack;
