import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editeExpense, startRemoveExpense } from '../actions/expenses';

const EditExpensePage = props =>( 
    <div>
        <ExpenseForm
            expense={props.expense}
            onSubmit={expense => {
                props.dispatch(editeExpense({id: props.expense.id, updates: expense}));
                props.history.push('/');
            }}
        />
        <button onClick={() => {
            props.dispatch(startRemoveExpense({id: props.expense.id}))
            props.history.push('/');
        }}>Remove</button>
    </div>
);

const mapStateToProps = (state, props) => (
    {expense: state.expense.find( expense => expense.id === props.match.params.id)}
);
 
export default connect(mapStateToProps)(EditExpensePage);