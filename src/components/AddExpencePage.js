import React from 'react';
import {connect} from 'react-redux';
import ExpenseFrom from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

const AddExpencePage = props => (
    <div>
        <h1>Add Expense</h1>
       <ExpenseFrom
           onSubmit={expense => { 
                props.dispatch(startAddExpense(expense));
                props.history.push('/');
           }}
       />
    </div>
);

export default connect()(AddExpencePage);