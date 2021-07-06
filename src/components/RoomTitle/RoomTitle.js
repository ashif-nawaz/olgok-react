import React from "react";
import Styles from "./RoomTitle.module.css";

const RoomTitle = (props) => {
  return <div className={Styles.RoomTitle} style={{textAlign : props.textAlign}}>{props.title}</div>;
};

export default RoomTitle;
