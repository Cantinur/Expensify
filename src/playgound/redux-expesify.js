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

//filters Reducer
const filtersReducerDefaultState = {
    text:'',
    sortBy: 'date', // data or amount
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) =>{
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

//Get visible expences
const getVisibleExpences = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = text === '' || expense.description.toLowerCase().includes(text.toLowerCase()) || expense.note.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => (sortBy === 'date') 
        ? (a.createdAt < b.createdAt ? 1 : -1) : (a.amount < b.amount ? 1 : -1)
    );
};

//Store Creation
const store = createStore(
    combineReducers({
        expense: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpences(state.expense, state.filters);
    console.log(visibleExpenses);
})

const expOne = store.dispatch(addExpence({description: 'Rent', amount: 100, createdAt: 1000}));
const expTwo = store.dispatch(addExpence({description: 'Coffee', amount: 300, createdAt: -1000}));
console.log('ID: '+ expOne.expense.id);
// store.dispatch(removeExpense({id: expOne.expense.id}));

// store.dispatch(editeExpense(expTwo.expense.id, { amount:500 }));

// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setEndDate(1250));
// store.dispatch(setStartDate());

console.log('--------');
store.dispatch(setTextFilter('ent'));

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