import React from 'react';
import { Route } from 'react-router-dom';

import { Login } from '../containers/index';

const PublicRoute = ({ path, component: Component }) => {
    return (
        <Route path={path} render={() => <Component />} />
    );
}

export default PublicRoute;