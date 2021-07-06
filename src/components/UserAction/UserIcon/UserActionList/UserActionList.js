import React from "react";
import { Link } from "react-router-dom";
import Styles from "./UserActionList.module.css";

const UserActionList = ({ isLoggedIn, onLogout }) => {
  let authLists = null;

  if (isLoggedIn) {
    authLists = <li onClick={onLogout} >Logout</li>;
  }

  return (
    <ul className={Styles.UserActionsList}>
      <li>
        <Link to="/orders">Orders</Link>
      </li>
      <li>
        <Link to="/edit-profile">Edti Profile</Link>
      </li>
      {authLists}
    </ul>
  );
};

export default UserActionList;
