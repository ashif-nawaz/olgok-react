import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Drawer from "../../UI/Drawer/Drawer";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const MobileNav = (props) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [readToClose, setReadyToClose] = useState(false);

  const showDrawerHandler = (e) => {
    setShowDrawer(true);
    setReadyToClose(false)
  };


  const closeDrawerHandler = (e) => {
    setReadyToClose(true);
    setTimeout(() => {
      setShowDrawer(false);
    }, 249);
  };

  const drawerContent = (
    <Drawer onClose={closeDrawerHandler} SlideOutClass={readToClose ? "SlideOut" : ""}>
      <ul>
        <li onClick={closeDrawerHandler}>
          <NavLink to="/rooms">Rooms</NavLink>
        </li>
        <li onClick={closeDrawerHandler}>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li onClick={closeDrawerHandler}>
          <NavLink to="/nearby">NearBy</NavLink>
        </li>
      </ul>
    </Drawer>
  );

  return (
    <>
      <BurgerMenu onShowDrawer={showDrawerHandler} />
      {showDrawer && drawerContent}
    </>
  );
};

export default MobileNav;
