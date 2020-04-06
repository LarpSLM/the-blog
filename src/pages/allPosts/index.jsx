import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Action from './action';
import style from './style.css';
import {Link} from 'react-router-dom';
import Loader from "../../components/loader/loader";
import PostIMG from '../../assets/img-api'

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
                        return (
                            <div key={el.id} className={style.item}>
                                <div className={style.postImg}>
                                    <Link to={`/post/${el.id}`}>
                                        <img src={PostIMG()} alt="no-img"/>
                                    </Link>
                                    <div className={style.likes}>
                                        <i className="far fa-heart"></i>
                                        {el.likesCount}
                                    </div>
                                </div>
                                <Link to={`/post/${el.id}`}
                                      className={style.title}>
                                    {el.title}
                                </Link>
                                <div className={style.postInfo}>
                                    <div className={style.after}>
                                        <div className={style.author}>
                                            <div className={style.ava}>
                                                <img src={el.author.avatar} alt=""/>
                                            </div>
                                            <span>
                                            {el.author.login}
                                        </span>
                                        </div>
                                    </div>
                                    <span className={style.after}>
                                        {el.date.slice(0, 10)}
                                    </span>
                                    <span>
                                        {el.postNumber}
                                    </span>
                                </div>
                                <div className={style.content}>{el.content}</div>
                            </div>
                        )
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
