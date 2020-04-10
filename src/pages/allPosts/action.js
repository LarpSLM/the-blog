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

export const addLike = (id) => {
    return async function (dispatch) {
        await dispatch(Default.increaseLike(id))
    }
};

export const addDislike = (id) => {
    return function (dispatch) {
        dispatch(Default.increaseDislike(id));
    }
};