import React, { useEffect, useReducer } from "react";
import AuthContext from "./auth-context";

const DEFAULT_AUTH_STATE = {
  token: "",
  user: {
    name: "",
    email: "",
  },
  isLoggedIn: false,
};

const reducer = (prevState, action) => {
  if (action.type === "LOGIN_USER") {
    return {
      token: action.payLoad.token,
      user: {
        name: action.payLoad.name,
        email: action.payLoad.email,
      },
      isLoggedIn: true,
    };
  }

  if (action.type === "LOGOUT_USER") {
    return DEFAULT_AUTH_STATE;
  }
  return DEFAULT_AUTH_STATE;
};

const AuthProvider = (props) => {
  const [authState, dispatchState] = useReducer(reducer, DEFAULT_AUTH_STATE);

  const loginHandler = (responseData) => {
    const { data } = responseData;
    const tokenExMilli = Date.now() + data.expiresIn;
    const tokenExDate = new Date(tokenExMilli).toISOString();

    localStorage.setItem("token", data.token);
    localStorage.setItem("userName", data.name);
    localStorage.setItem("userEmail", data.email);
    localStorage.setItem("expiresIn", tokenExDate);

    const payLoad = {
      token: data.token,
      name: data.name,
      email: data.email,
    };
    dispatchState({
      type: "LOGIN_USER",
      payLoad: payLoad,
    });
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("expiresIn");
    dispatchState({ type: "LOGOUT_USER" });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const expiryDate = localStorage.getItem("expiresIn");
    const expiryDateMilli = new Date(expiryDate).getTime();
    if (!token || !expiryDate || expiryDateMilli <= Date.now()) {
      return logoutHandler();
    }
    const name = localStorage.getItem("userName");
    const email = localStorage.getItem("userEmail");
    const payLoad = {
      token: token,
      email: email,
      name: name,
    };
    dispatchState({ type: "LOGIN_USER", payLoad: payLoad });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: authState.user,
        isLoggedIn: authState.isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
