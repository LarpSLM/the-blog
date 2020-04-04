import React, {Component} from 'react';
import style from './style.css'
import {Route, Switch} from "react-router-dom";
import AboutPage from "../about";
import NewPost from "../newPostPage";
import HeaderContainer from "../../components/header/headerContainter";

export default class DefaultPage extends Component {
    render() {
        return (
            <div className={style.content}>
                <HeaderContainer user={this.props.user} logout={this.props.logout}/>
                <div className={style.page}>
                    <Switch>
                        <Route path='/about' exact={true} component={AboutPage}/>
                        <Route path='/new-post' exact={true} component={NewPost}/>
                    </Switch>
                </div>
                <div className={style.bottomMenu}>
                    <i className="fas fa-bars"></i>
                    <i className="fas fa-blog"></i>
                    <i className="fas fa-angle-up"></i>
                </div>
            </div>
        )
    }
}