import React, {Component} from 'react';
import './style.css';
import UnregisteredPage from '../pages/unregisteredPage';
import {Route, Switch} from 'react-router-dom';
import DefaultPage from "../pages/defaultPage";

export default class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/auth' component={UnregisteredPage}/>
                    <Route path='/' component={DefaultPage}/>
                </Switch>
            </div>
        );
    }
}


