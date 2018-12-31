import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore.js';
import { startSetExpenses } from './actions/expenses.js';
import getVisibleExpenses from './selectors/expenses.js';
import './style/styles.scss';
import { firebase } from './firebase/firebase';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expense, state.filters);
    console.log(visibleExpenses);
});

// store.dispatch(addExpence({description: 'Water bill', note: 'I need to pay for watre', amount: 12000, createdAt:Date.now() - 86400000}));
// store.dispatch(addExpence({description: 'Gas bill', note:'Paying for my gas', amount: 10000, createdAt: Date.now()}));
// store.dispatch(addExpence({description: 'Rent', note: 'I need to pay for watre', amount: 19995, createdAt:Date.now() - 86400000}));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(startSetExpenses()).then(()=>{
    ReactDOM.render(jsx, document.getElementById('root'));
});

firebase.auth().onAuthStateChanged(user => {
    console.log(user ? 'Loged in' : 'Is not loged in');
})