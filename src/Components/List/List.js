import React from 'react';
import styles from './List.module.scss';

const List = ({title, cost, costType}) => (
        <li className={styles.wrapper}>
            <div>    
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.category}>{costType}</p>
            </div>
            <p className={styles.cost}>{cost} &euro;</p>
        </li>
);
export default List;