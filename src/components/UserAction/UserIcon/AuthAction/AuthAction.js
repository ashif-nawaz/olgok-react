import React from "react";
import {  useHistory } from "react-router-dom";
import Button from "../../../UI/Button/Button";
import Styles from "./AuthAction.module.css";


const AuthAction = (props) => {
  const history = useHistory();

  const loginHandler = (e) => {
     e.preventDefault();
     history.push('/login');
  }

  const signupHandler = (e) => {
     e.preventDefault();
     history.push('/signup');
  }
  return (
    <div className={Styles.AuthAction}>
      <Button onClick={loginHandler}>Login</Button>
      <Button onClick={signupHandler}>Signup</Button>
    </div>
  );
};

export default AuthAction;
