import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = props => (
    <div>
        {props.expense 
        ? props.expense.map(expense => (
            <ExpenseListItem
                key = {expense.id}
                id ={expense.id}
                amount={expense.amount}
                description={expense.description}
                createdAt={expense.createdAt}
                note={expense.note}
            />))
        :<p>Please add an expense.</p>}
    </div>
);

const mapStateToProps = (state)=> ({expense: selectExpenses(state.expense, state.filters)});

export default connect(mapStateToProps)(ExpenseList); 
