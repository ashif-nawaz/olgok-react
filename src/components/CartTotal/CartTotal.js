import React from "react";
import Styles from "./CartTotal.module.css";

const CartTotal = (props) => {
  return (
    <div className={Styles.CartTotal}>
      <p>Total</p>
      <p>Rs. {props.totalAmount.toFixed(2)}</p>
    </div>
  );
};

export default CartTotal;
