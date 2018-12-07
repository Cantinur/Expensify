import {createStore, combineReducers} from 'redux';
import expensesReducer from '../redusers/expenses.js';
import filtesReducer from '../redusers/filtes.js';

export default () => {
    const store = createStore(
        combineReducers({
            expense: expensesReducer,
            filters: filtesReducer
        })
    );

    return store;
};