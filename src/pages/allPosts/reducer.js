import PostIMG from 'src/assets/img-api'

let initState = {
    posts: [],
    isLoading: false,
};


//функция добавления изображений в полученный массив постов
const modeImg = (arr) => {
    const copyPayload = []
    arr.forEach(el => {
        copyPayload.push(el)
    })
    copyPayload.map(el => {
        el.img = PostIMG();
    })
    return copyPayload;
}

export default function postsReducer(state = initState, action) {
    switch (action.type) {
        case 'ALL-POST_INIT_GET_POSTS_SUCCESS':
            return {
                ...state,
                isLoading: false,
                posts: modeImg(action.payload),

            };
        case 'ALL-POST_INIT_GET_POSTS_REQUESTS':
        case 'ALL-POST_SCROLL_GET_POSTS_REQUESTS':
            return {
                ...state,
                isLoading: true,
            }
        case 'ALL-POST_SCROLL_GET_POSTS_SUCCESS':
            return {
                ...state,
                posts: [...state.posts, ...(modeImg(action.payload))],
                isLoading: false,
            };
        case 'ALL-POST_SCROLL_GET_POSTS_FAIL':
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
};
