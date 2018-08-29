import React, {Component} from 'react';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomeContainer from "./containers/HomeContainer";

class App extends Component {

    renderHome = () => <h1>Home</h1>;
    renderCustomerContainer = () => <h1>Customer Container</h1>;
    renderCustomerListContainer = () => <h1>Customer List Container</h1>;
    renderCustomerNewContainer = () => <h1>Customer New Container</h1>;

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path='/customers/new' component={this.renderCustomerNewContainer}></Route>
                        <Route path='/customers/:dni' component={this.renderCustomerContainer}></Route>
                        <Route path='/customers' component={this.renderCustomerListContainer}></Route>
                        <Route path='/' component={HomeContainer}></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
