import React, { useContext } from "react";
import useHTTP from "../../../../hooks/use-http";
import CartContext from "../../../../store/cart-context";
import Button from "../../../UI/Button/Button";
import ButtonSpinner from "../../../UI/ButtonSpinner/ButtonSpinner";
import Styles from "./AddressItem.module.css";


const AddressItem = ({ address }) => {
  const cartCtx = useContext(CartContext);
  const {isLoading, sendRequest} = useHTTP();

  const selectAddressHandler = (addressId) => {
    sendRequest("/api/v1/user/select-address", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        addressId: addressId,
      }),
    })
      .then((response) => {
        cartCtx.addSelectedAddress(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <li className={Styles.AddressItem}>
      <div>
        <p>{address.name}</p>
        <p>{address.phone}</p>
        <p>{address.house_No}</p>
        <p>
          Near {address.landmark}, {address.street}, {address.locality},{" "}
          {address.city}
        </p>
        <p>{address.pincode}</p>
      </div>
      <div className={Styles.AddressActions}>
        <div>
          <Button>Edit</Button>
          <Button onClick={selectAddressHandler.bind(null, address.id)}>
            {isLoading && <ButtonSpinner />}
            {!isLoading && address.selected && "Selected"}
            {!isLoading && !address.selected && "Select"}
          </Button>
        </div>
      </div>
    </li>
  );
};

export default AddressItem;
