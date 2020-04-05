let initialState = {
    activeLink: 'home'
};

export default function defaultPageReducer(state = initialState, action) {
    switch (action.type) {
        case 'HEADER_CHANGE_ACTIVE_LINK':
            return {
                ...state,
                activeLink: action.payload,
            };
        default:
            return state;
    }
}