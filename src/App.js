import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ExpenseDashboardPage from './components/ExpenseDashboardPage';

class App extends Component{
  render(){
    return (
      <div>
        Hello World
      </div>
      );
  }
};

const routes =(
  <BrowserRouter>
    <Route path="/" component={ExpenseDashboardPage} />
  </BrowserRouter>
);

export default App;
