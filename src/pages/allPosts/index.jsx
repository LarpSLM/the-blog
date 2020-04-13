import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Action from './action';
import style from './style.css';
import Loader from "../../components/loader/loader";
import SinglePost from "../../components/singlePost";


class AllPosts extends Component {
    componentDidMount() {
        this.props.getInitPostsAction();
    }

    onScroll = () => {
        const { posts, isLoading } = this.props;
        const postsLength = posts.length;
        const pageHeight = document.documentElement.clientHeight;
        const getBounding = document.getElementById('all-posts').getBoundingClientRect().bottom;

        if (getBounding <= pageHeight + (pageHeight / 10) && !isLoading) {
            console.log('loading')
            this.props.getScrollPostsAction(postsLength)
        }
    }

    componentWillUnmount() {
        this.props.setStateDefault()
    }

    render() {
        const { isLoading, posts} = this.props;
        return (
            <div className={style.wrapper} onScroll={this.onScroll}>
                <h1 className={style.header}>
                    All Posts
                </h1>
                <div id='all-posts' className={style.allPosts}>
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
                                               avatar={`http://school-blog.ru/images/${el.author.avatar}`}
                                               img={el.img}
                                               onLike={() => {this.props.increaseLike(el.id)}}
                                               onDislike={() => {this.props.increaseDislike(el.id)}}
                            />

                        })}
                </div>
                {
                    (isLoading && posts.length > 0) && <Loader/>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.allPosts.posts,
    isLoading: state.allPosts.isLoading
});

export default connect(mapStateToProps, Action)(AllPosts);
