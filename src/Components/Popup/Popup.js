import React from "react";
import styles from "./Popup.module.scss";
import DeleteButton from "../Button/DeleteButton";

const Popup = ({ closePopup }) => (
  <>
    <div className={styles.wrapper}>
      <div className={styles.button}>
        <DeleteButton className={styles.closeButton} onClick={closePopup} />
      </div>
      <div className={styles.graph}></div>
    </div>
  </>
);
export default Popup;
