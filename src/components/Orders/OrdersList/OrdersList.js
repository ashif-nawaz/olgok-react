import React from "react";
import OrdersItem from "../OrdersItem/OrdersItem";
import Styles from "./OrdersList.module.css";


const OrdersList = (props) => {
  return (
    <ul className={Styles.OrdersList}>
      {props.orders.map((order) => {
        return <OrdersItem key={order._id.toString()} order={order} />
      })}
    </ul>
  );
};

export default OrdersList;
