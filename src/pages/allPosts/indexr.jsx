import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Action from './action';
import style from './style.css';
import Loader from "../../components/loader/loader";
import SinglePost from "../../components/singlePost";
import PostIMG from "../../assets/img-api";
import avatar from "../../assets/user.jpg";


class AllPosts extends Component {
    componentDidMount() {
        this.props.getPostsAction()
    }

    render() {
        const posts = this.props.posts;
        return (
            <div className={style.wrapper}>
                <h1 className={style.header}>
                    All Posts
                </h1>
                {(posts.length < 1)
                    ? <Loader/>
                    : posts.map(el => {
                        return <SinglePost key={el.id}
                                           id={el.id}
                                           title={el.title}
                                           login={el.author.login}
                                           data={el.date.slice(0, 10)}
                                           number={el.postNumber}
                                           content={el.content}
                                           likesCount={el.likesCount}
                                           dislikesCount={el.dislikesCount}
                                           avatar={avatar} //el.author.avatar
                                           img={PostIMG()}/>
                    })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.allPosts.posts
});

export default connect(mapStateToProps, Action)(AllPosts);

// function getRandomInt(max) {
//     return ;
// } получение рандомной картинки
