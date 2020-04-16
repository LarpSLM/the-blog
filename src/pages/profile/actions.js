import API from "src/API/index";

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

export const openModalWindow = () => {
    return {type: 'PROFILE_MODAL_WINDOW_OPEN'}
}

export const closeModalWindow = () => {
    return {type: 'PROFILE_MODAL_WINDOW_CLOSE'}
}

export const changeDataForm = ({ fieldId, value }) => {
    return {type: 'PROFILE_CHANGE_PASSWORD_FORM', payload: { fieldId, value }}
}

export const sendChangePassword = (data) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'PROFILE_CHANGE_PASSWORD_REQUEST'})
            const response = await API.user.changeUserPassword(data);
            dispatch({type: 'PROFILE_CHANGE_PASSWORD_SUCCESS', payload: response.data})
        } catch (e) {
            dispatch({type: 'PROFILE_CHANGE_PASSWORD_FAIL'})
            console.log(e)
        }
    }
}

export const modalMessageClose = () => {
    return {type: 'PROFILE_MODAL_MESSAGE_CLOSE'}
}