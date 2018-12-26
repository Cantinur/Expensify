import moment from 'moment';

//Get Visible Expences
export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        
        const textMatch = text === '' 
            || expense.description.toLowerCase().includes(text.toLowerCase()) 
            || expense.note.toLowerCase().includes(text.toLowerCase());
            
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => (sortBy === 'date') 
        ? (a.createdAt < b.createdAt ? 1 : -1) : (a.amount < b.amount ? 1 : -1)
    );
};

