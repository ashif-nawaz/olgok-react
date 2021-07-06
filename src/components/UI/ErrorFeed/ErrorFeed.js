import React from 'react';
import Styles from './ErrorFeed.module.css';

const ErrorFeed = (props) => {
   return (
       <p className={Styles.ErrorFeed}>{props.children}</p>
   )
}

export default ErrorFeed;

