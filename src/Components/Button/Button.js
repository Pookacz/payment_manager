import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, ...props }) => (
    <button className={styles.wrapper} {...props}>
      {children}
    </button>
);

export default Button;