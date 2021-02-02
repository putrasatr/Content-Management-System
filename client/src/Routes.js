import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";

import history from "./history";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                </Switch>
            </Router>
        )
    }
}