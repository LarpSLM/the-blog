import API from "src/API";

export const getInitMyPost = (authorId) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'MY-POST_INIT_REQUEST'});
            const response = await API.posts.getList({authorId});
            dispatch({type: 'MY-POST_INIT_REQUEST_SUCCESS', payload: response.data});
        } catch (e) {
            dispatch({type: 'MY-POST_INIT_REQUEST_FAIL', payload: status});
        }
    }
}

export const getScrollPostsAction = (authorId, NPosts) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'MY-POST_SCROLL_GET_POSTS_REQUESTS'});
            const response = await API.posts.getList({authorId: authorId, offset: NPosts, offsetStep: 5});
            dispatch({type: 'MY-POST_SCROLL_GET_POSTS_SUCCESS', payload: response.data})
        } catch (e) {
            dispatch({type: 'MY-POST_SCROLL_GET_POSTS_FAIL', payload: response.data});
            console.log(e)
        }
    }
};

export const increaseLike = (id) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'MY-POST_INCREASE_LIKE_REQUEST'});
            const response = await API.posts.addLike(id);
            dispatch({type: 'MY-POST_INCREASE_LIKE_SUCCESS', payload: response.data})
        } catch (e) {
            dispatch({type: 'MY-POST_INCREASE_LIKE_FAIL'})
            console.log(e);
        }
    }
}

export const increaseDislike = (id) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'MY-POST_INCREASE_DISLIKE_REQUEST'});
            const response = await API.posts.addDislike(id);
            dispatch({type: 'MY-POST_INCREASE_DISLIKE_SUCCESS', payload: response.data})
        } catch (e) {
            dispatch({type: 'MY-POST_INCREASE_DISLIKE_FAIL'})
            console.log(e);
        }
    }
}

export const deletePostItem = (id) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'MY-POST_DELETE_POST_REQUEST'});
            const response = await API.posts.deletePost(id);
            dispatch({type: 'MY-POST_DELETE_POST_SUCCESS', payload: response.data})
        }catch (e) {
            console.log(e)
        }
    }
}

export const setStateDefault = () => {
    return {type: 'MY-POST_STATE_TO_DEFAULT'}
}