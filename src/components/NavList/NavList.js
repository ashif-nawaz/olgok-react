import React from "react";
import NavItem from "../NavItem/NavItem";
import Styles from "./NavList.module.css";


const NavList = (props) => {

  return (
    <ul className={Styles.NavList}>
        <NavItem title="Rooms" urlto="/rooms">Rooms</NavItem>
        <NavItem title="Gallery" urlto="/gallery">Gallery</NavItem>
        <NavItem title="Near-By" urlto="/nearby">Near-By</NavItem>
    </ul>
  );
};

export default NavList;
