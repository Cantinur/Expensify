//Get Visible Expences
export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = text === '' 
            || expense.description.toLowerCase().includes(text.toLowerCase()) 
            || expense.note.toLowerCase().includes(text.toLowerCase());
            
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => (sortBy === 'date') 
        ? (a.createdAt < b.createdAt ? 1 : -1) : (a.amount < b.amount ? 1 : -1)
    );
};

