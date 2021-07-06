import React from "react";

const AuthContext = React.createContext({
  user: {},
  isLoggedIn: false,
  onLogin: () => {},
});

export default AuthContext;
