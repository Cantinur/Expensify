import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const App = () => (
    <div>
        Hello World!
    </div>
);

const AddExpencePage = () => (
    <div>
        Hello World again!
    </div>
);

const EditExpensePage = () =>(
    <div>
        This is jet another page
    </div>
);

const HelpPage = () =>(
    <div>
        This is the help page!
    </div>
);

const routes =(
  <BrowserRouter>
  <div>
    <Route path="/" component={App} exact={true} />
    <Route path="/create" component={AddExpencePage} />
    <Route path="/edit" component={EditExpensePage} />
    <Route path="/help" component={HelpPage} />
  </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));