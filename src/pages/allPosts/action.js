import API from 'src/API';


export const getPostsAction = () => {
    return async function (dispatch) {
        try {
            dispatch({type: 'MAIN-PAGE_GET_POSTS_REQUESTS'});
            const response = await API.posts.getList({offsetStep: 30});
            dispatch({type: 'MAIN-PAGE_GET_POSTS_SUCCESS', payload: response.data })
        } catch (e) {
            dispatch({type: 'MAIN-PAGE_GET_POSTS_FAIL', payload: response.data });
            console.log(e)
        }
    }
};