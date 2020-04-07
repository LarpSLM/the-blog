import API from "src/API";
import {push} from "connected-react-router";

export const changePostTitle = (value) => {
    return {
        type: 'ADD-POST_CHANGE_POST_TITLE',
        title: value,
    }
};

export const changeMessagePost = (value) => {
    return {
        type: 'ADD-POST_CHANGE_POST_MESSAGE',
        content: value,
    }
};

export function sendNewPost(data) {
    return async function (dispatch) {
        try {
            dispatch({type: 'NEW-POST-PAGE_REQUEST'});
            const response = await API.posts.sendNewPost(data);
            dispatch({type: 'NEW-POST-PAGE-SUCCESS', payload: response.data});
            dispatch(push('/'))
        } catch (e) {
            dispatch({type: 'NEW-POST-PAGE-FAIL'});
            console.log(e)
        }
    }
}