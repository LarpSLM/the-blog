import API from "src/API";

export const getUserInfo = (id) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'PROFILE_GET_REQUEST'})
            const response = await API.user.getUserInfo(id);
            dispatch({type: 'PROFILE_GET_REQUEST_SUCCESS', payload: response.data})
        } catch (e) {
            dispatch({type: 'PROFILE_GET_REQUEST_FAIL'})
            console.log(e)
        }
    }
}