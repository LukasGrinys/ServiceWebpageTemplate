import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/layout';
import Home from './components/home/home';
import About from './components/about/about';
import Service from './components/products/products';

import './mainstyle.module.css'

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/about" exact component={About}></Route>
                    <Route path="/service" exact component={Service}></Route>
                </Switch> 
            </Layout>
        )
    }
}

export default Routes
