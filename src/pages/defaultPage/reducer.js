const initState = {
    user: null,
    activeLink: 'home'
};

export default function appReducer(state = initState, action) {
    switch (action.type) {
        case 'SIGN-IN_SUCCESS':
        case 'SIGN-UP_SUCCESS':
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
        case '@@router/LOCATION_CHANGE':
            return {
                ...state,
                activeLink: action.payload.location.pathname
            }
        default:
            return state
    }
}