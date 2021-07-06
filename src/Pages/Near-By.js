import React, {useEffect} from "react";
import AllRooms from "../components/Rooms/Rooms";

const NearBy = (props) => {
  useEffect(() => {
    document.title = 'Near by | Olgok Guest House'
  })
  return (
    <>
      <AllRooms />
    </>
  );
};

export default NearBy;
