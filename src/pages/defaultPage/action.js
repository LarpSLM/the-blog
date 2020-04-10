import API from 'src/API';
import { push } from 'connected-react-router'

export const auth = () => {
    return async function (dispatch) {
        try {
            const response = await API.user.auth();
            dispatch({type: 'APPLICATION-AUTH', payload: response.data })
        } catch (error) {
            console.log(error)
        }
    }
};

export const logOut = () => {
    return async function (dispatch) {
        try {
            const response = await API.user.logOut();
            dispatch({type: 'APPLICATION-LOGOUT', payload: response});
            dispatch(push('/'))
        } catch (error) {
            console.log(error)
        }
    }
};

export const increaseLike = (id) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'INCREASE_LIKE_REQUEST'});
            const response = await API.posts.addLike(id);
            dispatch({type: 'INCREASE_LIKE_SUCCESS', payload: response.data})
        } catch (e) {
            dispatch({type: 'INCREASE_LIKE_FAIL'})
            console.log(e);
        }
    }
}

export const increaseDislike = (id) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'INCREASE_DISLIKE_REQUEST'});
            const response = await API.posts.addDislike(id);
            dispatch({type: 'INCREASE_DISLIKE_SUCCESS', payload: response.data})
        } catch (e) {
            dispatch({type: 'INCREASE_DISLIKE_FAIL'})
            console.log(e);
        }
    }
}