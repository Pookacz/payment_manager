import React from "react";
import styles from "./NavItems.module.scss";
import { connect } from "react-redux";

const NavItems = (props) => (
  <>
    {props.costList.map((item, index) =>(
      <div key={index}>
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.budget}>{props.payments.filter(x => x.costType === item.title).reduce((a,b) => a = a + parseInt(b.cost), 0)} &euro;</p>
      </div>
    ))}
  </>
    
);

const mapStateToProps = (state) => {
  const { payments, costList } = state;
  return { payments, costList };
};

export default connect(mapStateToProps)(NavItems);
