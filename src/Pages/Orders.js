import React, {useEffect} from 'react';
import Orders from '../components/Orders/Orders';

const OrdersPage = (props) => {
   useEffect(() => {
      document.title = 'Orders | Olgok Guest House'
   })
   return (
      <Orders />
   )
}

export default OrdersPage;