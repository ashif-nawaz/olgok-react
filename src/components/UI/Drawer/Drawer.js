import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "../Backdrop/Backdrop";
import Styles from "./Drawer.module.css";


const DrawerOverlay =  (props) => {
    return (
         <div className={`${Styles.DrawerOverlay} ${Styles[props.SlideOutClass]}`}>
            <div className={Styles.OverlayContent}>
                {props.children}
            </div>
         </div>
    )

}

const Drawer = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("mobileDrawer")
      )}
      {ReactDOM.createPortal(
        <DrawerOverlay SlideOutClass={props.SlideOutClass}>{props.children}</DrawerOverlay>,
        document.getElementById("mobileDrawer")
      )}
    </>
  );
};

export default Drawer;
