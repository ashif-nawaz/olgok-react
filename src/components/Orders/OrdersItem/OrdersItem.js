import React from "react";
import DeliveryInfo from "../DeliveryInfo/DeliveryInfo";
import OrderList from "../OrderList/OrderList";
import OrdersActions from "../OrdersActions/OrdersActions";
import OrdersInfo from "../OrdersInfo/OrdersInfo";
import Styles from "./OrdersItem.module.css";



const OrdersItem = (props) => {
  return (
    <li className={Styles.OrdersItem}>
      <div className={Styles.OrdersItemInner}>
        <OrdersInfo orderId={props.order._id.toString()} totalAmount={props.order.totalAmount.toFixed(2)} />
        <DeliveryInfo delAddress={props.order.delivery_address} />
        <OrderList items={props.order.items} />
        <OrdersActions order={props.order} />
      </div>
    </li>
  );
};

export default OrdersItem;
