import React from "react";
import styles from "./Nav.module.scss";
import NavItems from "../NavItems/NavItems";
import Budget from "../Budget/Budget";

const Nav = () => (
  <div className={styles.wrapper}>
    <Budget />
    <NavItems />
  </div>
);

export default Nav;
