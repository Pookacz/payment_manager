import React from "react";
import styles from "./NavItems.module.scss";
import { connect } from "react-redux";

const NavItems = (props) => (
  <>
    {props.payments.map((item, index)  => (
      <div key={index} className={styles.wrapper}>
        <h1 className={styles.title}>{item.costType}</h1>
        <p className={styles.budget}>{item.cost} &euro;</p>
      </div>
    ))};
    {/* {props.payments.map((item, index)  => (
      <div key={index} className={styles.wrapper}>
        <h1 className={styles.title}>{item.costType}</h1>
        <p className={styles.budget}>{item.cost} &euro;</p>
      </div>
    ))}; */}
  </>
);

const mapStateToProps = (state) => {
  const { payments } = state;
  return { payments };
};

export default connect(mapStateToProps)(NavItems);
