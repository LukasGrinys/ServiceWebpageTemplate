import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/layout';
import Home from './components/home/home';

import './mainstyle.module.css'

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route to="/" exact component={Home}></Route>
                </Switch>
            </Layout>
        )
    }
}

export default Routes
