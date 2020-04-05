import React, {Component} from 'react';
import './style.css';
import UnregisteredPage from '../pages/unregisteredPage';
import {Route, Switch} from 'react-router-dom';
import DefaultPage from "../pages/defaultPage";
import {connect} from "react-redux";
import * as Action from './action'

class App extends Component {
    componentDidMount() {
        this.props.auth()
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path='/auth' component={UnregisteredPage}/>
                    <Route path='/' render={() => {
                        return <DefaultPage user={this.props.user} logout={this.props.logOut}/>
                    }}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.app.user
    }
};

export default connect(mapStateToProps, Action)(App)


