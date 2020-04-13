import React, {Component} from "react";
import * as Actions from "./actions";
import {connect} from "react-redux";
import style from "../allPosts/style.css";
import Loader from "../../components/loader/loader";
import SinglePost from "../../components/singlePost";
import PostIMG from "src/assets/img-api";

class MyPosts extends Component {
    componentDidMount() {
        if (this.props.user !== null) {
            const authorId = this.props.user.id
            this.props.getInitMyPost(authorId)
        } else {
            setTimeout(() => {
                {
                    const authorId = this.props.user.id;
                    this.props.getInitMyPost(authorId)
                }
            }, 2000)
        }
    }

    onScroll = (event) => {
        const {myPosts, isLoading, user, end} = this.props;
        const postsLength = myPosts.length;
        const userId = user.id
        const pageHeight = document.documentElement.clientHeight;
        const getBounding = document.getElementById('my-posts').getBoundingClientRect().bottom;

        if (getBounding <= pageHeight + (pageHeight / 10) && (!isLoading && !end)) {
            console.log('loading')
            this.props.getScrollPostsAction(userId, postsLength) //не подключен
        }
    }

    addLike = (id) => { //не подключен
        this.props.addLike(id);
    }

    addDislike = (id) => { //не подключен
        this.props.addDislike(id);
    }

    render() {
        // console.log(this.props)
        const {myPosts, isLoading} = this.props;
        return (
            <div className={style.wrapper} onScroll={this.onScroll}>
                <h1 className={style.header}>
                    My Posts
                </h1>
                <div id='my-posts' className={style.allPosts}>
                    {(myPosts.length < 1)
                        ? <Loader/>
                        : myPosts.map(el => {
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
                                               img={PostIMG()}
                                               onLike={() => {this.addLike(el.id)}}
                                               onDislike={() => {this.addDislike(el.id)}}
                                               author={el.author.id}
                            />

                        })}
                </div>
                {
                    (isLoading && myPosts.length > 0) && <Loader/>
                }
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        myPosts: state.myPost.myPosts,
        isLoading: state.myPost.isLoading,
        end: state.myPost.end,
        user: state.app.user,
    }
}

export default connect(mapStateToProps, Actions)(MyPosts)