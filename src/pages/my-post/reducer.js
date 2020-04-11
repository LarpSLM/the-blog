let initState = {
    myPosts: [],
    isLoading: false
}

export default function myPostReducer (state = initState, action) {
    switch (action.type) {
        case 'MY-POST_INIT_REQUEST':
            return {
                ...state,
                isLoading: true
            };
        case 'MY-POST_INIT_REQUEST_SUCCESS':
            return {
                ...state,
                isLoading: false,
                myPosts: action.payload
            }
        default:
            return state;
    }
}