import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '../Backdrop/Backdrop';
import Styles from './Modal.module.css';


const ModalOverlay = (props) => {
   return (
       <div className={Styles.ModalOverlay}>
           <div className={Styles.ModalContent}>{props.children}</div>
       </div>
   )
}


const Modal = (props) => {
   return (
       <>
         {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('overlays'))}
         {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
       </>
   )
}

export default Modal;