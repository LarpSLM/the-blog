const initState = {
    authors: []
}

export default function aboutReducer(state = initState, action) {
    switch (action.type) {
        case 'ABOUT_GET_USERS_SUCCESS':
            return {
                ...state,
                authors: action.payload,
            }
        case 'ABOUT_SET_DEFAULT':
            return {
                ...state,
                authors: []
            }
        default:
            return state;
    }
}