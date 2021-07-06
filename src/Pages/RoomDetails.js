import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/UI/Spinner/Spinner';
import useHTTP from '../hooks/use-http';

const RoomDetails = (props) => {
   const { roomId } = useParams();
   const [room, setRoom] = useState(null);
   const {isLoading, error, sendRequest } = useHTTP();
   
  

   useEffect(() => {
       sendRequest(`/api/v1/olgok/rooms/${roomId}`)
       .then((response) => {
           console.log(response);
           setRoom(response.data);
           document.title = response.data.title;
       })
       .catch((error) => {
          console.log(error);
       })
     
   }, [roomId, sendRequest]);


   let roomDetails = <Spinner />
   if(!isLoading && room && !error) {
      roomDetails = <div>
            <p>{room.title}</p>
            <p>{room.category}</p>
            <p>{room.description}</p>
            <p>{room.price}</p>
      </div>
   }

   if(error) {
      roomDetails = <h1>{error.message}</h1>
   }

   return roomDetails;
}

export default RoomDetails;
