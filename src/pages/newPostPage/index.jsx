import React from 'react';
import style from './style.css'
import * as Action from './action'
import {connect} from "react-redux";
import DefaultButton from "../../components/defaultButton";

function NewPost(props) {

    return (
        <div className={style.wrapper}>
            <div className={style.form}>
                <h1>Add post</h1>
                <form action="">
                    <input type="text" placeholder='header'
                           onChange={(e) => {
                               props.changePostTitle(e.target.value);
                           }}
                           value={props.newPostPage.title}/>
                    <textarea name="message" id="post" cols="30" rows="8" placeholder='message'
                              onChange={(e)=> {
                                  props.changeMessagePost(e.target.value)
                              }}
                              value={props.newPostPage.content}/>
                    <DefaultButton name='Submit' onClick={props.sendNewPost}/>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    newPostPage: state.newPostPage
});

export default connect(mapStateToProps, Action)(NewPost);



