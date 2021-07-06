import React, { useEffect } from "react";
import AllRooms from "../components/Rooms/Rooms";

const Gallery = (props) => {
  useEffect(() => {
    document.title = 'Gallery | Olgok Guest House'
  })
  return (
    <>
      <AllRooms />
    </>
  );
};

export default Gallery;
