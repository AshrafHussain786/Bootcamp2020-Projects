import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import "./App.css";

function RouteConfig() {
    return (
        <div>           
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </Router> 
        </div>
    )
}
export default RouteConfig;