import React, { useEffect } from "react";
import AllRooms from "../components/Rooms/Rooms";

const Rooms = (props) => {
  useEffect(() => {
    document.title = 'Rooms | Olgok Guest House'
  })
  return (
    <>
      <AllRooms />
    </>
  );
};

export default Rooms;
