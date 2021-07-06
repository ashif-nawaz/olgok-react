import React, { useContext } from "react";
import Button from "../UI/Button/Button";
import Styles from "./Room.module.css";
import roomImage from "../../assets/Nubra.jpeg";
import RoomTitle from "../RoomTitle/RoomTitle";
import { Link } from "react-router-dom";
import useHTTP from "../../hooks/use-http";
import CartContext from "../../store/cart-context";
import ButtonSpinner from "../UI/ButtonSpinner/ButtonSpinner";


const Room = (props) => {
  const cartCtx = useContext(CartContext);
  const { isLoading, sendRequest } = useHTTP();

  const bookRoomHandler = (roomId) => {
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
        cartCtx.addRoom(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={Styles.Room}>
      <Link className={Styles.Link} to={`/rooms/${props.id}`}>
        <RoomTitle title={props.title} textAlign="center" />
        <div className={Styles.Image}>
          <img src={roomImage} alt="Room" loading="lazy" />
        </div>
      </Link>
      <div className={Styles.RoomAction}>
        <span className={Styles.Price}>Rs. {props.price.toFixed(2)}</span>
        <Button type="button" onClick={bookRoomHandler.bind(null, props.id)}>
          {isLoading ? (
            <ButtonSpinner />
          ) : (
            "+Book"
          )}
        </Button>
      </div>
    </div>
  );
};

export default Room;
