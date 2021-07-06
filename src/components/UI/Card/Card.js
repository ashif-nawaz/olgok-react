import React from 'react';
import Styles from './Card.module.css';

const Card = (props) => {
   return (
       <div className={`${Styles.Card} ${Styles[props.CardType]}`}>
           {props.children}
       </div>
   )
}

export default Card;
