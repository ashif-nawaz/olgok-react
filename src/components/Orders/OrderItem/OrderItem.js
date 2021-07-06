import React from 'react';
import Styles from './OrderItem.module.css';

const OrderItem = (props) => {
   return (
       <li className={Styles.OrderItem}>
           <p>{props.item._id.toString()}</p>
           <p>{props.item.title}</p>
           <p>{props.item.price.toFixed(2)}</p>
           <p>{props.item.quantity}</p>
           <p>{props.item.description}</p>
       </li>
   )
}

export default OrderItem;