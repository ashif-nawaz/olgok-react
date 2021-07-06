import React from 'react';
import reactDOM from 'react-dom';
import Styles from './Flash.module.css';

const Message = (props) => {
     return (
         <div className={Styles.Message}>
             <div>{props.children}</div>
         </div>
     )
}

const Flash = (props) => {
   return  reactDOM.createPortal(<Message>{props.children}</Message>, document.getElementById('errorOverlay'))
   
}

export default Flash;
