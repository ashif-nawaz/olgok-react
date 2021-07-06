import React from 'react';
import Styles from './Input.module.css';

const Input = (props) => {
   return (
       <div className={Styles.Input} >
            <label htmlFor={props.input.id} style={{color : props.titleColor}}>{props.title}</label>
            <input {...props.input} />
       </div>
   )
}

export default Input;