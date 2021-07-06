import React from 'react';
import Styles from './CartSummary.module.css';
import CartTotal from '../../CartTotal/CartTotal';
import CartActions from '../../CartActions/CartActions';


const CartSummary = (props) => {
  

   return (
       <div className={Styles.CartSummary}>
          <CartTotal totalAmount={props.totalAmount} />
          <CartActions />
       </div>
   )
}

export default CartSummary;