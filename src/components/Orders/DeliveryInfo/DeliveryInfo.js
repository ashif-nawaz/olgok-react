import React from 'react';
import Styles from './DeliveryInfo.module.css';

const DeliveryInfo = (props) => {
   return (
       <div className={Styles.DeliveryInfo}>
          <p>{props.delAddress.name}</p>
          <p>{props.delAddress.phone}</p>
          <p>{props.delAddress.house_no}</p>
          <p>{props.delAddress.street}</p>
          <p>{props.delAddress.landmark}</p>
          <p>{props.delAddress.locality}</p>
          <p>{props.delAddress.city}</p>
          <p>{props.delAddress.pincode}</p>
       </div>
   )
}

export default DeliveryInfo;