import API from "src/API";
import {push} from "connected-react-router"

export const getSinglePostAction = (id) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'POST-PAGE_GET_REQUEST'});
            const response = await API.posts.getPostById(id);
            dispatch({type: 'POST-PAGE_GET_DATA_SUCCESS', payload: response.data})
        } catch (e) {
            dispatch({type: 'POST-PAGE_GET_REQUEST_FAIL'});
          console.log(e)
        }
    }
};

export const increaseLike = (id) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'POST-PAGE_INCREASE_LIKE_REQUEST'});
            const response = await API.posts.addLike(id);
            dispatch({type: 'POST-PAGE_INCREASE_LIKE_SUCCESS', payload: response.data})
        } catch (e) {
            dispatch({type: 'POST-PAGE_INCREASE_LIKE_FAIL'})
            console.log(e);
        }
    }
}

export const increaseDislike = (id) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'POST-PAGE_INCREASE_DISLIKE_REQUEST'});
            const response = await API.posts.addDislike(id);
            dispatch({type: 'POST-PAGE_INCREASE_DISLIKE_SUCCESS', payload: response.data})
        } catch (e) {
            dispatch({type: 'POST-PAGE_INCREASE_DISLIKE_FAIL'})
            console.log(e);
        }
    }
}

export const deletePostItem = (id) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'POST-PAGE_DELETE_POST_REQUEST'});
            const response = await API.posts.deletePost(id);
            dispatch({type: 'POST-PAGE_DELETE_POST_SUCCESS', payload: response.data})
            dispatch({type: 'POST_SHOW_MODAL_MESSAGE'});
            dispatch(push('/'));
        }catch (e) {
            console.log(e)
        }
    }
}

export const didMountModalMessage = () => {
    return {type: 'POST_CLOSE_MODAL_MESSAGE'}
}

export const unMountPostAction = () => {
    return {type: 'POST-PAGE_UNMOUNT'}
};