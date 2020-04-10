import React, {Component} from 'react';
import style from './style.css'
import * as Action from './action'
import {connect} from "react-redux";
import DefaultButton from "../../components/defaultButton";
import PropTypes from "prop-types";

class NewPost extends Component {
    static propTypes = {
        changePostTitle: PropTypes.func.isRequired,
        changeMessagePost: PropTypes.func.isRequired,
        sendNewPost: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.form}>
                    <h1>Add post</h1>
                    <input type="text" placeholder='header'
                           onChange={(e) => {
                               this.props.changePostTitle(e.target.value);
                           }}
                           value={this.props.newPostPage.title}/>
                    <textarea name="message" id="post" cols="30" rows="8" placeholder='message'
                              onChange={(e)=> {
                                  this.props.changeMessagePost(e.target.value)
                              }}
                              value={this.props.newPostPage.content}/>
                    <DefaultButton name='Submit' onClick={() => {
                        this.props.sendNewPost(this.props.newPostPage)
                    }}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    newPostPage: state.newPostPage.dataForm
});

export default connect(mapStateToProps, Action)(NewPost);



