import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button/Button";
import ErrorFeed from "../../UI/ErrorFeed/ErrorFeed";
import Input from "../../UI/Input/Input";
import Styles from "./LoginForm.module.css";

const DEFAULT_STATE = {
  email: "",
  isEmailTouched: false,
  isEmailValid: false,
  password: "",
  isPasswordTouched: false,
  isPasswordValid: false,
  isFormValid: false,
};

const reducer = (prevState, action) => {
  if (action.type === "email") {
    if (action.fieldValue === "") {
      return {
        ...prevState,
        email: action.fieldValue,
        isEmailTouched: true,
        isEmailValid: false,
        isFormValid: false,
      };
    }
    return {
      ...prevState,
      email: action.fieldValue,
      isEmailTouched: true,
      isEmailValid: true,
      isFormValid: prevState.isPasswordValid,
    };
  }

  if (action.type === "password") {
    if (action.fieldValue === "") {
      return {
        ...prevState,
        password: action.fieldValue,
        isPasswordTouched: true,
        isPasswordValid: false,
        isFormValid: false,
      };
    }
    return {
      ...prevState,
      password: action.fieldValue,
      isPasswordTouched: true,
      isPasswordValid: true,
      isFormValid: prevState.isEmailValid,
    };
  }

  if (action.type === "FORM_NOT_VALID") {
    return {
      ...prevState,
      isEmailTouched: true,
      isPasswordTouched: true,
    };
  }
  return DEFAULT_STATE;
};

const LoginForm = (props) => {
  const [formState, dispatchState] = useReducer(reducer, DEFAULT_STATE);

  const inputChangeHandler = (e) => {
    const name = e.target.name;
    const type = e.target.type;
    const value = type === "checkbox" ? e.target.checked : e.target.value;
    dispatchState({ type: name, fieldName: name, fieldValue: value });
  };

  const formLoginHandler = (e) => {
    e.preventDefault();
    if (!formState.isFormValid) {
      return dispatchState({ type: "FORM_NOT_VALID" });
    }
    const loginData = { email: formState.email, password: formState.password };
    props.dataHandler(loginData);
  };

  return (
    <form onSubmit={formLoginHandler} className={Styles.LoginForm}>
      <div className={Styles.Row}>
        <Input
          title="Email"
          titleColor="whitesmoke"
          input={{
            id: "email",
            name: "email",
            type: "text",
            onBlur: inputChangeHandler,
            onChange: inputChangeHandler,
            value: formState.email,
          }}
        />
        {formState.isEmailTouched && !formState.isEmailValid && (
          <ErrorFeed>Please enter a valid email</ErrorFeed>
        )}
      </div>
      <div className={Styles.Row}>
        <Input
          title="Password"
          titleColor="whitesmoke"
          input={{
            id: "password",
            name: "password",
            type: "password",
            onBlur: inputChangeHandler,
            onChange: inputChangeHandler,
            value: formState.value,
          }}
        />
        {formState.isPasswordTouched && !formState.isPasswordValid && (
          <ErrorFeed>Please enter a valid password</ErrorFeed>
        )}
      </div>
      <div className={Styles.FormActions}>
        <Button style={{ backgroundColor: "var(--primary-color)" }}>
          Login
        </Button>
      </div>
      <div className={Styles.Actions}>
        <Link to="/signup">Create an account</Link>
      </div>
    </form>
  );
};

export default LoginForm;
