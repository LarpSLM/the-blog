import React, {Component} from "react";
import {connect} from "react-redux";
import * as Actions from "./actions";
import LoaderPage from "../../components/loaderPage/loaderPage";
import PostIMG from "../../assets/img-api";
import Post from "./index";
import ModalMessage from "../../components/animatedMessage";

class PostsContainer extends Component {
    componentDidMount() {
        const {match} = this.props;
        this.props.getSinglePostAction(match.params.id)
    }

    componentWillUnmount() {
        this.props.unMountPostAction()
    }

    render() {
        const {data, user, modalMessage} = this.props;
        return (
            <>
                {
                    data
                        ? <>

                            <Post id={data.id}
                                  title={data.title}
                                  login={data.author.login}
                                  data={data.date.slice(0, 10)}
                                  number={data.postNumber}
                                  content={data.content}
                                  dislikesCount={data.dislikesCount}
                                  likesCount={data.likesCount}
                                  avatar={`http://school-blog.ru/images/${data.author.avatar}`}
                                  img={PostIMG()}
                                  onLike={() => {this.props.increaseLike(data.id)}}
                                  onDislike={() => {this.props.increaseDislike(data.id)}}
                                  onDelete={() => {this.props.deletePostItem(data.id)}}
                                  author={(user != null && user.id === data.author.id)
                                  && this.props.user.id}
                            />

                        </>
                        : <LoaderPage/>
                }
                {modalMessage && <ModalMessage content={<p>Post delete</p>}
                                               didMountModalMessage={() => this.props.didMountModalMessage()}/>}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.post.data,
        modalMessage: state.post.modalMessage,
        user: state.app.user
    }
};

export default connect(mapStateToProps, Actions)(PostsContainer);