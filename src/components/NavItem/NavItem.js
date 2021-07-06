import React from "react";
import { NavLink } from "react-router-dom";
// import Card from "../UI/Card/Card";
import Styles from "./NavItem.module.css";


const NavItem = (props) => {
  return (
    //  <li className={Styles.NavItem}>{props.children}</li>
    <li className={Styles.NavItem}>
      <NavLink to={props.urlto} className={Styles.NavLink} activeClassName={Styles.NavLinkActive}>{props.children}</NavLink>
      {/* <div className={`${Styles.Content} ${Styles[props.title]}`}>
        <Card CardType="WhiteCard">
          <div>One</div>
          <div>Two</div>
          <div>Three</div>
        </Card>
      </div> */}
    </li>
  );
};

export default NavItem;
