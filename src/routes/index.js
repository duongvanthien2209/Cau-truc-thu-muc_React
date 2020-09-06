import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// Pages
import { Login, Register } from '../containers';

// Routes
import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';
import { MainLayout, BlankLayout } from '../components';

const Example = () => <h1>Done</h1>;

const Routes = () => {
    return (
        <Router>
            <Switch>
                <PublicRoute path="/login" component={Login} layout={BlankLayout}  />
                <PublicRoute path="/register" component={Register} layout={BlankLayout} />

                <PrivateRoute path="/" component={Example} layout={MainLayout} />
                <Route component={<h1>Page not font</h1>} />
            </Switch>
        </Router>
    );
}

export default Routes;