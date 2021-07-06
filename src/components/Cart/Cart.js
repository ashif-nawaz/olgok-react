import React, { useContext } from "react";
import Styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import FallBack from "../UI/FallBack/FallBack";
import CartContent from "./CartContent/CartContent";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  let cartContent = (
    <FallBack className="No-bc">
      Your cart seem so light, Start adding rooms into your cart
    </FallBack>
  );

  if (cartCtx.rooms.length > 0) {
    cartContent = <CartContent />;
  }

  return (
    <section className={Styles.Cart}>
      <div className={Styles.CartInner}>{cartContent}</div>
    </section>
  );
};

export default Cart;
