import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Action from './action';
import style from './style.css';
import Loader from "../../components/loader/loader";
import SinglePost from "../../components/singlePost";
import avatar from "../../assets/user.jpg";


class AllPosts extends Component {
    componentDidMount() {
        this.props.getInitPostsAction();
    }

    onScroll = (event) => {
        const { posts, isLoading } = this.props;
        const postsLength = posts.length;
        const pageHeight = document.documentElement.clientHeight;
        const getBounding = document.getElementById('all-posts').getBoundingClientRect().bottom;

        if (getBounding <= pageHeight + (pageHeight / 10) && !isLoading) {
            console.log('loading')
            this.props.getScrollPostsAction(postsLength)
        }
    }

    render() {
        const { isLoading, posts} = this.props;

        return (
            <div className={style.wrapper} onScroll={this.onScroll}>
                <div id='all-posts'>
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
                                               img={el.img}/>
                        })}
                    {
                        (isLoading && posts.length > 0) && <Loader/>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.allPosts.posts,
    isLoading: state.allPosts.isLoading
});

export default connect(mapStateToProps, Action)(AllPosts);

// function getRandomInt(max) {
//     return ;
// } получение рандомной картинки
