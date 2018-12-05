// import React from 'react';
// import ReactDOM from 'react-dom';
// import AppRouter from './routers/AppRouter';
// import './style/styles.scss';


// ReactDOM.render(<AppRouter/>, document.getElementById('root'));
import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpence = ({ description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense:{
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//REMOVE_EXPENSE
const removeExpense = ({ id }) => ({
    type:'REMOVE_EXPENSE',
    id
});

//EDIT_EXPEMSE
const editeExpense = ({ id, updates }) =>({
    type:'EDIT_EXPEMSE',
    id,
    updates
});

//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//SORT_BY_DATE
const sortByDate = () => ({
    type:'SORT_BY_DATE'
});

//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type:'SORT_BY_AMOUNT'
});

//SET_START_DATE
const setStartDate = (startDate) => ({
    type:'SET_START_DATE',
    startDate
});

//SET_END_DATE
const setEndDate = (endDate) => ({
    type:'SET_END_DATE',
    endDate
});


//Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(( {id} ) => id !== action.id);
        case 'EDIT_EXPEMSE':
            return state.map((expense) => (expense.id === action.id) ? {...expense, ...action.updates} : expense);
        default:
            return state;
    }
};

//Filtes Reducer
const filtesReducerDefaultState = {
    text:'',
    sortBy: 'date', // data or amount
    startDate: undefined,
    endDate: undefined
};

const filtesReducer = (state = filtesReducerDefaultState, action) =>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}

//Store Creation
const store = createStore(
    combineReducers({
        expense: expensesReducer,
        filters: filtesReducer
    })
);

store.subscribe(()=>{
    console.log(store.getState());
})

const expOne = store.dispatch(addExpence({description: 'Rent', amount: 100}));
const expTwo = store.dispatch(addExpence({description: 'Coffee', amount: 300}));
console.log('ID: '+ expOne.expense.id);
store.dispatch(removeExpense({id: expOne.expense.id}));

store.dispatch(editeExpense(expTwo.expense.id, { amount:500 }));
store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(1250));
store.dispatch(setEndDate(1250));
store.dispatch(setStartDate());

// const demoState = {
//     expenses: [{
//         id:'esfaegre',
//         description:'Jan rent',
//         note:'This was the last exspence I paied at this address',
//         amount: 54500,
//         createdAt: 0
//     }],
//     filters: {
//         text:'rent',
//         sortBy: 'aount', // data or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// };