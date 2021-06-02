import React from "react";
import styles from "./NavItems.module.scss";
import { connect } from "react-redux";

const NavItems = (props) => (
  // <div className={styles.wrapper}>
  //     <h1 className={styles.title}>{title}</h1>
  //     <p className={styles.budget}>{cost} &euro;</p>
  // </div>
  <>
    {props.costList.map((item, index) => (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.budget}>{item.cost} &euro;</p>
      </div>
    ))}
    ;
  </>
);

const mapStateToProps = (state) => {
  const { costList } = state;
  return { costList };
};

export default connect(mapStateToProps)(NavItems);
