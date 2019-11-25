import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/layout';
import Home from './components/home/home';
import About from './components/about/about';
import Service from './components/products/products';
import Partners from './components/partners/partners';
import Contact from './components/contact/contacts';

import './mainstyle.module.css'

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/about" exact component={About}></Route>
                    <Route path="/service" exact component={Service}></Route>
                    <Route path="/partners" exact component={Partners}></Route>
                    <Route path="/contact" exact component={Contact}></Route>
                </Switch> 
            </Layout>
        )
    }
}

export default Routes
