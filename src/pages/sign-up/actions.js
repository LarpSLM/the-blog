import API from 'src/API';
import {push} from 'connected-react-router';

export const changeFieldAction = ({ fieldId, value }) => ({
    type: 'SIGN-UP_CHANGE_DATA_FORM',
    payload: { fieldId, value }
});

export const signUp = (dataForm) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'SIGN-UP_REQUEST'});
            const response = await API.user.signUp(dataForm);
            dispatch({type: 'SIGN-UP_SUCCESS', payload: response.data});
            dispatch({type: 'HEADER_CHANGE_ACTIVE_LINK', payload: 'home'});
            dispatch(push('/'));
        } catch (e) {
            dispatch({type: 'SIGN-IN_FAIL'});
            console.log(e)
        }
    }
};