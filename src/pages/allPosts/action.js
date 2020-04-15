import API from 'src/API';
import * as Default from '../defaultPage/action.js'


export const getInitPostsAction = () => {
    return async function (dispatch) {
        try {
            dispatch({type: 'ALL-POST_INIT_GET_POSTS_REQUESTS'});
            const response = await API.posts.getList({offsetStep: 10});
            dispatch({type: 'ALL-POST_INIT_GET_POSTS_SUCCESS', payload: response.data})
        } catch (e) {
            dispatch({type: 'ALL-POST_INIT_GET_POSTS_FAIL', payload: response.data});
            console.log(e)
        }
    }
};

export const getScrollPostsAction = (NPosts) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'ALL-POST_SCROLL_GET_POSTS_REQUESTS'});
            const response = await API.posts.getList({offset: NPosts, offsetStep: 5});
            dispatch({type: 'ALL-POST_SCROLL_GET_POSTS_SUCCESS', payload: response.data})
        } catch (e) {
            dispatch({type: 'ALL-POST_SCROLL_GET_POSTS_FAIL', payload: response.data});
            console.log(e)
        }
    }
};

export const increaseLike = (id) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'ALL-POST_INCREASE_LIKE_REQUEST'});
            const response = await API.posts.addLike(id);
            dispatch({type: 'ALL-POST_INCREASE_LIKE_SUCCESS', payload: response.data})
        } catch (e) {
            dispatch({type: 'ALL-POST_INCREASE_LIKE_FAIL'})
            console.log(e);
        }
    }
}

export const increaseDislike = (id) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'ALL-POST_INCREASE_DISLIKE_REQUEST'});
            const response = await API.posts.addDislike(id);
            dispatch({type: 'ALL-POST_INCREASE_DISLIKE_SUCCESS', payload: response.data})
        } catch (e) {
            dispatch({type: 'ALL-POST_INCREASE_DISLIKE_FAIL'})
            console.log(e);
        }
    }
}

export const deletePostItem = (id) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'ALL-POST_DELETE_POST_REQUEST'});
            const response = await API.posts.deletePost(id);
            dispatch({type: 'ALL-POST_DELETE_POST_SUCCESS', payload: response.data})
            dispatch({type: 'ALL-POST_SHOW_MODAL_MESSAGE'});
        }catch (e) {
            console.log(e)
        }
    }
}

export const didMountModalMessage = () => {
    return {type: 'ALL-POST_CLOSE_MODAL_MESSAGE'}
}

export const setStateDefault = () => {
    return {type: 'ALL-POST_STATE_TO_DEFAULT'}
}