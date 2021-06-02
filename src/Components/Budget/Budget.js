import React from "react";
import styles from "./Budget.module.scss";
import { connect } from "react-redux";

const Budget = (props) => (
  <>
    {props.budget.map((item, index) => (
      <div className={styles.wrapper} key={index}>
        <h1 className={styles.title}>Budget</h1>
        <p className={styles.budget}>{item.budget} &euro;</p>
      </div>
    ))}
  </>
);

const mapStateToProps = (state) => {
  const { budget } = state;
  return { budget };
};

export default connect(mapStateToProps)(Budget);
