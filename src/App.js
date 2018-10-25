import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

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
  <Route path="/" component={App} />
  </BrowserRouter>
);

export default App;
