import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';

export default connect()(props => (
    <div>
        <h3>{props.description}</h3>
        <p>{props.amount} - {props.createdAt}</p>
        <p>{props.note}</p>
        <button onClick={() => 
            props.history.push(`/${props.id}`)
        }>
            Edit
        </button>
        <button onClick={() => 
            props.dispatch(removeExpense(props))
        }>
            Remove
        </button>
    </div>
));