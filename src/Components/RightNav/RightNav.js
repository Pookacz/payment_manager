import React from 'react';
import styles from './RightNav.module.scss';
import Form from '../Form/Form';
import BudgetForm from '../BudgetForm/BudgetForm';
import Button from '../Button/Button';


const RightNav = ({ openPopup }) =>(
    <div className={styles.wrapper}>
        <Form />
        <BudgetForm />
        <div className={styles.graph}>
            <Button children={'Graph'} onClick={openPopup}/>
        </div> 
    </div>
);

export default RightNav;