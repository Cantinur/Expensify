import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import expensesReducer from '../redusers/expenses.js';
import filtersReducer from '../redusers/filters.js';
import thunk from 'redux-thunk';

const componentEnhander = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => (
    createStore(
        combineReducers({
            expense: expensesReducer,
            filters: filtersReducer
        }),
        componentEnhander(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);