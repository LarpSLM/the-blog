let initState = {
    myPosts: [],
    isLoading: false,
    end: false
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
        case 'MY-POST_SCROLL_GET_POSTS_REQUESTS': {
            return {
                ...state,
                isLoading: true,
            }
        }
        case 'MY-POST_SCROLL_GET_POSTS_SUCCESS': {
            return {
                ...state,
                myPosts: [...state.myPosts, ...action.payload],
                isLoading: false,
                end: action.payload.length === 0 && true
            }
        }
        default:
            return state;
    }
}