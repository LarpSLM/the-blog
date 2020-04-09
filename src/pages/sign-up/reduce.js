import cloneDeep from 'lodash/cloneDeep';

const initState = {
    dataForm: {
        login: '',
        email: '',
        firstName: '',
        password: '',
    },
    errors: {
        login: false,
        email: false,
        firstName: false,
        password: false,
    }
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
                },
                errors: {
                    ...state.errors,
                    [action.payload.fieldId]: false
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
        case 'SIGN-UP_FAIL': {
            return {
                ...state,
                errors: {
                    ...state.errors,
                    login: action.payload.login && true,
                    email: action.payload.email && true,
                    firstName: action.payload.firstName && true,
                    password: action.payload.password && true,

                }
            }
        }
        case 'SIGN-UP_CHECKLOGIN_SUCCESS': {
            return {
                ...state,
                errors: {
                    ...state.errors,
                    login: action.payload.exists ? 'not unique' : false
                }
            }
        }
        default:
            return state;
    }
}


