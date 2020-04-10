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
        case 'INCREASE_LIKE_SUCCESS':
            return {
                ...state,
                posts: state.posts.map(post => { //усложняем себе жизнь вставкой ключа с картинкой, так бы вернули action.payload и всё
                    if (post.id === action.payload.id) {
                        for (let key in post) {
                            if (key === 'img') {
                                continue;
                            }
                            post[key] = action.payload[key];
                        }
                        return post
                    } else {
                        return post;
                    }
                })
            }
        case 'INCREASE_DISLIKE_SUCCESS':
            return {
                ...state,
                posts: state.posts.map(post => { //аналогично кейсу выше
                    if (post.id === action.payload.id) {
                        for (let key in post) {
                            if (key === 'img') {
                                continue;
                            }
                            post[key] = action.payload[key];
                        }
                        return post
                    } else {
                        return post;
                    }
                })
            }
        default:
            return state;
    }
};
