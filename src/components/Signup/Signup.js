import React, { useState } from "react";
import Styles from "./Signup.module.css";
import SignupForm from "./SignupForm/SignupForm";
import useHTTP from "../../hooks/use-http";
import FallBack from "../UI/FallBack/FallBack";
import Spinner from "../UI/Spinner/Spinner";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import { useHistory } from "react-router-dom";

const Signup = (props) => {
  const [resp, setResp] = useState(null);
  const { isLoading, error, sendRequest } = useHTTP();
  const history = useHistory();

  const signupHandler = (signupData) => {
    sendRequest("/api/v1/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    })
      .then((response) => {
        setResp(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loginHandler = (e) => {
    history.push("/login");
  };

  return (
    <div className={Styles.Signup}>
      <Card CardType="TransCard">
        <div className={Styles.SignupInner}>
          {isLoading && <Spinner />}
          {error && (
            <FallBack>
              {error.errorInfo || error.message || "Something Went Wrong."}
            </FallBack>
          )}
          {!resp ? (
            <SignupForm dataHandler={signupHandler} />
          ) : (
            <FallBack>
              <h3 style={{ marginBottom: "10px" }}>signup successful</h3>
              <Button onClick={loginHandler}>Login</Button>
            </FallBack>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Signup;
