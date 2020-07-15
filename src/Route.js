import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './components/Home';
import {About} from './components/About';
import {Product} from './components/Product';
import {ProductDetails} from './components/ProductDetails';
import {NavBar} from './components/NavBar';
import { NotFound } from './components/NotFound';

function RouteConfig() {
    return (
        <div>
            <Router>
            <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/product" component={Product} />
                    <Route path="/product/:id" component={ProductDetails} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        </div>
    )
}
export default RouteConfig;