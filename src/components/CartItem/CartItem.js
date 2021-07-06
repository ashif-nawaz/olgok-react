import React, {useContext, useState} from 'react';
import roomImage from "../../assets/Nubra.jpeg";
import useHTTP from '../../hooks/use-http';
import CartContext from '../../store/cart-context';
import RoomTitle from "../RoomTitle/RoomTitle";
import Button from "../UI/Button/Button";
import ButtonSpinner from '../UI/ButtonSpinner/ButtonSpinner';
import Styles from './CartItem.module.css';



const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const { isLoading, sendRequest } = useHTTP();
  const [addReq, setAddReq] = useState();

  const bookRoomHandler = (roomId) => {
    setAddReq(true)
    sendRequest(`/api/v1/user/add-to-cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        roomId: roomId,
      }),
    })
      .then((response) => {
        setAddReq(false)
        cartCtx.addRoom(response);
      })
      .catch((error) => {
        setAddReq(false);
        console.log(error);
      });
  };


  const removeRoomHandler = (roomId) => {
    sendRequest(`/api/v1/user/remove-from-cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        roomId: roomId,
      }),
    })
      .then((response) => {
        cartCtx.removeRoom(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }



   return (
    <li className={Styles.CartItem}>
    <div className={Styles.Image}>
      <img src={roomImage} alt="Room" />
    </div>
    <div className={Styles.ItemDesc}>
      <div>
        <RoomTitle title={props.item.title} textAlign="left" />
        <p className={Styles.Description}>{props.item.description}</p>
      </div>
      <div>
        <p className={Styles.QuantityTag}>
          Quantity <span className={Styles.Quantity}>x {props.item.quantity}</span>
        </p>
      </div>
    </div>
    <div className={Styles.CartItemActions}>
      <Button onClick={removeRoomHandler.bind(null, props.item._id.toString())}>
        {!addReq && isLoading ? <ButtonSpinner /> : "-"}
        </Button>
      <Button onClick={bookRoomHandler.bind(null, props.item._id.toString())}>
        {addReq && isLoading ? <ButtonSpinner /> : "+"}</Button>
    </div>
  </li>
   )
}

export default CartItem;
