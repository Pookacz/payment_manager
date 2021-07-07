import React from "react";
import styles from "./Popup.module.scss";
import DeleteButton from "../Button/DeleteButton";
import Graph from "../Graph/Graph";

const Popup = ({ closePopup }) => (
  <>
    <div className={styles.wrapper}>
      <div className={styles.button}>
        <DeleteButton onClick={closePopup} />
      </div>
      <div className={styles.graphWrapper}>
        <Graph />
      </div>
    </div>
  </>
);
export default Popup;
