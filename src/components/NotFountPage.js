import React from 'react';
import {Link} from 'react-router-dom';

const NotFountPage = () =>(
    <div>
        <p>404 - Page not found :(</p>
        <Link to="/">Go home</Link>
    </div>
);

export default NotFountPage;