import API from 'src/API';

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
            debugger
            const response = await API.user.logOut();
            dispatch({type: 'APPLICATION-LOGOUT', payload: response})
        } catch (error) {
            console.log(error)
        }
    }
};