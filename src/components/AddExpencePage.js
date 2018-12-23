import React from 'react';
import {connect} from 'react-redux';
import ExpenseFrom from './ExpenseForm';
import { addExpence } from '../actions/expenses';

const AddExpencePage = props => (
    <div>
        <h1>Add Expense</h1>
       <ExpenseFrom
           onSubmit={expense => { 
                props.dispatch(addExpence(expense));
                props.history.push('/');
           }}
       />
    </div>
);

export default connect()(AddExpencePage);