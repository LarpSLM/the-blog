import React, {Component} from 'react';
import style from './style.css'
import {Route, Switch} from "react-router-dom";
import HeaderContainer from "../../components/header/headerContainter";
import About from "src/pages/about";
import NewPost from "src/pages/newPostPage";
import allPosts from "src/pages/allPosts";
import Post from 'src/pages/post'

export default class DefaultPage extends Component {
    render() {
        return (
            <div className={style.content}>
                <HeaderContainer user={this.props.user}
                                 logout={this.props.logout}
                                 activeLink={this.props.activeLink}
                />
                <div className={style.page}>
                    <Switch>
                        <Route path='/' exact={true} component={allPosts}/>
                        <Route path='/about' exact={true} component={About}/>
                        <Route path='/new-post' exact={true} component={NewPost}/>
                        <Route path='/post/:id' exact={true} component={Post}/>
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