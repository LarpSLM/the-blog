const initState = {
    data: null
};

export default function singlePostReducer(state = initState, action) {
    switch (action.type) {
        case 'POST-PAGE_GET_DATA_SUCCESS':
        case 'POST-PAGE_INCREASE_LIKE_SUCCESS':
        case 'POST-PAGE_INCREASE_DISLIKE_SUCCESS':
            return {
                ...state,
                data: action.payload
            };
        case 'POST-PAGE_DELETE_POST_SUCCESS':
        case 'POST-PAGE_UNMOUNT':
            return {
                ...state,
                data: null
            };
        default:
            return state;
    }
}