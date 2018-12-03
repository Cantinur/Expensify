import React from 'react';
import App from '../components/App';
import HelpPage from '../components/HelpPage';
import EditExpensePage from '../components/EditExpensePage';
import AddExpencePage from '../components/AddExpencePage';
import NotFountPage from '../components/NotFountPage';
import Header from '../components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const AppRouter =() => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={App} exact={true}/>
                <Route path="/create" component={AddExpencePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFountPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;