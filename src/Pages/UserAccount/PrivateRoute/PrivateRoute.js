import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { loading, users } = useAuth();
    if (loading) {
        return <Spinner style={{ margin: "300px" }} animation="border" variant="success" />
    }

    return (
        <Route
            {...rest}
            render={({ location }) => users.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >
        </Route>
    );
};

export default PrivateRoute;