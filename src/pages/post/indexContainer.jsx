import React, {Component} from "react";
import {connect} from "react-redux";
import * as Actions from "./actions";
import LoaderPage from "../../components/loaderPage/loaderPage";
import PostIMG from "../../assets/img-api";
import Post from "./index";

class PostsContainer extends Component {
    componentDidMount() {
        const {match} = this.props;
        this.props.getSinglePostAction(match.params.id)
    }

    componentWillUnmount() {
        this.props.unMountPostAction()
    }

    render() {
        const {data} = this.props;
        console.log(data);
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
                                  img={PostIMG()}/>
                        </>
                        : <LoaderPage/>
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.post.data
    }
};

export default connect(mapStateToProps, Actions)(PostsContainer);