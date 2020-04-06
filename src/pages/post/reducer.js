const initState = {
    data: null
};

export default function singlePostReducer(state = initState, action) {
    switch (action.type) {
        case 'POST_GET_DATA_SUCCESS':
            return {
                ...state,
                data: action.payload
            };
        case 'POST_UNMOUNT':
            return {
                ...state,
                data: null
            };
        default:
            return state;
    }
}