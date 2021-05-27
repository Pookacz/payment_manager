import React from 'react';
import { connect } from 'react-redux';
import List from '../List/List';
import DeleteButton from '../Button/DeleteButton'
import styles from './Page.module.scss';
import { removeItem } from '../../actions/index';



const Page = props =>(
    <ul>
        {props.payments.map((item, index) => (
            <div className={styles.wrapper} key={index}>
                <List {...item} />
                <DeleteButton onClick={() => props.removeItem(item.id)}/>
            </div>
        ))}
    </ul>

);

const mapStateToProps = state => {
    const { payments } = state;
    return { payments };
}
const mapDispatchToProps = dispatch => {
    return{
        removeItem: index => dispatch(removeItem(index))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);