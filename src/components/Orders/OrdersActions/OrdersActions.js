import React from "react";
import Button from "../../UI/Button/Button";
import Styles from "./OrdersActions.module.css";

const OrdersActions = (props) => {
  return (
    <div className={Styles.OrdersActions}>
      <div className={Styles.ActionLeft}>
        <Button>Cancel</Button>
        <Button>Return</Button>
      </div>
      <div className={Styles.ActionRight}>
        <Button>Track</Button>
      </div>
    </div>
  );
};

export default OrdersActions;
