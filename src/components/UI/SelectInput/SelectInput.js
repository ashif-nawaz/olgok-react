import React from 'react';
import Styles from './SelectInput.module.css';

const SelectInput = (props) => {
   return (
       <div className={Styles.Select} style={{width : props.width}}>
           <label htmlFor={props.select.id} style={{color : props.titleColor}}>{props.title}</label>
           <select {...props.select}>
               <option>Gender</option>
               <option>Male</option>
               <option>Female</option>
               <option>Other</option>
           </select>
       </div>
   )
}

export default SelectInput;