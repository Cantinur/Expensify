import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './style/styles.scss';
import ExpenseDashboardPage from './components/ExpenseDashboardPage';

class App extends React.Component{
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
