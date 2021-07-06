import React from "react";
import Styles from "./WelcomeBanner.module.css";

const WelcomeBanner = (props) => {
  return <section className={Styles.WelcomeBanner}></section>;
};

export default React.memo(WelcomeBanner);
