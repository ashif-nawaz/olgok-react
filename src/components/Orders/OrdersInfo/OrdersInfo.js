import React from "react";
import Styles from "./OrdersInfo.module.css";

const OrdersInfo = (props) => {
  return (
    <div className={Styles.OrdersInfo}>
      <p>
        <span>ORDERID : </span>
        <span>{props.orderId}</span>
      </p>
      <p>
        <span>TOTALAMOUNT : </span>
        <span>{props.totalAmount}</span>
      </p>
    </div>
  );
};

export default OrdersInfo;
