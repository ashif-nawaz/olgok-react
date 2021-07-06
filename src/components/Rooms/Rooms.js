import React, { useContext, useEffect, useState } from "react";
import Styles from "./Rooms.module.css";
import Card from "../UI/Card/Card";
import Room from "../Room/Room";
import CartContext from "../../store/cart-context";
import Spinner from "../UI/Spinner/Spinner";
import useHTTP from "../../hooks/use-http";
import FallBack from "../UI/FallBack/FallBack";
import Centered from "../UI/Centered/Centered";
import Button from "../UI/Button/Button";


const Rooms = (props) => {
  const [AVAILABLE_ROOMS, setAvailableRooms] = useState();
  const [page, setPage] = useState(0);
  const cartCtx = useContext(CartContext);
  const { isLoading, error, sendRequest } = useHTTP();


  const pageIncHandler = (e) => {
     setPage((prevState) => prevState + 1);
  }

  useEffect(() => {
    sendRequest(`/api/v1/olgok/rooms?p=${page}`)
      .then((response) => {
        const rooms = response.data.map((room) => {
          return {
            ...room,
            id: room._id,
          };
        });
        setAvailableRooms(rooms);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sendRequest, page]);

  let roomList = <Spinner />;

  if (!isLoading && AVAILABLE_ROOMS && !error) {
    roomList = (
      <>
        <div className={Styles.Container}>
          {AVAILABLE_ROOMS.map((room) => {
            return (
              <Room
                key={room.id}
                title={room.title}
                price={room.price}
                onBook={cartCtx.addRoom.bind(null, room.id)}
                id={room.id}
              />
            );
          })}
        </div>
        
        <Centered>
            <Button onClick={pageIncHandler}>More</Button>
        </Centered>
      </>
    );
  }

  if (error) {
    roomList = (
      <FallBack className="No-bc">
        {error.errorInfo || error.message || "Something went wrong,"}
      </FallBack>
    );
  }

  return (
    <section className={Styles.Rooms}>
      <Card CardType="TransCard">{roomList}</Card>
    </section>
  );
};

export default React.memo(Rooms);
