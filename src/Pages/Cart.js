import React, {useEffect} from 'react';
import Cart from '../components/Cart/Cart';

const CartPage = (props) => {
   useEffect(() => {
      document.title = 'Cart | Olgok Guest House'
    })
   return (
      <Cart />
   )
}

export default CartPage;
