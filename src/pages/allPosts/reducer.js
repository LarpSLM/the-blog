let initState = {
    posts: []
};

export default function postsReducer (state = initState, action) {
    switch (action.type) {
        case 'MAIN-PAGE_GET_POSTS_SUCCESS':
            return {
                ...state,
                posts: action.payload
            };
        default:
            return state;
    }
};
