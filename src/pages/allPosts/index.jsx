import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Action from './action';
import style from './style.css';
import {Link} from 'react-router-dom';
import Loader from "../../components/loader/loader";

class AllPosts extends Component {
    componentDidMount() {
        this.props.getPostsAction()
    }

    render() {
        const posts = this.props.posts;
        return (
            <div className={style.bgimg}>
                <div className={style.wrapper}>
                    <h1 className={style.header}>
                        All Posts
                    </h1>
                    {(posts.length < 1)
                        ? <Loader/>
                        : posts.map(el => {
                            return (
                                <Link to={`/post/${el.id}`} key={el.id} className={style.item}>
                                    <div className={style.title}>{el.title}</div>
                                    <div className={style.content}>{el.content}</div>
                                </Link>
                            )
                        })}
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    posts: state.allPosts.posts
});

export default connect(mapStateToProps, Action)(AllPosts);

// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
// } получение рандомной картинки
