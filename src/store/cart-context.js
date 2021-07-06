import React from 'react';

const CartContext = React.createContext({
    rooms : [],
    totalAmount : 0,
    addresses : [],
    selectedAddress : null,
    addRoom : (addRoomResponse) => {},
    removeRoom : (id) => {},
    addAddresses : (addresses = []) => {},
    addSelectedAddress : (address) => {},
    eraseCart : () => {}
})

export default CartContext;