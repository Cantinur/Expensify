import {createStore, combineReducers} from 'redux';
import expensesReducer from '../redusers/expenses.js';
import filtersReducer from '../redusers/filters.js';

export default () => (
    createStore(
        combineReducers({
            expense: expensesReducer,
            filters: filtersReducer
        })
    )
);