import cloneDeep from 'lodash/cloneDeep';

const initState = {
    dataForm: {
        login: '',
        email: '',
        firstName: '',
        password: '',
    },
};

function merge(state, someObject) {
    const clonnedState = cloneDeep(state);
    return Object.assign(clonnedState, someObject);
}

export default function signUpReducer(state = initState, action) {
    switch (action.type) {
        case 'SIGN-UP_CHANGE_DATA_FORM':
            return merge(state, {
                dataForm: {
                    ...state.dataForm,
                    [action.payload.fieldId]: action.payload.value
                }
            });
        case 'SIGN-UP_SUCCESS':
            return {
                ...state,
                dataForm: {
                    login: '',
                    email: '',
                    firstName: '',
                    password: '',
                },
            };
        default:
            return state;
    }
}


