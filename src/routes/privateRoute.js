import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ path, component: Component, layout: Layout }) => {
    let isLogin = true;

    return (
        <Route path={path} render={() => {
            return !isLogin ? <Redirect to={{
                pathname: '/login'
            }} /> : (
                <Layout>
                    <Component />
                </Layout>
            )
        }} />
    );
};

export default PrivateRoute;