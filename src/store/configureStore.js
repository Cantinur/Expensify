import {createStore, combineReducers} from 'redux';
import expensesReducer from '../redusers/expenses.js';
import filtersReducer from '../redusers/filters.js';

export default () => (
    createStore(
        combineReducers({
            expense: expensesReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);