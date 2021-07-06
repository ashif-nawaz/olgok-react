import React, { useCallback, useContext, useEffect, useState } from "react";
import useHTTP from "../hooks/use-http";
import AuthContext from "./auth-context";
import CartContext from "./cart-context";

const DEFAULT_CART = {
  rooms: [],
  totalAmount: 0,
  addresses: [],
};

const CartProvider = (props) => {
  const [cartState, setCartState] = useState(DEFAULT_CART);
  const { sendRequest } = useHTTP();
  const { isLoggedIn } = useContext(AuthContext);

  const cartRoomsHandler = useCallback((response) => {
    setCartState((prevState) => {
      return {
        ...prevState,
        rooms: response.data.items,
        totalAmount: response.data.totalAmount,
      };
    });
  }, []);

  const addressesHandler = useCallback((response) => {
    setCartState((prevState) => {
      return {
        ...prevState,
        addresses: response.data,
      };
    });
  }, []);


  const eraseCartHandler = useCallback(() => {
    return setCartState(DEFAULT_CART);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      sendRequest("/api/v1/user/cart")
        .then((response) => {
          cartRoomsHandler(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setCartState(DEFAULT_CART);
    }
  }, [sendRequest, isLoggedIn, cartRoomsHandler]);

  return (
    <CartContext.Provider
      value={{
        rooms: cartState.rooms,
        totalAmount: cartState.totalAmount,
        addresses: cartState.addresses,
        addRoom: cartRoomsHandler,
        removeRoom: cartRoomsHandler,
        addAddresses: addressesHandler,
        addSelectedAddress: addressesHandler,
        eraseCart: eraseCartHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default React.memo(CartProvider);
