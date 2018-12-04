
import {createStore} from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) =>({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({setTo = 0} = {}) =>({
    type: 'SET',
    setTo
});

const store = createStore((state = {count:0}, action) => {
    switch (action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.setTo
            };
        default:
            return state;
    }
});

/*const unsubscribe =*/ store.subscribe(() => {
    console.log(store.getState());
});
//unsubscribe();

store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(setCount());