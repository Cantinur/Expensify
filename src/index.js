import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore.js';
import {addExpence} from './actions/expenses.js';
import {setTextFilter} from './actions/filtes.js';
import getVisibleExpenses from './selectors/expenses.js';
import './style/styles.scss';

const store = configureStore();

store.subscribe(() => {
    let state = store.getState();
    console.log(
        getVisibleExpenses(state.expense, state.filters)
    );
});

store.dispatch(addExpence({description: 'Water bill', note: 'I need to pay for watre', amount: 12000, createdAt:Date.now() - 86400000}));
store.dispatch(addExpence({description: 'Gas bill', note:'Paying for my gas', amount: 100000, createdAt: Date.now()}));
store.dispatch(setTextFilter('Water'));

ReactDOM.render(<AppRouter/>, document.getElementById('root'));