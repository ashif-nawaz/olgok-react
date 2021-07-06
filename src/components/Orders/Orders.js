import React, { useEffect, useState } from "react";
import useHTTP from "../../hooks/use-http";
import Card from "../UI/Card/Card";
import FallBack from "../UI/FallBack/FallBack";
import Spinner from "../UI/Spinner/Spinner";
import Styles from "./Orders.module.css";
import OrdersList from "./OrdersList/OrdersList";

const Orders = (props) => {
  const [orders, setOrders] = useState();
  const { error, sendRequest } = useHTTP();

  useEffect(() => {
    console.log("Orders effect");
    sendRequest("/api/v1/user/orders")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sendRequest]);

  let ordersContent = <Spinner />;

  if (error) {
    ordersContent = (
      <FallBack className="No-bc">
        {error.erroInfo || error.message || "Something went wrong"}
      </FallBack>
    );
  }

  if (orders && orders.length === 0) {
    ordersContent = (
      <FallBack className="No-bc">You haven't ordered anything yet</FallBack>
    );
  }

  if (orders && orders.length > 0) {
    ordersContent = <OrdersList orders={orders} />;
  }

  return (
    <section className={Styles.Orders}>
      <Card CardType="TransCard">{ordersContent}</Card>
    </section>
  );
};

export default Orders;
