const initState = {
    user: null
};

export default function appReducer(state = initState, action) {
    switch (action.type) {
        case 'SIGN-IN_SUCCESS':
        case 'APPLICATION-AUTH':
            return {
                ...state,
                user: action.payload
            };
        case 'APPLICATION-LOGOUT':
            return {
                ...state,
                user: null
            };
        default:
            return state
    }
}