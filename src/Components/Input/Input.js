import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({name, maxLength, placeholder, ...props}) => (
    <input
        className={styles.wrapper}
        type="text"
        name={name}
        id={name}
        required
        maxLength={maxLength}
        placeholder={placeholder}
        {...props}
    />
);

Input.PropTypes = {
    name: PropTypes.string.isRequired,
    maxLength: PropTypes.number.isRequired,
    placeholder: PropTypes.string.isRequired,
}

Input.defaultProps = {
    maxLength: 100;
}

export default Input;