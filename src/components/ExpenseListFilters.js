import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount} from '../actions/filters';

const mapStateToProps = state => (
    {
        filters: state.filters
    }
);

export default connect(mapStateToProps)(props => (
    <div>
        <input 
            type='text' 
            value={props.filters.text}
            onChange={e => props.dispatch(setTextFilter(e.target.value))}
        />
        <select 
            value={props.filters.sortBy}
            onChange={o => 
                
                props.dispatch(o.target.value === 'date' ? sortByDate() : sortByAmount())
            }>
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
        </select>
    </div>
)); 