import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ path, component: Component }) => {
    let isLogin = false;

    return (
        <Route path={path} render={() => {
            return !isLogin ? <Redirect to={{
                pathname: '/login'
            }} /> : <Component />
        }} />
    );
};

export default PrivateRoute;