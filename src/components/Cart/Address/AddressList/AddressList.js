import React, { useContext } from "react";
import AddressItem from "../AddressItem/AddressItem";
import Styles from "./AddressList.module.css";
import CartContext from "../../../../store/cart-context";

const AddressList = (props) => {
  const { addresses } = useContext(CartContext);
  return (
    <ul className={Styles.AddressList}>
      {addresses.map((address) => {
        return (
          <AddressItem
            key={address.id}
            address={address}
          />
        );
      })}
    </ul>
  );
};

export default AddressList;
