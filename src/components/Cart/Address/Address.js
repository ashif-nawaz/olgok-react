import React, { useContext, useEffect } from "react";
import AddressList from "./AddressList/AddressList";
import useHTTP from "../../../hooks/use-http";
import Spinner from "../../UI/Spinner/Spinner";
import FallBack from "../../UI/FallBack/FallBack";
import CartContext from "../../../store/cart-context";

const Address = (props) => {
  const {addresses, addAddresses} = useContext(CartContext);
  const { isLoading, sendRequest, error } = useHTTP();
  useEffect(() => {
    document.title = 'Address'
 })

  useEffect(() => {
    console.log("Address Effect");
    sendRequest("/api/v1/user/addresses", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        addAddresses(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sendRequest, addAddresses]);

  let addressContent = (
    <AddressList />
  );

  if( addresses.length === 0) {
    addressContent = (
      <FallBack className="No-bc">No address found</FallBack>
    );
  }

  if (isLoading) {
    addressContent = <Spinner/>;
  }

  if (error) {
    addressContent = (
      <FallBack className="No-bc">
        {error.errorInfo || error.message || "Something went wrong"}
      </FallBack>
    );
  }


  return addressContent;
};

export default Address;
