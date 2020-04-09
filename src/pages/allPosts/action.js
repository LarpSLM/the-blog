import API from 'src/API';


export const getInitPostsAction = () => {
    return async function (dispatch) {
        try {
            dispatch({type: 'MAIN-PAGE_INIT_GET_POSTS_REQUESTS'});
            const response = await API.posts.getList({offsetStep: 10});
            dispatch({type: 'MAIN-PAGE_INIT_GET_POSTS_SUCCESS', payload: response.data })
        } catch (e) {
            dispatch({type: 'MAIN-PAGE_INIT_GET_POSTS_FAIL', payload: response.data });
            console.log(e)
        }
    }
};

// export const getScrollPostsAction = () => {
//     return async function (dispatch) {
//         try {
//             dispatch({type: 'MAIN-PAGE_SCROLL_GET_POSTS_REQUESTS'});
//             const response = await API.posts.getList({offset: number, offsetStep: 5});
//             dispatch({type: 'MAIN-PAGE_SCROLL_GET_POSTS_SUCCESS', payload: response.data })
//         } catch (e) {
//             dispatch({type: 'MAIN-PAGE_SCROLL_GET_POSTS_FAIL', payload: response.data });
//             console.log(e)
//         }
//     }
// };