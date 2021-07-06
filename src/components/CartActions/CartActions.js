import React, { useState, useContext } from "react";
import { Route, useHistory } from "react-router-dom";
import Button from "../UI/Button/Button";
import Styles from "./CartActions.module.css";
import Modal from "../UI/Modal/Modal";
import useHTTP from "../../hooks/use-http";
import FallBack from "../UI/FallBack/FallBack";
import CartContext from "../../store/cart-context";
import ButtonSpinner from "../UI/ButtonSpinner/ButtonSpinner";

const CartActions = (props) => {
  const [orderResp, setOrderResp] = useState();
  const { eraseCart } = useContext(CartContext);
  const { isLoading, error, sendRequest } = useHTTP();
  const history = useHistory();

  const continueHandler = (e) => {
    e.preventDefault();
    history.push("/cart/address");
  };



  const placeOrderHandler = (e) => {
    e.preventDefault();
    sendRequest("/api/v1/user/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setOrderResp(response.data);
        setTimeout(() => {
         eraseCart();
         history.push('/orders');
        }, 5000)
      })
      .catch((error) => {
        console.log(error);
      });
  };


  let modalContent = null;
  if (error) {
    <FallBack>
      {error.errorInfo || error.message || "Something went wrong"}
    </FallBack>;
  }

  if (orderResp) {
    modalContent = (
      <FallBack>{"Order Placed Successfully " + orderResp.orderId}</FallBack>
    );
  }

  return (
    <>
      {orderResp || error ? <Modal>{modalContent}</Modal> : null}
      <div className={Styles.CartActions}>
        <Route path="/cart" exact>
          <Button onClick={continueHandler}>Continue</Button>
        </Route>
        <Route path="/cart/address">
          <Button onClick={placeOrderHandler}>
            {isLoading ? <ButtonSpinner /> : "Place Order"}
          </Button>
        </Route>
      </div>
    </>
  );
};

export default CartActions;
