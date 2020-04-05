import React, {Component} from 'react';
import style from './style.css'
import SignUp from "../sign-up";
import {Switch, Route} from 'react-router-dom';
import SignIn from "../sign-in";

class MainPage extends Component {

    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.form}>
                    <h1>THE BLOG</h1>
                    <div className={style.components}>
                        <Switch>
                            <Route path='/auth/sign-in' exact={true} component={SignIn}/>
                            <Route path='/auth/sign-up' exact={true} component={SignUp}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage;