import React, {Component} from 'react';
import style from './style.css'
import {Route, Switch} from "react-router-dom";
import HeaderContainer from "../../components/header/headerContainter";
import About from "src/pages/about";
import NewPost from "src/pages/newPostPage";
import allPosts from "src/pages/allPosts";
import PostsContainer from "../post/indexContainer";
import {connect} from "react-redux";
import * as Action from "./action";
import MyPosts from "../my-post";
import Profile from "../profile";

class DefaultPage extends Component {
    componentDidMount() {
        this.props.auth()
    }

    render() {
        return (
            <div className={style.content}>
                <HeaderContainer user={this.props.user}
                                 logout={this.props.logOut}
                                 activeLink={this.props.activeLink}
                />
                <div className={style.page}>
                    <Switch>
                        <Route path='/' exact={true} component={allPosts}/>
                        <Route path='/about' exact={true} component={About}/>
                        {this.props.user && <Route path='/new-post' exact={true} component={NewPost}/>}
                        {this.props.user && <Route path='/profile' exact={true} component={Profile}/>}
                        <Route path='/post/:id' exact={true} component={PostsContainer}/>
                        <Route path='/my-posts' exact={true} component={MyPosts}/>
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

const mapStateToProps = state => {
    return {
        user: state.app.user,
        activeLink: state.app.activeLink
    }
};

export default connect(mapStateToProps, Action)(DefaultPage);