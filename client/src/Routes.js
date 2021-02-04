import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import Map from "./components/map/Map";
import Bar from "./components/bar/Bar";
import Pie from "./components/pie/Pie";
import Line from "./components/line/Line";

import Home from "./components/home/Home";
import Data from "./components/data/Data";
import Datadate from "./components/dataDate/Datadate";
import Maps from "./components/maps/Maps";
import history from "./history";

import { PrivateRoute } from "./private.route";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/login" component={Login} />
                    <Route path="/map" component={Map} />
                    <Route path="/bar" component={Bar} />
                    <Route path="/pie" component={Pie} />
                    <Route path="/line" component={Line} />

                    <PrivateRoute exact path="/home" component={Home} />
                    <Route path="/data" component={Data} />
                    <Route path="/dataDate" component={Datadate} />
                    <Route path="/maps" component={Maps} />
                </Switch>
            </Router>
        )
    }
}