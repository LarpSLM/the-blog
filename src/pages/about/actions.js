import API from "src/API";

export const getUsers = () => {
    return async function (dispatch) {
        try {
            dispatch({type: 'ABOUT_GET_USERS_REQUEST'})
            const response = await API.user.getAuthors();
            dispatch({type: 'ABOUT_GET_USERS_SUCCESS', payload: response.data})
        } catch (e) {
            dispatch({type: 'ABOUT_GET_USERS_FAIL'})
            console.log(e);
        }
    }
}

export const setDefault = () => {
    return {type: 'ABOUT_SET_DEFAULT'}
}