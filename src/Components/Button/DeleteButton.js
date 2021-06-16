import React from "react";
import styles from "./DeleteButton.module.scss";
import deleteIcon from "../../assets/deleteIcon.svg";

const DeleteButton = ({ ...props }) => (
  <button className={styles.wrapper} {...props}>
    <img src={deleteIcon} alt="delete icon" />
  </button>
);

export default DeleteButton;
