import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./containers/App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import AuthProvider from "./store/AuthProvider";

ReactDOM.render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
