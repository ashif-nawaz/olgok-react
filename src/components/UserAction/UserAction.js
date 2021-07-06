import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "./CartIcon/CartIcon";
import Styles from "./UserAction.module.css";
import UserIcon from "./UserIcon/UserIcon";



const UserAction = (props) => {

  const [isBumped, setIsBumped] = useState(true);
  const cartCtx = useContext(CartContext);
  
  const totalCartQuantity = cartCtx.rooms.reduce((accu, room) => {
      return accu + room.quantity;
  }, 0);
  let userActionsClasses = `${Styles.UserActions} ${isBumped ? Styles.Bump : ''}`
  useEffect(() => {
    setIsBumped(true);
      const timer = setTimeout(() => {
          setIsBumped(false);
      }, 100);
      return () => {
         clearTimeout(timer);
      }
  }, [cartCtx.rooms])

  return (
    <div className={userActionsClasses} >
      <UserIcon />
      <CartIcon totalCartQuantity={totalCartQuantity} />
    </div>
  );
};

export default UserAction;
