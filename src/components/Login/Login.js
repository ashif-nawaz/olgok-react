import React, { useContext } from "react";
import Styles from "./Login.module.css";
import LoginForm from "./LoginForm/LoginForm";
import useHTTP from "../../hooks/use-http";
import Spinner from "../UI/Spinner/Spinner";
import FallBack from "../UI/FallBack/FallBack";
import AuthContext from "../../store/auth-context";
import Card from "../../components/UI/Card/Card";


const Login = (props) => {
  const { isLoading, error, sendRequest } = useHTTP();
  const authCtx = useContext(AuthContext);

  const loginHandler = (loginData) => {
    sendRequest("/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        authCtx.onLogin(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className={Styles.Login}>
      <Card CardType="TransCard">
        <div className={Styles.LoginInner}>
          {isLoading && <Spinner />}
          {error && (
            <FallBack>
              {error.errorInfo || error.message || "Something Went Wrong."}
            </FallBack>
          )}
          <LoginForm dataHandler={loginHandler} />
        </div>
      </Card>
    </div>
  );
};

export default Login;
