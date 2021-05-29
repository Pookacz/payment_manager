import React from 'react';
import styles from './List.module.scss';

const List = ({title, cost, costType}) => (
        <div className={styles[`wrapper${costType}`]}>
            <li>    
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.category}>{costType}</p>
            </li>
            <p className={styles.cost}>{cost} &euro;</p>
        </div>
);
export default List;