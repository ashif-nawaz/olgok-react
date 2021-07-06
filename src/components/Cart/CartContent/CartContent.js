import React, { useContext } from "react";
import Styles from "./CartContent.module.css";
import CartLists from "../../CartLists/CartLists";
import CartSummary from "../CartSummary/CartSummary";
import CartContext from "../../../store/cart-context";
import Address from "../Address/Address";
import { Switch, Route } from "react-router-dom";

const CartContent = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <div className={Styles.CartContent}>
      <div className={Styles.CartRoutes}>
        <Switch>
          <Route path="/cart" exact>
            <CartLists />
          </Route>
          <Route path="/cart/address" exact>
            <Address />
          </Route>
        </Switch>
      </div>
      <CartSummary totalAmount={cartCtx.totalAmount} />
    </div>
  );
};

export default CartContent;
