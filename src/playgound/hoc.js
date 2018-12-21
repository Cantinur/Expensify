import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWorning = WrappedComponent => (
    (props) =>(
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    )
);

//RequireAuthentication

const requestAtutehntication = WrappedComponent => (
    props => (
        <div>
            {
                !props.isAuthenticated 
                ? <p>Please log in in order to see more information</p> 
                : <WrappedComponent {...props}/>
            }
        </div>
    )
);


const AdminInfo = withAdminWorning(Info);
const AuthInfo = requestAtutehntication(Info);

//ReactDOM.render(<AdminInfo isAdmin={false} info='These are the details'/>, document.getElementById('root'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='These are the details'/>, document.getElementById('root'));