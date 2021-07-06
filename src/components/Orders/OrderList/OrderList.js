import React from 'react';
import OrderItem from '../OrderItem/OrderItem';
import Styles from './OrderList.module.css';


const OrderList = (props) => {
   return (
       <ul className={Styles.OrderList}>
           {
               props.items.map((item) => {
                    return <OrderItem key={item._id.toString()} item={item} />
               })
           }
       </ul>
   )
}

export default OrderList;