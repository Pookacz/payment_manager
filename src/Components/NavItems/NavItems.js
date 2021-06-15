import React from "react";
import styles from "./NavItems.module.scss";
import { connect } from "react-redux";

const NavItems = (props) => (
  <>
    <div>
      <h1 className={styles.title}>Food</h1>
      <p className={styles.budget}>{props.payments.filter(x => x.costType === "Food").reduce((a,b) => a = a + parseInt(b.cost), 0)} &euro;</p>
    </div>
    <div>
      <h1 className={styles.title}>Entertainment</h1>
      <p className={styles.budget}>{props.payments.filter(x => x.costType === "Entertainment").reduce((a,b) => a = a + parseInt(b.cost), 0)} &euro;</p>
    </div>
    <div>
      <h1 className={styles.title}>Accessories</h1>
      <p className={styles.budget}>{props.payments.filter(x => x.costType === "Accessories").reduce((a,b) => a = a + parseInt(b.cost), 0)} &euro;</p>
    </div>
    <div>
      <h1 className={styles.title}>Subscription</h1>
      <p className={styles.budget}>{props.payments.filter(x => x.costType === "Subscription").reduce((a,b) => a = a + parseInt(b.cost), 0)} &euro;</p>
    </div>
    <div>
      <h1 className={styles.title}>Bill</h1>
      <p className={styles.budget}>{props.payments.filter(x => x.costType === "Bill").reduce((a,b) => a = a + parseInt(b.cost), 0)} &euro;</p>
    </div>
    <div>
      <h1 className={styles.title}>Other</h1>
      <p className={styles.budget}>{props.payments.filter(x => x.costType === "Other").reduce((a,b) => a = a + parseInt(b.cost), 0)} &euro;</p>
    </div>

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
