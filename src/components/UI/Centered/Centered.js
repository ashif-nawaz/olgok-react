import React from 'react';
import Styles from './Centered.module.css';

const Centered = (props) => {
   return (
       <div className={`${Styles.Centered} ${Styles[props.WidthClass]}`}>{props.children}</div>
   )
}

export default Centered;