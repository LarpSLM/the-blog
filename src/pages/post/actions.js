import API from "src/API";

export const getSinglePostAction = (id) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'POST_GET_REQUEST'});
            const response = await API.posts.getPostById(id);
            dispatch({type: 'POST_GET_DATA_SUCCESS', payload: response.data})
        } catch (e) {
            dispatch({type: 'POST_GET_REQUEST_FAIL'});
          console.log(e)
        }
    }
};

export const unMountPostAction = () => {
    return {type: 'POST_UNMOUNT'}
};