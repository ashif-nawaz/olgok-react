import React from "react";
import Styles from "./Button.module.css";

const Button = (props) => {
    const btnConfig = {...props, className : `${Styles.Button} ${Styles[props.className]}`}
  return (
    <button
      {...btnConfig}
    >
      {props.children}
    </button>
  );
};

export default Button;
