import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './Logo.module.css';


const Logo = (props) => {

   return (
    <h1 className={Styles.Logo}>
       <NavLink to='/'>Olgok</NavLink>
    </h1>
   )
}

export default Logo;
