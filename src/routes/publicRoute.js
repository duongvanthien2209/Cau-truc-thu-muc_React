import React from 'react';
import { Route } from 'react-router-dom';

import { Login } from '../containers/index';

const PublicRoute = ({ path, component: Component, layout: Layout }) => {
    return (
        <Route path={path} render={() => {
            return (
                <Layout>
                    <Component />
                </Layout>
            );
        }} />
    );
}

export default PublicRoute;