import React, { useContext } from "react";
import AuthContext from "../../../../store/auth-context";
import Styles from "./Greeting.module.css";

const Greeting = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <div className={Styles.Greet}>
      {authCtx.isLoggedIn ? (
        <p className={Styles.WelcomeNote}>Welcome {authCtx.user.name}</p>
      ) : (
        <p className={Styles.WelcomeNote}>Hi, Login to access your account</p>
      )}
      {authCtx.isLoggedIn && <p className={Styles.Email}>{authCtx.user.email}</p>}
    </div>
  );
};

export default Greeting;
