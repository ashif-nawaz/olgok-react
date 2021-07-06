import React from 'react';
import Styles from './BurgerMenu.module.css';

const BurgerMenu = ({ onShowDrawer }) => {
 
   return (
       <div className={Styles.BurgerMenu} onClick={onShowDrawer}>
           <div className={Styles.One}></div>
           <div className={Styles.Two}></div>
           <div className={Styles.Three}></div>
       </div>
   )
}

export default BurgerMenu;