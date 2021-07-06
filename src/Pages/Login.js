import React, {useEffect} from "react";
import Login from "../components/Login/Login";

const LoginPage = (props) => {
  useEffect(() => {
    document.title = 'Login | Olgok Guest House'
  })
  return <Login />;
};

export default LoginPage;
