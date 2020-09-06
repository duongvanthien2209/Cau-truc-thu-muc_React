import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// Pages
import { Login, Register } from '../containers/index';

// Routes
import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <PublicRoute path="/login" component={Login} />
                <PublicRoute path="/register" component={Register} />

                <PrivateRoute path="/" component={<h1>Done</h1>} />
            </Switch>
        </Router>
    );
}

export default Routes;