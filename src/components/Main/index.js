import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Series from "../../containers/Series";
import SingleSeries from "../../containers/SingleSeries";

const Main = props => (
    <Switch>
        <Route exact path="/" component={Series} />
        <Route path="/series/:id" component={SingleSeries} />
    </Switch>
);

export default Main;
