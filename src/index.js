// import React from 'react';
// import ReactDOM from 'react-dom';
// import AppRouter from './routers/AppRouter';
// import './Style/styles.scss';


// ReactDOM.render(<AppRouter/>, document.getElementById('root'));

import {createStore} from 'redux';

const store = createStore((state = {count:0}) => {
    return state;
});

console.log(store.getState());