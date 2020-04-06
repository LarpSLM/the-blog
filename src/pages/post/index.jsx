import React, {Component} from "react";
import {connect} from "react-redux";
import * as Actions from "./actions";
import style from "../allPosts/style.css";
import Loader from "../../components/loader/loader";

class Posts extends Component {
    componentDidMount() {
        const {match} = this.props;
        this.props.getSinglePostAction(match.params.id)
    }

    componentWillUnmount() {
        this.props.unMountPostAction()
    }

    render() {
        const {data} = this.props;
        return (
            <div>
                {
                    data
                        ? <div className={style.item}>
                            <div className={style.title}>{data.title}</div>
                            <div className={style.content}>{data.content}</div>
                        </div>
                        : <Loader/>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.post.data
    }
};

export default connect(mapStateToProps, Actions)(Posts);