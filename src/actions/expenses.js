import uuid from 'uuid';

//ADD_EXPENSE
export const addExpence = ({ description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
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
export const removeExpense = ({ id }) => ({
    type:'REMOVE_EXPENSE',
    id
});

//EDIT_EXPEMSE
export const editeExpense = ({ id, updates }) =>({
    type:'EDIT_EXPEMSE',
    id,
    updates
});