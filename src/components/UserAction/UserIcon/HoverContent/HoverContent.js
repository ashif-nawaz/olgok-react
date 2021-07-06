import React, { useContext } from "react";
import Card from "../../../UI/Card/Card";
import Styles from "./HoverContent.module.css";
import Greeting from "../Greeting/Greeting";
import AuthAction from "../AuthAction/AuthAction";
import UserActionList from "../UserActionList/UserActionList";
import AuthContext from "../../../../store/auth-context";




const HoverContent = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <div className={`${Styles.Content} ${props.HoverClass}`}>
      <Card CardType="WhiteCard">
        <div className={Styles.ContentOuter}>
          <div className={Styles.ContentInner}>
               <Greeting />
               {!authCtx.isLoggedIn && <AuthAction /> }
               <UserActionList isLoggedIn={authCtx.isLoggedIn} onLogout={authCtx.onLogout} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HoverContent;
