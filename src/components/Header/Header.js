import React from "react";
import Logo from "../Logo/Logo";
import NavList from "../NavList/NavList";
import UserAction from "../UserAction/UserAction";
import MobileNav from "./BobileNav/MobileNav";
import Styles from "./Header.module.css";



const Header = (props) => {

  return (
    <header className={Styles.Header}>
      <MobileNav />
      <Logo />
      <NavList />
      <UserAction />
    </header>
  );
};

export default Header;
