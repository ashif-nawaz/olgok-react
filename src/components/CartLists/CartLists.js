import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from "../CartItem/CartItem";
import Styles from './CartLists.module.css';


const CartLists = () => {
    const cartCtx = useContext(CartContext);
    const cartItems = cartCtx.rooms.map((item) => {
        return (
          <CartItem
            key={item._id.toString()}
            item={item}
          />
        );
      });
   return (
    <ul className={Styles.CartLists}>{cartItems}</ul>
   )
}

export default CartLists;
